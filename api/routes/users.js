const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require('bcrypt');
const Post =    require('../models/Post');
/*MongoDB Login and Resgister Routes*/


//REGISTER


// UPDATE USER

router.put("/:id",
    async (req, res) => {
        if(req.body.userId == req.params.id)
         {  
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(req.body.password, salt);
            try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            }, {new:true});
            res.status(200).json(updatedUser);

        } catch (err) {
            return res.status(500).json(err);
        }
    }
    else res.status(401).json("You can update only your account")
    }
)



// DELETE A USER

router.delete("/:id",
    async (req, res) => {
        if (req.body.userId == req.params.id) {
            try{
                const user = await User.findById(req.params.id);
                try {
                    await Post.deleteMany({username: user.username});
                    await User.findByIdAndDelete(req.params.id);
                    res.status(200).json("User has been deleted");

                } catch (err) {
                    return res.status(500).json(err);
                }

            } catch(err){
                return res.status(104).json("user not found")
            }

            
        }
        else res.status(401).json("You can delete only your account")
    }
)

// GET ONE USER

router.get("/:id", async(req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        const {password, ...others} = user._doc;
        res.status(200).json(others);

    } catch(err){
        res.status(500).json(err);
    }
}

)



module.exports = router;