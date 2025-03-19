
const scriptURL = 'https://script.google.com/macros/s/AKfycbwi8YbRjD_jbBrxxfm-WlwaxKytKsyb6lcRNdz1uZiGRuMCXzOcuuWjWhH7J4LptDnx/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message Sent Successfully"
        setTimeout(function() {
            msg.innerHTML = ""
        },5000)
        form.reset()       
    })
    .catch(error => console.error('Error!', error.message))
})

// Spread sheet link: https://docs.google.com/spreadsheets/d/1gmYRklVTb6rL5BntuBd5DxrCvnUimDYWaSwxL_QEzBk/edit?usp=sharing