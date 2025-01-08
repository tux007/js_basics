let title = document.getElementById('website_title');

console.log(title.innerHTML);

title.innerHTML = "Hallo Welt";

document.getElementById('test_div').innerHTML = '<p>Test</p>';

// Neuen Button erstellen und ihm eine ID zuweisen
let button = document.createElement('button');
button.id = 'myButton';
button.innerHTML = 'Click Me';

// Button zu einem bestehenden div hinzufügen
document.getElementById('test_div').appendChild(button);