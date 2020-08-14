let sports:string[]=["cricket","football","golf"];
for(let i=0;i<sports.length;i++)
{
    console.log(sports[i]);
}

for(let tempSports of sports)
{
    if(tempSports=="cricket")
    {
        console.log(tempSports+" << my favorite sports")
    }
    else
    console.log(tempSports);
}