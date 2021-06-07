function showSalary(users, age) {
  let ex = '';
  let arr = [];
  for (let key in users){
      if ((users[key].age < age) || (users[key].age == age)){
        ex = users[key].name + ', ' + users[key].balance;
        arr.push(ex);
      }
  }
  return arr.join('\n');
}
