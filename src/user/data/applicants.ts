import { QuickApplicaton } from "../models/quick-app.model"
import { Student } from "../models/student.model"
import { University } from "../models/university.model"
import masterPrograms from "./master-programs"

export const students: Student[] = [
    {
        id: 0,
        firstname: 'Leslie',
        lastname: 'Abbott',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        email: 'leslieabbott@example.com',
        birthdate: new Date('1997-06-08')
    },
    {
        id: 1,
        firstname: 'Hector',
        lastname: 'Adams',
        image:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        email: 'hectoradams@example.com',
        birthdate: new Date('1998-05-03')
    },
    {
        id: 2,
        firstname: 'Blake',
        lastname: 'Alexander',
        image:
            'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        email: 'blakealexander@example.com',
        birthdate: new Date('1999-02-16')
    },
    {
        id: 3,
        firstname: 'Fabricio',
        lastname: 'Andrews',
        image:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        email: 'fabricioandrews@example.com',
        birthdate: new Date('1997-10-12')
    },
    {
        id: 4,
        firstname: 'Angela',
        lastname: 'Beaver',
        image:
            'https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        email: 'angelabeaver@example.com',
        birthdate: new Date('1996-05-27')
    },
    {
        id: 5,
        firstname: 'Yvette',
        lastname: 'Blanchard',
        image:
            'https://images.unsplash.com/photo-1506980595904-70325b7fdd90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        email: 'yvetteblanchard@example.com',
        birthdate: new Date('1999-11-29')
    },
    {
        id: 6,
        firstname: 'Lawrence',
        lastname: 'Brooks',
        image:
            'https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        email: 'lawrencebrooks@example.com',
        birthdate: new Date('1998-12-31')
    },
    {
        id: 7,
        firstname: 'Jeffrey',
        lastname: 'Clark',
        image:
            'https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        email: "@example.com",
        birthdate: new Date("1998-10-10")
    },
    {
        id: 8,
        firstname: "Kathryn",
        lastname: "Cooper",
        image:
            'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        email: "kathryncooper@example.com",
        birthdate: new Date("1998-01-14")
    },
    {
        id: 9,
        firstname: "Alicia",
        lastname: "Edwards",
        image:
            'https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        email: "aliciaedwards@example.com",
        birthdate: new Date("1997-12-08")
    },
    {
        id: 10,
        firstname: "Benjamin",
        lastname: "Emerson",
        image:
            'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        email: "benjaminemerson@example.com",
        birthdate: new Date("1999-10-01")
    },
    {
        id: 11,
        firstname: "Jillian",
        lastname: "Erics",
        image:
            'https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        email: "jillianerics@example.com",
        birthdate: new Date("1995-04-13")
    },
    {
        id: 12,
        firstname: "Chelsea",
        lastname: "Evans",
        image:
            'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        email: "chelseaevans@example.com",
        birthdate: new Date("1998-09-09")
    },
    {
        id: 13,
        firstname: "Michael",
        lastname: "Gillard",
        image:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        email: "michaelgillard@example.com",
        birthdate: new Date("1997-03-11")
    },
    {
        id: 14,
        firstname: "Dries",
        lastname: "Giuessepe",
        image:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        email: "driesgiuessepe@example.com",
        birthdate: new Date("1999-12-12")
    },
    {
        id: 15,
        firstname: "Jenny",
        lastname: "Harrison",
        image:
            'https://images.unsplash.com/photo-1507101105822-7472b28e22ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        email: "jennyharrison@example.com",
        birthdate: new Date("1998-10-10")
    },
    {
        id: 16,
        firstname: "Lindsay",
        lastname: "Hatley",
        image:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        email: "lindsayhatley@example.com",
        birthdate: new Date("1996-01-01")
    },
    {
        id: 17,
        firstname: "Anna",
        lastname: "Hill",
        image:
            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        email: "annahill@example.com",
        birthdate: new Date("1997-11-30")
    },
    {
        id: 18,
        firstname: "Courtney",
        lastname: "Samuels",
        image:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        email: "courtneysamuels@example.com",
        birthdate: new Date("1998-02-28")
    },
    {
        id: 19,
        firstname: "Tom",
        lastname: "Simpson",
        image:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        email: "tomsimpson@example.com",
        birthdate: new Date("1994-11-09")
    },
    {
        id: 20,
        firstname: "Floyd",
        lastname: "Thompson",
        image:
            'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        email: "floydthompson@example.com",
        birthdate: new Date("1995-12-01")
    },
    {
        id: 21,
        firstname: "Leonard",
        lastname: "Timmons",
        image:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        email: "leonardtimmons@example.com",
        birthdate: new Date("1999-01-27")
    },
    {
        id: 22,
        firstname: "Whitney",
        lastname: "Trudeau",
        image:
            'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        email: "whitneytrudeau@example.com",
        birthdate: new Date("1998-11-17")
    },
    {
        id: 23,
        firstname: "Kristin",
        lastname: "Watson",
        image:
            'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        email: "kristinwatson@example.com",
        birthdate: new Date("1996-05-23")
    },
    {
        id: 24,
        firstname: "Emily",
        lastname: "Wilson",
        image:
            'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        email: "emilywilson@example.com",
        birthdate: new Date("1999-08-01")
    },
    {
        id: 25,
        firstname: "Emma",
        lastname: "Young",
        image:
            'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        email: "emmayoung@example.com",
        birthdate: new Date("1996-02-13")
    },
]

const university: University = {
    id: 0,
    name: "Koc University",
    cityId: 809,
    image: "https://keystoneacademic-res.cloudinary.com/image/upload/a_0/e_trim:10:white/f_auto,q_auto,h_56/element/90/90334_thumb.png",
    rank: null
}

export const quickApplications: QuickApplicaton[] = [
    {
        student: students[0],
        masterProgram: masterPrograms[2],
        university: university
    },
    {
        student: students[1],
        masterProgram: masterPrograms[2],
        university: university
    },
    {
        student: students[2],
        masterProgram: masterPrograms[3],
        university: university
    },
    {
        student: students[3],
        masterProgram: masterPrograms[1],
        university: university
    },
    {
        student: students[4],
        masterProgram: masterPrograms[0],
        university: university
    },
    {
        student: students[5],
        masterProgram: masterPrograms[4],
        university: university
    },
    {
        student: students[6],
        masterProgram: masterPrograms[2],
        university: university
    },
    {
        student: students[7],
        masterProgram: masterPrograms[3],
        university: university
    },
    {
        student: students[8],
        masterProgram: masterPrograms[1],
        university: university
    },
    {
        student: students[9],
        masterProgram: masterPrograms[4],
        university: university
    },
    {
        student: students[10],
        masterProgram: masterPrograms[3],
        university: university
    },
    {
        student: students[11],
        masterProgram: masterPrograms[4],
        university: university
    },
    {
        student: students[12],
        masterProgram: masterPrograms[2],
        university: university
    },
    {
        student: students[13],
        masterProgram: masterPrograms[2],
        university: university
    },
    {
        student: students[14],
        masterProgram: masterPrograms[1],
        university: university
    },
    {
        student: students[15],
        masterProgram: masterPrograms[3],
        university: university
    },
    {
        student: students[16],
        masterProgram: masterPrograms[1],
        university: university
    },
    {
        student: students[17],
        masterProgram: masterPrograms[4],
        university: university
    },
    {
        student: students[18],
        masterProgram: masterPrograms[0],
        university: university
    },
    {
        student: students[19],
        masterProgram: masterPrograms[1],
        university: university
    },
    {
        student: students[20],
        masterProgram: masterPrograms[0],
        university: university
    },
    {
        student: students[21],
        masterProgram: masterPrograms[2],
        university: university
    },
    {
        student: students[22],
        masterProgram: masterPrograms[4],
        university: university
    },
    {
        student: students[23],
        masterProgram: masterPrograms[1],
        university: university
    },
    {
        student: students[24],
        masterProgram: masterPrograms[1],
        university: university
    },
    {
        student: students[25],
        masterProgram: masterPrograms[0],
        university: university
    },
]

export interface DirectoryType {
    [key: string]: QuickApplicaton[]
}
export const directory: DirectoryType = {
    A: [
        quickApplications[0],
        quickApplications[1],
        quickApplications[2],
        quickApplications[3]
    ],
    B: [
        quickApplications[4],
        quickApplications[5],
        quickApplications[6]
    ],
    C: [
        quickApplications[7],
        quickApplications[8]
    ],
    E: [
        quickApplications[9],
        quickApplications[10],
        quickApplications[11],
        quickApplications[12]
    ],
    G: [
        quickApplications[13],
        quickApplications[14]
    ],
    M: [
        quickApplications[15],
        quickApplications[16],
        quickApplications[17]
    ],
    S: [
        quickApplications[18],
        quickApplications[19]
    ],
    T: [
        quickApplications[20],
        quickApplications[21],
        quickApplications[22]
    ],
    W: [
        quickApplications[23],
        quickApplications[24]
    ],
    Y: [
        quickApplications[25]
    ]
}