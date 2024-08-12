console.log("Script running...")
// Task 1: Intro section
// Select the location button
let button = document.querySelector("#location")

// Select the empty p tag under the button
let p = document.querySelector("#locationText")

// Add an event listener on the location button such that when it is clicked, the text in the p tag is "1300 Boynton Ave (moving soon!)"
button.addEventListener("click", function(event){
  p.textContent = "1300 Boynton Ave (moving soon!)"})


// Task 2: Our Values section
// Select the h3 with S under "Our Values"
let h3 = document.querySelector("#score1")

// Add an event listener on the h3 such that when it is clicked, the text changes to "Self-Awareness"
h3.addEventListener("click", function(event){
  h3.textContent = "Self-Awareness"})


// Select the h3 with C under "Our Values"
// Make sure to add an id/class as needed in the HTML to do this
 let id = document.querySelector("#score2")


// Add an event listener on the h3 such that when it is clicked, the text changes to "Consistency"
id.addEventListener("click", function(event){
  id.textContent = "Consistency"})


// Task 3: Uniform section
// Select the joggers image
let joggers = document.querySelector("#joggers")
console.log(joggers)

// Add an event listener on the image such that when the mouse is over it, the src becomes joggers-back.webp
joggers.addEventListener("mouseover", function(event){
joggers.src = "joggers-back.webp"
})


// Add an event listener on the image such that when the mouse is off it, the src becomes joggers-front.webp

joggers.addEventListener("mouseout", function(event){
joggers.src = "joggers-front.webp"
})

// EXTRA CREDIT
// Set up the DOM manipulation flows for the rest of the SCORE values (ownership, resilience, excellent)
let o = document.querySelector("#score3")
let r = document.querySelector("#score4")
let e = document.querySelector("#score5")

o.addEventListener("click", function(event){
  o.textContent = "Ownership"})

r.addEventListener("click", function(event){
  r.textContent = "Resilience"})

e.addEventListener("click", function(event){
  e.textContent = "Excellent"})

// Set up the DOM manipulation flow for the sweater (sweater-back.webp with mouse on, and sweater-front.webp with mouse off)
let sweater = document.querySelector("#sweater")
console.log(sweater)


sweater.addEventListener("mouseover", function(event){
sweater.src = "sweater-back.webp"
})

sweater.addEventListener("mouseout", function(event){
sweater.src = "sweater-front.webp"
})