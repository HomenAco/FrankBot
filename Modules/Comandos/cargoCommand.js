module.exports =  function (client, comando, args, mensagem, WebHook)

{

    if(comando == "cargo")
        {

            try{

                const membro = mensagem.member.guild.roles.find(role => role.id === "469182787056828416"); 
                // Membro
                const gerente = mensagem.member.guild.roles.find(role => role.id === "469265133093388308"); 
                // Gerente
                const administrador = mensagem.member.guild.roles.find(role => role.id === "469266844377677844"); 
                // Administrador
                const moderador = mensagem.member.guild.roles.find(role => role.id === "469266213328125954"); 
                // Moderador
                const embaixador = mensagem.member.guild.roles.find(role => role.id === "469290473513811968"); 
                // Embaixador
                const locutor = mensagem.member.guild.roles.find(role => role.id === "478778494587895808"); 

                const aea = mensagem.member.guild.roles.find(role => role.id === "489191745033076736"); 
                // Locutor

                const equipes = mensagem.member.guild.roles.find(role => role.id === "469263946508009482"); 


            
            
                if (!args[0] || !args[1]) return mensagem.channel.send({
                    embed: {
                        description: `digite \`:cargo <@mention> <@cargo>\` \n cargos disponíveis:  ( ${gerente}, ${administrador}, ${moderador}, ${embaixador}, ${locutor}, ${aea}).`,
                        color: 0xB22222,

                    }
                }).then(msg => msg.delete(60000));

                if (!mensagem.member.hasPermission("MANAGE_ROLES")) return mensagem.channel.send({
                    embed: {
                        description: `Você não possui permissão de dar cargo aos  membros.`,
                        color: 0xB22222,

                    }
                }).then(msg => msg.delete(5000));

                let usuarioMention = mensagem.guild.member(mensagem.mentions.users.first() || mensagem.guild.members.get(args[1]));

                const logs = mensagem.member.guild.channels.find(ch => ch.id === '469193373647896586');

                // adicionar cargo
                if(args[1] == gerente)
                {
                    usuarioMention.removeRole(membro);
                    usuarioMention.addRole(gerente);
                    usuarioMention.addRole(equipes);
                    mensagem.channel.send({
                        embed: {
                            color: 0xB22222,
                            description: `${mensagem.author}, cargo ${gerente}`
                        }
                    });
                    logs.send(`\`${usuarioMention.user.username}\`, Entrou na equipe com o cargo de ${gerente}`)
                }
                if(args[1] == administrador)
                {
                    usuarioMention.removeRole(membro);
                    usuarioMention.addRole(administrador);
                    usuarioMention.addRole(equipes);
                    mensagem.channel.send({
                        embed: {
                            color: 0xB22222,
                            description: `${mensagem.author}, cargo ${administrador}`
                        }
                    });
                    logs.send(`\`${usuarioMention.user.username}\`, Entrou na equipe com o cargo de ${administrador}`)

                }
                if(args[1] == moderador)
                {
                    usuarioMention.removeRole(membro);
                    usuarioMention.addRole(moderador);
                    usuarioMention.addRole(equipes);
                    mensagem.channel.send({
                        embed: {
                            color: 0xB22222,
                            description: `${mensagem.author}, cargo ${moderador}`
                        }
                    });
                    logs.send(`\`${usuarioMention.user.username}\`, Entrou na equipe com o cargo de ${moderador}`)
                }
                if (args[1] == embaixador) {
                    usuarioMention.removeRole(membro);
                    usuarioMention.addRole(embaixador);
                    usuarioMention.addRole(equipes);
                    mensagem.channel.send({
                        embed: {
                            color: 0xB22222,
                            description: `${mensagem.author}, cargo ${embaixador}`
                        }
                    });
                    logs.send(`\`${usuarioMention.user.username}\`, Entrou na equipe com o cargo de ${embaixador}`)

                }
                if (args[1] == locutor) {
                    usuarioMention.removeRole(membro);
                    usuarioMention.addRole(locutor);
                    usuarioMention.addRole(equipes);
                    mensagem.channel.send({
                        embed: {
                            color: 0xB22222,
                            description: `${mensagem.author}, cargo ${locutor}`
                        }
                    });
                    logs.send(`\`${usuarioMention.user.username}\`, Entrou na equipe com o cargo de ${locutor}`)
                }

                if (args[1] == aea) {
                    usuarioMention.removeRole(membro);
                    usuarioMention.addRole(aea);
                    usuarioMention.addRole(equipes);
                    mensagem.channel.send({
                        embed: {
                            color: 0xB22222,
                            description: `${mensagem.author}, cargo ${aea}`
                        }
                    });
                    logs.send(`\`${usuarioMention.user.username}\`, Entrou na equipe com o cargo de ${aea}`)

                }


               
            }catch (error)
            {
                 mensagem.channel.send({
                    embed: {
                        description: `digite \`:cargo <@mention> <@cargo>\` \n cargos disponíveis:  (${membro}, ${gerente}, ${administrador}, ${moderador}, ${embaixador}, ${locutor}).`,
                        color: 0xB22222,

                    }
                 }).then(msg => msg.delete(60000));
            }


    
       

        }
}