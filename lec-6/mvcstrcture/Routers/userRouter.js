const express = require('express');

const { getUsers, addUser, putUser, patchUser , addUsers, getoneUser } = require('../Controller/useController.js');
const Router = express.Router()
Router.get('/getusers', getUsers);
Router.post('/adduser', addUser);
Router.put('/putuser/:id', putUser);
Router.patch('/patchuser/:id', patchUser);
Router.post('/addusers', addUsers);
Router.get('/getoneuser/:id', getoneUser);

module.exports = Router;
// module.exports=userRouter;