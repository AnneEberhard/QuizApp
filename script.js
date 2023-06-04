let questions = [
  {
    question: "Was will Acanà von Anabellánien in Elfenweg erreichen?",
    answer1: "Super reich werden",
    answer2: "Extrem berühmt werden",
    answer3: "Anabellánien befreien",
    answer4: "Schokolade",
    rightAnswer: 3,
  },
  {
    question:
      "Was suchen die Dämonenjänger in Die Kinder der Engel - Dämonenritt?",
    answer1: "Daniels Bruder Zacharias",
    answer2: "Daniels wirklichen Vater",
    answer3: "Den Schatz vom Silbersee",
    answer4: "Schokolade",
    rightAnswer: 1,
  },
  {
    question: "Was möchte Katja von Barbarossa in Irrfahrt ins Gelobte Land?",
    answer1: "Voll viel Geld",
    answer2: "Schutz",
    answer3: "Ein Kind",
    answer4: "Schokolade",
    rightAnswer: 2,
  },
  {
    question: "Wer ist Giannis Vorbild in Die Masken von Florenz?",
    answer1: "Leonardo da Vinci",
    answer2: "Giuliano de Medici",
    answer3: "Lorenzo de Medici",
    answer4: "Johannes von Gutenberg",
    rightAnswer: 2,
  },
  {
    question: "Weshalb kommt Leander in Alsterdiamanten nach Hamburg?",
    answer1: "Um den Großen Brand von 1843 zu legen",
    answer2: "Um Sophie Achtmann zu heiraten",
    answer3: "Um der Comtesse de Chambourg zu dienen",
    answer4: "Um sich an den Achtmanns zu rächen",
    rightAnswer: 4,
  },
  {
    question: "Was sucht der Baron in Der Geist in Brand in halb Europa?",
    answer1: "Seine verschollene Jugendliebe",
    answer2: "Voltaires Briefe",
    answer3: "Die Gunst Katharinas der Großen",
    answer4: "Napoléons wahre Identität",
    rightAnswer: 1,
  },
  {
    question: "Warum sind Noel Tylls Haare in Von Elfen und Wölfen schlohweiß?",
    answer1: "Weil er sich zu Tode gegruselt hat",
    answer2: "Weil er sie mit maximaler Bleiche behandelt",
    answer3: "Weil er ein Tylwyth Teg ist",
    answer4: "Weil eine Hexe ihn verfucht hat",
    rightAnswer: 2,
  },
  {
    question:
      "Was irritiert Logan so sehr an Jack und Ada in Unheilige Mittel?",
    answer1: "Sie sind sehr unhöflich",
    answer2: "Sie sind sehr talentiert",
    answer3: "Sie sind sehr dumm",
    answer4: "Sie haben keine Moral",
    rightAnswer: 2,
  },
];

let currentQuestion = 0;

function init() {
  document.getElementById("questionCard").classList.remove("init");
  renderCard();
  renderFooterCard();
  renderQuestion();
  renderAnswers();
}

function renderCard() {
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

function renderFooterCard() {
  let footerCard = document.getElementById("footerQuizApp");
  let number = currentQuestion + 1;
  let maxNumber = questions.length;
  footerCard.innerHTML = /*html*/ `
    <button onclick="back()" class="buttonQuizApp">
    <img
      src="./img/arrow_back_ios_FILL1_wght700_GRAD200_opsz24.png"
    />
  </button>
  <div>${number} von ${maxNumber} Fragen</div>
  <button onclick="forward()" class="buttonQuizApp">
    <img
      src="./img/arrow_forward_ios_FILL1_wght700_GRAD200_opsz24.png"
    />
  </button>
    `;
}

function renderQuestion() {
  let questionId = document.getElementById("questionId");
  let helpArray = questions[currentQuestion];
  questionId.innerHTML = `${helpArray["question"]}`;
}

function renderAnswers() {
  let helpArray = questions[currentQuestion];
  for (let j = 0; j < 4; j++) {
    n = j + 1;
    let answerLine = document.getElementById(`answer${n}Id`);
    let answer = helpArray[`answer${n}`];
    answerLine.innerHTML = answer;
  }
}

function forward() {
  if (currentQuestion == questions.length - 1) {
    currentQuestion = 0;
  } else {
    currentQuestion = currentQuestion + 1;
  }
  cleanCard();
  renderQuestion();
  renderAnswers();
  renderFooterCard();
}

function back() {
  if (currentQuestion == 0) {
    currentQuestion = questions.length - 1;
  } else {
    currentQuestion = currentQuestion - 1;
  }
  cleanCard();
  renderQuestion();
  renderAnswers();
  renderFooterCard();
}

function answer(selection) {
  let helpArray = questions[currentQuestion];
  let right = helpArray["rightAnswer"];
  if (selection == right) {
    correctAnswer(selection);
  } else {
    wrongAnswer(selection, right);
  }
}

function correctAnswer(selection) {
  document.getElementById(`answerBox${selection}`).classList.add("green"); 
  document.getElementById(`letter${selection}`).classList.add("letterGreen");
}

function wrongAnswer(selection, right) {
  document.getElementById(`answerBox${right}`).classList.add("green");
  document.getElementById(`letter${right}`).classList.add("letterGreen");
  document.getElementById(`answerBox${selection}`).classList.add("red"); 
  document.getElementById(`letter${selection}`).classList.add("letterRed");
}

function cleanCard() {
 for (i=1; i<5; i++) {
  document.getElementById(`answerBox${i}`).classList.remove('green');
  document.getElementById(`answerBox${i}`).classList.remove('red');
  document.getElementById(`letter${i}`).classList.remove('letterGreen');
  document.getElementById(`letter${i}`).classList.remove('letterRed');
 }
}