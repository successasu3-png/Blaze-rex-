require('dotenv').config();
const express = require('express');
const twilio = require('twilio');
const commandHandler = require('./src/handlers/commandHandler');
const groupManager = require('./src/managers/groupManager');

const app = express();
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

app.use(express.urlencoded({ extended: false }));

// Webhook for receiving WhatsApp messages
app.post('/whatsapp', async (req, res) => {
  const incomingMessage = req.body.Body;
  const senderNumber = req.body.From;
  const messageId = req.body.MessageSid;

  console.log(`Message from ${senderNumber}: ${incomingMessage}`);

  try {
    // Process the command
    const response = await commandHandler.handleCommand(incomingMessage, senderNumber);
    
    // Send response back to user
    await client.messages.create({
      body: response,
      from: process.env.TWILIO_WHATSAPP_NUMBER,
      to: senderNumber
    });

  } catch (error) {
    console.error('Error processing message:', error);
    await client.messages.create({
      body: '❌ An error occurred. Please try again.',
      from: process.env.TWILIO_WHATSAPP_NUMBER,
      to: senderNumber
    });
  }

  res.status(200).send('OK');
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'Bot is running' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🤖 WhatsApp Bot running on port ${PORT}`);
});
