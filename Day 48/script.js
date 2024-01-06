// id selector
const second = document.getElementById('second')
second.style.color = "red"

// class selector
const first = document.getElementsByClassName('first')
first[0].style.color = "blue"

// query selector
const third = document.querySelector('[class="third"]')
third.style.color = "orange"

// html collection to array
const tempList = document.getElementsByClassName("first")
Array.from(tempList)

// query selector all
const allLiList = document.querySelectorAll("li")
allLiList[0].style.backgroundColor = "pink"
