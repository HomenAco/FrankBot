module.exports = function(client, hookWelcome)
{
    client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(ch => ch.id === '419158949414305802');
    const recepcao = member.guild.channels.find(ch => ch.id === '469193373647896586');
        const chat_geral = member.guild.channels.find(ch => ch.id === '469193373647896586');


      

    if (!channel) return;
   
       
    // embed para o membro via pm
    member.send(`Olá ${member} seja muito bem vindo ao servidor de ***Habbop Hotel***, espero que tenha uma ótima estadia junto com a nossa comunidade, converse com a gente no ${chat_geral} :smile: , qualquer coisa digite :ajuda viu :smile:\n
     ***Convite Discord:*** https://discord.gg/w8ZKPa3 \n 
    https://cdn.discordapp.com/attachments/456641846869884929/477285929615360010/bb.png`); 

    
        member.addRole(member.guild.roles.find(role => role.id === "469182787056828416"));
    hookWelcome.send(`Opa! seja bem vindo  ao nosso hotel, deixe eu te guiar até a ${recepcao}  qualquer coisa digite por :ajuda :smile:  ${member}`);
});

    client.on('guildMemberRemove', member => {
        const log_bot = member.guild.channels.find(ch => ch.id === '472590145774813185');
        log_bot.send(`${member}, saiu do servidor `);
    });
// contador de membros
    var count_member = require('./count_members');
    count_member(client);
}