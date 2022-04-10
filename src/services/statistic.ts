import axios from "axios";

class StatisticService {
  getRlcMembers() {
    return axios
      .get<{ name: string; amount: number }[]>("statistic/rlc_members/")
      .then((response) => response.data);
  }
}

export default new StatisticService();
