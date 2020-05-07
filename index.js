import { fifaData } from './fifa.js';
console.log(fifaData);


// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 
const worldCupFinal = fifaData.filter(match => match.year === 2014 && match.stage)
console.log(worldCupFinal["Home Team Name"])
console.log(worldCupFinal["Win Conditionals"]).split(' ')[0]);
(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
console.log(fifaData[828]["Home Team Name"]);
console.log(fifaData[828]["Away Team Name"]);
console.log(fifaData[828]["Home Team Goals"]);
console.log(fifaData[828]["Away Team Goals"]);
console.log(fifaData[828]["Win conditions"]);



/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */
//return data.filter(match => match.Stage === "Final")
function getFinals(data) {

    // Iterate through data if stage === final return object
    const finalsArr = data.filter(ele => ele.Stage === "Final")
    return finalsArr

};
console.log(getFinals(fifaData))
/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */
//return cb.map(match => match.Year);
function getYears(years) {
    const finalYears = years.map(ele => ele.Year)
    return finalYears

};

console.log(getYears(getFinals(fifaData)));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(winners) {
    // away team goals vs home team goals 
    // if statement home team goals < then away team goals home team name wins 
    // map returns array with exact same # of ele.
    const winnersArr = winners.map(ele => {
        const homeGoals = ele["Home Team Goals"];
        //console.log("This is home goals " + homeGoals);
        const aGoals = ele["Away Team Goals"];
        //console.log("This is the away goals " + aGoals);
        if(homeGoals > aGoals) {
            return ele["Home Team Name"];
        }else  {
            return ele["Away Team Name"];
        }
    } )
    return winnersArr

};

console.log(getWinners(getFinals(fifaData)));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 
"In {year}, {country} won the world cup"
Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(winnersArr, finalYears) {
        //console.log(winnersArr);
        //console.log(finalYears);
        const message = finalYears.map((ele, index) => {
            return `In ${ele}, ${winnersArr[index]} won the world cup`
        });
        return message
};
console.log(getWinnersByYear(getWinners(getFinals(fifaData)),getYears(getFinals(fifaData))));



/* Task 7: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, init) {

    const totalWins = data.reduce((acc, obj) => {
        const winCondition = obj["Home Team Goals"] > obj["Away Team Goals"];
        let key = obj["Home Team Initials"];
        winCondition ? acc + 1 : obj, 0;
        if(!acc[key]) {
            acc[key] = 0;
        }
        if (winCondition) {
            acc[key]++;
        } else {
            acc[obj[["Home Team Initials"]]]++;
        }

        return acc;
    }, {}) [init];    
       
    return `${init} has had ${totalWins} World Cup wins.`;
};
console.log(getCountryWins(getFinals(fifaData), "Ger"));

/* Task 8: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */
// parameter is data
// returns the the average number of home team goals and away team goals scored per match 
//(Hint: use .reduce and do this in 2 steps)
function getAverageGoals(data) {
    
    const averageHomeGoals = data.reduce(function (accumulator, item) {

        return accumulator + item["Home Team Goals"] + item["Away Team Goals"]

    }, 0)

    return (averageHomeGoals / data.length).toFixed(2)
    

};

console.log("Task 10:", getAverageGoals(getFinals(fifaData)));


/// STRETCH 🥅 //

/* STRETCH 1: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* STRETCH 2: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
