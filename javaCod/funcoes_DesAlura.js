
 let palavraFinal_Orig;
 let palavraFinal_Enc;
 let primeiraTroca;
 let segundaTroca;
 
function ispalavra_Original() {
    var palavra_Original = document.getElementById ("criptografar");
    var minhapalavra = palavra_Original.value;
    primeiraTroca = minhapalavra.replace(/e/gi,'enter').replace(/i/gi, 'imes').replace(/a/gi, 'ai').replace(/o/gi,'ober').replace(/u/gi, 'ufat');
    palavraFinal_Orig = primeiraTroca;

    document.getElementById('respostas').value=primeiraTroca;
    palavra_Original.value =""; //limpar apos o teste, pois ta dentro da função e ao acabar fará esse operação
    palavra_Original.focus();//coloca novamente o foco


   }

function ispalavra_Encripitada() {
    var palavraCript = document.getElementById ("criptografar");
    var minhaEncriptada = palavraCript.value;
    segundaTroca = minhaEncriptada.replace(/enter/gi,'e').replace(/imes/gi, 'i').replace(/ai/gi, 'a').replace(/ober/gi,'o').replace(/ufat/gi, 'u');
    palavraFinal_Enc = segundaTroca;
   
    document.getElementById('respostas').value=segundaTroca;
    palavraCript.value =""; //limpar apos o teste, pois ta dentro da função e ao acabar fará esse operação
    palavraCript.focus();//coloca novamente o foco
}

