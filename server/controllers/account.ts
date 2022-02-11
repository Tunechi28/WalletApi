import model from '../models';
import {Request, Response} from 'express'
import { AccountEntity } from '../Entities/accountEntity';


export default {
  getBalance: async (req, res) => {
    try {
      const data : AccountEntity= await model.Accounts.findOne({
        where: { userId: req.user.user.id},
      });
      return res.send({
        data,
        message: 'Account Detail',
      });
    } catch (error) {
      console.log(error);
    }
  },
}