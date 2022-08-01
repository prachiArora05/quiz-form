class Question {
  constructor() {
    this.title = createElement('h1');
    this.input1 = createInput("").attribute("placeholder", "Enter your name here...")
    this.input2 = createInput("").attribute("placeholder", "Enter the correct option here...");
    this.button = createButton('Submit');
    this.question = createElement('h2');
    this.option1 = createElement('h3');
    this.option2 = createElement('h3');
    this.option3 = createElement('h3');
    this.option4 = createElement('h3');
    this.message = createElement('h2')
  }
  
  hide() {
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();
  }

  gameTitle() {
    this.title.html("My Quiz Game");
    this.title.position(windowWidth/2 - 100, 0);
  }

  oneQuestion() {
    this.question.html("Question: What starts and ends with the letter 'E', but has only one letter?");
    this.question.position(100, 100);
  }
  
  ansOptions() {
    this.option1.html("1. Everyone" );
    this.option1.position(120, 140);

    this.option2.html("2. Envelope" );
    this.option2.position(120, 170);

    this.option3.html("3. Estimate" );
    this.option3.position(120, 200);

    this.option4.html("4. Example" );
    this.option4.position(120, 230);
  }

  handleMousePressed() {
    this.button.mousePressed(() => {
      this.message.html("Thank You, Your Answer Has Been Submitted");
      this.message.position(windowWidth - 600, windowHeight - 150);
    }
    )
  }
  
  display(){
    this.input1.position(150, 300);
    this.input2.position(350, 300);
    this.button.position(550, 300);

    this.gameTitle();
    this.oneQuestion();
    this.ansOptions()
    this.handleMousePressed();
  }
}