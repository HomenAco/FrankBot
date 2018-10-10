module.exports = function (client, comando, args, mensagem, WebHook) {

    if (comando == "rcargo") {

        try {

            const membro = mensagem.member.guild.roles.find(role => role.id === "469182787056828416");
            // Membro
            const gerente = mensagem.member.guild.roles.find(role => role.id === "469265133093388308");
            // Gerente
            const administrador = mensagem.member.guild.roles.find(role => role.id === "469266844377677844");
            // Administrador
            const moderador = mensagem.member.guild.roles.find(role => role.id === "469266213328125954");
            // Moderador
            const embaixador = mensagem.member.guild.roles.find(role => role.id === "469290473513811968");
            // Embaixador
            const locutor = mensagem.member.guild.roles.find(role => role.id === "478778494587895808");
            // Locutor
            const aea = mensagem.member.guild.roles.find(role => role.id === "489191745033076736"); 
            // AeA

            const equipes = mensagem.member.guild.roles.find(role => role.id === "469263946508009482"); 

            if (!args[0]) return mensagem.channel.send({
                embed: {
                    description: `Adicione um dos cargos (${membro}, ${gerente}, ${administrador}, ${moderador}, ${embaixador}, ${locutor}, ${aea}).`,
                    color: 0xB22222,

                }
            }).then(msg => msg.delete(5000));

            if (!mensagem.member.hasPermission("MANAGE_ROLES")) return mensagem.channel.send({
                embed: {
                    description: `Você não possui permissão de dar cargo aos  membros.`,
                    color: 0xB22222,

                }
            }).then(msg => msg.delete(5000));
            

            let usuariosM = mensagem.guild.member(mensagem.mentions.users.first() || mensagem.guild.members.get(args[0]));

            usuariosM.addRole(membro);
            usuariosM.removeRole(aea);
            usuariosM.removeRole(gerente);
            usuariosM.removeRole(administrador);
            usuariosM.removeRole(moderador);
            usuariosM.removeRole(embaixador);
            usuariosM.removeRole(locutor);
            usuariosM.removeRole(equipes);

            mensagem.channel.send({
                embed: {
                    description: `${mensagem.author}, o(a) ${usuariosM} foi removido(a) com sucesso!.`,
                    color: 0xB22222,

                }
            }).then(msg => msg.delete(5000));


            const channels = mensagem.member.guild.channels.find(ch => ch.id === '469193373647896586');
            channels.send(`usuário ${usuariosM.user.username}, foi removido do cargo !`)

        } catch (error) {
            mensagem.channel.send({
                embed: {
                    description: `Ocorreu um erro ao encontrar este usuário.`,
                    color: 0xB22222,

                }
            }).then(msg => msg.delete(5000));
        }





    }
}