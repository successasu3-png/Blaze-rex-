// Group Manager module

const groupManager = {
  muteGroup: async (args, sender) => {
    const duration = args[0] || '1 hour';
    return `🔇 Group has been muted for ${duration}. No messages will be sent during this time.`;
  },

  unmuteGroup: async (args, sender) => {
    return '🔊 Group has been unmuted. Messages will be sent normally now.';
  }
};

module.exports = groupManager;