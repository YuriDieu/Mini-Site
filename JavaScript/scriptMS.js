function openModal(cupcake) {
    var txt1 = document.getElementById("txt1");
    var txt2 = document.getElementById("txt2");
    switch (cupcake) {
      case "india":
        txt1.innerHTML  = "India";
        txt2.innerHTML  = 
        "A India conta com uma cultura milenar! É o país mais populoso do mundo e sua capital é Nova Delhi.";
        break;
      case "butao":
        txt1.innerHTML  = "Butão";
        txt2.innerHTML  = 
        "País de cultura maravilhosa!";
        break;
      case "egito":
        txt1.innerHTML  = "Egito";
        txt2.innerHTML  = 
        "Faraós, tumbas, PIRÂMIDES, venha conhecer!";
        break;
      case "tailandia":
        txt1.innerHTML  = "Tailândia";
        txt2.innerHTML  = 
        "Lugar paradisíaco para amantes de paisagens exulberantes";
        break;
    default:
        txt1.innerHTML  = "Países surreais!";    
        txt2.innerHTML  = "Venha conhecer";txt1.innerHTML  = "Não se arrependerá.";

    }
    document.getElementById("knowMore").style.display = "inline-block";
  }
  
function closeModal() {
  document.getElementById("knowMore").style.display = 'none';
}

function mascaraTelefone(event) {
  let tecla = event.key;

  let telefone = event.target.value.replace(/\D+/g, "");

  if (/^[0-9]$/i.test(tecla)) {
    telefone = telefone + tecla;
    let tamanho = telefone.length;

    if (tamanho >= 12) {
      return false;
    }

    if (tamanho > 10) { 
      telefone = telefone.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (tamanho > 5) { 
      telefone = telefone.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (tamanho > 2) { 
      telefone = telefone.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else {
      telefone = telefone.replace(/^(\d*)/, "($1");
    }

    event.target.value = telefone;
  }

  if (!["Backspace", "Delete", "Tab"].includes(tecla)) {
    return false;
  }
}
function getParameters() {

  var params = new Array();
  var paramsRet = new Array();
  var url = window.location.href;
  var paramsStart = url.indexOf("?"); 

  if (paramsStart != -1) {
    
    var paramString = url.substring(paramsStart + 1); 
    paramString = decodeURIComponent(paramString);    
    var params = paramString.split("&"); 
    for (var i = 0; i < params.length; i++) {
      var pairArray = params[i].split("="); 
      if (pairArray.length == 2) {
        paramsRet[pairArray[0]] = pairArray[1];
      }

    }
    return paramsRet;
  }
  return null; 
}