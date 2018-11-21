module.exports = function (client, comando, args,  mensagem, WebHook)
{

    if(comando == "ping") {
        var conta = client.ping;

  

   
        var arredondado = parseFloat(conta.toFixed(2));
        
        mensagem.channel.send({
            embed: {
                title : 'Ping Servidor',
                color: 0xf509ff,
                description: mensagem.author + ` pong! , ping do servidor :satellite: \`${arredondado}ms\``
            }
        });
           
    }

 

}