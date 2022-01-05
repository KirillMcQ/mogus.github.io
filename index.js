let amountOfLikes = 0
let likesParagraph = document.getElementById("likes-paragraph")
let amountOfDislikes = 0
let dislikeParagraph = document.getElementById("dislike-paragraph")
let yourPostsParagraph = document.getElementById("your-posts-pararaph")
let userIntro = document.getElementById("logged-into-hello")
let emailBox = document.getElementById("email-box").value

console.log(likesParagraph)

function Likes() {
    amountOfLikes += 1
    likesParagraph.innerText = amountOfLikes
    console.log(amountOfLikes + ' Likes')
}

var loadFile = function(event) {
	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
};

function dislike() {
    amountOfDislikes += 1
    dislikeParagraph.innerText = amountOfDislikes
    console.log(amountOfDislikes + 'Dislikes')
}


function recentPosts(){
    let input = document.getElementById("userInput")
    input = input.value 
    yourPostsParagraph.textContent += ", " + input
}

function helloUser() {
    userIntro.textContent = userIntro + emailBox 
}
