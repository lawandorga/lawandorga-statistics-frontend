import {
  ErrorMonth,
  ErrorUser,
  LcUsage,
  RawNumbers,
  RecordSex,
  RecordState,
  RecordTagStats,
  RlcMember,
  UserAction,
  UserLogin,
  UserLoginMonth,
  TagCount,
} from "@/types/statistic";
import axios from "axios";

class StatisticService {
  getUserActionsMonth() {
    return axios
      .get<UserAction[]>("statistic/user_actions_month/")
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

  getUserLoginsMonth() {
    return axios
      .get<UserLoginMonth[]>("statistic/user_logins_month/")
      .then((response) => response.data);
  }

  getUniqueUsersMonth() {
    return axios
      .get<UserLoginMonth[]>("statistic/unique_users_month/")
      .then((response) => response.data);
  }

  getErrors() {
    return axios
      .get<ErrorMonth[]>("statistic/errors_month/")
      .then((response) => response.data);
  }

  getUserErrors() {
    return axios
      .get<ErrorUser[]>("statistic/errors_user/")
      .then((response) => response.data);
  }

  getRawNumbers() {
    return axios
      .get<RawNumbers>("statistic/raw_numbers/")
      .then((response) => response.data);
  }

  getRecordSex() {
    return axios
      .get<RecordSex[]>("statistic/record_sex/")
      .then((response) => response.data);
  }

  getRecordsTagData(): Promise<TagCount[]> {
    return axios
      .get<RecordTagStats>("statistic/tag_stats/")
      .then((response) => {
        const ret = response.data["tags"];
        ret.push({
          tag: "Unknown",
          count: response.data["state"][1]["count"],
        });
        return ret;
      });
  }
}

export default new StatisticService();
