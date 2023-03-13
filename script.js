const text = "Hello World! Did you know that the world is round?";
const regex = /World/;
const regexLog = regex.replace("/", " ");

if( regex.test(text) ) {
    console.log(`Texto ${regexLog} encontrado!`);
}    

// qual é a ordem da palavra encontrada?
console.log(text.search(regex));  // retorna a chave da palavra encontrada