import {
  LcUsage,
  RecordState,
  RlcMember,
  UserAction,
  UserLogin,
} from "@/types/statistic";
import axios from "axios";

class StatisticService {
  getUserActionsMonth() {
    return axios
      .get<UserAction[]>("statistic/user_actions_month")
      .then((response) => response.data);
  }

  getRlcMembers() {
    return axios
      .get<RlcMember[]>("statistic/rlc_members/")
      .then((response) => response.data);
  }

  getRecordStates() {
    return axios
      .get<RecordState[]>("statistic/record_states/")
      .then((response) => response.data);
  }

  getLcUsage() {
    return axios
      .get<LcUsage[]>("statistic/lc_usage/")
      .then((response) => response.data);
  }

  getUserLogins() {
    return axios
      .get<UserLogin[]>("statistic/user_logins/")
      .then((response) => response.data);
  }
}

export default new StatisticService();
