// função executada ao clicar no botão "pesquisar"
function pesquisar(){

    // cria um string section que pega o elemento section com a classe "resultados-pesquisa" do html
    let section  = document.querySelector(".resultados-pesquisa");

    // cria uma string que pega o campo de pesquisa no front pelo id, o .valeu pega o elemento/valor inserido dentro do input campo-pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // transforma o valor do campo de pesquisa em letra minuscula
    campoPesquisa = campoPesquisa.toLowerCase()

    // inicia uma string vazia para armazenar os resultados, o titulo a descrição, o clima, as atrações e as tags incluidas nos dados
    let resultados = "";
    let titulo ="";
    let descricao="";
    let clima = "";
    let atracoes = "";
    let tags = "";

    // se o campo pesquisa estives vazio, nada irá aparecer
    if(campoPesquisa == ""){
        section.innerHTML = "<p>Nada foi encontrado:(</p>"
        return
    }
    
    // um loop que passa por todos os itens do objeto "dados"
    for(let dado of dados){

        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        clima = dado.clima.toLowerCase()
        atracoes = dado.atracoes.toLowerCase()
        tags = dado.tags.toLowerCase()

        // verifica se o valor digitado corresponde ao título, descrição, clima ou atrações de algum dado
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || clima.includes(campoPesquisa) || atracoes.includes(campoPesquisa) || tags.includes(campoPesquisa)){

            resultados += `
                <div class="item-resultado">  

                <h2> 
                <a href=${dado.link}  target="_blank">${dado.titulo}</a>
                </h2>

                <p class="descricao-meta">${dado.descricao}</p>

                <p class="descricao-meta"><strong>Clima: </strong>${dado.clima}</p>

                <p class="descricao-meta"><strong>Atrações: </strong>${dado.atracoes}</p>

                </div>
                `    
                
                return
        }
    }

    if(!resultados){
        resultados = "<p>Nada foi encontrado:(. Nenhuma informação sobre sua pesquisa foi encontrada no banco de dados</p>"
    }
    
    // atribui os resultados gerados ao html
    section.innerHTML = resultados
        
}

