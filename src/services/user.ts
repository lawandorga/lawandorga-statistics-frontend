import { DataResponse } from "@/types/user";
import axios from "axios";

class UserService {
  logout(): Promise<void> {
    return axios.post("/logout/").then();
  }

  data(): Promise<DataResponse> {
    return axios
      .get<DataResponse>(`statistics_users/data_self/`)
      .then((response) => response.data);
  }

  changePassword(data: {
    current_password: string;
    new_password: string;
    new_password_confirm: string;
  }): Promise<void> {
    return axios
      .post<Promise<void>>("statistic_users/change_password/", data)
      .then();
  }
}

export default new UserService();
