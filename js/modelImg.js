// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var trigger01 = document.getElementById("myTrigger01");
var trigger02 = document.getElementById("myTrigger02");
var trigger03 = document.getElementById("myTrigger03");

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

const newSrc01 = "images/crew/c7.jpg"
const newSrc02 = "images/crew/c4.jpg"
const newSrc03 = "images/crew/c6.jpg"


trigger01.onclick = function () {
    modal.style.display = "block";
    modalImg.setAttribute('src', newSrc01);
    captionText.innerHTML = this.title;
}

trigger02.onclick = function () {
    modal.style.display = "block";
    modalImg.setAttribute('src', newSrc02);
    captionText.innerHTML = this.title;
    console.log(this.title);
}

trigger03.onclick = function () {
    modal.style.display = "block";
    modalImg.setAttribute('src', newSrc03);
    captionText.innerHTML = this.title;
    console.log(this.title);
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
    modalImg.setAttribute('src', '');
    captionText.innerHTML = '';
}
