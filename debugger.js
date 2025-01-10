let count = 0;

function init() {
  // debuggerOutput('A');
  // debuggerOutput('A');
  testOne();
  debuggerOutput("init");
  testOne();
  testTwo("testTwo");
  testOne();
}

function testOne() {
  debuggerOutput("testOne");
  //     debuggerOutput('B');
  //     testTwo();
  //     debuggerOutput('B');
  //     debuggerOutput('B');
}

function testTwo(text) {
  debuggerOutput(text);
  testOne();
  // debuggerOutput('C');
  // debuggerOutput('C');
}

function debuggerOutput(text) {
  count++;
  let debuggerLogRef = document.getElementById("debugger_log");
  debuggerLogRef.innerHTML = count + text;
}
