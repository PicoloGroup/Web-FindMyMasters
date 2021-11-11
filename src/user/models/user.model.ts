export interface User {
  id: number;
  username: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  university: string | null; 
  registrationDate: string; // ISO Date
}
