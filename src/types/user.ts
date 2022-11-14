export type StatisticUser = {
  id: number;
  email: string;
  name: string;
  user_id: number;
};

export type DataResponse = {
  user: StatisticUser;
};
