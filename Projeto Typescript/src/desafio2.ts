// Como podemos melhorar o esse código usando TS? 

/*
let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}
*/

//Solução

type Pessoa = {
    nome: string,
    idade: number,
    profissao: Job
}

enum Job {
    Padeiro,
    Atriz
}

let pessoa1: Pessoa = {
    nome: "Maria",
    idade: 29,
    profissao: Job.Atriz
}

let pessoa2: Pessoa = {
    nome: "Roberto",
    idade: 19,
    profissao: Job.Padeiro
}

let pessoa3: Pessoa = {
    nome: "Laura",
    idade: 32,
    profissao: Job.Atriz
}

let pessoa4: Pessoa = {
    nome: "Calos",
    idade: 19,
    profissao: Job.Padeiro
}





