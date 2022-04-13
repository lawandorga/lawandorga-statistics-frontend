import { RecordState, RlcMember } from "@/types/statistic";
import axios from "axios";

class StatisticService {
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
}

export default new StatisticService();
