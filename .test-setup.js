require('babel-register')({
    ignore: /node_modules\/(?!lodash\-es)/i
});
const noop = function () {};
require.extensions['.css'] = noop; // If you want to ignore some CSS imports
