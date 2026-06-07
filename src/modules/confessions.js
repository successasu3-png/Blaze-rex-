// In-memory storage for confessions (replace with database in production)
let confessions = [];

async function submitConfession(args, sender) {
  const confession = args.join(' ');
  
  if (!confession) {
    return '❌ Please provide a confession.

Usage: *!confess <your confession>*';
  }

  const confessionObj = {
    id: Date.now(),
    text: confession,
    sender: sender,
    timestamp: new Date(),
    anonymous: true
  };

  confessions.push(confessionObj);

  return `✅ Your confession has been submitted anonymously!

💬 "${confession}"

Use *!confessions* to view all confessions.`;
}

async function getConfessions(args, sender) {
  if (confessions.length === 0) {
    return '📝 No confessions yet. Be the first to confess using *!confess <message>*';
  }

  let message = '📝 *All Confessions:*

';
  
  confessions.slice(-10).forEach((conf, index) => {
    message += `${index + 1}. "${conf.text}"
`;
  });

  message += `
_Total confessions: ${confessions.length}_`;
  
  return message;
}

async function clearConfessions(args, sender) {
  const count = confessions.length;
  confessions = [];
  return `🗑️ Cleared ${count} confessions.`;
}

module.exports = {
  submitConfession,
  getConfessions,
  clearConfessions,
  getAllConfessions: () => confessions
};
