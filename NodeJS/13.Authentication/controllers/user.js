const User = require('../models/user');

async function handleUserSignup(req, res) {
    const { name,email, password } = req.body;

    await User.create({
        name,
        email,
        password
    });

    //return res.status(201).json({ message: 'User registered successfully' });
    return res.redirect('/');
}

async function handleUserLogin(req, res) {
   const { email, password } = req.body;
   
   const user = await User.findOne({ email: email });
   if (!user) {
       return res.status(400).json({ message: 'Invalid email or password' });
   }

   if (user.password !== password) {
       return res.status(400).json({ message: 'Invalid email or password' });
   }

   //return res.status(200).json({ message: 'Login successful' });
   return res.redirect('/');
}

module.exports = {
    handleUserSignup,
    handleUserLogin
};