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
  RecordsClosed,
  RecordsField,
  DynamicStatistic,
} from "@/types/statistic";
import { types } from "@lawandorga/components";
import axios from "axios";

class StatisticService {
  getUserActionsMonth() {
    return axios
      .get<UserAction[]>("statistics/general/user_actions_month/")
      .then((response) => response.data);
  }

  getRlcMembers() {
    return axios
      .get<RlcMember[]>("statistics/general/rlc_members/")
      .then((response) => response.data);
  }

  getRecordStates() {
    return axios
      .get<RecordState[]>("statistics/general/record_states/")
      .then((response) => response.data);
  }

  getLcUsage() {
    return axios
      .get<LcUsage[]>("statistics/general/lc_usage/")
      .then((response) => response.data);
  }

  getUserLogins() {
    return axios
      .get<UserLogin[]>("statistics/general/user_logins/")
      .then((response) => response.data);
  }

  getUserLoginsMonth() {
    return axios
      .get<UserLoginMonth[]>("statistics/general/user_logins_month/")
      .then((response) => response.data);
  }

  getUniqueUsersMonth() {
    return axios
      .get<UserLoginMonth[]>("statistics/general/unique_users_month/")
      .then((response) => response.data);
  }

  getErrors() {
    return axios
      .get<ErrorMonth[]>("statistics/general/errors_month/")
      .then((response) => response.data);
  }

  getUserErrors() {
    return axios
      .get<ErrorUser[]>("statistics/general/errors_user/")
      .then((response) => response.data);
  }

  getRawNumbers() {
    return axios
      .get<RawNumbers>("statistics/general/raw_numbers/")
      .then((response) => response.data);
  }

  getRecordClientSex() {
    return axios
      .get<RecordClientValueCount[]>("statistics/general/record_client_sex/")
      .then((response) => response.data);
  }

  getRecordClientNationality() {
    return axios
      .get<RecordClientValueCount[]>(
        "statistics/general/record_client_nationality/",
      )
      .then((response) => response.data);
  }

  getRecordClientState() {
    return axios
      .get<RecordClientValueCount[]>("statistics/general/record_client_state/")
      .then((response) => response.data);
  }

  getRecordClientAge() {
    return axios
      .get<RecordClientValueCount[]>("statistics/general/record_client_age/")
      .then((response) => response.data);
  }

  getRecordsTagData(): Promise<TagCount[]> {
    return axios
      .get<RecordTagStats>("statistics/general/tag_stats/")
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
      .get<UserWithMissingKeys[]>(
        "statistics/error/users_with_missing_record_keys/",
      )
      .then((r) => r.data);
  }

  getRecordsClosedStatistic(): Promise<RecordsClosed[]> {
    return axios
      .get<RecordsClosed[]>("statistics/record/records_closed_statistic/")
      .then((r) => r.data);
  }

  getRecordFieldsStatistic(): Promise<RecordsField[]> {
    return axios
      .get<RecordsField[]>("statistics/record/record_fields_amount/")
      .then((r) => r.data);
  }

  getDynamicStatistic(data: types.JsonModel): Promise<DynamicStatistic> {
    return axios.post("statistics/record/dynamic/", data).then((r) => r.data);
  }
}

export default new StatisticService();
