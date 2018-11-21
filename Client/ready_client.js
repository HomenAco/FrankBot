module.exports = function(client)
{
    client.on('ready', () => {

console.log("  ██████╗ ██████╗ ██╗███████╗███╗   ███╗ █████╗");
console.log("  ██╔══██╗██╔══██╗██║██╔════╝████╗ ████║██╔══██╗");
console.log( " ██████╔╝██████╔╝██║███████╗██╔████╔██║███████║");
console.log("  ██╔═══╝ ██╔══██╗██║╚════██║██║╚██╔╝██║██╔══██║");
console.log("  ██║     ██║  ██║██║███████║██║ ╚═╝ ██║██║  ██║");
console.log("  ╚═╝     ╚═╝  ╚═╝╚═╝╚══════╝╚═╝     ╚═╝╚═╝  ╚═╝");
console.log(" Bot focado para Habbop hotel - By: Eduardo Melo");



        /*
        client.user.setAvatar('./avatar.png')
            .then(user => console.log(`Novo avatar foi setado!`))
            .catch(console.error); 
        */


        var n = 0;
        var msgStatus = 'Habbop Hotel o Melhor❤️!';
        var typeStatus = '';
        setInterval(function () {
            n++;
              if(n===15){
                  typeStatus = "PLAYING";
                  msgStatus = `temos ${client.guilds.get('419155099332640770').memberCount} membros 😍`;
              }else if(n===25)
              {
                  typeStatus = "STREAMING";

                  msgStatus = 'Habbop em manutenção! 😄';
               
              } else if (n === 35) {
                n = 0;
            }
            client.user.setActivity(msgStatus, { type: typeStatus , url: 'http://twitch.tv/#'});
            

        }, 1000);
    });
}