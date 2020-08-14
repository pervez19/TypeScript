import {CricketCoach } from "./CricketCoach";
import {GolfCoach} from "./GolfCoach";
import { Coach } from "./Coach";

let myCricketCoach=new CricketCoach();
let myGolfCoach=new GolfCoach();

let theCoach: Coach[]=[];
theCoach.push(myCricketCoach);
theCoach.push(myGolfCoach);

for(let tempCoach of theCoach)
{
    console.log(tempCoach.getDailyWorkOut());
}