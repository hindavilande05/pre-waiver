import { Credit } from "../models/interfaces";

 
  export class CreditUtils {
    L: number; // Lecture hours
    T: number; // Tutorial hours
    P: number; // Practical hours
    C: number; // Total credits
  
    constructor(L: number, T: number, P: number, C: number) {
      this.L = L;
      this.T = T;
      this.P = P;
      this.C = C;
    }
     public static toCredit(credits: string): Credit {
        if (typeof credits === 'string') {
            const [L, T, P, C] = credits.split('-').map(Number);
            return { L, T, P, C } as Credit;
          } else if (typeof credits === 'object' && credits !== null) {
            return credits as Credit;
          } else {
            throw new Error('Invalid credits format');
          }
      }
  
    public static toString(creds: Credit):string{
        return  `${creds.L}-${creds.T}-${creds.P}-${creds.C}`;
    }
  }