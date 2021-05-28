function sumSalary(salaries) {
  let a = 0;
  for (let key in salaries) {
    if (!isNaN(salaries[key])) {
    //if (Number.isInteger(salaries[key]){
      if ((+salaries[key]) == salaries[key]) {
        if (isFinite(salaries[key])) {
             a = a + salaries[key];
             print("key " + salaries[key]);
          }
        }
    }
  }
  return a
}
