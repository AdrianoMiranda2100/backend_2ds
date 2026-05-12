//Funções com retorno exigem "return"
//podemos retornar qualquer tipo de valor
//podemos retorna usando template literals
const nomeProduto = 'camiseta'
const preco = 35.9

function dadosProduto(){
    return 'Produto: ${nomeProduto}, por apenas ${preco}'
}
const produtoFinal = dadosProduto()

