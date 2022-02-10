import createError from 'http-errors';
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
//@ts-ignore
import helmet from 'helmet';
import signUp from './controllers/userSignUp';
import signIn from './controllers/userSignin';
import forgetPassword from './controllers/forgetPassword';
import resetPassword from './controllers/resetPassword';
import accountRoute from './routes/account';
import getUsersRoute from './routes/getusers';
import transactionRoute from './routes/transaction';
import profileRoute from './routes/profile';
import giftRoute from './routes/gift';

const app = express();
const routes = express.Router()



app.use(helmet());
app.use(cors());
//@ts-ignore
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//@ts-ignore
app.use(cookieParser());

require('dotenv').config();

app.post('/api/signup', signUp);
app.post('/api/signin', signIn);
app.post('/forgetPassword', forgetPassword);
app.post('/resetpasstoken/:id-:token', resetPassword);

app.use('/api', accountRoute);
app.use('/api', getUsersRoute);
app.use('/api', transactionRoute);
app.use('/api', profileRoute);
app.use('/api', giftRoute);

//Welcome Message
routes.route('/').get((req, res) => {
  res.status(200).json({ message: 'Welcome to Verileum' })
})

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err: { message: any; }, req: { app: { get: (arg0: string) => string; }; }, res: { locals: { message: any; error: any; }; }, next: any) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
});

export default app;
