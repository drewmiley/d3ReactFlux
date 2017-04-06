var context = require.context('./test', true, /_spec\.js|jsx$/);
context.keys().forEach(context);