var models = require('../models');

var question_fixes = [

];

question_fixes.forEach(function(typo_fix) {
  models.Question.update({text: typo_fix.correct_text}, {where: {text: typo_fix.wrong_text}});
});

var answer_fixes = [
  {
    wrong_text: 'The suden need to conceal a massive boner',
    correct_text: 'The sudden need to conceal a massive boner'
  },
  {
    wrong_text: 'A Pi̱ata full of error messages',
    correct_text: 'A Piñata full of error messages'
  },
  {
    wrong_text: 'Windering if you made the right decision',
    correct_text: 'Wondering if you made the right decision'
  }
];

answer_fixes.forEach(function(typo_fix) {
  models.Answer.update({text: typo_fix.correct_text}, {where: {text: typo_fix.wrong_text}});
});
