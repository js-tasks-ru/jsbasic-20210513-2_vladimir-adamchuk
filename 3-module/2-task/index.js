function filterRange(arr, a, b) {
  let array = [];
  for (let key in arr){
    if (arr[key] == a) {
      array.push(arr[key]);
    }
    else if ((arr[key] > a) && (arr[key] < b)){
      array.push(arr[key]);
    }
    if (arr[key] == b) {
      array.push(arr[key]);
    }
  }
  return array
}
