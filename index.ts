import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

interface Lembrete {
    titulo: string;
    dataHoraInsercao: Date;
    dataLimite?: Date;
    descricao?: string;
}

class ToDoList {
    private lembretes: Lembrete[] = [];
    private usuarioAutenticado: boolean = false;

    autenticarUsuario(usuario: string, senha: string): void {
        if (usuario === "usuario" && senha === "senha") {
            this.usuarioAutenticado = true;
            console.log("Usuário autenticado com sucesso!");
        } else {
            console.log("Usuário ou senha incorretos. Autenticação falhou.");
        }
    }

    adicionarLembrete(titulo: string, descricao?: string, dataLimite?: Date): void {
        if (!this.usuarioAutenticado) {
            console.log("Você precisa se autenticar para adicionar um lembrete.");
            return;
        }

        const dataHoraInsercao = new Date();
        const lembrete: Lembrete = { titulo, dataHoraInsercao, dataLimite, descricao };
        this.lembretes.push(lembrete);
        console.log("Lembrete adicionado com sucesso!");
    }

    adicionarLembreteDoUsuario(): void {
        rl.question('Digite o título do lembrete: ', (titulo) => {
            rl.question('Digite a descrição do lembrete (opcional): ', (descricao) => {
                rl.question('Digite a data limite do lembrete no formato AAAA-MM-DD HH:MM (opcional): ', (dataLimiteInput) => {
                    const dataLimite = dataLimiteInput ? new Date(dataLimiteInput) : undefined;
                    this.adicionarLembrete(titulo, descricao, dataLimite);
                    rl.close();
                });
            });
        });
    }
}

const toDoList = new ToDoList();

toDoList.autenticarUsuario("usuario", "senha");

toDoList.adicionarLembreteDoUsuario();
