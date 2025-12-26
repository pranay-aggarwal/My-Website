const scriptURL = 'https://script.google.com/macros/s/AKfycbwi8YbRjD_jbBrxxfm-WlwaxKytKsyb6lcRNdz1uZiGRuMCXzOcuuWjWhH7J4LptDnx/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
  e.preventDefault()
  
  // Disable submit button and show loading state
  const submitButton = form.querySelector('button[type="submit"]')
  const originalButtonText = submitButton.textContent
  submitButton.disabled = true
  submitButton.textContent = 'Sending...'
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message Sent Successfully"
        submitButton.disabled = false
        submitButton.textContent = originalButtonText
        setTimeout(function() {
            msg.innerHTML = ""
        },5000)
        form.reset()       
    })
    .catch(error => {
        console.error('Error!', error.message)
        msg.innerHTML = "Failed to send message. Please try again."
        submitButton.disabled = false
        submitButton.textContent = originalButtonText
        setTimeout(function() {
            msg.innerHTML = ""
        },5000)
    })
})

// Spread sheet link: https://docs.google.com/spreadsheets/d/1gmYRklVTb6rL5BntuBd5DxrCvnUimDYWaSwxL_QEzBk/edit?usp=sharing