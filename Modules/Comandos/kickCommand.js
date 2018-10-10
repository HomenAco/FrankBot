module.exports = async function (client, comando, args,  mensagem, WebHook)
{
   


    
    if (comando == "kick") {
        try{
            
            mensagem.delete();
            if (!args[0]) return mensagem.channel.send({
                embed: {
                    description: `Informe o @mention do membro que deseja expulsar.`,
                    color: 0xB22222,

                }
            }).then(msg => msg.delete(5000));

            let reason = args.join(" ").slice(22);
            let usuarioKick = mensagem.guild.member(mensagem.mentions.users.first() || mensagem.guild.members.get(args[0]));

            var autorMembro = mensagem.author.avatarURL;
            if (autorMembro === null) {
                autorMembro = mensagem.author.defaultAvatarURL;
            }

            var imagensMembro = usuarioKick.user.avatarURL;
            if (imagensMembro === null) {
                imagensMembro = usuarioKick.user.defaultAvatarURL;
            }

            if (usuarioKick.hasPermission("BAN_MEMBERS")) return mensagem.channel.send({
                embed: {
                    description: `Você não possui permissão de expulsar esse membro.`,
                    color: 0xB22222,

                }});
            if (!mensagem.member.hasPermission("KICK_MEMBERS")) return mensagem.channel.send({
                embed: {
                    description: `Você não possui permissão de expulsar esse membro.`,
                    color: 0xB22222,

                }
            });
        
            if(usuarioKick)
            {

            if (!usuarioKick) return mensagem.channel.send({
                embed: {
                    description: `Não foi possível pesquisar este membro`,
                    color: 0xB22222,

                }
            }).then(msg => msg.delete(5000));


            if (reason === "") {
                reason = "não definido";
            }

            const tribunal = mensagem.member.guild.channels.find(ch => ch.id === '469194320965271552');
            tribunal.send({
                embed: {
                    author: {
                        name: mensagem.author.username,
                        icon_url: autorMembro
                    },
                    title: `${usuarioKick.user.username} foi expulso!`,
                    thumbnail: {
                        url: `${imagensMembro}`,
                        width: 2048
                    },
                    color: 0xB22222,
                    description: `O usuario ${usuarioKick} foi punido por quebrar as regras do hotel.`,
                    fields: [{
                        name: `Motivo`,
                        value: '```' + reason + '```'
                    }],
                    timestamp: new Date()
                }
            });
            mensagem.guild.member(usuarioKick).kick(reason);
                mensagem.reply({
                    embed: {
                        color: 0x32CD32,
                        description: `O usuário ${usuarioKick} foi expulso com sucesso! :white_check_mark: `
                    }
                }).then(msg => msg.delete(5000));

            var segundos = 1;
            setInterval(function() {
                segundos--;
                if(segundos == 0)
                {
                    usuarioKick.send({
                        embed: {
                            title: `Você foi expulso do servidor`,
                            description: `Você foi expulso por quebrar as regras do servidor.`,
                            color: 0xB22222,
                            fields: [{
                                name: `Motivo`,
                                value: '```' + reason + '```'
                            }],
                            timestamp: new Date(),
                            footer: {
                                icon_url: `https://cdn.discordapp.com/attachments/469238300725477380/487983341216333825/staff.gif`,
                                text: `© Equipe Habbop Hotel - Projeto Prisma Todos os direitos reservados`
                            }
                        }
                    });
                }
            });
 
        }
        else
        {
                mensagem.channel.send({
                    embed: {
                        description: `Informe o @mention do membro que deseja expulsar.`,
                        color: 0xB22222,

                    }})

        }
    }catch (error)
    {
            mensagem.channel.send({
                embed: {
                    description: `Erro ao  expulsar este usuário.`,
                    color: 0xB22222,

                }
            });
    }
}

}