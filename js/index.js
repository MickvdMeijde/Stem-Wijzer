const title = document.getElementById("questionTitle");
const description = document.getElementById("questionDescription");
const agree = document.getElementById("agree");
const back = document.getElementById("backButton");
const neither = document.getElementById("neither");
const disagree = document.getElementById("disagree");
const page = document.getElementById("questionPage");
const priority = document.getElementById("priorityPage");
const priorityList = document.getElementById("priorityList");
const partyPage = document.getElementById("partyPage");
const partyList = document.getElementById("partyList");
const scorePage = document.getElementById("scorePage");
const scoreList = document.getElementById("scoreList");

var index = 0;

/* questions*/
showQuestion();

/*show the question*/
function showQuestion() {
	if (index > 0) {
		back.style.display = "inline-block";
	} else {
		back.style.display = "none";
	}
	page.style.display = "block";
	title.innerHTML = index + 1 + ". " + subjects[index].title;
	description.innerHTML = subjects[index].statement;
}

/*array with answers*/
var answers = [];

/*go to next question*/
function nextQuestion(vote) {
	let answer = answers.push(vote);
	index++;
	/*if the end is reached show the last page*/
	if (index >= subjects.length) {
		showPriority();
	} else {
		showQuestion();
	}
}

/*show the last page*/
function showPriority() {
	page.style.display = "none";
	priority.style.display = "block";
	generatePriorityList();
}

/*go to the previous question*/
function previousQuestion() {
	index--;
	showQuestion();
}

/*generate list for priority page*/
function generatePriorityList() {
	priorityList.innerHTML = "";
	for (let i = 0; i < subjects.length; i++) {
		priorityList.innerHTML +=
			'<input type="checkbox">' + subjects[i].title + "<br />";
	}
}

/*result array */
var priorityResult = [];

/*go to party preference page*/
function goToPartyPage() {
    /*take answers from checked poreferences*/
    var childs = priorityList.childNodes;
    for (let i = 0; i < childs.length; i++) {
        priorityResult.push(childs.checked);
    }
    console.log(answers)
    /*show party page*/
    priority.style.display = "none";
    partyPage.style.display = "block";
    generatePartyList();
}

/*generate party list for end page*/
function generatePartyList() {
	for (let i = 0; i < parties.length; i++) {
		partyList.innerHTML +=
			'<input type="checkbox">' + parties[i].name + "<br />";
	}
}

/*generate end score*/
function generateScoreList() {
	var childs = partiesList.childNodes;

	for(var i = 0; i < childs.length; i++){
	    var partyCheckbox = childs[i];

	    var party = parties[i];
	    if(partyCheckbox.checked){
	        results.push(party);
	        results[results.length - 1].score = 0;
	    }
	}

	for(var i = 0; i < subjects.length; i++){
	    var subject = subjects[i];

	    for(var r = 0; r < subject.parties.length; r++){
	        var party = subject.parties[r];

	        if(party.position == answers[i]){
	            var result = results[i];
	            result.score++;
	            if(priorityResult[i] == true){
	                result.score++;
	            }
	        }
	    }
	}
	console.log(results);
    partyPage.style.display = "none";
    scorePage.style.display = "block";
}