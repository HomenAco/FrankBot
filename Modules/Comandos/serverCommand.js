module.exports = async function (client, comando, args, message, WebHook) {

    if(comando == 'serverinfo')
    {
        message.delete();

        var online = 0;
        var offline = 0;
        var ausente = 0;
        var ocupados = 0;
        var bots = 0;

        
        var carregandoM = await message.channel.send(`${message.author} <a:carregando:493534082240610316> Aguarde, fazendo requisição...`)
        message.guild.members.map(player => {

            if (player.user.presence.status == 'online')
            {
                online++;
            }
            if(player.user.presence.status == 'offline')
            {
                offline++;
            }
            if (player.user.presence.status == 'idle')
            {
                ausente++;
            }
            if (player.user.presence.status == 'dnd')
            {
                ocupados++;
            } 
            if(player.user.bot)
            {
                bots++;
            }       
        });

        carregandoM.edit({
            embed:{
                title: `Informações do servidor`,
                color: 0xff00f0,
                description: `Sobre o servidor texto aqui `,
                thumbnail:{
                    url: `https://cdn.discordapp.com/attachments/456641846869884929/493542351222997002/a.png`
                },
                fields:[{
                    name: `Membros`,
                    value: `🌎 ${client.guilds.get('id do seu servidor').memberCount}`,
                    inline: true
                },
        {
             name: `Disponíveis:`,
            value: ` <:onlines:493433778870419470>  ${online}`,
            inline: true
        },
        {
            name: ' Ausentes:',
            value: `<:ausentes:493466769743151123>  ${ausente}`,
            inline: true
        },
        {
            name: `Ocupados:`,
            value: `<:nDisturb:493433202082447360> ${ocupados}`,
            inline: true
        },
        {
             name: 'Offlines',
             value: `<:offline:493433525811544084> ${offline} `,
            inline: true
        },
        {
            name: 'Bots',
            value: `🤖 ${bots}`,
            inline: true
        },
        {
            name: `Convite do servidor:`,
            value: '\`https://discord.gg/YruJmyg\`',
            inline: true
        },
        {

        name: 'ID do servidor:',
        value: '``` ' + message.guild.id + '```'
        },
 
        ],
        footer:
        {
            icon_url: `https://cdn.discordapp.com/avatars/332349931715166218/0bb910580b00811f0b3dab2683c85c13.png?size=2048`,
            text: `Projeto desenvolvido por : *Eduardo#0001*` 
        },
        timestamp: new Date()
   
            }
        })
    }
}