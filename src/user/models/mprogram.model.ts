export interface MasterProgram {
  id: number;
  name: string;
  language: string;
  mode: "ONLINE" | "CAMPUS" | "" | null;
  schedule: "FULLTIME" | "PARTTIME" | "" | null;
  deadline: Date | null;
  field: string;
  url: string;
  tution_currency: string;
  universityId: number;
  duration: number;
  tution_amount: number;
}
