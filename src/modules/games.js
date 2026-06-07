const truthQuestions = [
  'What is your biggest fear?',
  'What is your biggest regret?',
  'What is the most embarrassing thing that has happened to you?',
  'What would you do if nobody would ever know?',
  'What is your deepest secret?',
  'Would you rather have a horrible memory or bad eyesight?',
  'What is the most terrible advice you have ever given?',
  'What is something you do that you do not want anyone to know about?',
  'What would you do if you could get away with it?',
  'Have you ever lied to get out of trouble?',
];

const dares = [
  'Send a message to a contact saying "I love you" with no explanation',
  'Change your profile picture to something funny for a week',
  'Text your crush and tell them a joke',
  'Call someone and sing them a song',
  'Post a selfie doing something silly',
  'Share an embarrassing photo from your phone',
  'Write and share a poem about your life',
  'Do 20 pushups and take a video',
  'Mimic someone in the group for 5 minutes',
  'Speak in an accent for the next 10 messages',
];

const riddles = [
  {
    question: 'What has hands but cannot clap?',
    answer: 'A clock'
  },
  {
    question: 'What gets wet while drying?',
    answer: 'A towel'
  },
  {
    question: 'What can travel around the world while staying in a corner?',
    answer: 'A stamp'
  },
  {
    question: 'What has a head and a tail but no body?',
    answer: 'A coin'
  },
  {
    question: 'What is seen in the middle of March and April that cannot be seen at the beginning or end of either month?',
    answer: 'The letter R'
  },
  {
    question: 'What has cities, but no houses; forests, but no trees; and water, but no fish?',
    answer: 'A map'
  },
  {
    question: 'What question can you never answer yes to?',
    answer: 'Are you asleep?'
  },
  {
    question: 'What can you catch but not throw?',
    answer: 'A cold'
  },
];

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

async function truthOrDare(args, sender) {
  const choice = args[0]?.toLowerCase();
  
  if (choice === 'truth' || sender.includes('truth')) {
    const question = getRandomItem(truthQuestions);
    return `🎭 *Truth Question:*

${question}`;
  } else {
    const dare = getRandomItem(dares);
    return `🎯 *Dare:*

${dare}`;
  }
}

async function riddle(args, sender) {
  const riddleData = getRandomItem(riddles);
  return `🧩 *Riddle:*

${riddleData.question}

_(Reply with your answer)_`;
}

async function startGame(args, sender) {
  const games = ['Truth or Dare', 'Riddle', 'Would You Rather'];
  const randomGame = getRandomItem(games);
  return `🎮 *Starting Game: ${randomGame}*

Use ${process.env.BOT_PREFIX || '!'}truth, ${process.env.BOT_PREFIX || '!'}dare, or ${process.env.BOT_PREFIX || '!'}riddle to play!`;
}

module.exports = {
  truthOrDare,
  riddle,
  startGame
};
