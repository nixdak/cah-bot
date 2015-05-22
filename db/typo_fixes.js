var models = require('../models');

var question_fixes = [

];

question_fixes.forEach(function(typo_fix) {
  models.Question.findOne({where: {text: typo_fix.wrong_text}}).then(function (question) {
    if (typeof question !== 'undefined') {
      question.update({text: typo_fix.correct_text});
    }
  });
});

var answer_fixes = [
  {
    wrong_text: 'The suden need to conceal a massive boner',
    correct_text: 'The sudden need to conceal a massive boner'
  }
];

answer_fixes.forEach(function(typo_fix) {
  models.Answer.findOne({where: {text: typo_fix.wrong_text}}).then(function (answer) {
    if (typeof answer !== 'undefined') {
      answer.update({text: typo_fix.correct_text});
    }
  });
});
