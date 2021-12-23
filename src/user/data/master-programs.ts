import { MasterProgram } from "../models/mprogram.model";

const masterPrograms: MasterProgram[] = [{
    universityId: 4360,
    deadline: new Date("2022-06-02"),
    duration: 24,
    field: "Engineering",
    id: 0,
    language: "English",
    mode: "CAMPUS",
    name: "MsC in Computer Engineering with Thesis",
    schedule: "FULLTIME",
    tution_amount: 100000,
    tution_currency: "TRY",
    url: "https://gsse.ku.edu.tr/en/graduate-programs/computer-science-and-engineering/ms-with-thesis/"
},
{
    universityId: 4360,
    deadline: new Date("2022-06-02"),
    duration: 24,
    field: "Business",
    id: 1,
    language: "English",
    mode: "CAMPUS",
    name: "Master of Business Administration (MBA)",
    schedule: "FULLTIME",
    tution_amount: 100000,
    tution_currency: "TRY",
    url: "https://gsb.ku.edu.tr/programs/full-time-programs/mba/program-overview/"
},
{
    universityId: 4360,
    deadline: new Date("2022-06-02"),
    duration: 24,
    field: "Social Sciences and Humanities",
    id: 2,
    language: "English",
    mode: "CAMPUS",
    name: "MA in Computational Social Sciences",
    schedule: "FULLTIME",
    tution_amount: 100000,
    tution_currency: "TRY",
    url: "https://gsssh.ku.edu.tr/en/departments/computational-social-sciences/"
},
{
    universityId: 4360,
    deadline: new Date("2022-06-02"),
    duration: 24,
    field: "Health Sciences",
    id: 3,
    language: "English",
    mode: "CAMPUS",
    name: "MSc Global Health",
    schedule: "FULLTIME",
    tution_amount: 100000,
    tution_currency: "TRY",
    url: "https://gshs.ku.edu.tr/en/academics/global-health-ms/ms-without-thesis/"
},
{
    universityId: 4360,
    deadline: new Date("2022-06-02"),
    duration: 24,
    field: "Health Sciences",
    id: 4,
    language: "English",
    mode: "CAMPUS",
    name: "MSc in Cybersecurity",
    schedule: "FULLTIME",
    tution_amount: 100000,
    tution_currency: "TRY",
    url: "https://gsse.ku.edu.tr/en/graduate-programs/cyber-security/program-overview/"
}]

export default masterPrograms;