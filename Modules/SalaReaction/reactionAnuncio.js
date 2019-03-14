module.exports = function(client, message)
{
    if (message.channel.id == 0)// id da sala no lugar do zero 
    {

        message.react(message.guild.emojis.get('id do emoji'))
        message.react(message.guild.emojis.get('id do emoji'))
        message.react(message.guild.emojis.get('id do emoji'))
        message.react(message.guild.emojis.get('id do emoji'))
    }
    if (message.channel.id != 0 ) return;// id da sala no lugar do 0

}