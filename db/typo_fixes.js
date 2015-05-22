var models = require('../models');

var question_fixes = [

];

question_fixes.forEach(function(typo_fix) {
  models.Question.update({text: typo_fix.correct_text}, {where: {text: wrong_text}});
});

var answer_fixes = [
  {
    wrong_text: 'The suden need to conceal a massive boner',
    correct_text: 'The sudden need to conceal a massive boner'
  }
];

answer_fixes.forEach(function(typo_fix) {
  models.Question.update({text: typo_fix.correct_text}, {where: {text: wrong_text}});
};
