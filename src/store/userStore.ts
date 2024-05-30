import { defineStore } from "pinia";
import { ref } from "vue";
import ACCESS_ENUM from "@/access/accessEnum";
import { User, UserControllerService } from "../../generated";

/**
 * 登录用户信息全局状态
 */
export const useLoginUserStore = defineStore("loginUser", () => {
  const loginUser = ref<User>({
    userName: "未登录",
  });

  function setLoginUser(newLoginUser: User) {
    loginUser.value = newLoginUser;
  }

  async function fetchLoginUser() {
    const res = await UserControllerService.getCurrentUser();
    if (res.code === 0 && res.data) {
      loginUser.value = res.data;
    } else {
      loginUser.value = { userRole: ACCESS_ENUM.NOT_LOGIN };
    }
  }

  return { loginUser, setLoginUser, fetchLoginUser };
});
