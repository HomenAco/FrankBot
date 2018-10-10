module.exports = async function (client, comando, args, mensagem, WebHook) {


    if(comando == "mutar")
    {
    
        try{
            
        if (!args[0]) return mensagem.channel.send({
            embed: {
                description: `digite :mutar <mention> + <tempo>.`,
                color: 0xB22222,

            }
        }).then(msg => msg.delete(5000));

        

        let usuarioMutar = mensagem.guild.member(mensagem.mentions.users.first() || mensagem.guild.members.get(args[0]));

        if (usuarioMutar.hasPermission('MANAGE_MESSAGES')) return mensagem.channel.send({
            embed: {
                description: `Você não tem permissão de silenciar este membro.`,
                color: 0xB22222,

            }
        }).then(msg => msg.delete(5000));

            if (!mensagem.member.hasPermission('MANAGE_MESSAGES')) return mensagem.channel.send({
                embed: {
                    description: `Você não tem permissão para utilizar este comando.`,
                    color: 0xB22222,

                }
            }).then(msg => msg.delete(5000));


            const membros = mensagem.member.guild.roles.find(role => role.id === "469182787056828416");
            const silenciadoMembro = mensagem.member.guild.roles.find(role => role.id === "478435682843623437");
            // sala log


            var autorMembro = mensagem.author.avatarURL;
            if(autorMembro === null)
            {
                autorMembro = mensagem.author.defaultAvatarURL;
            }

            var imagensMembro = usuarioMutar.user.avatarURL;
            if (imagensMembro === null) {
                imagensMembro = usuarioMutar.user.defaultAvatarURL;
            }
          
            const sala_log = mensagem.member.guild.channels.find(ch => ch.id === '472590145774813185');
            const tribunal = mensagem.member.guild.channels.find(ch => ch.id === '469194320965271552');


                    if (args[1] === null) {
                        usuarioMutar.addRole(silenciadoMembro);
                        mensagem.channel.send({
                            embed: {
                                color: 0x32CD32,
                                description: `O usuário ${usuarioMutar} foi silenciado com sucesso! :white_check_mark: `
                            }
                        }).then(msg => msg.delete(5000));

                        return;
                    }
             
        

                 usuarioMutar.addRole(silenciadoMembro);
                 usuarioMutar.removeRole(membros); 

            mensagem.delete();
            tribunal.send({
                embed: {
                    author: {
                        name: mensagem.author.username,
                        icon_url: autorMembro
                    },
                    title: `${usuarioMutar.user.username} foi silenciado!`,
                    thumbnail: {
                        url: `${imagensMembro}`,
                        width: 2048
                    },
                    color: 0xB22222,
                    description: `O usuario ${usuarioMutar} foi punido por quebrar as regras do hotel.`,
                    timestamp: new Date()
                }
            });
             mensagem.channel.send({
                embed: {
                    color: 0x32CD32,
                    description: `${mensagem.author}, O usuário ${usuarioMutar} foi silenciado com sucesso! :white_check_mark: `
                }
            }).then(msg => msg.delete(5000));


            
                var n = args[1];
                if (args[2] == null) {
                    n = args[1];
                    mensagem.channel.send(`${mensagem.author}, Opa! percebi que você não definiu que tipo de tempo, então decidi colocar em \`${n} segundo(s)\` :smile: `).then(msg => msg.delete(9000));
                }


                var tipoTime = args[2];


                if (tipoTime == "s") {
                    n = args[1];
                }
                if (tipoTime == "m") {
                    n = args[1] * 60;
                }
                if (tipoTime == "h") {
                    n = args[1] * 3540;
                }

                setInterval(function () {
                    n--;
                    switch(n)
                    {
                        case 0 : 
                                usuarioMutar.removeRole(silenciadoMembro);
                            tribunal.send({
                                embed: {
                                    author: {
                                        name: mensagem.author.username,
                                        icon_url: autorMembro
                                    },
                                    title: `${usuarioMutar.user.username} foi desmutado!`,
                                    thumbnail: {
                                        url: `${imagensMembro}`,
                                        width: 2048
                                    },
                                    color: 0x32CD32,
                                    description: `O usuario ${usuarioMutar} foi perdoado, ver se não quebre as regras novamente em :smile:.`,
                                    timestamp: new Date()
                                }
                            });
                                sala_log.send(`usuário ${usuarioMutar} foi  desmutado! `);
                    }

                }, 1000);
         


            }catch (error)
            {
                console.log(error);
            mensagem.channel.send({
                embed: {
                    description: `digite :mutar <mention> + <tempo>.`,
                    color: 0xB22222,

                }
            }).then(msg => msg.delete(5000));
            }
    }
}