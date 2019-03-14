const { Client, Util } = require('discord.js');
const Discord = require('discord.js');
var consign = require('consign');
const youtubeAPI = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const queue = new Map();

const client = new Discord.Client({ disableEveryone: true});


// token do youtube api v3.0
var tokenAPI = 'Token api simple-youtube-api';

// webHook do Bot
var tokenWelcome = "token webhook de dar boas vindas";
var idWelcome = "id do webhook de dar boas vindas";
// -----------------------------

const youtube = new youtubeAPI(tokenAPI) // instancia da api do youtube
const hookWelcome = new Discord.WebhookClient( idWelcome ,tokenWelcome); // instancia da webhook


// token do bot
var tokenDoBot = "token do bot"; // token do bot



consign().include('./Client').into(client, hookWelcome);

var inicializeCommand = require('./config/prefix');
// comandos
var prefix = ":";

inicializeCommand(client, consign, prefix,  youtube, ytdl, Util, queue);

client.login(tokenDoBot)

                                           
