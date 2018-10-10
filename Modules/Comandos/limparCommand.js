module.exports = async function (client, comando, args, mensagem, WebHook) {


        if(comando == "limpar")
        {
            if (!mensagem.member.hasPermission("MANAGE_MESSAGES")) return mensagem.channel.send({
                embed: {
                    description: `Você não possui permissão de limpar mensagens.`,
                    color: 0xB22222,

                }
            }).then(msg => msg.delete(5000));
            if(!args[0]) return mensagem.channel.send({
                embed: {
                    description: `Informe a quantia que deseja limpar.`,
                    color: 0xB22222,

            }});
            var quantiaMensagem = parseInt(args[0]);

            if (quantiaMensagem > 100) return mensagem.channel.send(`${mensagem.author}, Opa! calma aí , vamos com calma, não consigo apagar mais de 100 mensagens :smile:`).then(msg => msg.delete(5000));
            var tipoVar = typeof quantiaMensagem;
            if (!tipoVar) return mensagem.channel.send({
                embed: {
                    description: `${mensagem.author}, Define somente números inteiros !.`,
                    color: 0xB22222,

                }
            }).then(msg => msg.delete(5000));
            if (quantiaMensagem > 100) return mensagem.channel.send({
                embed: {
                    description: `${mensagem.author}, Opa Calma aí! eu posso deletar até 100 mensagens, vamos com calma :smile:`,
                    color: 0xB22222,

                }
            }).then(msg => msg.delete(5000));



            try{
      
       

                if(quantiaMensagem == 1) {
                    quantiaMensagem += 1;
                    mensagem.channel.send({
                        embed: {
                            description: `${mensagem.author}, foi acrescentado +1, pois você definiu 1 mensagem a ser apagado.`,
                            color: 0xB22222,

                        }
                    }).then(msg => msg.delete(5000));
         
                }



    
            mensagem.delete();
                const quantias = await mensagem.channel.fetchMessages({ limit: quantiaMensagem});

                mensagem.channel.bulkDelete(quantias);


                mensagem.channel.send({
                    embed: {
                        description: `${mensagem.author}, foi deletado \`${quantias.size}\` mensagens com sucesso! <a:lolis:493952122224640031>`,
                        color: 0xB22222,

                    }
                }).then(msg => msg.delete(5000));

            } catch (error) {
                mensagem.channel.send({
                    embed: {
                        description: `Houve um erro ao tentar limpar este canal, talvez você está definindo quantia maior do que tem neste canal.`,
                        color: 0xB22222,

                    }
                });
            }

            
        }

}