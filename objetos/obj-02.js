// A partir do objeto de exemplo crie:
// Um objeto com o tema à sua escola
// deve possuir no mínimo 6 propriedades
// imprima de um jeito amigável:
// Ex.: console.log("Cor do veículo: " + carro.cor)

const { captureOwnerStack } = require("react")

const carro = {
    Marca: "Dodge",
    Modelo: "Challenger hellcat",
    Motor: V8,
    CV: 727,
    Litragens: 6.2,
    Ano: 2026,
}
console.log("Marca: "+carro.Marca)
console.log("Modelo: " +carro.Modelo)
console.log("Motor: "+carro.Motor)
console.log("CV: "+carro.CV)
console.log("Litragens: "+carro.Litragens)
console.log("Ano: "+carro.Ano)
