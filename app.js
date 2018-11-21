const { Client, Util } = require('discord.js');
const Discord = require('discord.js');
var consign = require('consign');
const youtubeAPI = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const queue = new Map();


const client = new Discord.Client({ disableEveryone: true});


// token do youtube api v3.0
var tokenAPI = 'AIzaSyAU99WnDUEIwShY4hb7snW8pkIqqJDCzpQ';

// webHook do Bot
var idWebHook = "485199211609194516";
var tokenWebHook = "zvmaJxwIaP2XFnZ93GgevP8hi8_pAdMXVIdKaFnaOFnvNLW0P0Jtm5e93b0KbkWUOJ2j";
var tokenWelcome = "ar88cmFxqwg3PElhcT0uIj7xdZc8IiT9FGjyMLVo2KziEoA41nCy_HWJ_hjzSSDeih0x";
var idWelcome = "485487560143929346";
// -----------------------------

const youtube = new youtubeAPI(tokenAPI)
const hook = new Discord.WebhookClient(idWebHook, tokenWebHook);
const hookWelcome = new Discord.WebhookClient( idWelcome ,tokenWelcome);
// token do bot
var tokenDoBot = "NDcxMzAyNzI4ODI0Mzg5NjMy.Dji_2A.z-YosraiYxfmKqfOtcOgSpI5kzg";



consign().include('./Client').into(client, hookWelcome);

var inicializeCommand = require('./config/prefix');
// comandos
var prefix = ":";

inicializeCommand(client, consign, prefix, hook, youtube, ytdl, Util, queue);

client.login(tokenDoBot)

                                           
