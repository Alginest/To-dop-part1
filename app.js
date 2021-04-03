// select dom
let item = document.getElementById('typer');
const button = document.querySelector('#button');
const list = document.querySelector('.list');
// functions

function toggleToDo() {
// create li
  const ele = document.createElement('li');
  ele.innerText = item;
  ele.classList.add('addings');
  list.appendChild(ele);
// create trash button
  const mark = document.createElement('button');
  mark.innerHTML = '<i class ="fas fa-trash"></i>' ;
  mark.classList.add('mark_button');
  list.appendChild(mark);
// list
}
function deleteCheck (e){
    const item = e.target;
    //delete todo
    console.log(item);
}





// event listeners
button.addEventListener('click', toggleToDo);
item.addEventListener('change', () => {
    item = document.getElementById('typer').value;
});
list.addEventListener('click', deleteCheck);
