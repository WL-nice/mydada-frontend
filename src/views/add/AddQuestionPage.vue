<template>
  <div id="addQuestionPage">
    <h2 style="margin-bottom: 32px">设置题目</h2>
    <a-form
      :model="questionContent"
      :style="{ width: '480px' }"
      label-align="left"
      auto-label-width
      @submit="handleSubmit"
    >
      <a-form-item label="应用 id">
        {{ appId }}
      </a-form-item>
      <a-form-item label="题目列表" :content-flex="false" :merge-props="false">
        <a-space size="medium">
          <a-button @click="addQuestion(questionContent.length)">
            底部添加题目
          </a-button>
          <!-- AI 生成抽屉 -->
          <AiGenerateQuestionDrawer
            :appId="appId"
            :onSuccess="onAiGenerateSuccess"
          />
        </a-space>
        <!-- 遍历每道题目 -->
        <div v-for="(question, index) in questionContent" :key="index">
          <a-space size="large">
            <h3>题目 {{ index + 1 }}</h3>
            <a-button size="small" @click="addQuestion(index + 1)">
              添加题目
            </a-button>
            <a-button
              size="small"
              status="danger"
              @click="deleteQuestion(index)"
            >
              删除题目
            </a-button>
          </a-space>
          <a-form-item field="posts.post1" :label="`题目 ${index + 1} 标题`">
            <a-input v-model="question.title" placeholder="请输入标题" />
          </a-form-item>
          <!--  题目选项 -->
          <a-space size="large">
            <h4>题目 {{ index + 1 }} 选项列表</h4>
            <a-button
              size="small"
              @click="addQuestionOption(question, question.options.length)"
            >
              底部添加选项
            </a-button>
          </a-space>
          <a-form-item
            v-for="(option, optionIndex) in question.options"
            :key="optionIndex"
            :label="`选项 ${optionIndex + 1}`"
            :content-flex="false"
            :merge-props="false"
          >
            <a-form-item label="选项 key">
              <a-input v-model="option.key" placeholder="请输入选项 key" />
            </a-form-item>
            <a-form-item label="选项值">
              <a-input v-model="option.value" placeholder="请输入选项值" />
            </a-form-item>
            <a-form-item label="选项结果">
              <a-input v-model="option.result" placeholder="请输入选项结果" />
            </a-form-item>
            <a-form-item label="选项得分">
              <a-input-number
                v-model="option.score"
                placeholder="请输入选项得分"
              />
            </a-form-item>
            <a-space size="large">
              <a-button
                size="mini"
                @click="addQuestionOption(question, optionIndex + 1)"
              >
                添加选项
              </a-button>
              <a-button
                size="mini"
                status="danger"
                @click="deleteQuestionOption(question, optionIndex as any)"
              >
                删除选项
              </a-button>
            </a-space>
          </a-form-item>
          <!-- 题目选项结尾 -->
        </div>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit" style="width: 120px">
          提交
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, watchEffect, withDefaults } from "vue";
import { useRouter } from "vue-router";
import message from "@arco-design/web-vue/es/message";
import AiGenerateQuestionDrawer from "@/views/add/components/AiGenerateQuestionDrawer.vue";
import {
  QuestionContentDTO,
  QuestionControllerService,
  QuestionVO,
} from "../../../generated";

interface Props {
  appId: string;
}

const props = withDefaults(defineProps<Props>(), {
  appId: () => {
    return "";
  },
});

const router = useRouter();

// 题目内容结构（理解为题目列表）
const questionContent = ref<QuestionContentDTO[]>([]);

/**
 * 添加题目
 * @param index
 */
const addQuestion = (index: number) => {
  questionContent.value.splice(index, 0, {
    title: "",
    options: [],
  });
};

/**
 * 删除题目
 * @param index
 */
const deleteQuestion = (index: number) => {
  questionContent.value.splice(index, 1);
};

/**
 * 添加题目选项
 * @param question
 * @param index
 */
const addQuestionOption = (question: QuestionContentDTO, index: number) => {
  if (!question.options) {
    question.options = [];
  }
  question.options.splice(index, 0, {
    key: "",
    value: "",
  });
};

/**
 * 删除题目选项
 * @param question
 * @param index
 */
const deleteQuestionOption = (question: QuestionContentDTO, index: number) => {
  if (!question.options) {
    question.options = [];
  }
  question.options.splice(index, 1);
};

const oldQuestion = ref<QuestionVO>();

/**
 * 加载数据
 */
const loadData = async () => {
  if (!props.appId) {
    return;
  }
  const res = await QuestionControllerService.listQuestionVoByPage({
    appId: props.appId as any,
    current: 1,
    pageSize: 1,
    sortField: "createTime",
    sortOrder: "descend",
  });
  if (res.code === 0 && res.data?.records) {
    oldQuestion.value = res.data?.records[0];
    if (oldQuestion.value) {
      questionContent.value = oldQuestion.value.questionContent ?? [];
    }
  } else {
    message.error("获取数据失败，" + res.message);
  }
};

// 获取旧数据
watchEffect(() => {
  loadData();
});

/**
 * 提交
 */
const handleSubmit = async () => {
  if (!props.appId || !questionContent.value) {
    return;
  }
  let res: any;
  // 如果是修改
  if (oldQuestion.value?.id) {
    res = await QuestionControllerService.updateQuestion({
      id: oldQuestion.value.id,
      questionContent: questionContent.value,
    });
  } else {
    // 创建
    res = await QuestionControllerService.addQuestion({
      appId: props.appId as any,
      questionContent: questionContent.value,
    });
  }
  if (res.data.code === 0) {
    message.success("操作成功，即将跳转到应用详情页");
    setTimeout(() => {
      router.push(`/app/detail/${props.appId}`);
    }, 3000);
  } else {
    message.error("操作失败，" + res.message);
  }
};

/**
 * AI 生成题目成功后执行
 */
const onAiGenerateSuccess = (result: QuestionContentDTO[]) => {
  message.success(`AI 生成题目成功，生成 ${result.length} 道题目`);
  questionContent.value = [...questionContent.value, ...result];
};
</script>
