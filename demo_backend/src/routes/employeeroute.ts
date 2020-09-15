var express = require('express');
var router = express.Router();
import { Employee } from "src/entity/employee";
import { EmployeeService } from "src/service/employeeservice";
const employeeService: EmployeeService = new EmployeeService();
router.post('/', (req, res) => {
  console.log(req.body);
  const body = req.body
  const employee = new Employee()
  employee.email = body.email
  employee.password = body.password
  employee.eid = body.eid
  employee.role = body.role
  employee.belongto = body.belongto
  employeeService.createEmployee(employee).then(returvalue => {
    if (returvalue) {
      res.send(returvalue)
    } else {
      res.send("error")
    }
  })
});

router.get('/', (req, res) => {
  employeeService.getEmployee().then(employees => {
    if (employees) {
      res.send(employees)
    } else {
      res.send("error")
    }
  })
});

router.get('/eid/:eid', (req, res) => {

  console.log(req.params.eid)
  employeeService.getEmployeeByEidLike(req.params.eid.trim()).then(employees => {
    if(employees){
      res.send(employees)
    }else {
     res.send("error")
    }
  })
});

router.get('/email/:email', (req, res) => {

  console.log(req.params.email)

  employeeService.getEmployeeByEmail(req.params.email).then(employees => {
    if (employees) {
      res.send(employees)
    } else {
      res.send("error")
    }
  })

});
module.exports = router
