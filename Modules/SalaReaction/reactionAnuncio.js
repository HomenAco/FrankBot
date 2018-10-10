module.exports = function(client, message)
{
    if (message.channel.id == 469268291068887040)
    {
        message.react('❤');
        message.react('😍');
        message.react(message.guild.emojis.get('493952122224640031'))
        message.react(message.guild.emojis.get('461726793884368906'))
        message.react(message.guild.emojis.get('493932485411995659'))
        message.react(message.guild.emojis.get('493532661483175938'))
        message.react('✅');
    }
    if (message.channel.id != 469268291068887040) return;

}