module.exports = (app) => {
  const contacts = require('../contacts.controller');

  app.post('/contacts', contacts.create);

  app.get('/contacts', contacts.findAll);

  app.get('/contacts/:contactId', contacts.findOne);

  app.put('/contacts/:contactId', contacts.update);

  app.delete('/contacts/:contactId', contacts.delete);
}