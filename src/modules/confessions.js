// Confessions module

const confessionsStore = [];

const confessions = {
  submitConfession: async (args, sender) => {
    if (args.length === 0) {
      return '📝 Please provide your confession. Example: !confess I ate the last cookie';
    }

    const confession = args.join(' ');
    const timestamp = new Date().toLocaleString();

    confessionsStore.push({
      text: confession,
      sender: sender,
      timestamp: timestamp
    });

    return `✅ Your confession has been submitted anonymously! 🤐`;
  },

  getConfessions: async (args, sender) => {
    if (confessionsStore.length === 0) {
      return '📋 No confessions yet. Be the first to !confess something!';
    }

    let confessionList = '📋 *Recent Confessions:*\n\n';
    const recentConfessions = confessionsStore.slice(-5);

    recentConfessions.forEach((conf, index) => {
      confessionList += `${index + 1}. "${conf.text}"\n   _${conf.timestamp}_\n\n`;
    });

    confessionList += `Total confessions: ${confessionsStore.length}`;
    return confessionList;
  }
};

module.exports = confessions;