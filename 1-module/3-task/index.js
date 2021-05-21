function ucFirst(str) {
if (str!==''){
    str = str[0].toUpperCase() + str.substring(1)
  }
  else{
    str = '';
  }

  return str;
}
