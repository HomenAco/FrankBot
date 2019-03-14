module.exports = function(client)
{
    client.on('ready', () => {

        console.log(`bot  iniciado com sucesso`)



        /*
        client.user.setAvatar('url imagem')
            .then(user => console.log(`Novo avatar foi setado!`)) // setar avatar, coisa que eu estava testando na época hehe 
            .catch(console.error); 
        */

        // muda a activity do bot a cada 10 segundos
        var n = 0;
        var msgStatus = 'Habbop Hotel o Melhor❤️!';
        var typeStatus = '';
        setInterval(function () {
            n++;
              if(n===15){
                  typeStatus = "PLAYING";
                  msgStatus = `texto 1`;
              }else if(n===25)
              {
                  typeStatus = "STREAMING";

                  msgStatus = 'texto 2';
               
              } else if (n === 35) {
                n = 0;
            }
            client.user.setActivity(msgStatus, { type: typeStatus , url: 'http://twitch.tv/#'});
            

        }, 1000);
    });
}