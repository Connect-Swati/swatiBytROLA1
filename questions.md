# Instructions for OLA

1. Define all the endpoints in `index.js` file
2. Every endpoint must have a function above it which does the operations
3. Fork this Repl and write your code to define the endpoints in the index.js file.
4. You need to use functions to write the code of each endpoint.
5. Ensure that your variables and endpoints are named properly.
6. Run the endpoints and check that you are getting the expected output before submitting.
7. Revise your work before you submit as you will only be able to fill the Submission Form once.



## Question 01: Formatted Track Address

1. Create an endpoint named `/track-store-address`  that returns the address after formatting
2. Declare 3 variables named `city` , `street` & `state` to store the query parameters
3. Declare a function named `createAddress` to display the address in the given format 

### API Call

```
http://localhost:3000/track-store-address?street=123%20Gandhi%20Marg&city=Mumbai&state=Maharashtra
```

### Expected Output

```
123 Gandhi Marg, Mumbai, Maharashtra
```


## Question 02: Employee Greeting

1. Create an endpoint named `/employee-greet` that returns a greeting message for the employee.
2. Declare 2 variables named `employeeName` to store the query parameters
3. Declare a function named `employeeGreet` to display the greeting in the given format 

### API Call:

```
http://localhost:3000/employee-greet?employeeName=Pratap
```

### Expected Output:

```
Welcome to the company, Pratap!
```


## Question 03: Calculate Monthly Savings Goal

1. Create an endpoint named `/calculate-savings-goal`
2. Declare 2 variables named `totalAmount` & `month` to store the query parameters
3. Declare a function named `calculatesavingsPerMonth` that calculates the monthly savings goal based on the total amount and time period in months.

### **API Call:**

```
http://localhost:3000/calculate-savings-goal?totalAmount=12000&months=12
```

### **Expected Output:**

```
To save a total amount of ₹12000 in 12 months, you need to save ₹1000 per month.
```


## Question 04: Determine Membership Level

1. Create an endpoint named `/membership-level`
2. Declare a variable named `points` to store the query parameter
3. Declare a function named `checkMembershipLevel` which checks for multiple levels of points
    1. If `points` greater than equal to `3000` then the membership level is `Platinum`
    2. If `points` greater than equal to `2000` then the membership level is `Gold` 
    3. If `points` greater than equal to `1000` then the membership level is `Silver` 
    4. Otherwise the membership level is `Bronze`

**API Call:** 

```
http://localhost:3000/membership-level?points=2500
```

**Expected Output:** 

```jsx
You are a Gold member.
```


## Question 05: Sort Employee Salaries

1. Create an endpoint named `/sort-salaries` 
2. Declare a function named `sortSalaries` which returns the salaries in a sorted format ( lowest-to-highest ) 

### Dummy Data:

```js
let salaries = [45000, 60000, 35000, 70000, 50000];
```

### API Call

```
http://localhost:3000/sort-salaries
```

### Expected Output

```
[35000, 45000, 50000, 60000, 70000]
```


## Question 06: Find Track by Name

1. Create an endpoint named `/find-track` 
2. Declare 1 variable named `name` to store the query parameters
3. Declare a function named `findTrackByName` which finds track details based on the provided track name

### Dummy Data

```js
let tracks = [
  { id: 1, name: "Track One", length: 3.5 },
  { id: 2, name: "Track Two", length: 4.2 },
  { id: 3, name: "Track Three", length: 2.8 }
];
```

### API Call

```
http://localhost:3000/find-track?name=Track%20Two
```

### Expected Output

```json
{ "id": 2, "name": "Track Two", "length": 4.2 }
```


## Question 07: Filter Long Movies

1. Create an endpoint named `/filter-long-movies`
2. Declare a function named `filterLongMovies` which returns all the movies longer than 120 minutes

### Dummy Data

```js
let movies = [
  { id: 1, title: "Movie One", duration: 120 },
  { id: 2, title: "Movie Two", duration: 150 },
  { id: 3, title: "Movie Three", duration: 90 }
];
```

### API Call

```
http://localhost:3000/filter-long-movies
```

### Expected Output

```json
[{ "id": 2, "title": "Movie Two", "duration": 150 }]
```


## Question 08: Push New Employee

1. Create an endpoint named `/add-employee`
2. Declare a variable named `name` to store the query parameters
3. Declare a function named `addNewEmployee` which adds a new employee entry into the `employees` array

### Dummy Data:

```js
let employees = [
  { name: "Amit" },
  { name: "Rohan" }
];
```

### API Call

```
http://localhost:3000/add-employee?name=Shivani
```

### Expected Output

```json
[
  { "name": "Amit" },
  { "name": "Rohan" },
  { "name": "Shivani" }
]
```

## Question 09: Calculate Monthly Savings

1. Create an endpoint named `/calculate-savings`
2. Declare 2 variables named `income` & `expenses` to store the query parameters
3. Declare a function named `returnSavings` which calculates your monthly savings after all the expenses

**API Call:** 

```
http://localhost:3000/calculate-savings?income=4000&expenses=2500
```

**Expected Output:** 

```
You have saved ₹1500.
```


## Question 10: Filter Recent Movies

1. Create an endpoint named `/filter-recent-movies`
2. Declare a function named `returnRecentMovies` which returns all the movies that were release after 2015

### Dummy Data

```js
let movies_new = [
  { id: 1, title: "Movie One", year: 2014 },
  { id: 2, title: "Movie Two", year: 2016 },
  { id: 3, title: "Movie Three", year: 2018 }
];
```

### API Call

```
http://localhost:3000/filter-recent-movies
```

### Expected Output

```json
[
  { "id": 2, "title": "Movie Two", "year": 2016 },
  { "id": 3, "title": "Movie Three", "year": 2018 }
]
```