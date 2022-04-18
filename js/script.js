//Header-menu - ativar links

const links = document.querySelectorAll('.header-menu a')

function ativarLink(link) {
    const url = location.href
    const href = link.href
    //Verifica se na url contem o href, independete se tiver paramentro ou não
    if(url.includes(href)){
        link.classList.add('ativo')
    }
}

links.forEach(ativarLink)

// Ativar itens do orçamento

const paramentros = new URLSearchParams(location.search)

function ativarProduto(paramentro) {
    const elemento = document.getElementById(paramentro)
    if(elemento) {
        elemento.checked = true
    }
   
}

paramentros.forEach(ativarProduto)


