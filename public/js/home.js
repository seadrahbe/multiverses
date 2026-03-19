/* POP UP POEM MODAL LOGIC -s */

// Get modal elements from DOM
const poem_modal = document.getElementById("poem-modal");
const modal_title = document.getElementById("modal-poem-title");
const modal_author = document.getElementById("modal-poem-author");
const modal_date = document.getElementById("modal-poem-date");
const modal_poem = document.getElementById("modal-poem-body");
const modal_tags = document.querySelector("#modal-poem-tags");

document.addEventListener("DOMContentLoaded", (event) => { 
  // List to store poems
  const poems = document.querySelectorAll(".poem");

  // Assign "click" event listener to each poem
  poems.forEach(poem => 
    poem.addEventListener("click", (e) => openModal(poem, e))
  );

  // Get close button element
  const close = document.getElementById("close-button");

  // Add close event listener to close button 
  close.addEventListener("click", closeModal);


});

// Function for opening the modal & displaying info
  function openModal(poem, e) {

    // Ensures only one poem can be open at a time, avoids extra tag bug
    if (poem_modal.style.display === "flex") return;

    e.stopPropagation();

    // Make modal visible
    poem_modal.style.display = "flex";

    // Disable scroll on body
    document.body.style.overflow = "hidden";

    
  
    document.addEventListener("click", handleClickOutside);


    // Get relevant elements
    const poem_title_html = poem.querySelector(".poem-title").innerHTML;
    const poem_author_html = poem.querySelector(".poem-info li:nth-child(3)").innerHTML;
    const poem_date_html = poem.querySelector(".poem-info li:nth-child(4)").innerHTML;
    const poem_body_html = poem.querySelector(".poem-body-home").innerHTML;
    const poem_tags = poem.querySelectorAll(".poem-tag");
      
    // Set modal fields to poem element inner HTML
    modal_title.innerHTML = poem_title_html;
    modal_author.innerHTML = poem_author_html;
    modal_date.innerHTML = poem_date_html;
    modal_poem.innerHTML = poem_body_html;

    poem_tags.forEach(tag => {
      const clone = tag.cloneNode(true);
      clone.className = "modal-tag";
      modal_tags.appendChild(clone);
    });

  }

  function handleClickOutside(event) {
      if (!poem_modal.contains(event.target)) {
        closeModal(); 
      }
  }

    // Function for closing the modal
  function closeModal() {

    modal_tags.innerHTML = "";

    poem_modal.style.display = "none";

    document.body.style.overflow = "auto";

    document.removeEventListener("click", handleClickOutside);
  }
