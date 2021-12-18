const valores = [8.7, 9.4 , 6.6 , 5.4];
console.log(valores[0], valores[3]);
console.log(valores[4]);

valores[4] = 10;
console.log(valores);

valores[10] = 9.6;
console.log(valores);
//quantidade do array
console.log(valores.length);

const disciplinas = ["Português" , "Matemática" , "Inglês" , "Química" , "História"];
console.log(disciplinas.length);

disciplinas[5] = "Física";
console.log(disciplinas.length);

disciplinas.push({id: 4} , false, true , null , "Prova");//adiciona elementos no array
console.log(disciplinas);
console.log(disciplinas.length);

const materias = ["Português" , "Matemática" , "Inglês" , "Química" , "História"];
console.log(materias.pop()); //retira último elemento do array
delete materias[0];
console.log(materias);

console.log(typeof materias);



