# 🚀 Blaze Rex Setup Guide

Follow this step-by-step guide to get your WhatsApp bot (Blaze Rex) up and running!

## Step 1: Repository Created ✅

Your repository `Blaze-rex-` has been created successfully!

## Step 2: Clone and Setup Locally

```bash
# Clone the repository
git clone https://github.com/successasu3-png/Blaze-rex-.git
cd Blaze-rex-

# Install dependencies
npm install

# Create .env file
cp .env.example .env
```

## Step 3: Get Twilio Credentials

1. **Create a Twilio Account**
   - Go to [twilio.com/try-twilio](https://www.twilio.com/try-twilio)
   - Sign up for free (includes $15 credit)

2. **Get Your Credentials**
   - Go to [Twilio Console](https://www.twilio.com/console)
   - Copy your **Account SID**
   - Copy your **Auth Token**

3. **Set Up WhatsApp**
   - In Twilio Console, go to: **Messaging → WhatsApp**
   - Click "Get Started"
   - Join the WhatsApp Sandbox or create Business Account

4. **Get WhatsApp Number**
   - Your WhatsApp number will look like: `whatsapp:+1234567890`
   - Copy it

## Step 4: Configure Environment Variables

Edit your `.env` file:

```env
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=your_auth_token_here
TWILIO_WHATSAPP_NUMBER=whatsapp:+1234567890
PORT=3000
NODE_ENV=development
BOT_PREFIX=!
```

## Step 5: Test Locally

### Option A: Using ngrok (Easiest for testing)

1. **Download ngrok** from [ngrok.com](https://ngrok.com)

2. **Run your bot**
```bash
npm run dev
```

3. **In another terminal, start ngrok**
```bash
ngrok http 3000
```

You'll see something like:
```
Forwarding    https://abc123def456.ngrok.io -> http://localhost:3000
```

4. **Set Webhook in Twilio**
   - Go to Twilio Console → Messaging → WhatsApp
   - Find your Sandbox (or Business Account)
   - Set Webhook URL: `https://abc123def456.ngrok.io/whatsapp`
   - Method: POST
   - Save

5. **Test the Bot**
   - Send a message to the WhatsApp number
   - Try commands like `!help`, `!ping`, `!truth`

### Option B: Using Localhost (Advanced)

If you want to expose your local machine directly, use tunneling software like:
- Localtunnel
- Serveo
- Cloudflare Tunnel

## Step 6: Deploy to Production

### Option A: Deploy to Railway (Recommended for Beginners)

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial commit: Blaze Rex WhatsApp bot setup"
git push origin main
```

2. **Go to [Railway.app](https://railway.app)**
   - Sign up with GitHub
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Select your `Blaze-rex-` repository

3. **Add Environment Variables**
   - In Railway dashboard, go to Variables
   - Add all your `.env` variables:
     - TWILIO_ACCOUNT_SID
     - TWILIO_AUTH_TOKEN
     - TWILIO_WHATSAPP_NUMBER
     - PORT
     - BOT_PREFIX

4. **Get Your Railway URL**
   - Railway will generate a URL like: `https://blaze-rex-production-xxxxx.railway.app`
   - Copy this URL

5. **Update Twilio Webhook**
   - Go to Twilio Console
   - Set Webhook URL: `https://blaze-rex-production-xxxxx.railway.app/whatsapp`
   - Save

### Option B: Deploy to Heroku

1. **Install Heroku CLI**
```bash
npm install -g heroku
```

2. **Login to Heroku**
```bash
heroku login
```

3. **Create Heroku App**
```bash
heroku create blaze-rex
```

4. **Set Environment Variables**
```bash
heroku config:set TWILIO_ACCOUNT_SID=your_sid
heroku config:set TWILIO_AUTH_TOKEN=your_token
heroku config:set TWILIO_WHATSAPP_NUMBER=whatsapp:+1234567890
```

5. **Deploy**
```bash
git push heroku main
```

6. **Get Your URL** and update Twilio webhook

### Option C: Deploy to AWS Lambda

1. Use [Serverless Framework](https://www.serverless.com/)
2. More complex but highly scalable
3. Check AWS documentation for detailed steps

## Step 7: Start Using Your Bot!

### Test These Commands

```
!help          - Show all commands
!ping          - Test if bot is working
!truth         - Get a truth question
!dare          - Get a dare challenge
!riddle        - Get a riddle
!confess Hello - Submit a confession
!confessions   - View all confessions
!notify Hello  - Send a notification
!mute          - Mute the group
!unmute        - Unmute the group
```

## Troubleshooting

### Bot Not Responding?

1. **Check if bot is running**
   ```bash
   curl http://localhost:3000/health
   ```

2. **Check logs**
   - Look at your terminal output
   - Check ngrok/Railway logs

3. **Verify Webhook URL**
   - Go to Twilio Console
   - Check webhook URL is correct and accessible
   - Make sure it's HTTPS (not HTTP)

4. **Check Twilio Logs**
   - Go to Twilio Console → Monitor → Logs
   - Look for error messages

### Webhook Errors?

1. Make sure your bot server is running
2. Check that your firewall isn't blocking requests
3. Verify URL is publicly accessible (ngrok/Railway)
4. Check POST method is selected in Twilio

### Commands Not Working?

1. Make sure message starts with `!`
2. Check command spelling
3. Use `!help` to see all commands
4. Look at bot logs for errors

## Next Steps

1. **Add More Games** - Edit `src/modules/games.js`
2. **Add Database** - Integrate MongoDB or Firebase
3. **Add Features** - Create new modules for custom features
4. **Invite Users** - Share WhatsApp number with friends
5. **Monitor Usage** - Check Twilio logs and usage

## Useful Links

- **Twilio Docs**: https://www.twilio.com/docs/whatsapp
- **GitHub**: https://github.com
- **Railway**: https://railway.app
- **Heroku**: https://www.heroku.com
- **ngrok**: https://ngrok.com

## Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| 401 Unauthorized | Check Account SID and Auth Token |
| 404 Not Found | Check webhook URL is correct |
| Message not sending | Verify WhatsApp number format |
| Bot not responding | Check if server is running and webhook is set |
| Commands not working | Make sure message starts with `!` |

---

**Congratulations! Your Blaze Rex WhatsApp bot is ready! 🎉**

Start by testing commands and then customize it to your needs!
