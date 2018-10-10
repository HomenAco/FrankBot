module.exports = function (client, comando, args,  mensagem, WebHook)
{

    if(comando == "piada") {
        const chat_geral = client.channels.find(ch => ch.id === '469193373647896586');
  
        if (mensagem.channel.id != 469193373647896586) 
        {
        mensagem.delete();
            
            return mensagem.channel.send({
                embed: {
                    color: 0x2BBBBB,
                    description: `È possível executar este comando somente no canal ${chat_geral}`
                }
            }).then(msg => msg.delete(5000));
    }

    var piada = Math.floor((Math.random() * 12) + 1);


    
    
  
        
        switch (piada) 
        {
            case 1:
                WebHook.send("60 num bar, 70 sair 100 pagar, aí mando a polícia 20 buscar. 70 me passar, passe 100 atrapalhar. :smile: ");
                break;
            case 2:
                WebHook.send("Sabe qual é o rei dos queijo? \n O requeijão :smile: ");
                break;
            case 3:
                WebHook.send("O que o pato falou para pata? \n  Vem Qua :smile:");
                break;
            case 4:
                WebHook.send("Por que a velhinha não tem relógio? \n porque ela é SEMHORA :smile:");
                break;
            case 5:
                WebHook.send("Qual é a fórmula da água benta? \n  H DEUS O :smile: ");
                break;
            case 6:
                WebHook.send("Sabe por que o pintinho estava com o pincel? \n porque estava PINTANDO :smile:");
                break;
            case 7:
                WebHook.send("Por que a formiganão tem 5 patas? \n porque se tivesse 5 seria FIVEMIGA :smile:");
                break;
            case 8:
                WebHook.send("Você me ama <3 ? \n A:elephant::elephant:NADA (AMANADA)");
                break;
            case 9:
                WebHook.send("Era uma vez uma ovelha que construiu uma casa com seu pelo e chamou ela de LÃN HOUSE :smile:");
                break;
            case 10:
                WebHook.send("Qual o nome do filme que o homem vivia terminando com as mulheres até que achou uma mulher? \n O EXTERMINADOR :smile:");
                break;
            case 11:
                WebHook.send("Sabe por que o menino colocou açúcar debaixo do travesseiro? \n Porque ele queria ter um sonho");
                break;
            case 12:
                WebHook.send("Chegaram 100 mulheres no céu e Deus disse: - \n Quem já mexeu no celular escondido do marido que chegue mais perto.    \n Noventa e nove mulheres se aproximaram, só uma ficou.  \n E Deus disse:- Traga a surda também! ;smile;");
                break;
        
            
        }
    }

    } 
  

 
