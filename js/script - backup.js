const elementoForm = document.getElementById("form");

elementoForm.addEventListener('submit', function CalcularImc(evento){

    evento.preventDefault();

    let peso = document.getElementById("peso").value;

    let altura = document.getElementById("altura").value;

    peso = peso.replace(",", ".");

    peso = parseFloat(peso).toFixed(3);

    altura = altura.replace(",", ".");

    altura = parseFloat(altura).toFixed(2);

    let imc = peso / (altura*altura);

    let resultado = "";
    let letra = "";
    let msg = "As categorias sobrepeso, obesidade grau I, II e III foram associadas com aumento no risco de morte por todas as causas. Você é importante, procure ajuda!";

    if(!Number.isNaN(imc)){
        if(peso > 595 || altura > 2.38){
            resultado = "Peso ou altura humanamente impossíveis. O homem mais pesado do mundo chegou a pesar 595kg e o maior, tinha estatura de 2.38m.";
            imc = 0;
        }
        else if(peso < 0.245 || altura < 0.23){
            resultado = "A menor criança a sobreviver nasceu com 23 centímetros e 245 gramas. O peso de uma maça grande.";
            imc = 0;
        }
        else if(imc < 4.7){
            resultado = "IMC menor do que 4,7. O IMC utilizado para controle foi o da criança mais leve do mundo.";
            imc = 0;
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
        resultado = "Inválido.";
    }

    if(letra === "a"){
        document.querySelector(".resultado").innerHTML = `${imc.toFixed(2)} = ${resultado}. ${msg}`;
    }
    else{
        document.querySelector(".resultado").innerHTML = `${imc.toFixed(2)} = ${resultado}`;
    }
    
});
