module.exports = function(client)
{

    var converterNumero = require('number-to-words');


    client.on('guildMemberAdd', guild => {

   
        contadorMembros('id do seu servidor', 'id sa sua sala')// função contador de membros
    });

    client.on('guildMemberRemove', guild => {

          
        contadorMembros('id do seu servidor', 'id sa sua sala') // função contador de membros
    });
  
    function contadorMembros(id_guild, id_sala)
    {
         // contador de membros
         const num = `${client.guilds.get(id_guild).memberCount}`;     
         var res  = num.split("");
         var numeroFinal = '';
         var numerosAtual = new Array();
          for(var i = 0;i<res.length;i++)
         {
             numerosAtual[i] = converterNumero.toWords(res[i]);
             numeroFinal += ":" + numerosAtual[i] + ":";
         }
   
         const topico = client.channels.get(id_sala)
         topico.setTopic(":heart: " + numeroFinal + " membros no servidor")
    }
}

