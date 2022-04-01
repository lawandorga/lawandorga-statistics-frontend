import { types } from "@lawandorga/components";

export type StatisticUser = types.JsonModel & {
  id: number;
  email: string;
  name: string;
  user: number;
};

export type LoginResponse = types.JsonModel & {
  access: string;
  refresh: string;
  user: StatisticUser;
};

export type RefreshResponse = types.JsonModel & {
  access: string;
  refresh: string;
};

export type StaticsResponse = types.JsonModel & {
  user: StatisticUser;
};
