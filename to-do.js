const agregar = document.getElementById('agregar');
const input = document.getElementById('input');
const lista = document.getElementById('lista');

agregar.addEventListener('click', function() {
  const tareainput = input.value.trim();

  if (tareainput === "") {
    alert('Por favor, escribe una tarea');
    return; 
  }

  const li = document.createElement('li');
  li.textContent = tareainput;

  const eliminar = document.createElement('button');
 eliminar.textContent = 'Eliminar';
 eliminar.addEventListener('click', function() {
    li.remove();
  });

  li.appendChild(eliminar);
  lista.appendChild(li);

  input.value = '';

  li.addEventListener('click', function() {
    li.classList.toggle('completed');
  });
});