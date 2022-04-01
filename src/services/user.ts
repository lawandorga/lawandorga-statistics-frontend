import { LoginResponse, RefreshResponse, StaticsResponse } from "@/types/user";
import axios from "axios";

class UserService {
  login(data: { email: string; password: string }): Promise<LoginResponse> {
    return axios
      .post<LoginResponse>(`statistic_users/login/`, data)
      .then((response) => response.data);
  }

  refresh(data: { refresh: string }): Promise<RefreshResponse> {
    return axios
      .post<RefreshResponse>(`statistic_users/refresh/`, data)
      .then((response) => response.data);
  }

  statics(): Promise<StaticsResponse> {
    return axios
      .get<StaticsResponse>(`statistic_users/statics/`)
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
