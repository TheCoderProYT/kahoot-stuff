var currentState = "";


setInterval(()=>{
    var questionTypeElement=document.querySelector("[data-functional-selector='question-type-heading'");
    
    try {
        var questionType = questionTypeElement.innerText;
    } catch(e) {
        currentState="ERROR";
        return;
    }


    
    var detectState = document.querySelectorAll("[data-functional-selector='shadow-text'");

    if(detectState.length==0) {
        if(document.querySelectorAll("[data-functional-selector='question-block-title']").length==1) {
            currentState="QUESTION_LOADING";
        } else {
            currentState="QUESTION";
        }
    } else if(detectState.length==1) {
        switch(detectState[0].innerText) {
            case "Incorrect":
            case "Time's up":
            case "Correct":
                currentState="RESULT";
                break;
            default:
                currentState="WAITING_RESULT";
                break;
        }
    }

    if(currentState=="QUESTION") {
        switch(questionType) {
            case "Slide":
                break;
            case "Quiz":
                var quizElement0 = document.querySelector("[data-functional-selector='question-choice-text-0'");
                var quizElement1 = document.querySelector("[data-functional-selector='question-choice-text-1'");
                var quizElement2 = document.querySelector("[data-functional-selector='question-choice-text-2'");
                var quizElement3 = document.querySelector("[data-functional-selector='question-choice-text-3'");

                if(localStorage.getItem("TCDP::kahoot-stuff::zoomLevel")==null) {
                    localStorage.setItem("TCDP::kahoot-stuff::zoomLevel","2.03");
                }

                console.log(Number.parseInt(localStorage.getItem("TCDP::kahoot-stuff::zoomLevel")));

                break;
            default:
                console.log("Unknown question type "+questionType+". Disabling extention for this question.");
                break;
        }

    }
},100);