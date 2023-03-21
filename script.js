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

let message_text = "Note saved successfully" ;
let appendNote = document.createElement("div");
notepad.appendChild(appendNote);

let cat1 = "Design";
let cat2 = "Networking";
let cat3 = "Student";

const date = new Date(); //getting todays date

const day = date.getDate(); // getting today's full date with getDate function
const month = date.getMonth(); //getting today's month with getMonth function
const year = date.getFuLLYear(); //getting current year in full with getFull function

console.log(day); //logging date to the console

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]; //calling all the months
const d = new Date();
let fullMonth = monthNames[d.getMonth()];
console.log(fullMonth + ' ' + year); //Loggin FullMonth and Year to the console
