var reviews = [1, 2, 3, 45, 6.7];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
var average = total / reviews.length;
console.log("total= " + total);
console.log("reviews length= " + reviews.length);
console.log("Average= " + average);
