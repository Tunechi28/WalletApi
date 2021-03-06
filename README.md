# Wallet API

The Wallet App allows users to load their wallet from their Debit cards and transfer of virtual money as a gift to another customer within the platform.. It is built on top of NodeJS and Express. It is higly flexible because it provides users with opportunity to:

- sign up
- sign in
- Change password
- Reset Password
- fund wallet
- transfer or gift money from walllet to another user
- update user profile

# Getting Started

To obtain a copy of this app download or clone the repository at this [url](https://github.com/Tunechi28/WalletApi)

# Prerequisites

You must have

- NodeJs Installed
- Mysql installed or If you have docker installed, run `Make docker`
- A RESTAPI client(like POSTMAN or Insomnia) Installed
- An Internet connection to download the dependencies.

## Installing locally

- (If the repository wasnt cloned)Extract the contents of the downloaded zip file into any suitable location on the computer
- In the command prompt, cd to the root of the directory you extracted the app into
- Run `make install` to install all dependencies
- Run 'npm run dev' to start the application
- In a browser address bar navigate to 'http://localhost:5000', you will see a welcome message.

# Using E-wallet through a restful client

- Open any restful client application initially installed
- Select the appropriate http method. Either GET, POST, PUT

### Signin

- Use the POST method
- Use this url http://localhost:5000/api/signin


### Signup

- Use the POST method
- Use this url http://localhost:5000/api/signup

- As user get signup, he has a wallet automatically created and 

### Reset password

- Use the POST method
- Use this url http://localhost:5000/api/resetpasstoken/:id-:token
- replace id with user id and its token gotten from the logged in user

### Fund Wallet

- Use the POST method
- Use this url http://localhost:5000/api/wallet/credit
- Paystack url is generated and used on the browser

- Use the GET method
- Use this url http://localhost:5000/api/paystack/callback
- A verify payment to update the user balance

### Transfer money from Wallet

- Use the POST method
- Use this url http://localhost:5000/api/transfer/:accountId

### User profile

- Use the PUt method
- Use this url http://localhost:5000/api/profile
- user can upload image that will reside on his dashboard
- user can also have a username

## Built With

- NodeJs
- Express
- MySQL (database)
- Sequelize (ORM)
- AWS (image upload to S3)

## Documentation

- See link to the postman documnentation [url](https://documenter.getpostman.com/view/11574904/UVeMH3aL)

## Author

- Henry Agbasi
