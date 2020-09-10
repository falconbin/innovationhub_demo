import { Department } from "src/entity/department"
import { User } from "src/entity/user"
import { EntityRepository, Repository } from "typeorm"

@EntityRepository(User)
export class UserCustomRepository  extends Repository<User>{

    async saveUserWithDepartment(user){
        console.log("1111111111")
        return this.save(user)

    }
}