const names = [
  "Wilson Goode",
  "Kerrigan Clinton",
  "Miguelangel Schmidt",
  "Tariq Colbert",
  "Isha Trimble",
  "Reagan Torrez",
  "Zaria Terry",
  "Ricardo Harrell",
  "August Addison",
  "Gideon Layne",
  "Terence Gates",
  "Gunnar Moseley",
  "Walker Burk",
  "Tess Sanders",
  "Ali Dewitt",
  "Jacques Collins",
  "Stephen Dobbs",
  "Jayde Roy",
  "Amy Atwood",
  "Yulisa Alvarez",
  "Kamron Mccullough",
];

const emails = [
  "wilson.goode@example.com",
  "kerrigan.clinton@example.com",
  "miguelangel.schmidt@example.com",
  "tariq.colbert@example.com",
  "isha.trimble@example.com",
  "reagan.torrez@example.com",
  "zaria.terry@example.com",
  "ricardo.harrell@example.com",
  "august.addison@example.com",
  "gideon.layne@example.com",
  "terence.gates@example.com",
  "gunnar.moseley@example.com",
  "walker.burk@example.com",
  "tess.sanders@example.com",
  "ali.dewitt@example.com",
  "jacques.collins@example.com",
  "stephen.dobbs@example.com",
  "jayde.roy@example.com",
  "amy.atwood@example.com",
  "yulisa.alvarez@example.com"
];



// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomName = () =>
  `${getRandomArrItem(names)}`;

// Get random email
const getRandomEmail = () => `${getRandomArrItem(emails)}`;

// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomEmail };

