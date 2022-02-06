function squareDigits(num){
  return + num.toString().split('').map(item => item ** 2).join('');
}