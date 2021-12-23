import { MasterProgram } from "./mprogram.model";
import { Student } from "./student.model";
import { University } from "./university.model";

export interface QuickApplicaton {
  student: Student;
  university: University;
  masterProgram: MasterProgram;
}
  