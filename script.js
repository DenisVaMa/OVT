// Fetch the verbs from the JSON file
fetch('verbs.json')
  .then(response => response.json())
  .then(data => {
    // Use the fetched verbs in the script
    const verbs = data;
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

    
  })
  .catch(error => console.error('Error fetching verbs:', error));


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