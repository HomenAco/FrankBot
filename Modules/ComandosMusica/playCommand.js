module.exports = async function (client, comando, args, message, hook, youtube, ytdl, Util, queue)
{

  
    const voiceChannel = message.member.voiceChannel;
    const serverQueue = queue.get(message.guild.id);
    const searchString = args.slice().join(' ');
    const searchPlay = args.join(" ").slice();

    const url = searchPlay ? searchPlay.replace(/<(.+)>/g, '$1') : '';

    if(comando == "play")
    {
        try{

        const comandos_musica = client.channels.find(ch => ch.id === '489941188418207748');

        if (message.channel.id != '489941188418207748') 
        {
        message.channel.send({
            embed:
            {
                color: 0xB22222,
                description: `${message.author}, Comando disponível somente na sala ${comandos_musica}!`
            }
        }).then(msg => msg.delete(5000));
    }
    else{
         if (!message.member.voiceChannel) return message.channel.send('Você não está no canal');
    if(!args[0]) return message.channel.send({embed:
    {
        color: 0xB22222,
        description: `${message.author}, informe uma música que deseja tocar!`
    }});
    


     if(!voiceChannel) return message.channel.send({
         embed:{
             color: 0xB22222,
             description: `${message.author}, você não está em uma das salas de música 01, 02 , 03`
         }
     });

     const permissoes = voiceChannel.permissionsFor(message.client.user);

        if (!permissoes.has("CONNECT")) return message.channel.send({
            embed: {
                color: 0xB22222,
                description: `${message.author}, Eu não possuo permissão para me conectar neste canal :/`
            }
        });

        if (!permissoes.has("SPEAK")) return message.channel.send({
            embed: {
                color: 0xB22222,
                description: `${message.author}, Não possuo permissão de tocar música neste canal :/`
            }
        });

       
            if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/))
            {
                const playlist = await youtube.getPlaylist(url);
                const videos = await playlist.getVideos();
            
                for(const video of Object.values(videos))
                {
                    const video2 = await youtube.getVideoByID(video.id);
                    await handleVideo(video2, message, voiceChannel, true);
                }
               return  message.channel.send(`Playlist adicionada : ${playlist.title}`);
                
            }
            else
            {
                try {

                    var video = await youtube.getVideo(url);
                } catch (error) {
                    try {
                        var videos = await youtube.searchVideos(url, 1);
                        var video = await youtube.getVideoByID(videos[0].id);
                    } catch (error) {
                        return message.channel.send({
                            embed: {
                                color: 0xB22222,
                                description: `${message.author},Desculpe, mas não foi obetido nenhum resultado sobre o que você procura`
                            }
                        });
                    }
                }
                return handleVideo(video, message, voiceChannel);   
            }
 
      
    }
    }catch (error)
    {
            mensagem.channel.send({
                embed: {
                    description: `erro ao tentar tocar esta música :/.`,
                    color: 0xB22222,

                }
            });
    }
}


    if(comando == "pular")
    {

        if (!message.member.voiceChannel) return message.channel.send('Você não está no canal');
        if (!serverQueue) return message.channel.send({
            embed: {
                color: 0xe50f0f,
                description: `${message.author}, Estou tocando nenhuma música!`
            }
        });
        serverQueue.connection.dispatcher.end('Comando de pular foi usado!');
      
        return message.channel.send({
            embed:{
                color: 0x2de50f,
                description: `${message.author}, Música foi pulada com sucesso!`
            }
        });
        
       
    }

    if(comando == "tocando")
    {

        if (!serverQueue) return message.channel.send({
            embed: {
                color: 0xB22222,
                description: `${message.author}, Estou tocando nenhuma música`
            }
        });

        return message.channel.send({
            embed: {
                color: 0x2de50f,
                description: `${message.author}, Tocando agora: ${serverQueue.songs[0].title}`
            }
        });
    }


    if (comando === 'parar') {
        if (!message.member.voiceChannel) return message.channel.send('Você não está no canal');
        if (!serverQueue) return message.channel.send({
            embed: {
                color: 0xB22222,
                description: `${message.author}, Estou tocando nenhuma música`
            }
        });
        if (!message.member.voiceChannel) return message.channel.send({
            embed: {
                color: 0xB22222,
                description: `${message.author}, Estou tocando nenhuma música`
            }
        });
        serverQueue.songs = [];
        serverQueue.connection.dispatcher.end();
        message.channel.send({
            embed: {
                color: 0x2de50f,
                description: `${message.author}, parado com sucesso`
            }
        });
    }

    if(comando == "volume"){
        if (!message.member.voiceChannel) return message.channel.send({
            embed: {
                color: 0xB22222,
                description: `${message.author}, Você não está no canal`
            }
        });
        if (!serverQueue) return message.channel.send({
            embed: {
                color: 0xB22222,
                description: `${message.author}, Estou tocando nenhuma música`
            }
        });
        serverQueue.volume = args[0];
        if (!args[0]) return message.channel.send({
            embed: {
                color: 0xB22222,
                description: `${message.author},Parâmetro inválido \`volume atual: ${serverQueue.volume}\``
            }
        });

       if (args[0] > 10) return message.channel.send({
            embed: {
                color: 0xB22222,
                description: `${message.author}, È permitido volume de 1 ao 10`
            }
        });
       
        message.channel.send({
            embed: {
                color: 0x2de50f,
                description: `${message.author}, Volume setada para ${args[0]}`
            }
        });
        serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 5)

        
    }

    if(comando == "fila")
    {
        if (!serverQueue) return message.channel.send({
            embed: {
                color: 0xB22222,
                description: `${message.author}, Estou tocando nenhuma música`
            }
        });
        message.channel.send({
            embed: {
                author: {
                    name: message.author.username,
                    icon_url: message.author.avatarURL
                },
                color: 0x2de50f,
                title: `Fila de músicas em espera`,
                description: `${serverQueue.songs.map(song => `${song.title}`).join(`\n`)}`,
            fields:[{
                name: "Tocando agora:",
                value: `${serverQueue.songs[0].title}`
            }]
        }});
    }

    if(comando == "pausar")
    {
        if (!message.member.voiceChannel) return message.channel.send({
            embed: {
                color: 0xB22222,
                description: `${message.author}, Você não está no canal`
            }
        });
        if (!serverQueue && !serverQueue.playing) return message.channel.send({
            embed: {
                color: 0xB22222,
                description: `${message.author},  Estou tocando nenhuma música`
            }
        });
        serverQueue.connection.dispatcher.pause();
        serverQueue.playing = false;
        return message.channel.send({
            embed: {
                color: 0x2de50f,
                description: `${message.author}, música pausada.`
            }
        });


    }

    if(comando == "continuar")
    {
        if (!message.member.voiceChannel) return message.channel.send({
            embed: {
                color: 0xB22222,
                description: `${message.author}, Você não está no canal`
            }
        });
        if (!serverQueue) return message.channel.send({
            embed: {
                color: 0xB22222,
                description: `${message.author},  Estou tocando nenhuma música`
            }
        });
        serverQueue.connection.dispatcher.resume();
        serverQueue.playing = true;
        return message.channel.send({
            embed: {
                color: 0x2de50f,
                description: `${message.author}, música sendo continuada...`
            }
        });

    }

    // função de tocar
async function handleVideo(video, message, voiceChannel, playlist = false )
{
    const serverQueue = queue.get(message.guild.id)
    const song = {
        id: video.id,
        title: Util.escapeMarkdown(video.title),
        url: `https://www.youtube.com/watch?v=${video.id}`,

    };



    if (!serverQueue) {
        const queueConstruct = {
            textChannel: message.channel,
            voiceChannel: voiceChannel,
            connection: null,
            songs: [],
            volume: 5,
            playing: true
        };
        queue.set(message.guild.id, queueConstruct);
        queueConstruct.songs.push(song);
        try {
            var connection = await voiceChannel.join();
            queueConstruct.connection = connection;
            play(message.guild, queueConstruct.songs[0]);
        } catch (error) {
            queue.delete(message.guild.id);
            console.log(`Eu não posso me conectar no canal ${error}`);
            console.error(error);
        }

    }
    else {
        serverQueue.songs.push(song);
        message.delete();
        if(playlist) return undefined;
         else return message.channel.send(`${message.author} \`${song.title}\` foi adicionado a fila!`);
    
    return undefined;
    }
}
   function play(guild, song)
   {
    const serverQueue = queue.get(guild.id);

        if(!song)
        {
     
            serverQueue.voiceChannel.leave();
            queue.delete(guild.id);
            return;
        }
        message.delete();
       message.channel.send(`Tocando agora:  \`${song.title}\``);

       const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
       .on('end', reason => {
         console.log(reason);
        serverQueue.songs.shift();
        play(guild, serverQueue.songs[0]);
       }).on('error', error => console.error(error));

       dispatcher.setVolumeLogarithmic(5 / 5);

      
   }

}
