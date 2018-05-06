var 
    a = 3,
    b = 4,
    value = (a * a) - (2 * a * b) - (b * b);

console.log('Zmienna a: ' + a + ' i zmienna b: ' + b + ' po wykonaniu zadania (a * a) - (2 * a * b) - (b * b) daje wynik: ' + value);

var isItpositive = value <= 0 ? 'Zmienna jest ujemna' : 'Zmienna jest dodatnia';

console.log (isItpositive);