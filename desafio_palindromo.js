function testar(){
    let inputOG = document.getElementById("palindromo").value;
    input = inputOG.replaceAll(" ","");
    let inputCorreto=input.toUpperCase();
    
    const palavra=inputCorreto.split('');
    const palavraInverso=[...palavra].reverse();
    let tam = palavra.length;

    let i = 0;
    for(i=0;i<tam;i++){
        if(palavra[i]==palavraInverso[palavraInverso.length-i-1]){
            console.log(`${palavra[i]} é igual a ${palavraInverso[palavraInverso.length-i-1]}.`)
        } else {
            break;
        }
    }

    if (i==tam){
        alert(`'${inputOG}' é um palindromo!`);
    } else {
        alert(`'${inputOG}' não é um palindromo!`);
    }

    console.log(palavra);
    console.log(palavraInverso);
    console.log(tam);
}