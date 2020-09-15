var express = require('express');
var router = express.Router();
import { UserService } from "../service/user.service"
import { User } from '../entity/user';

const userService: UserService = new UserService();
router.post('/', (req, res) => {  
  console.log("add user")
  console.log(req.body);
  const body = req.body
  const user: User = new User()
  user.name = body.name
  user.gender = body.gender
  user.age = body.age
  userService.createUser(user).then((data) => {
    if (data) {
      res.send(data)
    } else {
      res.send("error")
    }
  });

  // const department: Department = new Department()
  // department.departname = "CIO"
  // department.description = "slfjlskfs";
  // userService.createOrUpdateEntity<Department>(department).then((data) => {
  //   if (data) {
  //     res.send(data)
  //   } else {
  //     res.send("error")
  //   }
  // });
});

router.post('/user/department', (req, res) => {  
    
  userService.addUserWithDepartment(req.body).then((data) => {
    if (data) {
      res.send(data)
    } else {
      res.send("error")
    }
  });
})

router.get("/id/:id", (req, res) => {
  console.log(req.params.id)
  userService.findUserById(req.params.id).then((user) => {
    if(user){
      res.send(user)  
    }else {
      res.send("error")
    }
  })
});
  router.delete("/id/:id", (req, res) => {
    console.log(req.params.id)
    userService.deleteuser(req.params.id).then((user) => {
      if(user){
        res.send(user)  
      }else {
        res.send("error")
      }
    })
});

router.get("/nagen/:name/:gender", (req, res) => {

  userService.findUserByNameAndGender(req.params.name, req.params.gender).then((users) => {
    if(users) {
      res.send(users)
    }
  })
})
router.get("/test", (req, res) => {
  userService.addUserCascade().then((user) => {
    if(user) {
      res.send(user)
    }
  })
})
module.exports = router
