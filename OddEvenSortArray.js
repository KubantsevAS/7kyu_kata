// сортировка нечётных и чётных элементов массива

function sortOddEven(array){
	const oddArray = array.split(' ').filter(item => item % 2).sort((a, b) => a - b);
 	const evenArray = array.split(' ').filter(item => !(item % 2)).sort((a, b) => a - b);
	return [...oddArray, ...evenArray];
  }
let inputNum = prompt('Введите массив чисел', );
alert(sortOddEven(inputNum));
