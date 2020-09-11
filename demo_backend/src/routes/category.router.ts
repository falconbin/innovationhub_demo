import { Question } from "src/entity/question.entity";
import { Category } from "src/entity/category.entity";
import { getConnection } from "typeorm";

var express = require('express');
var router = express.Router();

router.get("/", (req, res) => {

  const question = new Question()
  question.text = "how old are you?"
  question.title = "about your age"
  const question2 = new Question()
  question2.text = "what is your name"
  question2.title = "name"
  const questions = []
  questions.push(question)
  questions.push(question2)
  const category  = new Category();
  category.name = "personal question"
  category.questions = questions
  getConnection().getRepository(Category).save(category).then((cate) =>{
      res.send(cate)
  })
});
module.exports = router
