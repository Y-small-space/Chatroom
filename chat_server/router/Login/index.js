const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const User = require('../../models/User/index')

router.post('/login',async (req,res)=>{
    const {username,password} = req.body;

    try {
        const user = await User.findOne({username});

        if(!user){
            return res.status(401).json({error:'用户名或密码不正确'});
        }

        bcrypt.compare(password,user.password,(err,result)=>{
            if(err){
                console.error('密码比较错误：',err);
                return res.status(500).json({error:'登录失败'});
            }
            if(result){
                res.json({message:'登录成功'});
            }else{
                res.status(401).json({error:'用户名或密码不正确'});
            }
        })
    } catch (error) {
        console.log('登录错误:',error);
        res.status(500).json({error:'登录失败'});
    }
    
})

module.exports = router
