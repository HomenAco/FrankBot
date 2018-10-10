module.exports = function(client)
{

    var converterNumero = require('number-to-words');


    client.on('guildMemberAdd', guild => {

   
        const num = `${client.guilds.get('419155099332640770').memberCount}`;     
        var res  = num.split("");

        var numeroFinal = '';

        var numerosAtual = new Array();
         for(var i = 0;i<res.length;i++)
        {
            numerosAtual[i] = converterNumero.toWords(res[i]);
            numeroFinal += ":" + numerosAtual[i] + ":";
        }
  
        const topico = client.channels.get('469193373647896586')
        topico.setTopic(":heart: " + numeroFinal + " Habbopianos e " + "0 onlines no hotel <a:cachorropulando:449314700640124929>")
    });

    client.on('guildMemberRemove', guild => {

        const num = `${client.guilds.get('419155099332640770').memberCount}`;
        var res = num.split("");
        var numeroFinal = '';
        var numerosAtual = new Array();
        for (var i = 0; i < res.length; i++) {
            numerosAtual[i] = converterNumero.toWords(res[i]);
            numeroFinal += ":" + numerosAtual[i] + ":";
        }

        const topico = client.channels.get('469193373647896586')
        topico.setTopic(":heart: " + numeroFinal + " Habbopianos e " + "0 onlines no hotel <a:cachorropulando:449314700640124929>")
    });
  
}

