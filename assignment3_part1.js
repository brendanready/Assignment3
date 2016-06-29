/*
        Brendan Ready
        Assignment 3, Part 1
        FEWD 2
*/

// Practice with Arrays 

// STEP 1
/*
var favMovies = ["300", "Pulp Fiction", "Dazed and Confused", "Scarface", "No Country For Old Men"];
window.console.log(favMovies[1]);
*/

// STEP 2
/*

var movies = new Array();
movies[0] = "300";
movies[1] = "Pulp Fiction";
movies[2] = "Dazed and Confused";
movies[3] = "Scarface";
movies[4] = "No Country For Old Men";
window.console.log(movies[0]);

*/
// STEP 3
/*

var movies = ["300", "Pulp Fiction", "Dazed and Confused", "Scarface", "No Country For Old Men"];
movies.splice(2,0, "The Wolf of Wall Street");
console.log(movies);
console.log(movies.length);

*/
// STEP 4

/*
var movies = [];
movies[0] = "300";
movies[1] = "Pulp Fiction";
movies[2] = "Dazed and Confused";
movies[3] = "Scarface";
movies[4] = "No Country For Old Men";
console.log(movies);
delete movies[0];
console.log(movies);
*/

// STEP 5
/*
var movies = [];
movies[0] = "300";
movies[1] = "Pulp Fiction";
movies[2] = "Dazed and Confused";
movies[3] = "Scarface";
movies[4] = "No Country For Old Men";
movies[5] = "The Wolf of Wall Street";
movies[6] = "The Godfather";

for (var i = 0; i <movies.length; i++) {
    console.log(movies[i]);
}
*/

// STEP 6
/*
var movies = ["300", "Pulp Fiction", "Dazed and Confused", "Scarface", "No Country For Old Men", "The Wolf of Wall Street", "The Godfather"];

for (var index in movies) {
    console.log(movies[index]);
}
*/

// STEP 7
/*
var movies = ["300", "Pulp Fiction", "Dazed and Confused", "Scarface", "No Country For Old Men", "The Wolf of Wall Street", "The Godfather"];

for (var index in movies) {
    movies.sort();
    console.log(movies[index]);
}
*/

// STEP 8
/*

var movies = ["300", "Pulp Fiction", "Dazed and Confused", "Scarface", "No Country For Old Men", "The Wolf of Wall Street", "The Godfather"];
var leastFavMovies = ["Bridget Jones's Diary", "Love Actually", "The Stepford Wives"];

console.log("Movies I like: \n\n");
for (var index in movies) {
    movies.sort();
    console.log(movies[index]);
}
console.log("\n\nMovies I regret watching: \n\n");

for (var index in leastFavMovies) {
    leastFavMovies.sort();
    console.log(leastFavMovies[index]);
}

*/
// STEP 9
/*

var movies = ["300", "Pulp Fiction", "Dazed and Confused", "Scarface", "No Country For Old Men", "The Wolf of Wall Street", "The Godfather"];

var leastFavMovies = ["Bridget Jones's Diary", "Love Actually", "The Stepford Wives"];

movies = movies.concat(leastFavMovies);
console.log(movies.sort().reverse());

*/

// STEP 10
/*
var movies = ["300", "Pulp Fiction", "Dazed and Confused", "Scarface", "No Country For Old Men", "The Wolf of Wall Street", "The Godfather"];
var leastFavMovies = ["Bridget Jones's Diary", "Love Actually", "The Stepford Wives"];
movies = movies.concat(leastFavMovies);

lastMovie = movies.pop();
console.log(lastMovie);

*/

// STEP 11
/*

var movies = ["300", "Pulp Fiction", "Dazed and Confused", "Scarface", "No Country For Old Men", "The Wolf of Wall Street", "The Godfather"];
var leastFavMovies = ["Bridget Jones's Diary", "Love Actually", "The Stepford Wives"];
movies = movies.concat(leastFavMovies);

firstMovie = movies.shift();
console.log(firstMovie);

*/

// STEP 12
/*
var movies = ["300", "Pulp Fiction", "Dazed and Confused", "Scarface", "No Country For Old Men", "The Wolf of Wall Street", "The Godfather"];
var leastFavMovies = ["Bridget Jones's Diary", "Love Actually", "The Stepford Wives"];
movies = movies.concat(leastFavMovies);
console.log(leastFavMovies);
console.log(movies.indexOf("Bridget Jones's Diary") + "\n" + movies.indexOf("Love Actually") + "\n" + movies.indexOf("The Stepford Wives"));

movies.splice(7,3, "Goodfellas", "Platoon", "Fast Times at Ridgemont High ")
console.log(movies);
*/

// STEP 13
/*
var employee1 = [];
employee1["employeeid"] = "20";
employee1["name"] = "Brendan Ready";
employee1["title"] = "Web Master";
employee1["department"] = "Software";
employee1["currentEmp"] = true;

var employee2 = [];
employee2["employeeid"] = "11";
employee2["name"] = "Sarah Smith";
employee2["title"] = "Social Media Analyst";
employee2["department"] = "Marketing";
employee2["currentEmp"] = true;

employees = [employee1, employee2];
console.log(employees[1]["name"]);
*/

// STEP 14
/*
var employee1 = [];
employee1["employeeid"] = "20";
employee1["name"] = "Brendan Ready";
employee1["title"] = "Web Master";
employee1["department"] = "Software";
employee1["currentEmp"] = true;

var employee2 = [];
employee2["employeeid"] = "11";
employee2["name"] = "Sarah Smith";
employee2["title"] = "Social Media Analyst";
employee2["department"] = "Marketing";
employee2["currentEmp"] = true;

employees = [employee1, employee2];
for (var index in employees) {
    console.log(employees[index]["name"]);
}
*/

// STEP 15
/*
var employee1 = [];
employee1["employeeid"] = "20";
employee1["name"] = "Brendan Ready";
employee1["title"] = "Web Master";
employee1["department"] = "Software";
employee1["currentEmp"] = true;

var employee2 = [];
employee2["employeeid"] = "11";
employee2["name"] = "Sarah Smith";
employee2["title"] = "Social Media Analyst";
employee2["department"] = "Marketing";
employee2["currentEmp"] = true;

var employee3 = [];
employee3["employeeid"] = "33";
employee3["name"] = "Joey Jones";
employee3["title"] = "Sales Rep";
employee3["department"] = "Sales";
employee3["currentEmp"] = false;

var employees = [employee1, employee2, employee3];

for (var index in employees) {
    if (employees[index]["currentEmp"] === true) {
    console.log(employees[index]["name"]);
    }
}
*/

// STEP 16
/*
movies = [["Scarface", 1], ["No Country For Old Men", 2], ["Dazed and Confused", 3], ["Pulp Fiction", 4], ["300", 5]];

for (var index in movies) {
    console.log(movies[index].filter(function(item) {
        return typeof item == "string";
        
    }).toString());
}
*/

// Practice with Functions 

// STEP 1

/*

var displayMessage = function(string) {
    console.log(string);
}

displayMessage("WHAT A COOL ANONYMOUS FUNCTION!");
*/

// STEP 2

/*

function calculate(num1, num2) {
    return num1 % num2;
}

console.log(calculate(20, 3));

*/

// STEP 3
/*
var employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];

var showEmployee = function(array) {
    console.log("Employees:\n\n"); 
    for (var index in array) {
        console.log(array[index]);
    }
}

showEmployee(employees);
*/
