export type User = {
  name: string;
  email: string;
  passwordHash: string;
};


export enum ROLE {
  USER,
  ADMIN
} 
