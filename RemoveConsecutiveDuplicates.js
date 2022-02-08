// функция очищает строку от повторяющихся подряд элементов

const removeConsecutiveDuplicates = s => s.split(' ').filter((item, index, s) =>
    s[s.indexOf(item)] !== s[index+1]).join(' ');
