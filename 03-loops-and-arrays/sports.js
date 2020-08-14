var sports = ["cricket", "football", "golf"];
for (var i = 0; i < sports.length; i++) {
    console.log(sports[i]);
}
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var tempSports = sports_1[_i];
    if (tempSports == "cricket") {
        console.log(tempSports + " << my favorite sports");
    }
    else
        console.log(tempSports);
}
