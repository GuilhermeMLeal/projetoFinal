/*
var num = 1;  
// Artimética(+(soma), -(subtração), *(multiplicação), elevado(**), /(divisão), %(operador de módulo ou operador de resto))
if(num >1){ //Se um num for maior que 1
    console.log(0) //mostre 0
} else if(num>=2){ //Se um num for maior ou igual que 2
    console.log(3); //mostre 4
} else if (num<1){ //Se um num for menor que 1
    console.log(4) //mostre 4
} else if (num === 5){ //Se um num for igual ao outro em valor literal 
    console.log(num) //mostre num
} else { //Se não
    console.log("Erro de dado") //Mostre erro de dado
}

 console.log(num==1?num = 2: num=0) // Operador ternário, fazendo um tipo de pergunta e se estiver correta, 
 //vai cair na primeira alternativa antes dos 2 pontos ou se não depois dos 2 pontos

 switch(num) {
    case num ==2: //caso o numero seja igual a 2, quebre
      break;
    case num>2: //caso o numero seja maior que 2, quebre
      break;
    case num>=1:
        console.log('O numero é igual ou maior que 1') 
  }


  let x = 5;//Atribuição (=): A operação de atribuição é usada para atribuir um valor a uma variável

  //Aritméticas: JavaScript suporta operações aritméticas básicas, como adição (+), subtração (-), multiplicação (*), divisão (/) e o operador de resto (%).
  let a = 10 + 5; // a recebe o valor 15
    let b = a - 3; // b recebe o valor 12
    let c = b * 2; // c recebe o valor 24
    let d = c / 4; // d recebe o valor 6
    let e = d % 3; // e recebe o valor 0 (resto da divisão de d por 3)

    //Comparação: JavaScript tem operadores de comparação para comparar valores. Eles retornam um valor booleano (true ou false).
    let num1 = 5;
    let num2 = 10;
    let num3 = "5";
    let num4 = 5;

    console.log(num1 === num2); // false (igualdade estrita)
    console.log(num1 !== num2); // true (diferente estrito)
    console.log(num1 == num3); // true (igualdade solta)
    console.log(num1 === num4 ); // true (igualdade estrita)

    //Lógicas: JavaScript suporta operadores lógicos para combinar ou negar expressões booleanas. Os operadores lógicos incluem AND (&&), OR (||) e NOT (!).
    let num5 = true;
    let num6 = false;
    let num7 = true;

    console.log(num5 && num6); // false (AND lógico) 
    console.log(num5 || num6); // true (OR lógico)
    console.log(!num7); // false (NOT lógico)

    var number = 1.2
    var number =1//Number (números reais(com vírgula) e inteiros) 
    var charac = "a"//Caracterer (char, uma única letra) 
    var string = "Esta é uma frase String"//String (Conjunto de caracteres) 
    var bool = false ; var bool1=true;//Boolean (Valor lógico verdadeiro ou falso) 
    var nul1=null; //Null (valor nulo) 
    var Undefined;//Undefined (Indefinido, na qual uma variável é declarada, mas não definida)



    for (let i = 0; i < 5; i++) { 
        console.log(i); // o bloco de código dentro do "for" será repetido cinco vezes, imprimindo os números de 0 a 4 no console.
      }

    let i1 = 0;

    while (i1< 5) {
    console.log(i1); //o bloco de código dentro do "while" será repetido enquanto i1 for menor que 5. Ele imprime os números de 0 a 4 no console.
    i++;
    }
   
    let i = 0;

    do {
    console.log(i);
    i++;    //o bloco de código dentro do "do" é executado uma vez, imprimindo 0 no console, 
    //e depois verifica se i é menor que 5. Se a condição for verdadeira, o bloco será repetido até que i seja igual a 5.
    } while (i < 5);

    
    function soma(a, b) {
        return a + b;
      }
      
      let resultado = soma(3, 4); // A função "soma" recebe os argumentos 3 e 4
      console.log(resultado); // Saída: 7
*/
document.addEventListener("DOMContentLoaded", function() {
  var typed = new Typed("#logoT", {
    strings: ["Primeiro semestre ADS-SENAI", "Seja bem-vindo ao site de Guilherme Martins"],
    typeSpeed: 60,
    backSpeed: 60,
    loop: false
  });
});

