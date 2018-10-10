module.exports = function (client, comando, args,  mensagem, WebHook)
{
 
    const usuario = mensagem.mentions.users.first() || mensagem.guild.members.get(args[0]);

    var membro = mensagem.guild.member(usuario || mensagem.guild.members.get(args[0]));
    if(comando == "avatar")
    {

        try{
      
        if (usuario) {
         
            var avatarImage = membro.user.avatarURL;
            if (avatarImage == null) {
                avatarImage = membro.user.defaultAvatarURL;
            }
            mensagem.reply({
                embed:{
                    title: `Imagem de ${membro.user.username}`,
                    color: 0xC71585,
                    description: `:camera_with_flash: Clique [aqui](${membro.user.avatarURL}) para abrir na navegadora..`,
                    image:{
                        url: `${avatarImage}`,
                        width: 2048
                    },
                    timestamp: new Date()
                }
            });
        
        }
        else {
            var avatarImage2 = mensagem.author.avatarURL;
            if (avatarImage2 == null) {
                avatarImage2 = mensagem.author.defaultAvatarURL;
            }
            mensagem.reply({
                
                embed: {
                    title: `Imagem de ${mensagem.author.username}`,
                    color: 0xC71585,
                    description: `:camera_with_flash: Clique [aqui](${mensagem.author.avatarURL}) para abrir no navegador..`,
                    image: {
                        url: `${avatarImage2}`,
                        width: 2048
                    },
                    timestamp: new Date()
                }
            });
        }
    }catch (error)
    {
            mensagem.channel.send({
                embed: {
                    description: `Erro ao encontrar este avatar :/.`,
                    color: 0xB22222,

                }
            }).then(msg => msg.delete(5000));
    }
    
}
  
}