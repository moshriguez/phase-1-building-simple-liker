// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener('DOMContentLoaded', ()=> {
  const hearts = document.querySelectorAll('.like-glyph')
  hearts.forEach(item => {
    item.addEventListener('click', (event)=>{
      // console.log('it works')
      callServer(event)
    })
  })
})

function callServer(event) {
  mimicServerCall()
  .then(() => {
    updateHeart(event)
    console.log('it worked')
  })
  .catch((error) => {
    const errorMessage = document.querySelector('#modal')
    const p = document.querySelector('#modal p')
    errorMessage.classList.remove('hidden')
    p.textContent = error
    setTimeout(()=>{
      errorMessage.classList.add('hidden')
    } ,3000)

    // console.log(error)
  })
}

function updateHeart(event) {
  if (event.target.textContent === EMPTY_HEART) {
    event.target.textContent = FULL_HEART
    event.target.classList.add('activated-heart')
  } else {
    event.target.textContent = EMPTY_HEART
    event.target.classList.remove('activated-heart')
  }
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
