module.exports = function(client, hookWelcome)
{
    client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(ch => ch.id === 'id da sala');

    if (!channel) return;

    // embed para o membro via DM
    member.send(`Texto aqui  para dar boas vindas via dm`); 

    // dar a role assim que o membro entrar no seu servidor
        member.addRole(member.guild.roles.find(role => role.id === "id da role"));
    hookWelcome.send(`texto aqui`); // vi fazer com que o webhook mande a mensagem assim que entrar um membro no servidor
});

    client.on('guildMemberRemove', member => {

        // indicar se saiu do servidor o membro
        const log_bot = member.guild.channels.find(ch => ch.id === 'id da sala');
        log_bot.send(`${member}, saiu do servidor `); // indicar que saiu do servidor
        // ===========================================//
    });
// contador de membros
    var count_member = require('./count_members');
    count_member(client);
}