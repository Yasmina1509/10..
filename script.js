document.getElementById('addBtn').addEventListener('click', function() {
  let taskInput = document.getElementById('taskInput');
  let task = taskInput.value;
  
  if (task) {
      let li = document.createElement('li');
      let checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      li.appendChild(checkbox);
      li.appendChild(document.createTextNode(' ' + task));
      
      document.getElementById('taskList').appendChild(li);
      taskInput.value = '';
  }
});