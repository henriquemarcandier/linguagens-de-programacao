function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p class='fundo-branco'>Nada foi encontrado. Você precisa digitar o nome, criador, paradigmas ou características de uma linguagem ou parte dele</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let nome = ""; 
    let criador = "";
    let anoCriacao = "";
    let paradigmas = "";
    let caracteristicas = "";
    let i = 0;

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        nome = dado.nome.toLowerCase()
        criador = dado.criador.toLowerCase()
        anoCriacao = dado.anoCriacao
        paradigmas = dado.paradigmas
        caracteristicas = dado.caracteristicas.toLowerCase()
        // se titulo includes campoPesquisa
        if (nome.includes(campoPesquisa) || criador.includes(campoPesquisa) || anoCriacao == campoPesquisa || paradigmas.includes(campoPesquisa) || caracteristicas.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a onclick="verVideo('${dado.youtube}')" style="cursor:pointer;">${dado.nome}</a>
                </h2>`;
                if (dado.img && i % 2 == 0){
                    resultados += `<div class="imagem"><img src="img/${dado.img}" width="150" title="${dado.nome}" onclick="verVideo('${dado.youtube}')" style="cursor:pointer;" class="borda-arredondada"></div>`;
                }
                resultados += `<div class="texto">
                <p class="descricao-meta"><b>Criador:</b> ${dado.criador}</p>
                <p class='descricao-meta'><b>Ano da Criação:</b> ${dado.anoCriacao}</p>
                <p class='descricao-meta'><b>Paradigmas:</b> ${dado.paradigmas}</p>
                <p class='descricao-meta'><b>Características:</b> ${dado.caracteristicas}</p>
                <p class='descricao-meta'><a href="${dado.link}" target="_blank">Maiores Informações</a>`;
            if (dado.youtube){
                resultados += ` <a onclick="verVideo('${dado.youtube}')" style="cursor:pointer;" title="Ver Vídeo"><img src="img/youtube.jpg" width="50" style="border-radius: 25px"></a>`;
            }
            resultados += `</p></div>`;
                if (dado.img && i % 2 == 1){
                    resultados += `<div class="imagem"><img src="img/${dado.img}" width="150" title="${dado.nome}" onclick="verVideo('${dado.youtube}')" style="cursor:pointer;" class="borda-arredondada"></div>`;
                }
                resultados += `
            </div>
        `;
            i++;
        }
    }

    if (!resultados) {
        resultados = "<p class='fundo-branco'>Nada foi encontrado</p>"
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}
  
function verVideo(v){
    document.getElementById('video').style.display = "";
    document.getElementById('video-youtube').innerHTML = '<br><br><br><iframe width="100%" height="450" src="https://www.youtube.com/embed/'+v+'" class="borda-arredondada" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
}

function fecharVideo(){
    document.getElementById('video').style.display = "none";
}