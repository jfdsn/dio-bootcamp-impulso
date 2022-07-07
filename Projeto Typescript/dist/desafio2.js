"use strict";
// Como podemos melhorar o esse código usando TS? 
var Job;
(function (Job) {
    Job[Job["Padeiro"] = 0] = "Padeiro";
    Job[Job["Atriz"] = 1] = "Atriz";
})(Job || (Job = {}));
var pessoa1 = {
    nome: "Maria",
    idade: 29,
    profissao: Job.Atriz
};
var pessoa2 = {
    nome: "Roberto",
    idade: 19,
    profissao: Job.Padeiro
};
var pessoa3 = {
    nome: "Laura",
    idade: 32,
    profissao: Job.Atriz
};
var pessoa4 = {
    nome: "Calos",
    idade: 19,
    profissao: Job.Padeiro
};
