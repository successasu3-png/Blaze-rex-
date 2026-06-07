// In-memory storage for notifications
let notifications = [];

async function sendNotification(args, sender) {
  const message = args.join(' ');
  
  if (!message) {
    return '❌ Please provide a notification message.

Usage: *!notify <message>*';
  }

  const notification = {
    id: Date.now(),
    message: message,
    sender: sender,
    timestamp: new Date(),
    read: false
  };

  notifications.push(notification);

  return `📢 *Notification sent!*

"${message}"

✅ This notification has been logged and can be viewed later.`;
}

async function getNotifications(args, sender) {
  if (notifications.length === 0) {
    return '📭 No notifications yet.';
  }

  let message = '📬 *Recent Notifications:*

';
  
  notifications.slice(-10).forEach((notif, index) => {
    const time = new Date(notif.timestamp).toLocaleTimeString();
    message += `${index + 1}. ${notif.message}
   _(${time})_

`;
  });

  return message;
}

async function clearNotifications(args, sender) {
  const count = notifications.length;
  notifications = [];
  return `🗑️ Cleared ${count} notifications.`;
}

module.exports = {
  sendNotification,
  getNotifications,
  clearNotifications,
  getAllNotifications: () => notifications
};
