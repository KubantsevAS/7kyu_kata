// функция для нахождения суммы наибольшего и наименьшего элемента массива

function sumMaxMin(array){

	// проверяем условие, равна ли длина массива 1

	if (array.length === 1){
  	return array[0];
  }
  
  // максимальный элемент массива:
  
	const maxInArray = array.split(' ').reduce((maxItem, item) => {
		if (item > maxItem) {
  		return +item;
  		}
   	return +maxItem;
  	}, array[0]);
    
    // минимальный элемент массива:
    
  const minInArray = array.split(' ').reduce((minItem, item) => {
  	if (item < minItem){
    	return +item;
    	}
    return +minItem;
    }, array[0]);
    
  return minInArray + maxInArray;
}
let ask = prompt('Введите массив чисел', );
alert(sumMaxMin(ask));
