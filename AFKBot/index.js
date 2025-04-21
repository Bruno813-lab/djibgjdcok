const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'CardCraft.aternos.me',
  port: 60232,
  username: 'AFKBot',
  version: '1.12.1'
});

bot.on('spawn', () => {
  console.log('Bot AFK conectado com sucesso!');
  setInterval(() => {
    bot.setControlState('jump', true);
    setTimeout(() => bot.setControlState('jump', false), 500);
  }, 10 * 1000);
});

bot.on('end', () => {
  console.log('Bot desconectado. Reconectando...');
  setTimeout(() => process.exit(), 5000);
});