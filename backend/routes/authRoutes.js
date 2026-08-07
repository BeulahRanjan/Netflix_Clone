import express from 'express';
import { signupValidator, loginValidator } from '../helpers/authValidator.js';
import { signup, login,logout,authCheck } from '../controllers/authController.js';
import { validate } from '../middleware/validate.js';
import {protectRoute} from '../middleware/protectRoute.js';
const router = express.Router();

router.post('/signup', signupValidator,validate, signup);
router.post('/login', loginValidator,validate, login);
router.post('/logout', logout);
router.get('/auth-check', protectRoute, authCheck);

export default router;