var express = require('express');
var router = express.Router();
import { DepartmentService } from "../service/departmentservice"
const departmentService: DepartmentService = new DepartmentService();
router.get("/id/:id", (req, res) => {
  console.log(req.params.id)
  departmentService.findByid(req.params.id).then((user) => {
    if(user){
      res.send(user)  
    }else {
      res.send("error")
    }
  })
});
module.exports = router
