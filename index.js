;(() => {
  'use strict';

  const express = require('express');
  const expressLayouts = require('express-ejs-layouts');
  
  const app = express();
  const PORT = 8080;

  app.use(express.static('public'));
  app.use('/css', express.static(`${__dirname}public/css`));
  app.use('/js', express.static(`${__dirname}public/js`));
  app.use('/img', express.static(`${__dirname}public/img`));

  app.use(expressLayouts);

  app.set('layout extractScripts', true);
  app.set('layout', `${__dirname}/layouts/full-width-layout`);
  app.set('view engine', 'ejs');

  app.get('/', (req, res) => {
    res.render('home', { title: 'Simple CMS' });
  });

  app.get('/about', (req, res) => {
    res.render('about', { title: 'Simple CMS - about', layout: `${__dirname}/layouts/sidebar-layout` });
  });

  app.listen(PORT, error => {
    try {
      if (!error) {
        console.info(`Server running on: http://localhost/:${PORT}`);
      } else {
        throw new Error(error);
      }
    } catch (error) {
      throw new Error(error.message);
    }
  });

})();
