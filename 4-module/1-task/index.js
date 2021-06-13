function makeFriendsList(friends) {
  let cole = '';
  let element = document.createElement("ul");
  print('cole1');
  for (let key in friends){
    //cole = cole + `<li>${friends[key].firstName} ${friends[key].lastName}</li>\n`;
    element.innerHTML = element.innerHTML + `<li>${friends[key].firstName} ${friends[key].lastName}</li>\n`;

  }
  print ('cole ' + element);

  return element
}
