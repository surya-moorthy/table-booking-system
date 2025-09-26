// src/types/express.d.ts

// 1. Define the custom interface
export interface UserPayload {
  name: string;
  email: string;
}
declare module 'express-serve-static-core' {
    interface Request {
        user: UserPayload;
    }
}
