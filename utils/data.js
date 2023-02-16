

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

const thoughts = [
  {
    "thoughtText": "Today is a great day!",
    "createdAt": "2023-02-16T12:20:45.000Z",
    "name": "Alice",
    "reactions": [
      {
        "reactionBody": "😀",
        "username": "John"
      },
      {
        "reactionBody": "😊",
        "username": "Bob"
      }
    ]
  },
  {
    "thoughtText": "I just finished reading a great book",
    "createdAt": "2023-02-16T15:40:00.000Z",
    "name": "Bob",
    "reactions": [
      {
        "reactionBody": "📚",
        "username": "John"
      },
      {
        "reactionBody": "😍",
        "username": "Alice"
      }
    ]
  }
]



// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomName = () =>
  `${getRandomArrItem(names)}`;

// Get random email
const getRandomEmail = () => `${getRandomArrItem(emails)}`;

// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomEmail };

