import { fifaData } from './fifa.js';
console.log(fifaData);
console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
console.log('Task 1');
function nameData(){
    for(let i = 0; i < fifaData.length; i++){
        if(fifaData[i].Year === 2014 && fifaData[i].Stage === 'Final'){
            let homeTeam = fifaData[i]['Home Team Name'];
            let awayTeam = fifaData[i]['Away Team Name'];
            return `In 2014 the Home Team: ${homeTeam} and the away team: ${awayTeam}`;
        }
    }
}
console.log(nameData());

function goalData(){
    for(let i = 0; i < fifaData.length; i++){
        if(fifaData[i].Year === 2014 && fifaData[i].Stage === 'Final'){
            let homeTeam = fifaData[i]['Home Team Goals'];
            let awayTeam = fifaData[i]['Away Team Goals'];
            return `In 2014 the Home Team goal: ${homeTeam} and the away team goal: ${awayTeam}`;
        }
    }
}
console.log(goalData());

function winningTeamData(){
    for(let i = 0; i < fifaData.length; i++){
        let homeTeam1 = fifaData[i]['Home Team Name'];
        let awayTeam2 = fifaData[i]['Away Team Name'];
        let homeTeam = fifaData[i]['Home Team Goals'];
        let awayTeam = fifaData[i]['Away Team Goals'];
        if(fifaData[i].Year === 2014 && fifaData[i].Stage === 'Final' && homeTeam > awayTeam){
            return `${homeTeam1} Team Won the 2014 world cup final`
        } else if(fifaData[i].Year === 2014 && fifaData[i].Stage === 'Final' && homeTeam < awayTeam){
            return `${awayTeam2} world cup final`
        }
    }
}
console.log(winningTeamData());

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */
console.log('Task 2');
function getFinals(array) {
    let finals = [];
    for(let i = 0; i < array.length; i++){
        if(array[i].Stage === 'Final'){
            finals.push(array[i]);
        }
    }
    /* code here */
    return finals;
};
let finalsData = getFinals(fifaData);
console.log(finalsData);

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */
console.log('Task 3');
function getYears(cb1) {
    let years = [];
    for(let i = 0; i < cb1.length; i++){
        years.push(cb1[i].Year);
    }
    /* code here */
    return years;
};
let finalYears = getYears(finalsData);
console.log(finalYears);

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 
console.log('Task 4');
function getWinners(cb1) {
    let winners = [];
    for(let i = 0; i < cb1.length; i++){
        let homeTeam01 = cb1[i]['Home Team Name'];
        let awayTeam02 = cb1[i]['Away Team Name'];
        if(homeTeam01 > awayTeam02){
            winners.push(`${homeTeam01}`);
        } else if(homeTeam01 < awayTeam02){
            winners.push(`${awayTeam02}`);
        }
    }
    /* code here */
    return winners
};
let finalWinners = getWinners(finalsData);
console.log(finalWinners);

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */
console.log('Task 5');
function getWinnersByYear(cb2, cb3) {
    let str = [];
    for(let i = 0; i < cb2.length; i++){
        let countryName = cb2[i];
        let winningYear = cb3[i];
        str.push(`In ${winningYear}, ${countryName} won the work cup!`);
    }
    return str;
};

let winnersByYear = getWinnersByYear(finalWinners,finalYears);
console.log(winnersByYear)

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(/* code here */) {

    /* code here */

};

getAverageGoals();

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
