// This is the code that sets the starting point of the number.
let number = 0
// This is what makes the button activate the function
document.getElementById('button').addEventListener('click', integer)
// The value of the textbox is assigned to the variable number, and it is determined whether the integer is greater than zero.
function integer () {
  number = document.getElementById('my-integer').value
  number = parseInt(number)
  if (number >= 0) {
    // This is the block of code that is executed if the integer is greater than 0
    alert('positive')
  } else {
    // This is the block of code that is executed if the integer is lesser than 0
    alert('negative')
  }
}
