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
