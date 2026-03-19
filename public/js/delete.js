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