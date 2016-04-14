/*globals freedom*/

function printToPage(msg) {
  'use strict';
  var logDiv = document.getElementById('log');
  if (typeof msg === 'object') {
    logDiv.innerHTML += JSON.stringify(msg) + '<br />';
  } else {
    logDiv.innerHTML += msg + '<br />';
  }
}

var start = function(PCdemo) {
  'use strict';
  var demo = new PCdemo();
  demo.on('print', function(msg) {
    var lines = msg.split('\n');
    for (var i = 0; i < lines.length; i++) {
      printToPage(lines[i]);
    }
  });
  demo.runDemo();
};

window.onload = function() {
  'use strict';
  freedom('pcdemo.json', {
    'debug': 'log'
  }).then(start);
};
