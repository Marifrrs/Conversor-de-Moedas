function conv(){
    let valor = parseFloat(document.getElementById("valor").value);
    let moeda = document.getElementById("moeda").value;
    let resultadoElement = document.getElementById("resultado");
    let resultado;

    switch(moeda){
        case 'Dollar':
        resultado = valor / 5;
        resultadoElement.innerText = "$" + resultado.toFixed(2);
        break;
        case 'Euro':
        resultado= valor / 6;
        resultadoElement.innerText = "€" + resultado.toFixed(2);
        break;
        case 'Libra':
        resultado = valor / 6.75;
        resultadoElement.innerText = "£" + resultado.toFixed(2);
        break;
        case 'Iene':
        resultado = valor / 0.034;
        resultadoElement.innerText = "¥" + resultado.toFixed(2);
        break;
        default:
            alert ("Insira uma moeda válida!");
            return;
    }
}