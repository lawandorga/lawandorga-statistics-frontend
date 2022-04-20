import { RootState, UserState } from "@/types/state";
import { ActionContext } from "vuex";
import { LoginResponse, RefreshResponse, StatisticUser } from "@/types/user";
import UserService from "@/services/user";

const state = {
  access: null,
  refresh: null,
  user: null,
  task: null,
};

const getters = {
  // user
  user: (state: UserState) => state.user,
  // auth
  token: (state: UserState) => `Bearer ${state.access}`,
  access: (state: UserState) => state.access,
  refresh: (state: UserState) => state.refresh,
  isAuthenticated: (state: UserState) => !!state.access && !!state.refresh,
};

const actions = {
  autoLogin(context: ActionContext<UserState, RootState>) {
    const access = localStorage.getItem("access");
    const refresh = localStorage.getItem("refresh");
    if (access && refresh) {
      // login already to avoid the login page flash
      context.commit("login", {
        access: access,
        refresh: refresh,
      });
      // refresh
      context.dispatch("refresh");
      context.dispatch("autoRefresh");
      // now truly login if the token is not valid interceptors will redirect to login page anyway
      return UserService.statics().then((statics) => {
        context.commit("setUser", statics.user);
      });
    }
    return;
  },
  login: (
    context: ActionContext<UserState, RootState>,
    data: LoginResponse,
  ) => {
    context.commit("login", data);
    context.commit("setUser", data.user);
    context.dispatch("autoRefresh");
  },
  autoRefresh: (context: ActionContext<UserState, RootState>) => {
    const task = setTimeout(() => {
      context.dispatch("refresh");
      context.dispatch("autoRefresh");
    }, 15 * 60 * 1000);
    context.commit("setTask", task);
  },
  refresh: (context: ActionContext<UserState, RootState>) => {
    return UserService.refresh({ refresh: context.getters.refresh }).then(
      (newToken) => {
        context.commit("refresh", newToken);
        return newToken;
      },
    );
  },
  logout: (context: ActionContext<UserState, RootState>) => {
    return new Promise<void>((resolve) => {
      context.commit("logout");
      context.commit("resetTask");
      resolve();
    });
  },
};

const mutations = {
  login: (state: UserState, data: { access: string; refresh: string }) => {
    localStorage.setItem("access", data.access);
    state.access = data.access;
    localStorage.setItem("refresh", data.refresh);
    state.refresh = data.refresh;
  },
  refresh: (state: UserState, data: RefreshResponse) => {
    localStorage.setItem("access", data.access);
    state.access = data.access;
    localStorage.setItem("refresh", data.refresh);
    state.refresh = data.refresh;
  },
  setTask: (state: UserState, task: ReturnType<typeof setTimeout>) => {
    state.task = task;
  },
  resetTask: (state: UserState) => {
    if (state.task) clearTimeout(state.task);
    state.task = null;
  },
  logout: (state: UserState) => {
    localStorage.clear();
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    state.access = null;
    state.refresh = null;
    state.user = null;
  },
  setUser: (state: UserState, user: StatisticUser) => {
    state.user = user;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
