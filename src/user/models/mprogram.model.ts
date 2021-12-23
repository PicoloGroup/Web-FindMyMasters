export interface University {
  id: number;
  name: string;
  language: string;
  mode: "ONLINE" | "CAMPUS";
  schedule: "FULLTIME" | "PARTTIME";
  deadline: Date;
  field: string;
  rank: string;
  url: string;
  tution_currency: string;
  universityId: number;
  duration: number;
  tution_amount: number;
}
