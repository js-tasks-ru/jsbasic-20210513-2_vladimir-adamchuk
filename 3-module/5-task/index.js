function getMinMax(str) {
  let newStr = '';
  let arr1 = [];
  let arr2 = [];
  let arr = [];

    arr1 = str.split(/,| /);
    print('arr1 ' + arr1);
  for (i = 1; i < arr1.length; ++i) {
      if (arr1[i].match(/^-?[1-9].+$/))
        arr.push(arr1[i]);
        print('arr i ' + arr1[i]);
    }

  function getMaxValue(array){
    var max = array[0]; // берем первый элемент массива
    for (var i = 0; i < array.length; i++) { // переберем весь массив
      // если элемент больше, чем в переменной, то присваиваем его значение переменной
      if (max < array[i]) max = array[i];
    }
    // возвращаем максимальное значение
    return max;
  }

// получение минимального элемента массива
  function getMinValue(array){
    var min = array[0];
    for (var i = 0; i < array.length; i++) {
      if (min > array[i]) min = array[i];
    }
    return min;
  }

  print('массив ' + arr);

  min = arr[0];
  max = min;
  for (i = 1; i < arr.length; ++i) {
    if (parseFloat(arr[i]) > parseFloat(max)) max = parseFloat(arr[i]);
    if (parseFloat(arr[i]) < parseFloat(min)) min = parseFloat(arr[i]);
    print('min ' + min);
    print('max ' + max);
  }
  print('MIN ' + min);
  print('MAX ' + max);

 // let min1 = getMinValue(arr);
 // let max1 = getMaxValue(arr);

 // print('min ' + min1);
 // print('max ' + max1);

  let result = {
      min: parseFloat(min),
      max: parseFloat(max)
  }
  return result
}
