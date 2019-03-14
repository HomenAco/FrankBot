module.exports =   async function (client, comando, args, message, WebHook) {
    

    if(comando == "ajuda")
    {


        message.delete();
        message.channel.send(`${message.author} confira seu pm :smile:`)
       message.author.send({embed:{
           title: `Lista de comandos`,
           color: 0xa30e9a, 
           thumbnail:{
               url: `https://cdn.discordapp.com/attachments/469238300725477380/488376741769773056/bb.png`,
                width: 2048
           },
           description: `Olá, ${message.author} aqui está alguns comandos meus disponíveis, basta selecionar uma das reações embaixo para ver a lista de cada categoria`,
             fields: [{
               name: "Categorias de comando:",
                 value: `:notes: \`Música\` escute sua música ou playlist favorita  enquanto joga habbop :smile: \n
               :video_game: \`Interação\` Vamos brincar um pouco, interaja comigo com alguns comandos que possuo :smile:  \n
               :tools:\`Administração\` Comandos exclusivo para os membros que tem cargo superior no servidor.  \n
               :pushpin: \`Informações\`  Comandos de consultar informações sobre o game e o servidor . `
           }]
       }}).then(msg => {
           msg.react('🔍').then(r => {
               msg.react('🎶');
               msg.react('🎮');
               msg.react('🛠');
               msg.react('📌');
            });


           const pesquisa = (reaction, user) => reaction.emoji.name === '🔍' && user.id === message.author.id;
           const administrator = (reaction, user) => reaction.emoji.name === '🛠' && user.id === message.author.id;
           const musicas = (reaction, user) => reaction.emoji.name === '🎶' && user.id === message.author.id;
           const interacao = (reaction, user) => reaction.emoji.name === '🎮' && user.id === message.author.id;
           const server = (reaction, user) => reaction.emoji.name === '📌' && user.id === message.author.id;


        const pesquisando = msg.createReactionCollector(pesquisa);
        const administrando = msg.createReactionCollector(administrator);
        const musicasplay = msg.createReactionCollector(musicas);
           const interactions = msg.createReactionCollector(interacao);
           const servidores = msg.createReactionCollector(server);

           interactions.on('collect', r => {

               msg.edit({
                   embed: {
                       color: 0xa30e9a,
                       title: `Interações no servidor`,
                       description: `Interaja comigo no servidor , eu faço várias coisas :smile: saca só`,
                       thumbnail: {
                           url: `https://cdn.discordapp.com/attachments/469238300725477380/490206015665471488/AeA_1.gif`,
                           width: 2048
                       },

                       fields: [{
                           name: `Lista de Comandos`,
                           value: `\`:avatar\` <@mention/null>  - Expandir seu avatar ou do membro que mencionar. \n
             \`:meme <tipo> <legenda>\` Adiciona meme com legenda \n
             \`:pai <mensagem>\` Chama pai do frank  para conversar\n`
                       }]
                   }

               });
           });

           servidores.on('collect', r => {

               msg.edit({
                   embed: {
                       color: 0xa30e9a,
                       title: `Mais sobre o servidor`,
                       description: `Mais informações sobre o servidor habbop hotel`,
                       thumbnail: {
                           url: `https://cdn.discordapp.com/attachments/469238300725477380/490206015665471488/AeA_1.gif`,
                           width: 2048
                       },

                       fields: [{
                           name: `Lista de Comandos`,
                           value: `
            \`:sobre\`  Informações sobre o desenvolvimento do bot. \n
             \`:serverinfo\` Todas as informações do servidor \n
             \`:novidades\` Mostrar novidades atuais do jogo e servidor \n
             \`:duvidas\` Lista de dúvidas que foram respondidas. \n
              \`:ping\` Ping entre o servidor do discord e o servidor do bot`
                       }]
                   }

               });
           });

        // nome da sala
           const salaMusica = client.channels.find(ch => ch.id === '489941188418207748');
        musicasplay.on('collect', r =>{

            msg.edit({
                embed: {
                    color: 0xa30e9a,
                    title: `Ouvir música`,
                    description: `Você anda com tédio? então escute algumas das suas músicas favorita comigo mesmo em um dois canais de música. (Todos os comandos funcionará somente na sala: ${salaMusica})`,
                    thumbnail: {
                        url: `https://cdn.discordapp.com/attachments/469238300725477380/490206861081968671/headphone_habbop.png`,
                        width: 2048
                    },

                    fields: [{
                        name: `Lista de Comandos`,
                        value: `\`:play\` <url/ string>  - Iniciar uma música/ playlist. \n
            \`:pausar\`  Pausar a música que está escutando no canal. \n
             \`:continuar\` Despausar a música para poder escutar novamente. \n
             \`:fila\` Visualizar a fila de músicas que irão tocar e o que está tocando atualmente \n
             \`:tocando\` Visualizar o nome da música que está tocando atualmente. \n
              \`:pular\` pular para a próxima música.
             \`:volume\` Setar volume de 0 a 10 . \n
              \`:parar\` Finalizar  as músicas.`
                    }]
                }

            });
        });
        administrando.on('collect', r =>{

            msg.edit({embed:{
                color: 0xa30e9a,
                title: `Administração`,
                description: `Aqui estão os comandos administrativos do servidor ***(OBS: Alguns excluvio para \`Equipe Staff)\`***`,
                thumbnail:{
                    url: `https://cdn.discordapp.com/attachments/469238300725477380/490202170772422656/Staff.gif`,
                    width: 2048
                },
            
        fields:[{
            name: `Lista de Comandos`,
            value: `\`:kick\` <@mention> <motivo> - expulsar um membro do servidor com motivo ou indefinido.\n
            \`:ban\` <@mention> <motivo> banir o usuário com motivo ou indefinido.\n
             \`:mutar\` <@mention> <tempo/null> mutar o usuário com motivo ou indefinido.\n
             \`:aviso\` <@mention> <motivo> avisar o membro (limite de até 3 vezes) com motivo ou indefinido.\n
             \`:reportar\` <@mention> <motivo> reportar o membro com motivo \n
                 \`:limpar \` <quantia> limpar de acordo com a quantia desejada no canal que está.
                 \`:help \` <mensagem> enviar uma ajuda para a equipe de suporte \n 
                   \`:iniciarvotacao \` <tempo> <mensagem> iniciar uma votação \n` 
        }]}
 
        });
    });
    

        pesquisando.on('collect', r => {
            msg.edit({
                embed: {
                    title: `Lista de comandos`,
                    color: 0xa30e9a,
                    thumbnail: {
                        url: `https://cdn.discordapp.com/attachments/469238300725477380/488376741769773056/bb.png`,
                      
                    },
                    description: `Olá,${message.author}  aqui está alguns comandos meus disponíveis, basta selecionar uma das reações embaixo para ver a lista de cada categoria`,
                    fields: [{
                        name: "Categorias de comando:",
                        value: `:notes: \`Música\` escute sua música ou playlist favorita  enquanto joga habbop :smile: \n
               :video_game: \`Interação\` Vamos brincar um pouco, interaja comigo com alguns comandos que possuo :smile:  \n
               :tools:\`Administração\` Comandos exclusivo para os membros que tem cargo superior no servidor.  \n
               :pushpin: \`Informações\`  Comandos de consultar informações sobre o game e o servidor . `
                    }]
                }
            });
        });
       });
        
    }
}