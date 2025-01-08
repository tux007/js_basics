let title = document.getElementById('website_title');

console.log(title.innerHTML);

title.innerHTML = "Hallo Welt";

document.getElementById('test_div').innerHTML = '<p>Test</p>';

document.getElementById('test_div').classList.add('green_bg');
document.getElementById('test_div').classList.remove('green_bg');
document.getElementById('test_div').classList.toggle('green_bg');

// document.getElementById('test_input').setAttribute('value', 123);
document.getElementById('test_input').value = 123;
console.log(document.getElementById('test_input').value);

// Neuen Button erstellen und ihm eine ID zuweisen
let button = document.createElement('button');
button.id = 'myButton';
button.innerHTML = 'Click Me';

// Button zu einem bestehenden div hinzufügen
document.getElementById('test_div').appendChild(button);

function toggleDNone(id) {
    document.getElementById(id).classList.toggle('d_none');
}

document.getElementById('our_p_tag').addEventListener('click', logger);

function logger() {
    console.log(555555);
}
