function namify(users) {
  let array = [];
  for (let key in users){
    array.push(users[key].name);
      }
    return array
}
