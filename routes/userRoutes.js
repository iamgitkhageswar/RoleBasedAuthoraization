const express =require("express")
const router=express.Router()
const verifyToken=require("../middleware/authMiddleware")
const authoraizeRoles=require("../middleware/rolemiddleware")
// Only admin can access
router.route("/admin").get(verifyToken,authoraizeRoles("admin"),(req,res)=>{
    res.json("Welcome Admin")
})

// Only manager can access

router.route("/manager").get(verifyToken,authoraizeRoles("admin","manager"),(req,res)=>{
    res.json("Welcome Manager")
})
// Only user can access

router.route("/user").get(verifyToken,authoraizeRoles("admin","manager","user"),(req,res)=>{
    res.json("Welcome User")
})
module.exports=router