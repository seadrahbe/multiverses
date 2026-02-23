document.getElementById("submit-form").onsubmit = () => {

  clearErrors();

  // Validate author
  let author = document.getElementById("author").value.trim();
  if(!author) {
      document.getElementById("err-author").style.display = "block";
      isValid = false;
  } 

  // Validate title
  let title = document.getElementById("title").value.trim();
  if(!title) {
      document.getElementById("err-title").style.display = "block";
      isValid = false;
  }

  // Validate poem
  let poem = document.getElementById("poem").value.trim();
  if(!poem) {
      document.getElementById("err-poem").style.display = "block";
      isValid = false;
  }

  return isValid;

}

function clearErrors() {
    let errors = document.getElementsByClassName("err");
    for (let i = 0; i<errors.length; i++) {
        errors[i].style.display = "none";
    }
}