const form = document.querySelector('form');
const ul = document.querySelector('ul');
const input = document.querySelector('input');
const closeAviso = document.querySelector('#close-aviso');
const deletarItem = document.querySelector('#deletar-item');


form.onsubmit = (event) => {
  event.preventDefault();
  if (input.value === '') {
    alert('Por favor, insira um item!');
   
  }else{
  const newItem = document.createElement('li');
  const span = document.createElement('span');
  const newInput = document.createElement('input');
  const newImg = document.createElement('img');
  newImg.src = 'Frame.png';
  
  newInput.type = 'checkbox';
  newInput.id = 'close-aviso';
  span.appendChild(newInput);
  span.append(input.value)
  newItem.append(span);
  newItem.appendChild(newImg);
  ul.appendChild(newItem);
  input.value = ""
 
  }
  
 
}
  
deletarItem.onclick = () => {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  checkboxes.forEach((checkbox) => {
    checkbox.parentNode.parentNode.remove();
    document.querySelector("#aviso").style.display = 'flex'
  });
}

closeAviso.onclick = () => {
  document.querySelector("#aviso").style.display = 'none'

}