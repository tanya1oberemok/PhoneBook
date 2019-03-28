
const express = require('express');
const app = express();
const businessRoutes = express.Router();


let Contacts = require('../models/contacts');

contactsRoutes.route('/add').post(function (req, res) {
  let contacts = new Contacts(req.body);
  contacts.save()
    .then(contacts => {
      res.status(200).json({'contacts': 'contacts in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});


contactsRoutes.route('/').get(function (req, res) {
    Contacts.find(function (err, contactses){
    if(err){
      console.log(err);
    }
    else {
      res.json(contactses);
    }
  });
});

// Defined edit route
contactsRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Contacts.findById(id, function (err, contacts){
      res.json(contacts);
  });
});

//  Defined update route
contactsRoutes.route('/update/:id').post(function (req, res) {
    Contacts.findById(req.params.id, function(err, next, contacts) {
    if (!contacts)
      return next(new Error('Could not load Document'));
    else {
        contacts.firstName = req.body.firstName;
        contacts.lastName = req.body.lastName;
        contacts.phoneNumber = req.body.phoneNumber;
        contacts.email = req.body.email;
        contacts.company = req.body.company;
        contacts.photo = req.body.photo;

        contacts.save().then(contacts => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
contactsRoutes.route('/delete/:id').get(function (req, res) {
    Contacts.findByIdAndRemove({_id: req.params.id}, function(err, contacts){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = contactsRoutes;