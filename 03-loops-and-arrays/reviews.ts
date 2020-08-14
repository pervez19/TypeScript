let reviews:number[]=[1,2,3,45,6.7];
let total:number=0;
for(let i=0; i<reviews.length;i++)
{
    console.log(reviews[i]);
    total+=reviews[i];
}

let average: number=total/reviews.length;

console.log("total= "+total);
console.log("reviews length= "+reviews.length);
console.log("Average= "+average);