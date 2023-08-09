const sassdoc = require('sassdoc');

sassdoc('./scss', {
  dest: 'docs',
  package: {
    title: 'ryzen-ui',
    name: 'ryzen-ui',
    version: '0.0.1',
    license: 'MIT License',
    homepage: '',
    description: 'Ryzen framework Css',
  },
  verbose: true,
}).then(
  function () {
    console.log('Your documentation has been generated!');
  },
  function (err) {
    console.error(err);
  }
);
