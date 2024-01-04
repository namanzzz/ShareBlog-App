const router = require("express").Router();


const User = require("../models/User");
const bcrypt = require('bcrypt');

/*MongoDB Login and Resgister Routes*/


//REGISTER
// password should be stored encrypted for security reasons, bcrypt library is used



router.post("/register",
    async (req, res) => {
        try{
            const salt = await bcrypt.genSalt(10);
            const hashedPass = await bcrypt.hash(req.body.password, salt);

            const newUser = new User({
                username: req.body.username,
                email: req.body.email,
                password: hashedPass,
            })


            const user = await newUser.save();
            res.status(200).json(user);

        } catch(err){
            return res.status(500).json(err);
        }
    }
)


// LOGIN

router.post("/login", async(req, res) => {
    try{
        const user = await User.findOne({username: req.body.username});

        const validated = await bcrypt.compare(req.body.password, user.password);

        if(user && validated){
            const { password, ...others } = user._doc;
            return res.status(200).json(others);

            // res.status(200).json("Logged in successfully");
        }
        else{
            return res.status(400).json("Wrong credentials");
        }


    } catch(err){
        return res.status(400).json(err);
    }
    

})



module.exports = router;