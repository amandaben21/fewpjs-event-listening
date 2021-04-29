const input = document.getElementById('input');

function addingEventListener() {    //binds an event listener in addingEventListener()
    input.addEventListener('click', function(event) {
    alert('I was clicked!');
  }); 
}
