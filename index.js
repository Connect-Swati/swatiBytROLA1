let express = require("express");
let app = express();
let port = 3000;
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
app.get("/", (req, res) => {
  res.send("Swati - BytROLA1");
});

let salaries = [45000, 60000, 35000, 70000, 50000];
let tracks = [
  { id: 1, name: "Track One", length: 3.5 },
  { id: 2, name: "Track Two", length: 4.2 },
  { id: 3, name: "Track Three", length: 2.8 },
];
let movies = [
  { id: 1, title: "Movie One", duration: 120 },
  { id: 2, title: "Movie Two", duration: 150 },
  { id: 3, title: "Movie Three", duration: 90 },
];
let employees = [{ name: "Amit" }, { name: "Rohan" }];
let movies_new = [
  { id: 1, title: "Movie One", year: 2014 },
  { id: 2, title: "Movie Two", year: 2016 },
  { id: 3, title: "Movie Three", year: 2018 },
];

/*
Question 01: Formatted Track Address
Create an endpoint named /track-store-address that returns the address after formatting
Declare 3 variables named city , street & state to store the query parameters
Declare a function named createAddress to display the address in the given format
API Call
http://localhost:3000/track-store-address?street=123%20Gandhi%20Marg&city=Mumbai&state=Maharashtra
Expected Output
123 Gandhi Marg, Mumbai, Maharashtra
*/

//function to create address
function createAddress(street, city, state) {
  return street + ", " + city + ", " + state;
}
// endpoint to get address
app.get("/track-store-address", (req, res) => {
  let street = req.query.street;
  let city = req.query.city;
  let state = req.query.state;

  // Check if all required query parameters are provided
  if (!street || !city || !state) {
    return res.status(400).json({
      message:
        "Missing required query parameters: street, city, and state are required.",
    });
  }

  try {
    let address = createAddress(street, city, state);
    return res.status(200).send(address);
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
});

/*
Question 02: Employee Greeting
Create an endpoint named /employee-greet that returns a greeting message for the employee.
Declare 2 variables named employeeName to store the query parameters
Declare a function named employeeGreet to display the greeting in the given format
API Call:
http://localhost:3000/employee-greet?employeeName=Pratap
Expected Output:
Welcome to the company, Pratap!
*/

// function to create greeting
function employeeGreet(employeeName) {
  return "Welcome to the company, " + employeeName + "!";
}
// endpoint to get greeting
app.get("/employee-greet", (req, res) => {
  let employeeName = req.query.employeeName;
  if (!employeeName) {
    return res.status(400).json({ message: "Employee name is required." });
  }
  return res.status(200).send(employeeGreet(employeeName));
});

/*
Question 03: Calculate Monthly Savings Goal
Create an endpoint named /calculate-savings-goal
Declare 2 variables named totalAmount & month to store the query parameters
Declare a function named calculatesavingsPerMonth that calculates the monthly savings goal based on the total amount and time period in months.
API Call:
http://localhost:3000/calculate-savings-goal?totalAmount=12000&months=12
Expected Output:
To save a total amount of ₹12000 in 12 months, you need to save ₹1000 per month.
*/
// function to calculate savings goal
function calculateSavingsGoal(totalAmount, months) {
  let perMonthSaving = totalAmount / months;
  return (
    "To save a total amount of ₹" +
    totalAmount +
    " in " +
    months +
    " months, you need to save ₹" +
    perMonthSaving +
    " per month."
  );
}
// endpoint to get savings goal
app.get("/calculate-savings-goal", (req, res) => {
  let totalAmount = parseInt(req.query.totalAmount);
  let months = parseInt(req.query.months);
  // Check for valid numbers and logical conditions
  if (isNaN(totalAmount) || isNaN(months) || totalAmount <= 0 || months <= 0) {
    return res.status(400).json({
      message:
        "Invalid totalAmount or months. Please provide positive integer values and ensure months is not zero.",
    });
  }

  try {
    let savingsMessage = calculateSavingsGoal(totalAmount, months);
    return res.status(200).send(savingsMessage);
  } catch (error) {
    return res.status(500).json({
      message: "Error calculating savings goal",
      error: error.message,
    });
  }
});

/*
Question 04: Determine Membership Level
Create an endpoint named /membership-level
Declare a variable named points to store the query parameter
Declare a function named checkMembershipLevel which checks for multiple levels of points
If points greater than equal to 3000 then the membership level is Platinum
If points greater than equal to 2000 then the membership level is Gold
If points greater than equal to 1000 then the membership level is Silver
Otherwise the membership level is Bronze
API Call:

http://localhost:3000/membership-level?points=2500
Expected Output:

You are a Gold member.
*/
// function to check membership level
function checkMembershipLevel(points) {
  if (points >= 3000) {
    return "Platinum";
  } else if (points >= 2000) {
    return "Gold";
  } else if (points >= 1000) {
    return "Silver";
  } else {
    return "Bronze";
  }
}
// endpoint to get membership level
app.get("/membership-level", (req, res) => {
  let points = parseInt(req.query.points);
  if (isNaN(points) || points < 0) {
    return res
      .status(400)
      .json({ message: "Please provide a valid number of points." });
  }
  res.send("You are a " + checkMembershipLevel(points) + " member.");
});

/*
Question 05: Sort Employee Salaries
Create an endpoint named /sort-salaries
Declare a function named sortSalaries which returns the salaries in a sorted format ( lowest-to-highest )
Dummy Data:
let salaries = [45000, 60000, 35000, 70000, 50000];
API Call
http://localhost:3000/sort-salaries
Expected Output
[35000, 45000, 50000, 60000, 70000]
*/
// function to sort salaries
function sortSalaries(salaries) {
  return salaries.sort((a, b) => a - b);
}
// endpoint to get sorted salaries
app.get("/sort-salaries", (req, res) => {
  let sortedSalaries = sortSalaries(salaries);
  res.send(sortedSalaries);
});

/*
Question 06: Find Track by Name
Create an endpoint named /find-track
Declare 1 variable named name to store the query parameters
Declare a function named findTrackByName which finds track details based on the provided track name
Dummy Data
let tracks = [
  { id: 1, name: "Track One", length: 3.5 },
  { id: 2, name: "Track Two", length: 4.2 },
  { id: 3, name: "Track Three", length: 2.8 }
];
API Call
http://localhost:3000/find-track?name=Track%20Two
Expected Output
{ "id": 2, "name": "Track Two", "length": 4.2 }
*/
// function to find track by name
function findTrackByName(name) {
  for (let i = 0; i < tracks.length; i++) {
    if (tracks[i].name === name) {
      return tracks[i];
    }
  }
  return null;
}
// endpoint to get track by name
app.get("/find-track", (req, res) => {
  let name = req.query.name;
  if (!name) {
    return res.status(400).json({ message: "Track name is required." });
  }
  let track = findTrackByName(name);
  if (track) {
    return res.send(track);
  } else {
    return res.status(404).json({ message: "Track not found." });
  }
});

/*
Question 07: Filter Long Movies
Create an endpoint named /filter-long-movies
Declare a function named filterLongMovies which returns all the movies longer than 120 minutes
Dummy Data
let movies = [
  { id: 1, title: "Movie One", duration: 120 },
  { id: 2, title: "Movie Two", duration: 150 },
  { id: 3, title: "Movie Three", duration: 90 }
];
API Call
http://localhost:3000/filter-long-movies
Expected Output
[{ "id": 2, "title": "Movie Two", "duration": 150 }]
*/
// function to filter long movies
function filterLongMovies(movies) {
  let longMovies = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].duration > 120) {
      longMovies.push(movies[i]);
    }
  }
  return longMovies;
}
// endpoint to get long movies
app.get("/filter-long-movies", (req, res) => {
  let longMovies = filterLongMovies(movies);
  res.send(longMovies);
});
/*
Question 08: Push New Employee
Create an endpoint named /add-employee
Declare a variable named name to store the query parameters
Declare a function named addNewEmployee which adds a new employee entry into the employees array
Dummy Data:
let employees = [
  { name: "Amit" },
  { name: "Rohan" }
];
API Call
http://localhost:3000/add-employee?name=Shivani
Expected Output
[
  { "name": "Amit" },
  { "name": "Rohan" },
  { "name": "Shivani" }
]
*/
// function to add new employee
function addNewEmployee(name) {
  employees.push({ name: name });
  return employees;
}
// endpoint to add new employee
app.get("/add-employee", (req, res) => {
  let name = req.query.name;
  if (!name) {
    return res.status(400).json({
      message: "Name parameter is required to add a new employee.",
    });
  }

  try {
    let updatedEmployees = addNewEmployee(name);
    return res.status(200).send(updatedEmployees);
  } catch (error) {
    return res.status(500).json({
      message: "Failed to add new employee",
      error: error.message,
    });
  }
});

/*
Question 09: Calculate Monthly Savings
Create an endpoint named /calculate-savings
Declare 2 variables named income & expenses to store the query parameters
Declare a function named returnSavings which calculates your monthly savings after all the expenses
API Call:

http://localhost:3000/calculate-savings?income=4000&expenses=2500
Expected Output:

You have saved ₹1500.
*/
// function to calculate monthly savings
function calculateMonthlySavings(income, expenses) {
  let savings = income - expenses;
  return "You have saved ₹" + savings + ".";
}
// endpoint to calculate monthly savings
app.get("/calculate-savings", (req, res) => {
  let income = parseInt(req.query.income);
  let expenses = parseInt(req.query.expenses);
  res.send(calculateMonthlySavings(income, expenses));
});
/*
Question 10: Filter Recent Movies
Create an endpoint named /filter-recent-movies
Declare a function named returnRecentMovies which returns all the movies that were release after 2015
Dummy Data
let movies_new = [
  { id: 1, title: "Movie One", year: 2014 },
  { id: 2, title: "Movie Two", year: 2016 },
  { id: 3, title: "Movie Three", year: 2018 }
];
API Call
http://localhost:3000/filter-recent-movies
Expected Output
[
  { "id": 2, "title": "Movie Two", "year": 2016 },
  { "id": 3, "title": "Movie Three", "year": 2018 }
]
*/
// function to filter recent movies
function filterRecentMovies(movies) {
  let recentMovies = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].year > 2015) {
      recentMovies.push(movies[i]);
    }
  }
  return recentMovies;
}
// endpoint to filter recent movies
app.get("/filter-recent-movies", (req, res) => {
  let recentMovies = filterRecentMovies(movies_new);
  res.send(recentMovies);
});
