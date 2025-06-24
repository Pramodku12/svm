// Fetch and load the navbar HTML content
fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data;
    });

// Fetch and load the header HTML content
fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
    });

    fetch('footercontact.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footercontact-placeholder').innerHTML = data;
    });


// Fetch and load the footer HTML content
fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
    });

// Get the navbar and its offset position
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

// Function to add or remove the sticky class based on scroll position
function stickyNavbar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}


window.onscroll = function() {
    stickyNavbar();
};

 // Script to change the image in the modal
 $('#imageModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget); 
    var imgSrc = button.data('src'); 
    var modalImage = $(this).find('#modalImage');
    modalImage.attr('src', imgSrc); 
});



function openModal(imageUrl) {
    document.getElementById('modalImage').src = imageUrl;
  }
   