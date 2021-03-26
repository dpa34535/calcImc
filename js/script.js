const elementoForm = document.getElementById("form");

elementoForm.addEventListener('submit', function CalcularImc(evento){
    evento.preventDefault();

    let peso = TratarPeso();

    let altura = TratarAltura();

    let imc = PegarImc(peso, altura);

    let resultado = "";

    let letra = "";

    let msg = "As categorias sobrepeso, obesidade grau I, II e III foram associadas com aumento no risco de morte por todas as causas. Você é importante, procure ajuda!";

    if(!Number.isNaN(imc)){
        if(peso > 595 || altura > 2.38){
            resultado = "Peso ou altura humanamente impossíveis. O homem mais pesado do mundo chegou a pesar 595kg e o maior, tinha estatura de 2.38m.";
            letra = "b";
            VerificarA(letra, imc, resultado, msg);
            return
        }
        else if(peso < 0.245 || altura < 0.23){
            resultado = "A menor criança a sobreviver nasceu com 23 centímetros e 245 gramas. O peso de uma maça grande.";
            letra = "b";
            VerificarA(letra, imc, resultado, msg);
            return
        }
        else if(imc < 4.7){
            resultado = "IMC menor do que 4,7. O IMC utilizado para controle foi o da criança mais leve do mundo.";
            letra = "a";
            VerificarA(letra, imc, resultado, msg);
            return
        }
        else{
            if(imc < 18.5){
                resultado = "Abaixo do peso.";
            }
            else if(imc >= 18.5 && imc <= 24.9){
                resultado = "Peso normal";
            }
            else if(imc > 24.9 && imc <= 29.9){
                resultado = "Sobrepeso";
                letra = "a";
            }
            else if(imc >= 30.00 && imc <= 34.9){
                resultado = "Obesidade grau I";
                letra = "a";
            }
            else if(imc >= 35 && imc <= 39.9){
                resultado = "Obesidade grau II";
                letra = "a";
            }
            else{
                resultado = "Obesidade grau III";
                letra = "a";
            }
        }
    }
    else{
        letra = "b";
        resultado = "Inválido";
        VerificarA(letra, imc, resultado, msg);
        return;
    }
    VerificarA(letra, imc, resultado, msg);
});

let VerificarA = function (letra, imc, resultado, msg){
    document.querySelector(".resultado-box").innerHTML = "";

    const paragrafo = CriarParagrafo();

    if(letra === "a"){
        paragrafo.className = "resultado-1";
        paragrafo.innerHTML = `${imc.toFixed(2)} = ${resultado}. ${msg}`;
        document.querySelector(".resultado-box").appendChild(paragrafo);
    }
    else if(letra === "b"){
        paragrafo.className = "resultado-1";
        paragrafo.innerHTML = `${resultado}.`;
        document.querySelector(".resultado-box").appendChild(paragrafo);
    }
    else{
        paragrafo.className = "resultado";
        paragrafo.innerHTML = `${imc.toFixed(2)} = ${resultado}`;
        document.querySelector(".resultado-box").appendChild(paragrafo);
    }
}

let CriarParagrafo = function (){
    const paragrafo = document.createElement("p");
    return paragrafo;
}

let TratarPeso = function(){
    let peso = document.getElementById("peso").value;
    peso = peso.replace(",", ".");

    peso = parseFloat(peso).toFixed(3);

    return peso;
}

let TratarAltura = function(){
    let altura = document.getElementById("altura").value;

    altura = altura.replace(",", ".");

    altura = parseFloat(altura).toFixed(2);

    return altura;
}

let PegarImc = function (peso, altura){
   return peso / (altura*altura);
} 