import {
  ErrorMonth,
  ErrorUser,
  LcUsage,
  RawNumbers,
  RecordClientValueCount,
  RecordState,
  RecordTagStats,
  RlcMember,
  UserAction,
  UserLogin,
  UserLoginMonth,
  TagCount,
  UserWithMissingKeys,
} from "@/types/statistic";
import axios from "axios";

class StatisticService {
  getUserActionsMonth() {
    return axios
      .get<UserAction[]>("statistics/user_actions_month/")
      .then((response) => response.data);
  }

  getRlcMembers() {
    return axios
      .get<RlcMember[]>("statistics/rlc_members/")
      .then((response) => response.data);
  }

  getRecordStates() {
    return axios
      .get<RecordState[]>("statistics/record_states/")
      .then((response) => response.data);
  }

  getLcUsage() {
    return axios
      .get<LcUsage[]>("statistics/lc_usage/")
      .then((response) => response.data);
  }

  getUserLogins() {
    return axios
      .get<UserLogin[]>("statistics/user_logins/")
      .then((response) => response.data);
  }

  getUserLoginsMonth() {
    return axios
      .get<UserLoginMonth[]>("statistics/user_logins_month/")
      .then((response) => response.data);
  }

  getUniqueUsersMonth() {
    return axios
      .get<UserLoginMonth[]>("statistics/unique_users_month/")
      .then((response) => response.data);
  }

  getErrors() {
    return axios
      .get<ErrorMonth[]>("statistics/errors_month/")
      .then((response) => response.data);
  }

  getUserErrors() {
    return axios
      .get<ErrorUser[]>("statistics/errors_user/")
      .then((response) => response.data);
  }

  getRawNumbers() {
    return axios
      .get<RawNumbers>("statistics/raw_numbers/")
      .then((response) => response.data);
  }

  getRecordClientSex() {
    return axios
      .get<RecordClientValueCount[]>("statistics/record_client_sex/")
      .then((response) => response.data);
  }

  getRecordClientNationality() {
    return axios
      .get<RecordClientValueCount[]>("statistics/record_client_nationality/")
      .then((response) => response.data);
  }

  getRecordClientState() {
    return axios
      .get<RecordClientValueCount[]>("statistics/record_client_state/")
      .then((response) => response.data);
  }

  getRecordClientAge() {
    return axios
      .get<RecordClientValueCount[]>("statistics/record_client_age/")
      .then((response) => response.data);
  }

  getRecordsTagData(): Promise<TagCount[]> {
    return axios
      .get<RecordTagStats>("statistics/tag_stats/")
      .then((response) => {
        const ret = response.data["tags"];
        ret.push({
          tag: "Unknown",
          count: response.data["state"][1]["count"],
        });
        return ret;
      });
  }

  getUsersWithMissingKeys(): Promise<UserWithMissingKeys[]> {
    return axios
      .get<UserWithMissingKeys[]>("statistics/users_with_missing_access/")
      .then((r) => r.data);
  }
}

export default new StatisticService();
