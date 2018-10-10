module.exports = async function (client, comando, args, message, WebHook) {

    if(comando == "help")
    {

        const helps = client.channels.find(ch => ch.id === '492181325747585025');
        const msg = args[0];
    const mensagem = args.slice(0).join(" ");

try{
    if (!msg) return mensagem.channel.send({
        embed: {
            description: `Informe a mensagem que deseja encaminhar para a equipe.`,
            color: 0xB22222,

        }
    }).then(msg => msg.delete(5000));

    message.delete();
    message.channel.send({
        embed: {
            color: 0x32CD32,
            description: `${message.author}, pedido de ajuda enviado com sucesso! :smile: `
        }
    }).then(msg => msg.delete(5000));
        helps.send({
            embed: {
                author: {
                    name: message.author.username,
                    icon_url: message.author.avatarURL
                },
                title: `${message.author.username} foi pediu ajuda da equipe!`,
                color: 0xB22222,
                description: `${mensagem}`,
                timestamp: new Date()
            }
        });
    } catch (error)
    {
    message.channel.send({
        embed: {
            description: `Informe uma mensagem para enviar seu pedido de ajuda!.`,
            color: 0xB22222,

        }
    });
    }
 }
}