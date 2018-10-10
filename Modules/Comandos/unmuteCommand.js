module.exports = async function (client, comando, args, mensagem, WebHook) {

    if(comando == "unmute")
    {
        try{
        if (!args[0]) return mensagem.channel.send({
            embed: {
                description: `digite :unmute <mention>.`,
                color: 0xB22222,

            }
        }).then(msg => msg.delete(5000));

        if(!mensagem.member.hasPermission('MANAGE_MESSAGES')) return mensagem.channel.send({
                                    embed: {
                                        description: `Você não tem permissão para desmutar este usuário`,
                                        color: 0xB22222,

                                    }
                                }).then(msg => msg.delete(5000));

        let usuario = mensagem.guild.member(mensagem.mentions.users.first() || mensagem.guild.members.get(args[0]));
        const tribunal = mensagem.member.guild.channels.find(ch => ch.id === '469194320965271552');
        const membros = mensagem.member.guild.roles.find(role => role.id === "469182787056828416");
        const silenciadoMembro = mensagem.member.guild.roles.find(role => role.id === "478435682843623437");
        mensagem.delete();
            mensagem.channel.send({
                embed: {
                    color: 0x32CD32,
                    description: `O usuário ${usuario} foi desmutado com sucesso! :white_check_mark: `
                }
            }).then(msg => msg.delete(5000));


  
        usuario.removeRole(silenciadoMembro);

                
            tribunal.send({
                embed: {
                    author: {
                        name: mensagem.author.username,
                        icon_url: mensagem.author.avatarURL
                    },
                    title: `${usuario.user.username} foi desmutado!`,
                    thumbnail: {
                        url: `${usuario.user.avatarURL}`,
                        width: 2048
                    },
                    color: 0x32CD32,
                    description: `O usuario ${usuario} foi perdoado, ver se não quebre as regras novamente em :smile:.`,
                    timestamp: new Date()
                }
            });

        usuario.send({
            embed:{
                title: `Desmutado do servidor`,
                color: 0x32CD32,
                description: `você foi desmutado por um dos membros da equipe, respeite as normas viu para não acontecer denovo :smile:`,
                timestamp: new Date()
            }
        });

        
    }catch (error)
    {
        console.log(error);
            mensagem.channel.send({
                embed: {
                    description: `digite :unmute <mention> para desmutar um usuário`,
                    color: 0xB22222,

                }
            }).then(msg => msg.delete(5000));
    }
    
    }
}