//Template literals permite:
//criar um texto interpolando (variáveis e textos)
//O placeholder (modelo) exige: '${}'
const nome = "Luna"
const ListaDeDesejos = ['comer','dormir']
//Ex 01 - Sem template
const meuPerfil1 = "Olá " + nome + " " + "seus desejos: " +ListaDeDesejos
//Ex 02 - Sem template
const meuPerfil2 ='Olá, ${nome}! Seus desejos são: ${ListaDeDesejos}'
console.log(meuPerfil2)