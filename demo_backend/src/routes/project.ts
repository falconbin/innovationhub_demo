var express = require('express');
var router = express.Router();
import { Project } from "../entity/project";
import { User } from "../entity/user";
import { createConnection} from "typeorm";
router.post('/', (req, res) => {
    createConnection().then( connection => {
        const project: Project = new Project()
        project.name = "innovationhub"
        project.description = "innovation hub"
        const user = new User()
        user.age = 12
        user.gender = "female"
        user.name="Lyn"
        let users: User[] = []
        users.push(user)
        project.users = users
        connection.getRepository(Project).save(project).then( project => {
            res.send(project)
        })
    })

});
module.exports = router
