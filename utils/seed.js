
const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomName, getRandomEmail } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing users

  await User.deleteMany({});

  // Drop existing thoughts

  await Thought.deleteMany({});

  // Create empty array to hold the users

  const users = [];

  // Loop 20 times -- add users to the users array

  for (let i = 0; i < 20; i++) {
    const name = getRandomName(20);
    const email = getRandomEmail(20);

    users.push({
      name,
      email,
    });
  }

  // Add users to the collection and await the results

  const newUsers = await User.insertMany(users);


  console.table(newUsers);
  console.info('Successful Seeding!');
  process.exit(0);
});

