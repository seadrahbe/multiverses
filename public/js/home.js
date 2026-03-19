/* MODAL LOGIC -s */

addEventListener("DOMContentLoaded", (event) => { 
  // List to store poems
  const poems = document.querySelectorAll(".poem");

  // Get modal elements from DOM
  const modal = document.getElementById("poem-modal");
  const modal_title = document.getElementById("modal-poem-title");
  const modal_author = document.getElementById("modal-poem-author");
  const modal_date = document.getElementById("modal-poem-date");
  const modal_poem = document.getElementById("modal-poem-body");

  // Function for opening the modal & displaying info
  function openModal(poem) {
    modal.style.display = "flex";

    // Get relevant fields from poem element
    const poem_title_html = poem.children[1].firstElementChild.innerHTML;
    const poem_author_html = poem.children[1].children[1].innerHTML;
    console.log(poem_author_html);
    const poem_date_html = poem.children[1].children[2].innerHTML;

    
    // Set modal fields to poem element inner HTML
    modal_title.innerHTML = poem_title_html;
    modal_author.innerHTML = poem_author_html;
    modal_date.innerHTML = poem_date_html;


  }

  // Function for closing the modal
  function closeModal() {
    modal.style.display = "none";
  }

  // Assign "click" event listener to each poem
  poems.forEach(poem => 
    poem.addEventListener("click", openModal)
  );

  // Get close button element
  const close = document.getElementById("close-button");

  // Add close event listener to close button 
  close.addEventListener("click", closeModal);

})