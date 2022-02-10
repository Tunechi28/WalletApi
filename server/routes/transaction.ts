import express from 'express';
import transaction from '../controllers/transaction';
const { fundWallet, getVerifyWallet } = transaction;
import verifyToken from '../middlewares/verifyToken';
const router = express.Router();

//@ts-ignore
router.post('/wallet/credit', verifyToken, fundWallet);
router.get('/paystack/callback', getVerifyWallet);

export default router;
