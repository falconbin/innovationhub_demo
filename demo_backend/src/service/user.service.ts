
import { Connection, getConnection } from 'typeorm';
import { User } from "../entity/user"
import { Department } from 'src/entity/department';
import { UserCustomRepository } from 'src/repository/customuserrepository';
export class UserService {
    // constructor(private dbhelper: DBHelper) {
    //     this.dbhelper = dbhelper;
    // }
    async createUser(user): Promise<User> {
        const connection: Connection = getConnection();

            const inserted = await connection.getRepository(User).save(user);
            if(inserted){
                return inserted;
            }else {
                return null
            }
    }
    async findUserById(id) {
        const connection: Connection = getConnection();
        // await this.dbhelper.closeConnection()
        // const user = await connection.manager.findOne(User,{id: 1})
        const user = await connection.getRepository(User).findOne({id:id}, {relations:["department"]})
        console.log('user', user)
        return user;
    }

    async deleteuser(id) {
        const connection: Connection = getConnection();
        const res = connection.getRepository(User).delete({id:1})
        return res;
    }

    async findUserByNameAndGender(name, gender){

        const connection: Connection = getConnection();
        // return await connection.getRepository(User).createQueryBuilder().
        // select().where("[user].name = :name OR [user].gender = :gender", { name: name, gender: gender }).getMany()
        return await connection.getRepository(User).createQueryBuilder().
        select().where("[user].name = :name OR [user].gender = :gender", { name: name, gender: gender }).getMany()
        
    }
    async addUserCascade() {
        const connection: Connection = getConnection();
        let department = new Department()
        department.departname = "CIO/Innovationhub"
        department.description = "great department"
        let user = new User();
        user.age = 1
        user.gender = "M"
        user.name = "Lyn"
        user.department = department
        let userRepository = await connection.getRepository(User)
        let departmentReposity = await connection.getRepository(Department)
        await departmentReposity.save(department)
        await userRepository.save(user)
        console.log(user)
        return user;
    }

    async addUserWithDepartment(params) {
        const connection: Connection = getConnection();
        const user: User = new User()
        user.name = params.name
        user.gender = params.gender
        user.age = params.age
        const department: Department = new Department()
        department.departname = params.departname
        department.description = params.description
        user.department = department
        const repository = connection.getCustomRepository(UserCustomRepository);
        await repository.saveUserWithDepartment(user)
        console.log(user)
        return user;
    }
}
