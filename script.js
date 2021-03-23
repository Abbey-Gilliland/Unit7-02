// This is the code that sets the starting point of the number.
let number = 0

document.getElementById('button').addEventListener('click', integer)

function integer () {
  number = document.getElementById('my-integer').value
  number = parseInt(number)
  if (number >= 0) {
    alert('positive')
  } else {
    alert('negative')
  }
}
