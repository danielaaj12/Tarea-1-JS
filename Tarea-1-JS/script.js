(function () {
  const reset_action = document.getElementById('reset');
  const save_action = document.getElementById('save');
  const name_form = document.getElementById('name');
  const type_form = document.getElementById('type');
  const date_form = document.getElementById('date');
  const amount_form = document.getElementById('amount');
  const information = [];
  const bill_general = document.getElementById('bill_general');

  function reset() {
    name_form.value = ' ';
    amount_form.value = ' ';
    date_form.value = ' ';
    type_form.value = ' ';
  }
  function save() {
    const bill_general = document.getElementById('bill_general');
    let bills_information = '';
    const new_information = {
      name: name_form.value, type: type_form.value, date: date_form.value, amount: amount_form.value,
    };
    information.push(new_information);
    for (let i = 0; i < information.length; i += 1) {
      bills_information += `<tr><td> ${information[i].name} </td><td>  ${information[i].type} </td><td> ${information[i].date} </td><td> ${information[i].amount} </td></tr>`;
    }
    bill_general.innerHTML = bills_information;
  }

  save_action.addEventListener('click', save);
  reset_action.addEventListener('click', reset);
  
  //summatory of bills amounts
  const array = [
    {
      type: 'A',
      amount: 1212
    },
    {
      type: 'B',
      amount: 232
    },
    {
      type: 'C',
      amount: 1212
    },
    {
      type: 'A',
      amount: 232
    },
  ];
  let opciones = ['A', 'B', 'C'];
  let sumaDeAmountsArray = {
    A: 0,
    B: 0,
    C: 0
  };
  for (let i of array) {
    for (let a of opciones) {
      if (i.type === a) sumaDeAmountsArray[a] += i.amount;
    }
  }
  console.log(sumaDeAmountsArray);

}());