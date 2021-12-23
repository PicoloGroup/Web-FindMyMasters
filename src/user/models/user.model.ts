export interface User {
  id: number;
  username: string;
  email: string;
  emailVerified: boolean;
  registrationDate: Date | null; // ISO Date
}
