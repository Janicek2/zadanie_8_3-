var a = 0;
var b = 0;
var value = (a * a) - (2 * a * b) - (b * b);

if ( value > 0 ) {
    var isItpositive = 'Liczba większa od zera'
} else if ( value < 0 ) {
    var isItpositive = 'Liczba mniejsza od zera'
} else {
    var isItpositive = 'Liczba to zero'
}



console.log('Zmienna a: ' + a + ' i zmienna b: ' + b + ' po wykonaniu zadania (a * a) - (2 * a * b) - (b * b) daje wynik: ' + value 
+ ' ' + isItpositive);
