module.exports = function (client, comando, args,  mensagem, WebHook) {

    let img = args[0];
    let msg = args.slice(1).join(" ");

    if(comando == "dm")
    {
        try{
        var logchannel = client.channels.find(ch => ch.id === '472590145774813185');
        if (!mensagem.member.hasPermission("MANAGE_ROLES")) return  mensagem.channel.send({embed:{
            description: `${mensagem.author} Você não tem permissão de mandar DM!`,
            color: 0xff0c0c
        }});
        if (!args[0]) return mensagem.channel.send("erro ao enviar");
        if (!args[1]) return mensagem.channel.send("erro ao enviar");
        mensagem.guild.members.map(player => {
            mensagem.delete();
       

        if (img === `off`) return img = `https://cdn.discordapp.com/attachments/469238300725477380/488376741769773056/bb.png`;
            if(player.user.bot) return;
            player.send({embed:
            {
                title: `Mensagem do Servidor ${mensagem.guild.name}`,
                description: msg,
                color: 0xbb12c2,
                image:{
                    url: `${img}`,
                    width: 2048
                },
                timestamp: new Date(),
                footer: {
                    icon_url: mensagem.author.avatarURL,
                    text: mensagem.author.username
                }
            }});
            
            logchannel.send({
                embed: {
                    color: 0x2e9e18,
                    description: `${mensagem.author} a mensagem foi enviada para ${player.user.username}`
                }
            });
        });
        mensagem.channel.send({
            embed: {
                color: 0x2e9e18,
                description: `${mensagem.author} Mensagem sendo enviada com sucesso confere na sala ${logchannel} :smile:`
            }
        });

        mensagem.channel.send({embed:{
            color: 0x2e9e18,
            description: `${mensagem.author} a mensagem foi enviada para ${mensagem.guild.members}`
        }
         });

        }catch (error)
        {
            mensagem.channel.send({
                embed: {
                    description: `Erro ao tentar mandar está dm.`,
                    color: 0xB22222,

                }
            });
        }
    }
}