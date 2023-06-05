let questions = [
  {
    question: "Was will Acanà von Anabellánien in Elfenweg erreichen?",
    answer1: "Super reich werden",
    answer2: "Extrem berühmt werden",
    answer3: "Anabellánien befreien",
    answer4: "Schokolade",
    rightAnswer: 3,
    category: "Epic",
    givenAnswer: 0,
  },
  {
    question:
      "Was suchen die Dämonenjänger in Die Kinder der Engel - Dämonenritt?",
    answer1: "Daniels Bruder Zacharias",
    answer2: "Daniels wirklichen Vater",
    answer3: "Den Schatz vom Silbersee",
    answer4: "Schokolade",
    rightAnswer: 1,
    category: "Urban",
    givenAnswer: 0,
  },
  {
    question: "Warum sind Noel Tylls Haare in Von Elfen und Wölfen schlohweiß?",
    answer1: "Weil er sich zu Tode gegruselt hat",
    answer2: "Weil er sie mit maximaler Bleiche behandelt",
    answer3: "Weil er ein Tylwyth Teg ist",
    answer4: "Weil eine Hexe ihn verflucht hat",
    rightAnswer: 3,
    category: "Urban",
    givenAnswer: 0,
  },
  {
    question: "Was möchte Katja von Barbarossa in Irrfahrt ins Gelobte Land?",
    answer1: "Voll viel Geld",
    answer2: "Schutz",
    answer3: "Ein Kind",
    answer4: "Schokolade",
    rightAnswer: 2,
    category: "Historisch",
    givenAnswer: 0,
  },
  {
    question: "Wer ist Giannis Vorbild in Die Masken von Florenz?",
    answer1: "Leonardo da Vinci",
    answer2: "Giuliano de Medici",
    answer3: "Lorenzo de Medici",
    answer4: "Johannes von Gutenberg",
    rightAnswer: 2,
    category: "Historisch",
    givenAnswer: 0,
  },
  {
    question: "Weshalb kommt Leander in Alsterdiamanten nach Hamburg?",
    answer1: "Um den Großen Brand von 1843 zu legen",
    answer2: "Um Sophie Achtmann zu heiraten",
    answer3: "Um der Comtesse de Chambourg zu dienen",
    answer4: "Um sich an den Achtmanns zu rächen",
    rightAnswer: 4,
    category: "Historisch",
    givenAnswer: 0,
  },
  {
    question: "Was sucht der Baron in Der Geist in Brand in halb Europa?",
    answer1: "Seine verschollene Jugendliebe",
    answer2: "Voltaires Briefe",
    answer3: "Die Gunst Katharinas der Großen",
    answer4: "Napoléons wahre Identität",
    rightAnswer: 1,
    category: "Historisch",
    givenAnswer: 0,
  },
  {
    question:
      "Was irritiert Logan so sehr an Jack und Ada in Unheilige Mittel?",
    answer1: "Sie sind außergewöhnlich unhöflich",
    answer2: "Sie sind außergewöhnlich talentiert",
    answer3: "Sie sind außergewöhnlich dumm",
    answer4: "Sie haben keine Moral",
    rightAnswer: 2,
    category: "Thriller",
    givenAnswer: 0,
  },
];

let currentQuestion = 0;
let rightAnswers = 0;

function init() {
  document.getElementById("quizCardRight").innerHTML = /*html*/`<div class="card-body init" id="questionCard">
  <h2 class="initText" onclick="explanationPage()">Willkommen zum großartigen AnderlandBooks Quiz!</h2>
</div>`;
}

function explanationPage() {
  document.getElementById('questionCard').innerHTML = /*html*/ `
    <h4>Es geht um folgende Bücher</h5>
    <br>
  <p>Anna K. Thomas: <b>Elfenweg</b> (Die Sänger von Thurán)<br>
    Anna K. Thomas: <b>Dämonenritt</b> (Die Kinder der Engel)<br>
    Anna K. Thomas: <b>Von Elfen und Wölfen</b><br>
    Anna K. Thomas: <b>Irrfahrt ins Gelobte Land</b><br>
    Anna K. Thomas: <b>Die Masken von Florenz</b><br>
    Anna K. Thomas: <b>Alsterdiamanten</b><br>
    Bree Nan: <b>Unheilige Mittel</b> (Die Geschichte von Jack und Ada)<br>
  </p>
  <br>
  <button onclick="startGame()">Spiel beginnen</button>
  <br>
  <p>Vorsicht - wenn während des Spiels die Seite aktualisiert wird, geht der Fortschritt verloren!</p>
  `;
}

function startGame() {
  document.getElementById("questionCard").classList.remove("init");
  renderCardTemplate();
  renderCardContent();
}

function renderCardTemplate() {
  let card = document.getElementById("questionCard");
  card.innerHTML = /*html*/ `
    <h5 class="card-title" id="questionId"></h5>
              <div id="answerBox1" class="answer mb-4" onclick="answer(1)">
                <div id="letter1" class="greySquare">A</div>
                <div class="card-body" id="answer1Id">
                  
                </div>
              </div>
              <div id="answerBox2" class="answer mb-4" onclick="answer(2)">
                <div id="letter2" class="greySquare">B</div>
                <div class="card-body" id="answer2Id">
                  
                </div>
              </div>
              <div id="answerBox3" class="answer mb-4" onclick="answer(3)">
                <div id="letter3" class="greySquare">C</div>
                <div class="card-body" id="answer3Id">
                  
                </div>
              </div>
              <div id="answerBox4" class="answer mb-4" onclick="answer(4)">
                <div id="letter4" class="greySquare">D</div>
                <div class="card-body" id="answer4Id">
                  
                </div>
              </div>
              <div id="footerQuizApp"></div>
    `;
}

function renderCardContent() {
  renderFooterCard();
  renderQuestion();
  renderAnswers();
  renderSideBar();
}

function renderFooterCard() {
  let footerCard = document.getElementById("footerQuizApp");
  let number = currentQuestion + 1;
  let maxNumber = questions.length;
  footerCard.innerHTML = /*html*/ `
    <button id="backButton${currentQuestion}" onclick="back()" class="buttonQuizApp" disabled>
    <img
      src="./img/arrow_back_ios_FILL1_wght700_GRAD200_opsz24.png"
    />
  </button>
  <div>${number} von ${maxNumber} Fragen</div>
  <button id="forwardButton${currentQuestion}" onclick="forward()" class="buttonQuizApp" disabled>
    <img
      src="./img/arrow_forward_ios_FILL1_wght700_GRAD200_opsz24.png"
    />
  </button>
    `;
    if (currentQuestion == 0) {
      document.getElementById(`backButton${currentQuestion}`).classList.add('displayNone');
    }
}

function renderQuestion() {
  let questionId = document.getElementById("questionId");
  let currentGroup = questions[currentQuestion];
  questionId.innerHTML = `${currentGroup["question"]}`;
}

function renderAnswers() {
  let currentGroup = questions[currentQuestion];
  for (let j = 0; j < 4; j++) {
    n = j + 1;
    let answerLine = document.getElementById(`answer${n}Id`);
    let answer = currentGroup[`answer${n}`];
    answerLine.innerHTML = answer;
  }
}

function renderSideBar() {
  let currentGroup = questions[currentQuestion];
  let category = currentGroup["category"];
  if (category == "Epic") {
    document.getElementById("epic").classList.add("bold");
    document.getElementById("thriller").classList.remove("bold");
    document.getElementById("urban").classList.remove("bold");
  }
  if (category == "Urban") {
    document.getElementById("urban").classList.add("bold");
    document.getElementById("epic").classList.remove("bold");
    document.getElementById("history").classList.remove("bold");
  }
  if (category == "Historisch") {
    document.getElementById("history").classList.add("bold");
    document.getElementById("urban").classList.remove("bold");
    document.getElementById("thriller").classList.remove("bold");
  }
  if (category == "Thriller") {
    document.getElementById("thriller").classList.add("bold");
    document.getElementById("history").classList.remove("bold");
    document.getElementById("epic").classList.remove("bold");
  }
}

function forward() {
  if (currentQuestion != questions.length - 1) {
    currentQuestion = currentQuestion + 1;
    cleanCard();
    renderCardContent();
  } else {
    finalSlide();
  }
}

function back() {
  if (currentQuestion != 0) {
    currentQuestion = currentQuestion - 1;
    cleanCard();
    renderCardContent();
  } else {
    document
    .getElementById(`backButton${currentQuestion}`)
    .classList.remove("active");
  }
}

function answer(selection) {
  let currentGroup = questions[currentQuestion];
  let right = currentGroup["rightAnswer"];
  if (selection == right) {
    correctAnswer(selection);
  } else {
    wrongAnswer(selection, right);
  }
  document
    .getElementById(`forwardButton${currentQuestion}`)
    .removeAttribute("disabled");
  document
    .getElementById(`backButton${currentQuestion}`)
    .removeAttribute("disabled");
  document
    .getElementById(`forwardButton${currentQuestion}`)
    .classList.add("active"); //don't have to remove because auf rendering
 if (currentQuestion != 0) {document
  .getElementById(`backButton${currentQuestion}`)
  .classList.add("active"); //for first question there's no active back-button
}
    
}

function correctAnswer(selection) {
  let currentGroup = questions[currentQuestion];
  currentGroup['givenAnswer'] = 1;
  document.getElementById(`answerBox${selection}`).classList.add("green");
  document.getElementById(`letter${selection}`).classList.add("letterGreen");
  rightAnswers = rightAnswers +1;
}

function wrongAnswer(selection, right) {
  document.getElementById(`answerBox${right}`).classList.add("green");
  document.getElementById(`letter${right}`).classList.add("letterGreen");
  document.getElementById(`answerBox${selection}`).classList.add("red");
  document.getElementById(`letter${selection}`).classList.add("letterRed");
}

function cleanCard() {
  for (i = 1; i < 5; i++) {
    document.getElementById(`answerBox${i}`).classList.remove("green");
    document.getElementById(`answerBox${i}`).classList.remove("red");
    document.getElementById(`letter${i}`).classList.remove("letterGreen");
    document.getElementById(`letter${i}`).classList.remove("letterRed");
  }
}


function finalSlide() {
  console.log(rightAnswers); //CAVE: durch den BackButton vom Design kann dies kaputt gehen
  let finalCount = 0;
  for (i=0; i<questions.length; i++) {
    let group = questions[i];
    let countGivenAnswer = group['givenAnswer']
    finalCount = finalCount + countGivenAnswer;
  };
  document.getElementById("thriller").classList.remove("bold");
  document.getElementById('questionCard').innerHTML = /*html*/ `
    <h4>Du hast folgenden Score erreicht</h5>
    <br>
    <p>
    ${finalCount} von ${questions.length} Fragen!
    </p>
    <br>
    <button onclick="startGame()">Spiel von neuem beginnen</button>
`;
}