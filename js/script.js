var a = 0;
var b = 0;
var value = (a * a) - (2 * a * b) - (b * b);
var isItpositive = value < 0 ? 'Zmienna jest ujemna' : 'Zmienna jest dodatnia';

console.log('Zmienna a: ' + a + ' i zmienna b: ' + b + ' po wykonaniu zadania (a * a) - (2 * a * b) - (b * b) daje wynik: ' + value 
+ ' ' + isItpositive);
