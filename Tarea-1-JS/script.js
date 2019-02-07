const save_action = document.getElementById('save');
const name_form = document.getElementById('name');
const type_form = document.getElementById('type');
const date_form = document.getElementById('date');
const amount_form = document.getElementById('amount');
const information = [];

function save() {
  const factura = document.getElementById('factura');
  let fila = '';
  const new_information = {
    name: name_form.value,
    type: type_form.value,
    date: date_form.value,
    amount: amount_form.value,
  };
  information.push(new_information);
  for (let i = 0; i < information.length; i += 1) {
    fila += `<tr><td> ${information[i].name} </td><td>  ${information[i].type} </td><td> ${information[i].date} </td><td> ${information[i].amount} </td></tr>`;
  }
  factura.innerHTML = fila;
}
save_action.addEventListener('click', save);

//falta reset y sumatoria


