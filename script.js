const verbs = [
    { infinitive: 'zijn', pastTense: 'was' },
    { infinitive: 'hebben', pastTense: 'had' },
    { infinitive: 'kunnen', pastTense: 'kon' },
    { infinitive: 'mogen', pastTense: 'mocht' },
    { infinitive: 'zullen', pastTense: 'zou' },
    { infinitive: 'doen', pastTense: 'deed' },
    { infinitive: 'zeggen', pastTense: 'zei' },
    { infinitive: 'krijgen', pastTense: 'kreeg' },
    { infinitive: 'gaan', pastTense: 'ging' },
    { infinitive: 'staan', pastTense: 'stond' },
    { infinitive: 'komen', pastTense: 'kwam' },
    { infinitive: 'nemen', pastTense: 'nam' },
    { infinitive: 'geven', pastTense: 'gaf' },
    { infinitive: 'zien', pastTense: 'zag' },
    { infinitive: 'houden', pastTense: 'hield' },
    { infinitive: 'lopen', pastTense: 'liep' },
    { infinitive: 'eten', pastTense: 'at' },
    { infinitive: 'drinken', pastTense: 'dronk' },
    { infinitive: 'slapen', pastTense: 'sliep' },
    { infinitive: 'rijden', pastTense: 'reed' },
    { infinitive: 'vinden', pastTense: 'vond' },
    { infinitive: 'brengen', pastTense: 'bracht' },
    { infinitive: 'kijken', pastTense: 'keek' },
    { infinitive: 'werken', pastTense: 'werkte' },
    { infinitive: 'vragen', pastTense: 'vroeg' },
    { infinitive: 'weten', pastTense: 'wist' },
    { infinitive: 'schrijven', pastTense: 'schreef' },
    { infinitive: 'vallen', pastTense: 'viel' },
    { infinitive: 'slaan', pastTense: 'sloeg' },
    { infinitive: 'denken', pastTense: 'dacht' },
    { infinitive: 'maken', pastTense: 'maakte' },
    { infinitive: 'horen', pastTense: 'hoorde' },
    { infinitive: 'vliegen', pastTense: 'vloog' },
    { infinitive: 'snijden', pastTense: 'sneed' },
    { infinitive: 'kopen', pastTense: 'kocht' },
    { infinitive: 'verkopen', pastTense: 'verkocht' },
    { infinitive: 'sluiten', pastTense: 'sloot' },
    { infinitive: 'ontvangen', pastTense: 'ontving' },
    { infinitive: 'verliezen', pastTense: 'verloor' },
    { infinitive: 'vergeten', pastTense: 'vergat' },
    { infinitive: 'beginnen', pastTense: 'begon' },
    { infinitive: 'zingen', pastTense: 'zong' },
    { infinitive: 'springen', pastTense: 'sprong' },
    { infinitive: 'dragen', pastTense: 'droeg' },
    { infinitive: 'trekken', pastTense: 'trok' },
    { infinitive: 'duiken', pastTense: 'dook' },
    { infinitive: 'vinden', pastTense: 'vond' },
    { infinitive: 'liggen', pastTense: 'lag' },
    { infinitive: 'zitten', pastTense: 'zat' },
    { infinitive: 'grijpen', pastTense: 'greep' },
    { infinitive: 'lopen', pastTense: 'liep' },
    { infinitive: 'verstaan', pastTense: 'verstond' },
    { infinitive: 'staan', pastTense: 'stond' },
    { infinitive: 'vragen', pastTense: 'vroeg' },
    { infinitive: 'werpen', pastTense: 'wierp' },
    { infinitive: 'sterven', pastTense: 'stierf' },
    { infinitive: 'zwemmen', pastTense: 'zwom' },
    { infinitive: 'steken', pastTense: 'stak' },
    { infinitive: 'roepen', pastTense: 'riep' },
    { infinitive: 'snijden', pastTense: 'sneed' },
    { infinitive: 'eten', pastTense: 'at' },
    { infinitive: 'drinken', pastTense: 'dronk' },
    { infinitive: 'slapen', pastTense: 'sliep' },
    { infinitive: 'rijden', pastTense: 'reed' },
    { infinitive: 'vinden', pastTense: 'vond' },
    { infinitive: 'brengen', pastTense: 'bracht' },
    { infinitive: 'kijken', pastTense: 'keek' },
    { infinitive: 'werken', pastTense: 'werkte' },
    { infinitive: 'vragen', pastTense: 'vroeg' },
    { infinitive: 'weten', pastTense: 'wist' },
    { infinitive: 'schrijven', pastTense: 'schreef' },
    { infinitive: 'vallen', pastTense: 'viel' },
    { infinitive: 'slaan', pastTense: 'sloeg' },
    { infinitive: 'denken', pastTense: 'dacht' },
    { infinitive: 'maken', pastTense: 'maakte' },
    { infinitive: 'horen', pastTense: 'hoorde' },
    { infinitive: 'vliegen', pastTense: 'vloog' },
    { infinitive: 'snijden', pastTense: 'sneed' },
    { infinitive: 'kopen', pastTense: 'kocht' },
    { infinitive: 'verkopen', pastTense: 'verkocht' },
    { infinitive: 'sluiten', pastTense: 'sloot' },
    { infinitive: 'ontvangen', pastTense: 'ontving' },
    { infinitive: 'verliezen', pastTense: 'verloor' },
    { infinitive: 'vergeten', pastTense: 'vergat' },
    { infinitive: 'beginnen', pastTense: 'begon' },
    { infinitive: 'zingen', pastTense: 'zong' },
    { infinitive: 'springen', pastTense: 'sprong' },
    { infinitive: 'dragen', pastTense: 'droeg' },
    { infinitive: 'trekken', pastTense: 'trok' },
    { infinitive: 'duiken', pastTense: 'dook' },
    { infinitive: 'vinden', pastTense: 'vond' },
    { infinitive: 'liggen', pastTense: 'lag' },
    { infinitive: 'zitten', pastTense: 'zat' },
    { infinitive: 'grijpen', pastTense: 'greep' },
    { infinitive: 'lopen', pastTense: 'liep' },
    { infinitive: 'verstaan', pastTense: 'verstond' },
    { infinitive: 'staan', pastTense: 'stond' },
    { infinitive: 'vragen', pastTense: 'vroeg' },
    { infinitive: 'werpen', pastTense: 'wierp' },
    { infinitive: 'sterven', pastTense: 'stierf' },
    { infinitive: 'zwemmen', pastTense: 'zwom' },
    { infinitive: 'steken', pastTense: 'stak' },
    { infinitive: 'roepen', pastTense: 'riep' },
    { infinitive: 'snijden', pastTense: 'sneed' },
    { infinitive: 'eten', pastTense: 'at' },
    { infinitive: 'drinken', pastTense: 'dronk' },
    { infinitive: 'slapen', pastTense: 'sliep' },
    { infinitive: 'rijden', pastTense: 'reed' },
    { infinitive: 'vinden', pastTense: 'vond' },
    { infinitive: 'brengen', pastTense: 'bracht' },
    { infinitive: 'kijken', pastTense: 'keek' },
    { infinitive: 'werken', pastTense: 'werkte' },
    { infinitive: 'vragen', pastTense: 'vroeg' },
    { infinitive: 'weten', pastTense: 'wist' },
    { infinitive: 'schrijven', pastTense: 'schreef' },
    { infinitive: 'vallen', pastTense: 'viel' },
    { infinitive: 'slaan', pastTense: 'sloeg' },
    { infinitive: 'denken', pastTense: 'dacht' },
    { infinitive: 'maken', pastTense: 'maakte' },
    { infinitive: 'horen', pastTense: 'hoorde' },
    { infinitive: 'vliegen', pastTense: 'vloog' },
    { infinitive: 'snijden', pastTense: 'sneed' },
    { infinitive: 'kopen', pastTense: 'kocht' },
    { infinitive: 'verkopen', pastTense: 'verkocht' },
    { infinitive: 'sluiten', pastTense: 'sloot' },
    { infinitive: 'ontvangen', pastTense: 'ontving' },
    { infinitive: 'verliezen', pastTense: 'verloor' },
    { infinitive: 'vergeten', pastTense: 'vergat' },
    { infinitive: 'beginnen', pastTense: 'begon' },
    { infinitive: 'zingen', pastTense: 'zong' },
    { infinitive: 'springen', pastTense: 'sprong' },
    { infinitive: 'dragen', pastTense: 'droeg' },
    { infinitive: 'trekken', pastTense: 'trok' },
    { infinitive: 'duiken', pastTense: 'dook' },
    { infinitive: 'vinden', pastTense: 'vond' },
    { infinitive: 'liggen', pastTense: 'lag' },
    { infinitive: 'zitten', pastTense: 'zat' },
    { infinitive: 'grijpen', pastTense: 'greep' },
    { infinitive: 'lopen', pastTense: 'liep' },
    { infinitive: 'verstaan', pastTense: 'verstond' },
    { infinitive: 'staan', pastTense: 'stond' },
    { infinitive: 'vragen', pastTense: 'vroeg' },
    { infinitive: 'werpen', pastTense: 'wierp' },
    { infinitive: 'sterven', pastTense: 'stierf' },
    { infinitive: 'zwemmen', pastTense: 'zwom' },
    { infinitive: 'steken', pastTense: 'stak' },
    { infinitive: 'roepen', pastTense: 'riep' },
    { infinitive: 'snijden', pastTense: 'sneed' },
    { infinitive: 'eten', pastTense: 'at' },
    { infinitive: 'drinken', pastTense: 'dronk' },
    { infinitive: 'slapen', pastTense: 'sliep' },
    { infinitive: 'rijden', pastTense: 'reed' },
    { infinitive: 'vinden', pastTense: 'vond' },
    { infinitive: 'brengen', pastTense: 'bracht' },
    { infinitive: 'kijken', pastTense: 'keek' },
    { infinitive: 'werken', pastTense: 'werkte' },
    { infinitive: 'vragen', pastTense: 'vroeg' },
    { infinitive: 'weten', pastTense: 'wist' },
    { infinitive: 'schrijven', pastTense: 'schreef' },
    { infinitive: 'vallen', pastTense: 'viel' },
    { infinitive: 'slaan', pastTense: 'sloeg' },
    { infinitive: 'denken', pastTense: 'dacht' },
    { infinitive: 'maken', pastTense: 'maakte' },
    { infinitive: 'horen', pastTense: 'hoorde' },
    // Добавьте другие глаголы по аналогии
];
let currentVerb = null;

function getRandomVerb() {
    return verbs[Math.floor(Math.random() * verbs.length)];
}

function displayNextQuestion() {
    const verb = getRandomVerb();
    currentVerb = verb;
    document.getElementById('verbToConjugate').innerText = `Введите глагол "${verb.infinitive}" в форме ovt:`;
    return verb.pastTense.toLowerCase();
}

function checkAnswer() {
    const userInput = document.getElementById('userInput').value.toLowerCase();
    const correctAnswer = currentVerb.pastTense.toLowerCase();

    if (userInput === correctAnswer) {
        document.getElementById('result').innerText = 'Правильно!';
    } else {
        document.getElementById('result').innerText = `Неправильно. Правильный ответ: ${correctAnswer}`;
    }

    // Очищаем поле ввода и результат
    document.getElementById('userInput').value = '';
    setTimeout(() => {
        document.getElementById('result').innerText = '';
        displayNextQuestion();
    }, 2000);
}



// Показываем первый вопрос при загрузке страницы
displayNextQuestion();

// Реагируем на нажатие Enter
document.getElementById('userInput').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        checkAnswer();
    }
});