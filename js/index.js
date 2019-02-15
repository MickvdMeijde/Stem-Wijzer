const title = document.getElementById("questionTitle");
const description = document.getElementById("questionDescription");
const agree = document.getElementById("agree");
const back = document.getElementById("backButton");
const neither = document.getElementById("neither");
const disagree = document.getElementById("disagree");
const page = document.getElementById("questionPage");
const priority = document.getElementById("priorityPage");
const priorityList = document.getElementById("priorityList");

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

/*go to next question*/
function nextQuestion() {
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
	/*
	generatePriorityList();
	*/
}

/*go to the previous question*/
function previousQuestion() {
	index--;
	showQuestion();
}

/*generate list for end page*/
function generatePriorityList() {
	priorityList.innerHTML = "";
	for (let i = 0; i < subjects.length; i++) {
		console.log(subjects[i].title);
		priorityList.innerHTML += subjects[i].title;
	}
}

var answers = [
	
	
];

console.log(parties);
