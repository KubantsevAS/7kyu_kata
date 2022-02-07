const reverseEachWord = String => String.split(' ').map(word => word.split('').reverse().join('')).join(' ');
let inputString = prompt('Введите текст', );
alert(reverseEachWord(inputString));
