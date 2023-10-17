const top_btns = document.getElementById("top_btns")
const main = document.getElementById("main")

let title
const top_texts = document.getElementById("top_texts")
let qq_counter

function initialize(){
    var button = document.createElement("button");
    button.onclick = function () {start_quiz()}
    button.className = "mx-5";

    var div = document.createElement("div");
    div.className = "border-4 border-[#4d13d1] rounded-lg flex items-center";

    var innerDiv = document.createElement("div");
    innerDiv.className = "bg-[#4d13d1] rounded-r-lg";

    var p1 = document.createElement("p");
    p1.className = "mx-2 text-xl font-bold text-center text-white";
    p1.textContent = "Start!";

    var p2 = document.createElement("p");
    p2.className = "text-xl font-md mx-1";
    p2.textContent = "5 questions";
    qq_counter = p2
    innerDiv.appendChild(p1);
    div.appendChild(innerDiv);
    div.appendChild(p2);
    button.appendChild(div);

    top_btns.append(button)
}

let tablo

function start_quiz(){
    var p = document.createElement("p");
    title = p
    p.className = "text-3xl ml-5";
    p.id = "title";
    p.textContent = "Question 1";
    top_texts.append(p)

    while(top_btns.firstChild){
        top_btns.removeChild(top_btns.firstChild);
    }

    for(let i = 1; i <= 5; i++){
        let button = document.createElement("button")
        button.id = "q_b" + i;
        button.className = "m-0.5";
        button.addEventListener("click", function() {btn_pressed(i)})

        var div = document.createElement("div");
        div.className = "border-4 border-[#4d13d1] rounded-lg";

        var p = document.createElement("p");
        p.className = "mx-2 text-xl font-bold text-center";
        p.textContent = i;

        div.appendChild(p);

        button.appendChild(div);

        top_btns.append(button)
    }

    var button = document.createElement("button");
    button.addEventListener("click", function () {
        let res = 0
        correct.forEach(element => {
            if (element)
                res++
        });
        alert(`Your score: ${res}/5!`)
    })
    button.className = "mx-5";

    var div = document.createElement("div");
    div.className = "border-4 border-[#4d13d1] rounded-lg flex items-center";

    var innerDiv = document.createElement("div");
    innerDiv.className = "bg-[#4d13d1] rounded-r-lg";

    var p1 = document.createElement("p");
    p1.className = "mx-2 text-xl font-bold text-center text-white";
    p1.textContent = "Submit!";

    var p2 = document.createElement("p");
    p2.className = "text-xl font-md mx-1";
    p2.textContent = "0/5";
    tablo = p2
    qq_counter = p2
    innerDiv.appendChild(p1);
    div.appendChild(innerDiv);
    div.appendChild(p2);
    button.appendChild(div);

    top_btns.append(button)

    show_q1()
}

function btn_pressed(btn){
    title.textContent = "Question " + btn
    while(main.firstChild){
        main.removeChild(main.firstChild)
    }
    switch (btn) {
        case 1:
            show_q1()
            break;
        case 2:
            show_q2()
            break
        case 3:
            show_q3()
            break
        case 4:
            show_q4()
            break
        case 5:
            show_q5()
            break
    }
}

function show_q1(){
    current_q = 1
    q_generator("What is my name?", ["Ruslan", "Alibek", "Arystan", "Ramazan"], true, 0)
}
function show_q2(){
    current_q = 2
    q_generator("How old i am?", ["18", "17", "20", "21"], true, 0)
}
function show_q3(){
    current_q = 3
    q_generator("What i like?", ["Games", "Programming", "Football", "Frontend", "Everything"], false, 4)
}
function show_q4(){
    current_q = 4
    q_generator("What i hate?", ["Football", "Laptops", "Touchpads"], true, 0)
}
function show_q5(){
    current_q = 5
    q_generator("Who is more powerfull?", ["I7 13700K", "I9 13900K"], true, 1)
}

let curr_cA
let nowSingle
let curr_A

function q_generator(question, answers, isOneAnswer, correctAnswers){
    nowSingle = isOneAnswer
    curr_cA = correctAnswers
    if (!nowSingle)
        curr_A = answers
    var questionContainer = document.createElement("div");
    questionContainer.className = "flex justify-center content-center";
    var q = document.createElement("p");
    q.className = "text-2xl font-bold";
    q.textContent = question;
    questionContainer.appendChild(q);

    var motherContainer = document.createElement("div")
    motherContainer.className = "flex justify-center"
    var optionsContainer = document.createElement("div");

    for (let i in answers){
        var optionContainer = document.createElement("div");
        optionContainer.className = "flex justify-center";

        var radio = document.createElement("input");
        if (isOneAnswer){
            radio.type = "radio";
        }else{
            radio.type = "checkbox"
        }
        radio.name = "answer";
        radio.id = i
        var answer = document.createElement("p");
        answer.className = "text-xl mx-1";
        answer.textContent = answers[i];

        optionContainer.appendChild(radio);
        optionContainer.appendChild(answer);

        optionsContainer.appendChild(optionContainer);
    }

    var submitButton = document.createElement("button");
    submitButton.addEventListener("click", function () {Submit()})
    var buttonContainer = document.createElement("div");
    buttonContainer.className = "bg-[#4d13d1] rounded-lg flex justify-center";

    var submitText = document.createElement("p");
    submitText.className = "py-2 px-4 text-xl text-white font-bold";
    submitText.textContent = "Ok!";
    
    buttonContainer.appendChild(submitText);
    submitButton.appendChild(buttonContainer);

    optionsContainer.appendChild(submitButton)
    motherContainer.appendChild(optionsContainer)
    main.appendChild(questionContainer)
    main.appendChild(motherContainer)
}

let answered = [false, false, false, false, false]
let correct = [false, false, false, false, false]

async function Submit(){
    if(document.getElementById(curr_cA).checked){
        correct[current_q - 1] = true  
    }
    answered[current_q - 1] = true

    let str_name = `q_b${current_q}`
    console.log(str_name)
    let btn = await document.getElementById(str_name)
    btn.classList.add('bg-[#4d13d1]', 'rounded-lg', 'text-white')

    submitted_num = 0

    answered.forEach(element => {
        if (element){
            submitted_num ++
        }
    });
    tablo.textContent = `${submitted_num}/5`
}

initialize()
let submitted_num = 0
let current_q = 1