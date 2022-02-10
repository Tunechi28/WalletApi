import express from 'express';
import { UserEntity } from '../Entities/UserEntity';
import model from '../models';

// eslint-disable-next-line consistent-return
export default {
  getAllUsers: async (req, res) => {
    try {
      const data: UserEntity = await model.Users.findAll({
        include: [model.Accounts, model.Profiles],
      });
      return res.send({
        data,
        message: 'List of all Users',
      });
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  },
};
