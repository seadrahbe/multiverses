/* POP UP POEM MODAL LOGIC -s */

addEventListener("DOMContentLoaded", (event) => { 
  // List to store poems
  const poems = document.querySelectorAll(".poem");

  // Get modal from DOM
  const modal = document.getElementById("poem-modal");

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

  /*DELETE MODAL LOGIC */

  //Variable to store poem to delete
  let poemToDelete = null; 

  //Get delete modal from dom
  const deleteModal = document.getElementById("delete-modal");
  console.log("delete modal:", deleteModal);

  //Function for opening delete modal
  function openDeleteModal() {
    deleteModal.style.display = "flex";
  }

  //Assign click listener to each delete button (trashcan)
  document.querySelectorAll(".delete-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation(); 
        poemToDelete = btn.closest("form");
        openDeleteModal();

    })
  })

  //Function for closing delete modal
  function closeDeleteModal() {
    deleteModal.style.display = "none";
  }

  //Close delete modal when cancel button is clicked
  document.querySelector(".cancel-delete").addEventListener("click", closeDeleteModal);

  //Submit delete form when confirm button is clicked
  document.querySelector(".confirm-delete").addEventListener("click", () => {
    if (poemToDelete) {
        poemToDelete.submit();
    }
  });
})