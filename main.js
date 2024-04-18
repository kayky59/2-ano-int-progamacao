const dataAtual=new Date();
let dataObjetivo=prompt("Data final Ano-Mes-Dia Ex:2024-04-10");
dataObjetivo=new Date(dataObjetivo+"T23:59:59")
let diaQueFaltam=Math.floor((dataObjetivo-dataAtual)/86400000);
document.querySelector("#dias_restantes").texContent=diasQueFaltam;