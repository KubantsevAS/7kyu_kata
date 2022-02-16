// функция для нахождения суммы наибольшего и наименьшего элемента массива

function sumMaxMin(array){
	if (array.length === 1){
  		return array[0];
  	}
	let result = array.split(' ').map(Number).sort((a, b) => a - b); 
	return result[0] + result[result.length - 1];
}
let inputNum = prompt('Введите массив чисел', );
alert(sumMaxMin(inputNum));

  /* old solution
  
	максимальный элемент массива:
  
	const maxInArray = array.split(' ').reduce((maxItem, item) => {
		if (item > maxItem) {
  			return +item;
  		}
   		return +maxItem;
  		}, array[0]);
    
	минимальный элемент массива:
    
	const minInArray = array.split(' ').reduce((minItem, item) => {
  		if (item < minItem){
    			return +item;
    		}
		return +minItem;
		}, array[0]);
	
	return minInArray + maxInArray;
}
*/
