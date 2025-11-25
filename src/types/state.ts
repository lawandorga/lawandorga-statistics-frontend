import { types } from "lorga-ui";
import { StatisticUser } from "./user";

export interface AlertState {
  alerts: types.AlertItem[];
}

export interface UserState {
  access: string | null;
  refresh: string | null;
  user: StatisticUser | null;
  task: ReturnType<typeof setTimeout> | null;
}

export interface RootState {
  alert: AlertState;
  user: UserState;
}
