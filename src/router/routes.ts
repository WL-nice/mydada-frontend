import { RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import UserLayout from "@/layouts/UserLayout.vue";
import UserLoginPage from "@/views/user/UserLoginPage.vue";
import UserRegisterPage from "@/views/user/UserRegisterPage.vue";
import ACCESS_ENUM from "@/access/accessEnum";
import AdminUserPage from "@/views/admin/AdminUserPage.vue";
import AdminUserAnswerPage from "@/views/admin/AdminUserAnswerPage.vue";
import AdminScoringResultPage from "@/views/admin/AdminScoringResultPage.vue";
import AdminQuestionPage from "@/views/admin/AdminQuestionPage.vue";
import AdminAppPage from "@/views/admin/AdminAppPage.vue";
import HomePage from "@/views/HomePage.vue";
import AppDetailPage from "@/views/app/AppDetailPage.vue";
import AddAppPage from "@/views/add/AddAppPage.vue";
import AddQuestionPage from "@/views/add/AddQuestionPage.vue";
import AddScoringResultPage from "@/views/add/AddScoringResultPage.vue";
import DoAnswerPage from "@/views/answer/DoAnswerPage.vue";
import AnswerResultPage from "@/views/answer/AnswerResultPage.vue";
import MyAnswerPage from "@/views/answer/MyAnswerPage.vue";
import AppStatisticPage from "@/views/statistic/AppStatisticPage.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "主页",
    component: HomePage,
    meta: {
      access: ACCESS_ENUM.USER,
    },
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  //   meta: {
  //     access: ACCESS_ENUM.USER,
  //   },
  // },
  {
    path: "/add/app",
    name: "创建应用",
    component: AddAppPage,
  },
  {
    path: "/add/app/:id",
    name: "修改应用",
    props: true,
    component: AddAppPage,
    meta: {
      hideInMenu: true,
    },
  },
  {
    path: "/add/question/:appId",
    name: "创建题目",
    component: AddQuestionPage,
    props: true,
    meta: {
      hideInMenu: true,
    },
  },
  {
    path: "/add/scoring_result/:appId",
    name: "创建评分",
    component: AddScoringResultPage,
    props: true,
    meta: {
      hideInMenu: true,
    },
  },
  {
    path: "/app/detail/:id",
    name: "应用详情页",
    props: true,
    component: AppDetailPage,
    meta: {
      hideInMenu: true,
    },
  },
  {
    path: "/answer/do/:appId",
    name: "答题",
    component: DoAnswerPage,
    props: true,
    meta: {
      hideInMenu: true,
      access: ACCESS_ENUM.USER,
    },
  },
  {
    path: "/answer/result/:id",
    name: "答题结果",
    component: AnswerResultPage,
    props: true,
    meta: {
      hideInMenu: true,
      access: ACCESS_ENUM.USER,
    },
  },
  {
    path: "/answer/my",
    name: "我的答题",
    component: MyAnswerPage,
    meta: {
      access: ACCESS_ENUM.USER,
    },
  },
  {
    path: "/admin/user",
    name: "用户管理",
    component: AdminUserPage,
    meta: {
      access: ACCESS_ENUM.ADMIN,
    },
  },
  {
    path: "/admin/app",
    name: "应用管理",
    component: AdminAppPage,
    meta: {
      access: ACCESS_ENUM.ADMIN,
    },
  },
  {
    path: "/admin/question",
    name: "题目管理",
    component: AdminQuestionPage,
    meta: {
      access: ACCESS_ENUM.ADMIN,
    },
  },
  {
    path: "/admin/scoring_result",
    name: "评分管理",
    component: AdminScoringResultPage,
    meta: {
      access: ACCESS_ENUM.ADMIN,
    },
  },
  {
    path: "/admin/user_answer",
    name: "回答管理",
    component: AdminUserAnswerPage,
    meta: {
      access: ACCESS_ENUM.ADMIN,
    },
  },
  {
    path: "/app_statistic",
    name: "应用统计",
    component: AppStatisticPage,
    meta: {
      access: ACCESS_ENUM.ADMIN,
    },
  },
  {
    path: "/user",
    name: "用户",
    component: UserLayout,
    children: [
      {
        path: "/user/login",
        name: "用户登录",
        component: UserLoginPage,
      },
      {
        path: "/user/register",
        name: "用户注册",
        component: UserRegisterPage,
      },
    ],
    meta: {
      hideInMenu: true,
    },
  },
];
