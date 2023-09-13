let ensinoMedio = prompt("Você tem ensino medio")
let idade = Number(prompt("Qual sua idade?"))
let cursandoFaculdade = prompt("Você está na faculdade")



function verificaFacul (){
    if (ensinoMedio === "Sim" && idade >= 18 && cursandoFaculdade === "Não"){
        console.log("Você pode cursar a faculdade")
    } else {
        console.log("Você não pode cursar a faculdade")
    }
}

verificaFacul("não",16,"não")