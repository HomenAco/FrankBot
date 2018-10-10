module.exports = async function (client, comando, args, message, WebHook) {

    if(comando == "sobre")
    {


        const ideias_sala = message.member.guild.channels.find(ch => ch.id === '469200747184128009');

        message.delete();
        message.channel.send({
                    embed: {
                        color: 0x32CD32,
                        description: `${message.author}, confira seu pm `
                    }
                }).then(msg => msg.delete(5000))


        message.author.send({
            embed:{
                title: `Sobre o bot ${client.user.username}`,
                color: 0xff00f0,
                thumbnail:{
                    url: `https://cdn.discordapp.com/attachments/456641846869884929/493542351222997002/a.png`
                },
                description: `Olá, ${message.author}, meu nome é ${client.user.username}, eu sou o responsável por cuidar da parte do servidor discord do habbop hotel,
                aonde sou responsável a manter vocês sem tédios e ao mesmo tempo se sentirem em casa, caso tenha alguma dúvida é só pedir po \`:help <mensagem>\` que a equipe,
                vai te dar suporte, bom agora como você já sabe sobre minha função de estar no servidor, agora irei dizer um pouco sobre mim, lá vai em <a:cachorropulando:449314700640124929>`,
                fields:[
                    {
                        name: `Como fui desenvolvido?`,
                        value: `Bom, muitos perguntam como foi meu processo de desenvolvimento, como foi o processo do 0 até agora e olha que sempre estou tendo \`:novidades\` viu :smile:
                        , fui desenvolvido em [Node.js](https://nodejs.org/en/) utilizando a api  do [Discord.js](https://discord.js.org/#/) antes eu estava sendo desenvolvido em c# utilizando api
                        discord.net, mas como  estava sofrendo limitações com a api, então decidir passar para o js que é claro  a api é minha melhor amiga e é ela que me mantem vivo. :smile:` 
                    },
                    {
                        name: `Quem me desenvolveu?`,
                        value: ` bom quem me  criou foi o @HomenAco#0001(***Eduardo Melo***), um homem bem ganancioso até que nunca desisti pelos seus propósito e aliás, as funções que tenho
                        exclusivo para o servidor é tudo graças a ele :smile:, caso tenha alguma sugestão ou alguma idéia revolucionária mande para  a sala ${ideias_sala} que ele  vai está avaliando o que você sugere
                        na questão de eu evoluir e ah, mais uma coisa, não é só eu e sim todo o game em si você pode está enviando suas idéias lá.`
                    },
                    {
                        name: `Quem foi responsável pela parte embelezada que tenho?`,
                        value: `bom, também muitos me perguntam sobre isso, então que me deixa lindo e maravilhoso como estou é o @Jon que é um dos responsáveis pela gestão do hotel, então ele que manja nos desenhos.`
                    },
                    {
                        name: `Obrigado por está na nossa família`,
                        value: `Obrigado por sempre está aqui conosco e nos apoiando, fique sempre de olho em promoções e em eventos viu e ah, obedeça as regras, pois estou de olho hehe :smile:`
                    }
                ],
                footer:{
                    icon_url: `https://cdn.discordapp.com/attachments/456641846869884929/493467899428732959/dsadsadsa.png`,
                    text: `Habbop hotel - Todos os direitos reservado | Equipe Prisma Developers`
                },
                timestamp: new Date()

            }
        })
    }
}