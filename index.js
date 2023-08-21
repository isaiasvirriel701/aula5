/*
*primero programa java script
*Isaias Virriel
*/

console.log("ola mundo")
prompt("qual e seu nome?");
const VariavelA = 100;
const VariavelB = VariavelA + 50;
const VariavelC = VariavelA / VariavelB;
console.log(VariavelA);
console.log(VariavelB);
console.log(VariavelC);

let numero = 5;
console.log(numero);
numero = 120;
console.log(numero);

//Concatenar textos
/*
let nome ="Isaias";
let sobreNome = "Virriel";
let idade = 16;
console.log("ola" , nome, sobreNome, "voce tem ", idade, "anos");
 */
//booleanas
const variavelFalsa = false;
const variavelVerdadeira = true;

console.log("Variavel falsa:" + variavelFalsa);
console.log("variavel verdadeira: " + variavelVerdadeira);
// Primer exercicio 
let nome ="Isaias";
let sobreNome ="virriel";
let idade = 16; 
let estudante = "estudante";

console.log(nome ,sobreNome ,"eu tenho", idade, "sou", estudante);


//typeof
console.log(typeof nome);
console.log(typeof estudante);
console.log(typeof sobreNome);

let banana;
console.log(typeof banana);
banana = "fruta";
console.log(typeof banana);

const vazio = null;
console.log(typeof vazio);


//PROMPT

let valor = prompt("seu nome");
console.log(valor);
