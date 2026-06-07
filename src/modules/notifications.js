// Notifications module

const notifications = {
  sendNotification: async (args, sender) => {
    if (args.length === 0) {
      return '🔔 Please provide a notification message. Example: !notify Everyone join the game!';
    }

    const message = args.join(' ');
    const notificationText = `🔔 *NOTIFICATION from ${sender}:*\n\n${message}\n\n_Sent at ${new Date().toLocaleTimeString()}_`;

    return notificationText;
  }
};

module.exports = notifications;