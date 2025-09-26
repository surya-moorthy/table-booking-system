
import * as express from 'express';

declare global {
  namespace Express {
    interface Request {
      user: {
        userId : string
        role : ROLE
      };
    }
  }
}

export enum ROLE {
  USER,
  ADMIN
} 
