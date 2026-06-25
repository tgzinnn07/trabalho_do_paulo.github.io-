let form = document.getElementById("form");
let fila_espera =  JSON.parse(localStorage.getItem("fila_espera")) || [];
let resultado_espera = document.getElementById("resultado_espera");

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    let nome = document.getElementById("nome").value;
    let raca = document.getElementById("raca").value;
    let idade = document.getElementById("idade").value;
    let peso = document.getElementById("peso").value;

    adicionar(nome, raca, idade, peso);
    listar();

    form.reset();
});
function SalvaeFila() {
    localStorage.setItem("fila_espera", JSON.stringify(fila_espera));
}

function adicionar(param_nome, param_raca, param_idade, param_peso) {
    let pessoa = {
        nome: param_nome,
        raca: param_raca,
        idade: param_idade,
        peso: param_peso
    };

    fila_espera.push(pessoa);
    localStorage.setItem("fila_espera", JSON.stringify(fila_espera));
    
}

function listar() {
    resultado_espera.innerHTML = "";

    if (fila_espera.length === 0) {
        resultado_espera.innerHTML =
            "<h2>Não há nenhum animal na fila!</h2>";
        return;
    }

    for (let i = 0; i < fila_espera.length; i++) {
        resultado_espera.innerHTML += `
            <div>
                <h2>
                    Fila ${i + 1} - ${fila_espera[i].nome}
                    (Espécie: ${fila_espera[i].raca}; Idade: ${fila_espera[i].idade} Anos; Peso: ${fila_espera[i].peso} Kg)
                </h2>

                <input
                    type="button"
                    value="Editar Nome"
                    onclick="editarNome(${i})"
                >

                <input
                    type="button"
                    value="Editar Raça"
                    onclick="editarRaca(${i})"
                >
                
                <input
                    type="button"
                    value="Editar Idade"
                    onclick="editarIdade(${i})"
                >

                <input
                    type="button"
                    value="Editar Peso"
                    onclick="editarPeso(${i})"
                >

                <input
                    type="button"
                    value="Excluir"
                    onclick="excluir(${i})"
                >

                <hr>
            </div>
        `;
    }
}
function atender() {
    if (fila_espera.length === 0) {
        alert("Não há ninguém na fila!");
        return;
    }  else {
        localStorage.setItem("fila_espera", JSON.stringify(fila_espera))
    }
    listar();

    let pessoa_atendida = fila_espera.shift();

    alert(
        `Atendendo: ${pessoa_atendida.nome} - Raça: ${pessoa_atendida.raca} - Idade: ${pessoa_atendida.idade} Anos - Peso: ${pessoa_atendida.peso} Kg`
    );

}

function editarNome(fila) {
    let novoNome = prompt(
        "Digite o novo nome:",
        fila_espera[fila].nome
    );

    if (novoNome !== null && novoNome.trim() !== "") {
        fila_espera[fila].nome = novoNome;
        listar();
    } else {
        localStorage.setItem("fila_espera", JSON.stringify(fila_espera))
    }
    listar();
}

function editarRaca(fila) {
     let novoRaca = prompt(
        "Digite a nova raça:",
        fila_espera[fila].raca
    );

    if (novoRaca !== null && novoRaca.trim() !== "") {
        fila_espera[fila].raca = novoRaca;
        listar();
    } else {
        localStorage.setItem("fila_espera", JSON.stringify(fila_espera))
    }
    listar();
}
function editarIdade(fila) {
     let novoIdade = prompt(
        "Digite a nova idade:",
        fila_espera[fila].idade
    );

    if (novoIdade !== null && novoIdade.trim() !== "") {
        fila_espera[fila].idade = novoIdade;
        listar();
    } else {
        localStorage.setItem("fila_espera", JSON.stringify(fila_espera))
    }
    listar();
}
function editarPeso(fila) {
     let novoPeso = prompt(
        "Digite o novo peso:",
        fila_espera[fila].peso
    );

    if (novoPeso !== null && novoPeso.trim() !== "") {
        fila_espera[fila].peso = novoPeso;
        listar();
    }  else {
        localStorage.setItem("fila_espera", JSON.stringify(fila_espera))
    }
    listar();
}

function excluir(fila) {
    let confirmar = confirm(
        `Deseja excluir ${fila_espera[fila].nome}?`
    );

    if (confirmar) {
        fila_espera.splice(fila, 1);
        listar();
    } else {
        localStorage.setItem("fila_espera", JSON.stringify(fila_espera))
    }
    listar();
}