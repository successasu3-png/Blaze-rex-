# 🤖 Blaze Rex - WhatsApp Bot

A feature-rich WhatsApp bot built with Node.js and Twilio that includes games, confessions, notifications, and group management features.

## Features

✨ **Games**
- Truth or Dare
- Riddles
- More games coming soon!

📝 **Confessions**
- Submit anonymous confessions
- View all confessions in the group

📢 **Notifications**
- Send notifications to the group
- View notification history

🎛️ **Group Management**
- Mute/Unmute group
- Group status
- More management features coming soon

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Twilio Account (free trial available at [twilio.com](https://www.twilio.com))
- WhatsApp Business Account or Twilio WhatsApp Sandbox

## Installation

1. **Clone the repository**
```bash
git clone https://github.com/successasu3-png/Blaze-rex-.git
cd Blaze-rex-
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env
```

Edit `.env` and add your Twilio credentials:
```
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_WHATSAPP_NUMBER=whatsapp:+1234567890
PORT=3000
BOT_PREFIX=!
```

4. **Get Twilio Credentials**
   - Go to [Twilio Console](https://www.twilio.com/console)
   - Copy your Account SID and Auth Token
   - Set up WhatsApp Sandbox or Business Account

## Running the Bot

### Development
```bash
npm run dev
```

### Production
```bash
npm start
```

The bot will start on `http://localhost:3000`

## Setting Up Webhooks

1. **Get your webhook URL** (use ngrok for local testing):
```bash
ngrok http 3000
```

2. **Configure Twilio Webhook**
   - Go to Twilio Console → Messaging → WhatsApp
   - Set your Webhook URL to: `https://your-url.ngrok.io/whatsapp`
   - Select POST method

3. **Test the bot**
   - Send a message to your Twilio WhatsApp number
   - Bot should respond

## Commands

### Games
- `!truth` - Get a truth question
- `!dare` - Get a dare challenge
- `!riddle` - Get a riddle to solve
- `!game` - Start a random game

### Confessions
- `!confess <message>` - Submit an anonymous confession
- `!confessions` - View all confessions

### Notifications
- `!notify <message>` - Send a notification to the group

### Group Management
- `!mute` - Mute the group
- `!unmute` - Unmute the group

### General
- `!help` - Show all commands
- `!ping` - Check if bot is alive

## Project Structure

```
Blaze-rex-/
├── index.js                 # Main bot file
├── package.json            # Dependencies
├── .env.example            # Environment variables template
├── .gitignore              # Git ignore file
├── README.md               # This file
└── src/
    ├── handlers/
    │   └── commandHandler.js    # Command processing
    ├── modules/
    │   ├── games.js            # Game logic
    │   ├── confessions.js       # Confession system
    │   └── notifications.js     # Notification system
    └── managers/
        └── groupManager.js      # Group management
```

## Adding New Features

### Adding a New Game

Edit `src/modules/games.js`:

```javascript
const wouldYouRatherQuestions = [
  'Would you rather be able to fly or be invisible?',
  // Add more questions
];

async function wouldYouRather(args, sender) {
  const question = getRandomItem(wouldYouRatherQuestions);
  return `🎭 *Would You Rather:*

${question}`;
}
```

Then add to commands in `src/handlers/commandHandler.js`:

```javascript
const commands = {
  // ... existing commands
  'wyr': games.wouldYouRather,
};
```

### Adding a New Command

1. Create your logic in appropriate module
2. Add command to `commands` object in `commandHandler.js`
3. Test it!

## Database Integration (Optional)

Currently, the bot uses in-memory storage. For production, integrate with:

- **MongoDB** - For cloud database
- **Firebase** - For real-time database
- **PostgreSQL** - For relational database

Update the respective modules to use your database.

## Deployment

### Deploy to Heroku

1. **Create a Heroku app**
```bash
heroku create your-app-name
```

2. **Set environment variables**
```bash
heroku config:set TWILIO_ACCOUNT_SID=xxx
heroku config:set TWILIO_AUTH_TOKEN=xxx
heroku config:set TWILIO_WHATSAPP_NUMBER=whatsapp:+xxx
```

3. **Deploy**
```bash
git push heroku main
```

### Deploy to Other Platforms

- Railway
- Render
- AWS Lambda
- Google Cloud Functions

## Troubleshooting

### Bot not receiving messages
- Check webhook URL in Twilio Console
- Verify ngrok tunnel is running
- Check bot logs for errors

### Commands not working
- Ensure message starts with `!`
- Check command spelling
- Use `!help` to see all commands

### Twilio errors
- Verify Account SID and Auth Token
- Check WhatsApp Business Account approval
- Verify webhook URL format

## Contributing

Feel free to submit issues and pull requests!

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Support

For issues or questions:
- Check Twilio documentation: [docs.twilio.com](https://docs.twilio.com)
- Open an issue on GitHub
- Contact Twilio support

## Roadmap

- [ ] Database integration
- [ ] User profiles and stats
- [ ] Leaderboards
- [ ] More games
- [ ] Advanced group management
- [ ] Media handling (images, videos)
- [ ] Voice message support
- [ ] Admin commands
- [ ] Rate limiting
- [ ] Message scheduling

---

**Made with ❤️ for WhatsApp automation**
