module.exports = function (client, consign, prefix, hook, youtube, ytdl, util, queue)
{
    const active = new Map();
    let ownerID = "332349931715166218";

  
    client.on("message", (message) => {
      
        //  Fazer condição para se o usuário não executar o prefixo retornar a  nada.
       

        // links inapropriado filtro
        var mensagem = /http:\/\/d/;
        var mensagem2 = /https:\/\/d/;
        var mensagem3 = /https:\/\/h/;
        var mensagem4 = /http:\/\/h/;
        var mensagem5 = /http:\/\/habbop/;

        if (message.member === null) return;
        if(message.author.bot) return;
        if(mensagem5.test(message)) return;
        if(!message.member.hasPermission('MANAGE_MESSAGES'))
        {
            if (mensagem.test(message) || (mensagem2.test(message) || (mensagem3.test(message))) || (mensagem4.test(message))) {
                const logs = message.member.guild.channels.find(ch => ch.id === '472590145774813185');
                logs.send(`${message.author}, suspeito por divulgar link inapropriado \` ${message.channel.lastMessage}\``);
                message.delete();
                message.channel.send(`${message.author}, Mensagem apagada por suspeita de divulgação!`);
                return;
            }
        }else
        {
     
         }

         var anuncios = require('../Modules/SalaReaction/reactionAnuncio');
         anuncios(client, message);

        if (!message.content.startsWith(prefix) || message.author.bot) return;
        if (message.content.indexOf(prefix) !== 0) return;
        if(message.member === null) return;
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const comando = (args.shift().toLowerCase() || mensagem.guild.members.get(args[0]));
    

     
     

     // comandos do bot
        consign().include('./Modules/Comandos').into(client, comando, args,  message, hook);
     // Music bot Habbop
        consign().include('./Modules/ComandosMusica')
        .into(client, 
            comando, // será feito condição para ver se o usuário digitou junto com o prefixo e o comando que está dentro da condição
            args,   // argumentos que pode ser adicionado no comando, vários parâmetros em vetores ECMAScript 6
            message, // mensagem que o usuário irá fazer irá causar uma reação de acordo que é aplicado o objeto EX: message.author <-- mostra o  mention do membro
             hook,  // bot simples que manda mensagem
             youtube,// api do youtube para pesquisar músicas
              ytdl, // api  para tocar links do youtube
              util, 
              queue);
    
  




    });
}