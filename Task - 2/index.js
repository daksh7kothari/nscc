    const questionDaksh = [
      {
        "question": "Is Daksh Good?",
        "option": ["Yessss!", "God Knows!", "what?", "Nope"],
        "answer": "God Knows!"
      },
      {
        "question": "Who is the father of Computers?",
        "option": ["Charles Babbage", "SRMIST", "NSCC", "Daksh"],
        "answer": "Daksh"
      },
      {
        "question": "What does N in NSCC stand for?",
        "option": ["Newton", "Neon", "Nebulla", "None"],
        "answer": "Newton"
      },
      {
        "question": "Why NSCC?",
        "option": ["Cool Vibes", "boring ppl", "boring peers", "boring clubs"],
        "answer": "Cool Vibes"
      },
      {
        "question": "Guess the question?",
        "option": ["Give some changes in our website?", "Intro", "CSS types", "ID vs Class"],
        "answer": "Give some changes in our website?"
      }
    ];

    const quizContainer = document.getElementById("quiz");
    const quizForm = document.getElementById("quizForm");
    const resultDiv = document.getElementById("result");
    const correct = document.getElementById("correctAnswer");

    function loadQuiz() {
      quizContainer.innerHTML = "";
      questionDaksh.forEach((q, index) => {
        const questionBox = document.createElement("div");
        questionBox.classList.add("question-box");

        const questionTitle = document.createElement("h3");
        questionTitle.innerText = `${index + 1}. ${q.question}`;
        questionBox.appendChild(questionTitle);

        q.option.forEach(option => {
          const label = document.createElement("label");
          label.classList.add("option");
          const input = document.createElement("input");
          input.type = "radio";
          input.name = `question${index}`;
          input.value = option;
          label.appendChild(input);
          label.appendChild(document.createTextNode(option));
          questionBox.appendChild(label);
        });

        quizContainer.appendChild(questionBox);
      });
    }

    quizForm.addEventListener("submit", function (e) {
      e.preventDefault();
      let score = 0;

      questionDaksh.forEach((q, index) => {
        const selected = document.querySelector(`input[name="question${index}"]:checked`);
        if (selected && selected.value === q.answer) {
          score++;
          correct.innerText = "daksh";
        }
      });

      resultDiv.innerHTML = `Your score: ${score}/${questionDaksh.length} <br> ${
        score >= 3 ? "Good NSCC Keep Trying" : "what the heck bro?"
      }`;
    });

    loadQuiz();
