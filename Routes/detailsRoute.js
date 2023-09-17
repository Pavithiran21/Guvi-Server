import express from 'express';
import { AddDetails,DeleteDetails, EditDetails, ViewDetails } from '../Controllers/detailsController.js';
import { Authenticate } from '../Middleware/Authentication.js';


const router = express.Router();
router.post('/add-details',Authenticate,AddDetails);
router.put('/edit-details/:id',Authenticate,EditDetails);
router.get('/view-details/:id',Authenticate,ViewDetails);
router.delete('/delete-details/:id',Authenticate,DeleteDetails);




export default router;