import { AccountEntity } from '../Entities/accountEntity';
import { UserEntity } from '../Entities/UserEntity';
import model from '../models';

export default {
  transferFund: async (req, res) => {
    try {
      const { accountId } = req.params;
      const { id: userId } = req.user.user;
      const user: UserEntity = await model.Users.findOne({
        where: {
          id: req.user.user.id,
        },
      });
      if (!user) {
        console.log('No user found');
        return res.json({
          message: 'No user found',
        });
      }
      // Get user balance
      const accountDetails: AccountEntity = await model.Accounts.findOne({
        where: { userId: req.user.user.id },
      });
      console.log(accountDetails);
      const { balance } = accountDetails.dataValues;

      const amt: number = parseFloat(balance);
      
      const { amount, description } = req.body;
      console.log('amount', amt);
      if (amt < amount) {
        return res.status(403).json({
          messege: 'ooppss! Oga your balance is low',
        });
      }

      const newBalance: number = amt - parseFloat(amount);
      console.log('amt', amt);
      console.log('amount', amount);
      console.log('newBalanc', newBalance);
      const update = await model.Accounts.update(
        {
          balance: newBalance,
        },
        {
          where: {
            userId,
          },
        }
      );
      console.log('update', update);

      const reciever: UserEntity = await model.Users.findOne({
        where: {
          id: accountId,
        },
      });

      console.log('reciever', reciever);

      const account: AccountEntity = await model.Accounts.findOne({
        where: { userId: accountId },
      });
      console.log('you', account);
      const { balance: bal } = account.dataValues;

      const money: number = parseFloat(bal);
      console.log('amount', money);

      const newBal = money + parseFloat(amount);
      console.log('newBal', newBal);
      console.log('amount', amount);
      console.log('amt', money);
      const secondUpdate: AccountEntity = await model.Accounts.update(
        {
          balance: newBal,
        },
        {
          where: {
            userId: accountId,
          },
        }
      );
      console.log('second', secondUpdate);
      const data = {
        UserId: userId,
        AccountId: +accountId,
        amount: +amount,
        description,
      };
      console.log('data', data);
      await model.Gifts.create(data);
      return res.json({
        data,
        message: 'Gift transfer sucessfully',
      });
    } catch (error) {
      console.log('error', error);
    }
  },
};
