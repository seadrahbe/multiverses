/* MODAL LOGIC -s */

addEventListener("DOMContentLoaded", (event) => { 
  // List to store poems
  const poems = document.querySelectorAll(".poem");

  // Get modal from DOM
  modal = document.getElementById("poem_modal");
  
  // Function for opening the modal
  function openModal() {
    modal.style.display = "flex";
  }

  // Function for closing the modal
  function closeModal() {
    modal.style.display = "none";
  }

  // Assign "click" event listener to each poem
  poems.forEach(poem => 
    poem.addEventListener("click", openModal)
  );

  console.log(poems);

  // Get close button element
  const close = document.getElementById("close-button");

  // Add close event listener to close button 
  close.addEventListener("click", closeModal);

})