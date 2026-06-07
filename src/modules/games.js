// Games module

const games = {
  startGame: async (args, sender) => {
    return '🎮 Starting a random game... Try commands like !truth, !dare, !riddle, or !trivia';
  },

  truthOrDare: async (args, sender) => {
    const truths = [
      'What\'s your biggest fear?',
      'Have you ever lied to your best friend?',
      'What\'s something you\'ve never told anyone?',
      'What would you do if nobody would judge you?',
      'What\'s your guilty pleasure?'
    ];

    const dares = [
      'Send a funny selfie to the group',
      'Call someone and compliment them',
      'Do 20 push-ups and send a video',
      'Text someone you haven\'t spoken to in a year',
      'Sing the national anthem out loud'
    ];

    const isTruth = Math.random() > 0.5;
    const item = isTruth ? truths[Math.floor(Math.random() * truths.length)] : dares[Math.floor(Math.random() * dares.length)];
    const label = isTruth ? '❓ Truth' : '🎯 Dare';

    return `${label}: ${item}`;
  },

  riddle: async (args, sender) => {
    const riddles = [
      'I have cities but no houses, forests but no trees. What am I? (Answer: A map)',
      'The more you take, the more you leave behind. What am I? (Answer: Footsteps)',
      'I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I? (Answer: An echo)',
      'What has a head and a tail but no body? (Answer: A coin)',
      'I am taken from a mine and shut up in a wooden case, from which I am never released, yet I am used by almost everyone. What am I? (Answer: Pencil lead)'
    ];

    const riddle = riddles[Math.floor(Math.random() * riddles.length)];
    return `🤔 ${riddle}`;
  },

  wouldYouRather: async (args, sender) => {
    const questions = [
      'Would you rather: Have the ability to fly or be invisible?',
      'Would you rather: Live in a world with no music or no movies?',
      'Would you rather: Always be 10 minutes late or 20 minutes early?',
      'Would you rather: Have free WiFi everywhere or free food everywhere?',
      'Would you rather: Speak all languages fluently or play all instruments?'
    ];

    const question = questions[Math.floor(Math.random() * questions.length)];
    return `🤷 ${question}`;
  },

  trivia: async (args, sender) => {
    const questions = [
      'What is the capital of France? (A: Paris)',
      'What is the largest planet in our solar system? (A: Jupiter)',
      'In what year did the Titanic sink? (A: 1912)',
      'What is the smallest country in the world? (A: Vatican City)',
      'How many sides does a hexagon have? (A: 6)'
    ];

    const question = questions[Math.floor(Math.random() * questions.length)];
    return `🧠 Trivia: ${question}`;
  },

  neverHaveIEver: async (args, sender) => {
    const statements = [
      'Never have I ever... skipped a class/meeting',
      'Never have I ever... told a lie to my parents',
      'Never have I ever... danced in the rain',
      'Never have I ever... cheated on a test',
      'Never have I ever... sung in the shower'
    ];

    const statement = statements[Math.floor(Math.random() * statements.length)];
    return `🙅 ${statement}`;
  },

  jokeOfTheDay: async (args, sender) => {
    const jokes = [
      'Why don\'t scientists trust atoms? Because they make up everything!',
      'What do you call a fake noodle? An impasta!',
      'Why did the scarecrow win an award? He was outstanding in his field!',
      'What do you call a bear with no teeth? A gummy bear!',
      'Why don\'t eggs tell jokes? They\'d crack each other up!'
    ];

    const joke = jokes[Math.floor(Math.random() * jokes.length)];
    return `😂 ${joke}`;
  },

  guessTheQuote: async (args, sender) => {
    const quotes = [
      '"The only way to do great work is to love what you do." - Who said this?',
      '"In the middle of difficulty lies opportunity." - Who said this?',
      '"Life is what happens when you\'re busy making other plans." - Who said this?',
      '"The future belongs to those who believe in the beauty of their dreams." - Who said this?',
      '"It is during our darkest moments that we must focus to see the light." - Who said this?'
    ];

    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    return `💭 ${quote}`;
  },

  guessAnimeCharacter: async (args, sender) => {
    const characters = [
      'I\'m a protagonist from Death Note who has a notebook that can kill people. Who am I?',
      'I\'m from My Hero Academia and I\'m known for my powerful quirk and spiky hair. Who am I?',
      'I\'m from Naruto and I want to become Hokage. Who am I?',
      'I\'m from Attack on Titan and I can turn into a Titan. Who am I?',
      'I\'m from One Piece and I want to become King of the Pirates. Who am I?'
    ];

    const character = characters[Math.floor(Math.random() * characters.length)];
    return `🎌 ${character}`;
  },

  twentyQuestions: async (args, sender) => {
    return '🤔 Think of something (animal, person, or object). I\'ll try to guess it in 20 questions! (Feature coming soon)';
  },

  wordAssociation: async (args, sender) => {
    const words = ['Blue', 'Happy', 'Ocean', 'Music', 'Dream', 'Fire', 'Mountain', 'River', 'Sunset', 'Thunder'];
    const word = words[Math.floor(Math.random() * words.length)];
    return `🔤 Word Association: I say "${word}", you reply with the first word that comes to mind!`;
  }
};

module.exports = games;