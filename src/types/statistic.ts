export interface RecordState {
  state: string;
  amount: number;
}

export interface RlcMember {
  name: string;
  amount: number;
}

export interface LcUsage {
  lc: string;
  records: number;
  files: number;
  documents: number;
}

export interface UserAction {
  email: string;
  actions: number;
}

export interface UserLogin {
  date: string;
  logins: number;
}

export interface UserLoginMonth {
  month: string;
  logins: number;
}

export interface UserWithMissingKeys {
  user: number;
  records: number;
  access: number;
}

export interface RecordsClosed {
  days: number;
  count: number;
}

export interface RecordsField {
  field: string;
  amount: number;
}

export interface ErrorMonth {
  status: number;
  path: string;
  count: number;
}

export interface ErrorUser {
  email: string;
  rlckeys: boolean;
  userkeys: boolean;
  accepted: boolean;
  locked: boolean;
}

export interface RawNumbers {
  records: number;
  users: number;
  collabs: number;
  files: number;
  lcs: number;
}

export interface RecordClientValueCount {
  value: string;
  count: number;
}

export interface TagCount {
  tag: string;
  count: number;
}

export interface RecordTagStats {
  tags: TagCount[];
  state: [
    { state: "Set"; count: number },
    { state: "Not-Existing"; count: number },
  ];
}

export interface DynamicStatistic {
  label: string;
  error: boolean;
  // eslint-disable-next-line
  data: any[][];
}
