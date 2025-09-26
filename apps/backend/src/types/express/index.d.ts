
import * as express from 'express';

declare global {
  namespace Express {
    interface Request {
      user: {
        name: string;
        email: string;
        role : ROLE
      };
    }
  }
}

export enum ROLE {
  USER,
  ADMIN
} 
