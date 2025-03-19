var modalOne = document.getElementById('modal-one');
var modalTwo = document.getElementById('modal-two');
var modalThree = document.getElementById('modal-three');

var linkOne = document.getElementById('one');
var linkTwo = document.getElementById('two');
var linkThree = document.getElementById('three');

var closeButtons = document.getElementsByClassName('close');

function openModal(modal) {
  modal.style.display = 'block';
}

function closeModal(modal) {
  modal.style.display = 'none';
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