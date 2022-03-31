import { Rlc } from "@/types/core";
import {
  DashboardInformation,
  DashboardNote,
  LoginResponse,
  RefreshResponse,
  User,
} from "@/types/user";
import axios from "axios";

interface StaticsResponse {
  user: User;
  rlc: Rlc;
  permissions: string[];
}

interface AdminInformation {
  profiles: number;
  record_deletion_requests: number;
  record_permit_requests: number;
}

class UserService {
  register(data: User): Promise<void> {
    return axios.post("profiles/", data).then();
  }

  login(data: { email: string; password: string }): Promise<LoginResponse> {
    return axios
      .post<LoginResponse>(`profiles/login/`, data)
      .then((response) => response.data);
  }

  refresh(data: { refresh: string }): Promise<RefreshResponse> {
    return axios
      .post<RefreshResponse>(`profiles/refresh/`, data)
      .then((response) => response.data);
  }

  statics(): Promise<StaticsResponse> {
    return axios
      .get<StaticsResponse>(`profiles/statics/`)
      .then((response) => response.data);
  }

  changePassword(data: {
    current_password: string;
    new_password: string;
    new_password_confirm: string;
  }): Promise<RlcUser> {
    return axios
      .post<Promise<RlcUser>>("profiles/change_password/", data)
      .then((response) => response.data);
  }
}

export default new UserService();
