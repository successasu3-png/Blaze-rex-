const games = require('../modules/games');
const confessions = require('../modules/confessions');
const notifications = require('../modules/notifications');
const groupManager = require('../managers/groupManager');

const PREFIX = process.env.BOT_PREFIX || '!';

const commands = {
  'help': handleHelp,
  'game': games.startGame,
  'truth': games.truthOrDare,
  'dare': games.truthOrDare,
  'riddle': games.riddle,
  'wyr': games.wouldYouRather,
  'trivia': games.trivia,
  'nhie': games.neverHaveIEver,
  'joke': games.jokeOfTheDay,
  'quote': games.guessTheQuote,
  'anime': games.guessAnimeCharacter,
  '20q': games.twentyQuestions,
  'word': games.wordAssociation,
  'confess': confessions.submitConfession,
  'confessions': confessions.getConfessions,
  'notify': notifications.sendNotification,
  'mute': groupManager.muteGroup,
  'unmute': groupManager.unmuteGroup,
  'ping': handlePing,
};

async function handleCommand(message, sender) {
  const trimmedMessage = message.trim();

  // Check if message starts with prefix
  if (!trimmedMessage.startsWith(PREFIX)) {
    return handlePlainMessage(trimmedMessage, sender);
  }

  // Parse command
  const parts = trimmedMessage.slice(PREFIX.length).split(' ');
  const command = parts[0].toLowerCase();
  const args = parts.slice(1);

  if (commands[command]) {
    return await commands[command](args, sender);
  }

  return `❓ Command not found. Type *${PREFIX}help* to see available commands.`;
}

async function handleHelp() {
  return `
🤖 *WhatsApp Bot Commands*

*🎮 Games:*
${PREFIX}truth - Get a truth question
${PREFIX}dare - Get a dare challenge
${PREFIX}riddle - Get a riddle to solve
${PREFIX}wyr - Would you rather question
${PREFIX}trivia - Answer a trivia question
${PREFIX}nhie - Never have I ever
${PREFIX}joke - Get a funny joke
${PREFIX}quote - Guess the quote
${PREFIX}anime - Guess the anime character 🎌
${PREFIX}20q - 20 questions game
${PREFIX}word - Word association game
${PREFIX}game - Start a random game

*📝 Confessions:*
${PREFIX}confess <message> - Submit a confession
${PREFIX}confessions - View all confessions

*📢 Notifications:*
${PREFIX}notify <message> - Send a notification

*🎛️ Group Management:*
${PREFIX}mute - Mute group
${PREFIX}unmute - Unmute group

*General:*
${PREFIX}ping - Check if bot is alive
${PREFIX}help - Show this help message
  `;
}

async function handlePing() {
  return '🏓 Pong! Bot is working.';
}

async function handlePlainMessage(message, sender) {
  // Handle responses to games or other interactive features
  return `💬 Message received: "${message}"

Use *${PREFIX}help* to see available commands.`;
}

module.exports = {
  handleCommand
};
