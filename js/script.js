const elemento = document.getElementById('cardapio')
const divisao = document.getElementById('menu')

elemento.addEventListener('mouseover', function(){
    divisao.style.display = 'block'
})
divisao.addEventListener('mouseleave', function(){
    divisao.style.display = 'none'
})