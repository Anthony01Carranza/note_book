const textarea = document.getElementById("text-field");
const input = document.getElementById("title");
const input2 = document.getElementById("input2");
const save_btn = document.getElementById("submit");

const color_red = document.getElementById("red");
const color_blue = document.getElementById("blue");
const color_green = document.getElementById("green");
const color_purple = document.getElementById("purple");

const category1 = document.getElementById("s1");
const category2 = document.getElementById("s2");
const category3 = document.getElementById("s3");

const notepad = document.querySelector(".notepad");
const add_btn = document.getElementById("add_note");

let message_text = "Note saved successfully";
let appendNote = document.createElement("div");
notepad.appendChild(appendNote);

let cat1 = "Design";
let cat2 = "Networking";
let cat3 = "Student";

const date = new Date(); //getting todays date

const day = date.getDate(); // getting today's full date with getDate function
const month = date.getMonth(); //getting today's month with getMonth function
const year = date.getFullYear(); //getting current year in full with getFull function

console.log(day); //logging date to the console

const monthNames = ["Jan", "Feb", "Mar", "April", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]; //calling all the months
const d = new Date();
let fullMonth = monthNames[d.getMonth()];
console.log(fullMonth + ' ' + year); //Loggin FullMonth and Year to the console

var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']; //Setting the days of the week in an array
var day2 = days[date.getDay()]; //
console.log(day2); //

window.onbeforeunload = function() {
    return true; //preventing page from loading
};
let tdoo = {"Header": textarea.value, "Body": input.value, "category": input2.value, "Dates": day2 + ' ' + fullMonth + ' ' + year } //getting full information from called properties

save_btn.addEventListener("click", () => { //save button onclick
    let tdoo = {"Header": textarea.value, "Body": input.value, "category": input2.value, "Dates": day2 + ' ' + fullMonth + ' ' + year } //getting full information from called properties
    let appendNote = document.createElement("div");
    notepad.appendChild(appendNote);
    console.log(message_text); //custom note message for savingn
    setTimeout(() => {
        console.clear(); //clearing the console
    }, 1000);
    setTimeout(() => {
        localStorage.setItem("Storage", JSON.stringify(tdoo));
        //setting Localstorage and adding a "storege" item, stringifying the called tdo element
        var retrieveData = JSON.parse(localStorage.getItem("Storege"));
            //Localstorege now is getting the setItem of tdoo and parsing to the set "Storage" item of Localstorage
        console.log(retrieveData);
        appendNote.innerHTML = `<div class="note-content">
        <div class="notes">
            <div class="note-title" id="ntx">${tdoo.Body}</div>
            <div class="note-pfx">
                <p class="note-sub">${tdoo.Header}</p>
            </div>
            <div class="c5">
                <div class="category">
                    <div class="cat" id="category">${tdoo.category}</div>
                    <div class="date-created">
                        <div class="date" id="date">${tdoo.Dates}</div>
                    </div>
                </div>
            </div>
            <div class="tweet">
                <div class="tweet-content">
                    <a href="https://twitter.com/intent/tweet?url=${tdoo.Body + ' ' + tdoo.Header}" rel="noopener" class="tweet_btn">Tweet <img class="twit" src="assets/img/twitter.png" >
                </div>
            </div>
        </div>`    
    }, 2000);
});
window.addEventListener("load", () => {
    textarea.value = tdoo.Header;
    input.value = tdoo.Body;
    input2.value = tdoo.category;
    appendNote.innerHTML = `<div class="note-content">
        <div class="notes">
            <div class="note-title" id="ntx">${tdoo.Body}</div>
            <div class="note-pfx">
                <p class="note-sub">${tdoo.Header}</p>
            </div>
            <div class="c5">
                <div class="category">
                    <div class="cat" id="category">${tdoo.category}</div>
                    <div class="date-created">
                        <div class="date" id="date">${tdoo.Dates}</div>
                    </div>
                </div>
            </div>
            <div class="tweet">
                <div class="tweet-content">
                    <a href="https://twitter.com/intent/tweet?url=${tdoo.Body + ' ' + tdoo.Header}" rel="noopener" class="tweet_btn" >Tweet <img class="twit" src="assets/img/twitter.png">
                </div>
            </div>
        </div>`
}); 
color_red.addEventListener("click", function(event) {
    console.log(event.target);
    textarea.classList.add("red");
    textarea.classList.remove("blue");
    textarea.classList.remove("green");
    textarea.classList.remove("purple");
});
color_blue.addEventListener("click", function(event) {
    console.log(event.target);
    textarea.classList.add("blue");
    textarea.classList.remove("red");
    textarea.classList.remove("green");
    textarea.classList.remove("purple");
});
color_green.addEventListener("click", function(event) {
    console.log(event.target);
    textarea.classList.add("green");
    textarea.classList.remove("blue");
    textarea.classList.remove("red");
    textarea.classList.remove("purple");
});
color_purple.addEventListener("click", function(event) {
    console.log(event.target);
    textarea.classList.add("purple");
    textarea.classList.remove("blue");
    textarea.classList.remove("red");
    textarea.classList.remove("green");
});
category1.addEventListener("click", (e) => {
    console.log(e.target);
    document.getElementById("category").innerHTML = `${cat1}`;
    input2.value = `${cat1}`;
});
category2.addEventListener("click", (e) => {
    console.log(e.target);
    document.getElementById("category").innerHTML = `${cat2}`;
    input2.value = `${cat2}`;
});
category3.addEventListener("click", (e) => {
    console.log(e.target);
    document.getElementById("category").innerHTML = `${cat3}`;
    input2.value = `${cat3}`;
});
// categories button to change the note categoty
add_btn.addEventListener("click", (e) => {
    document.querySelector(".container").style.display = "block";
    document.querySelector(".wrapper").style.display = "none"; //Linking to the write note page
});
document.getElementById("return").addEventListener("click", function(event){
    document.querySelector(".container").style.display = "none";
    document.querySelector(".wrapper").style.display = "block";
});

//*****************************************/ 

