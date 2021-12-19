function qualquer(){};

const qualquer1 = function (){};

const array = [function(c,d) {return c + d }, qualquer , qualquer1];
console.log(array[0](10,10));

