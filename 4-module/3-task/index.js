function highlight(table) {
  for (let i = 0; i < table.rows.length; i++) {

    if (table.rows[i].cells[3].dataset.available == 'true'){
        table.rows[i].classList.add('available')
    }
    else if (table.rows[i].cells[3].dataset.available == 'false'){
        table.rows[i].classList.add('unavailable')
    };
    if (!table.rows[i].cells[3].dataset.available){
      table.rows[i].setAttribute('hidden', 'hidden');
    }

    if (table.rows[i].cells[2].innerText == 'm'){
      table.rows[i].classList.add('male');
    }
    else if (table.rows[i].cells[2].innerText == 'f'){
      table.rows[i].classList.add('female');
    };

    if (table.rows[i].cells[1].innerText < 18){
      table.rows[i].style="text-decoration: line-through";
    }
  }// ваш код...
}
