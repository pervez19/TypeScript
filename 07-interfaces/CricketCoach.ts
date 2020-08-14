import { Coach } from "./Coach";

export class CricketCoach implements Coach
{
    getDailyWorkOut(): string {
        return "Work hard or go home by Cricket Coach";
    }
    
}