
module.exports = async function (client, comando, args, mensagem, WebHook) {


    if(comando == "iniciarvotacao")
    {
        var time = args[0];
        var textoRecebe = args.join(" ").slice(2);
        var texto = textoRecebe;

        try{
            if (!mensagem.member.hasPermission('KICK_MEMBERS')) return mensagem.channel.send({
                embed: {
                    description: `Você não tem permissão de usar o comando `,
                    color: 0xB22222,

                }
            });
        if (!time && !texto) return mensagem.channel.send({
            embed: {
                description: `Defina o tempo e o texto  :iniciarvotacao \`time\` texto aqui :smile: `,
                color: 0xB22222,

            }
        });

            var tempo = parseInt(time);

           
            if (isNaN(tempo)) return mensagem.channel.send({
                embed: {
                    description: `Defina o tempo e o texto  :iniciarvotacao \`time\` texto aqui :smile: `,
                    color: 0xB22222,

                }
            });
        
            if (tempo >= 61) return mensagem.channel.send({
                embed: {
                    description: `Limite do tempo é até 60 segundos!`,
                    color: 0xB22222,

                }
            });

            if (tempo == 0 || tempo <=5) return mensagem.channel.send({
                embed: {
                    description: `Defina o tempo mais de 5 segundos!`,
                    color: 0xB22222,

                }
            });

        var certosEmojis = 0;
        var xzinhoEmojis = 0;
        // emoji certo
        var resultadoCerto = 0;
        // emoji X
        var resultadoX = 0;



        mensagem.channel.send({
            embed: {
                title: `Inicado a Votação`,
                color: 0xa30e9a,
                description: `  ${texto} `,
                footer:{
                    icon_url: mensagem.author.avatarURL,
                    text: mensagem.author.username
                },
                timestamp: new Date()
                }
        }).then(msg => {
                msg.react('✅');
                msg.react('❌');
            

            const emojiCerto = (reaction) => reaction.emoji.name === '✅';
            const emojiX = (reaction) => reaction.emoji.name === '❌';

            const certo = msg.createReactionCollector(emojiCerto);
            const xs = msg.createReactionCollector(emojiX);

            certo.on('collect', r => {
                certosEmojis++;
            });
            xs.on('collect', r => {
                xzinhoEmojis++;
            });


            setInterval(function () {
                tempo--;

                if(tempo == 0)
                {
                    resultadoCerto = certosEmojis - 1;
                    resultadoX = xzinhoEmojis - 1;

                    if(resultadoCerto > resultadoX)
                    {
                        mensagem.channel.send(`${mensagem.author}, o emoji ✅ venceu com ${resultadoCerto} voto(s) <a:dance:493932485411995659>`);
                    }
                    if(resultadoX > resultadoCerto)
                    {
                        mensagem.channel.send(`${mensagem.author}, o emoji ❌ venceu com ${resultadoX} voto(s)  <a:dance:493932485411995659>`)
                    }
                    if (resultadoX == 0 &&  resultadoCerto == 0)
                    {
                        mensagem.channel.send(`${mensagem.author}, Não teve nenhuma votação <:boxing:477924107560681473>`);
                        return;

                    }
                    if(resultadoX == resultadoCerto)
                    {
                        mensagem.channel.send(`${mensagem.author}, Oloco os dois empatou <a:empolg:493924151363371028>`)

                    }
              
                }
            }, 1000);

        });

    }catch (error)
    {
            mensagem.channel.send({
                embed: {
                    description: `Defina o tempo e o texto  :iniciarvotacao \`time\` texto aqui :smile: `,
                    color: 0xB22222,

                }
            });
    }
    
    }

}