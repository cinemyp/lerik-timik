export const surveyJson = {
  title: 'Лерик и Тимик. История любви',
  firstPageIsStarted: true,
  startSurveyText: 'Начать',
  checkErrorsMode: 'onValueChanged',
  pages: [{
    elements: [{
      type: 'html',
      html: 'Привет, Лерик!<br>Сегодня ровно год назад в ночь на <b>30 апреля</b> мы с тобой повстречались.<br> Я безумно рад, что тогда напился и набрался смелости подойти к тебе.<br>' +
        'Текила выветрилась, а <b>ты до сих пор в моих мыслях</b>.<br>' +
        '<br>Сегодня в годовщину нашего знакомства хочется проверить: помнишь ли ты как все начиналось?<br>' +
        'Будет 10 вопросов о наших отоношениях, а в конце будет... Секрет!<br>' +
        'Как будешь готова, нажми кнопку \'Начать\'<br>' +
        '<br>Целую и крепко обнимаю, твой Тимик❤',
    }],
  }, {
    elements: [{
      type: 'radiogroup',
      name: 'startdate',
      title: 'На какой вечеринке мы познакомились?',
      choices: [
        'Clan Capkan',
        'Student Party',
        'Казантип',
        'Roots',
      ],
      correctAnswer: 'Roots',
      isRequired: true,
      requiredErrorText: 'Нужно выбрать вариант ответа',
    }],
  }, {
    elements: [{
      type: 'radiogroup',
      name: 'caramel',
      title: 'Что на первых свиданиях я приготовил для тебя, чтобы удивить?',
      choicesOrder: 'random',
      choices: [
        'Соленая карамель',
        'Паста',
        'Эчпочмаки',
      ],
      correctAnswer: 'Соленая карамель',
      isRequired: true,
      requiredErrorText: 'Нужно выбрать вариант ответа',
    }],
  }, {
    elements: [{
      type: 'radiogroup',
      name: 'firstphotoplace',
      title: 'В каком месте мы сделали первое совместное фото?',
      choicesOrder: 'random',
      choices: [
        'У тебя',
        'В универе',
        'В Рокко',
        'У меня',
      ],
      correctAnswer: 'В универе',
      isRequired: true,
      requiredErrorText: 'Нужно выбрать вариант ответа',
    }],
  }, {
    elements: [{
      type: 'radiogroup',
      name: 'playtosleep',
      title: 'На каком спектакле я чуть не уснул?',
      choicesOrder: 'random',
      choices: [
        'Гроза',
        'Женитьба Фигаро',
        'Покровские ворота',
      ],
      correctAnswer: 'Женитьба Фигаро',
      isRequired: true,
      requiredErrorText: 'Нужно выбрать вариант ответа',
    }],
  }, {
    elements: [{
      type: 'radiogroup',
      name: 'petsnames',
      title: 'Как мы хотим назвать наших будущих питомцев?',
      choicesOrder: 'random',
      choices: [
        'Мастер и Маргарита',
        'Хрюкич и Жопич',
        'Валентин и Микаэла',
        'Биба и Боба',
      ],
      correctAnswer: 'Биба и Боба',
      isRequired: true,
      requiredErrorText: 'Нужно выбрать вариант ответа',
    }],
  }, {
    elements: [{
      type: 'radiogroup',
      name: 'pechtimes',
      title: 'Сколько раз мы были в ресторане Печь?',
      choicesOrder: 'random',
      choices: [
        '5',
        '15',
        '10',
        '13',
      ],
      correctAnswer: '10',
      isRequired: true,
      requiredErrorText: 'Нужно выбрать вариант ответа',
    }],
  }],
  completedHtmlOnCondition: [{
    expression: '{correctAnswers} < 3',
    html: '<h4>Мухлюем? Ладно, все хорошо, можешь попробовать еще раз, но я все равно тебя люблю!</h4>',
  }, {
    expression: '{correctAnswers} >= 3 && {correctAnswers} != {questionCount}',
    html: '<h4>Уже хорошо! Осталось немного, поднапряжем попку, туц туц туц</h4>',
  }, {
    expression: '{correctAnswers} == {questionCount}',
    html: '<h4>Мои поздравления! Ты на все вопросы ответила верно! Принцесса королева!</h4><br>' +
      '<h4>Приглашаю сегодня в 20:00 в стейк-хаус "Прайм" на прекрасный вечер вдвоем</h4><br>' +
      '<h4>Жду, твой Тимик!</h4>' +
      '<i>Заеду за тобой, так что будь готова в 19:30 :*</i>',
  }],
}