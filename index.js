"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var ToDoList = /** @class */ (function () {
    function ToDoList() {
        this.lembretes = [];
        this.usuarioAutenticado = false;
    }
    ToDoList.prototype.autenticarUsuario = function (usuario, senha) {
        if (usuario === "usuario" && senha === "senha") {
            this.usuarioAutenticado = true;
            console.log("Usuário autenticado com sucesso!");
        }
        else {
            console.log("Usuário ou senha incorretos. Autenticação falhou.");
        }
    };
    ToDoList.prototype.adicionarLembrete = function (titulo, descricao, dataLimite) {
        if (!this.usuarioAutenticado) {
            console.log("Você precisa se autenticar para adicionar um lembrete.");
            return;
        }
        var dataHoraInsercao = new Date();
        var lembrete = { titulo: titulo, dataHoraInsercao: dataHoraInsercao, dataLimite: dataLimite, descricao: descricao };
        this.lembretes.push(lembrete);
        console.log("Lembrete adicionado com sucesso!");
    };
    ToDoList.prototype.adicionarLembreteDoUsuario = function () {
        var _this = this;
        rl.question('Digite o título do lembrete: ', function (titulo) {
            rl.question('Digite a descrição do lembrete (opcional): ', function (descricao) {
                rl.question('Digite a data limite do lembrete no formato AAAA-MM-DD HH:MM (opcional): ', function (dataLimiteInput) {
                    var dataLimite = dataLimiteInput ? new Date(dataLimiteInput) : undefined;
                    _this.adicionarLembrete(titulo, descricao, dataLimite);
                    rl.close();
                });
            });
        });
    };
    return ToDoList;
}());
var toDoList = new ToDoList();
toDoList.autenticarUsuario("usuario", "senha");
toDoList.adicionarLembreteDoUsuario();
