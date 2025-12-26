var modalOne = document.getElementById('modal-one');
var modalTwo = document.getElementById('modal-two');
var modalThree = document.getElementById('modal-three');

var linkOne = document.getElementById('one');
var linkTwo = document.getElementById('two');
var linkThree = document.getElementById('three');

var closeButtons = document.getElementsByClassName('close');

function openModal(modal) {
  modal.style.display = 'block';
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = 'auto';
}

linkOne.addEventListener('click', function(event) {
  event.preventDefault();
  openModal(modalOne);
});

linkTwo.addEventListener('click', function(event) {
  event.preventDefault();
  openModal(modalTwo);
});

linkThree.addEventListener('click', function(event) {
  event.preventDefault();
  openModal(modalThree);
});


for (var i = 0; i < closeButtons.length; i++) {
  closeButtons[i].addEventListener('click', function() {
    var modal = this.parentElement.parentElement;
    closeModal(modal);
  });
}

// Close modal when clicking outside of modal content
window.addEventListener('click', function(event) {
  if (event.target.classList.contains('modal')) {
    closeModal(event.target);
  }
});

// Close modal on Escape key press
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    [modalOne, modalTwo, modalThree].forEach(function(modal) {
      if (modal.style.display === 'block') {
        closeModal(modal);
      }
    });
  }
});