/* TAGS FUNCTIONALITY - S*/
let input = document.querySelector('#tags');
let container = document.querySelector('#tag-container')
let hashtagArray = [];

input.addEventListener('keyup', () => {
    if (event.code === 'Space' && input.value.length > 0) {
        var text = document.createTextNode(input.value);
        var p = document.createElement('p');
        container.appendChild(p);
        p.appendChild(text);
        p.classList.add('tag');
        input.value = '';
        
        let deleteTags = document.querySelectorAll('.tag');
        
        for(let i = 0; i < deleteTags.length; i++) {
        deleteTags[i].addEventListener('click', () => {
            container.removeChild(deleteTags[i]);
        });
        }
    }
});

/* PREVENTS ENTER KEY PRESS FROM SUBMITTING FORM -S */
 let val = document.getElementById("submit_form");
    val.onkeypress = function (key) {
        let btn = 0 || key.keyCode || key.charCode;
        if (btn == 13) {
            key.preventDefault();
        }
} 

 /* FORM SUBMIT INPUT VALIDATION  - S*/
document.getElementById("submit_form").onsubmit = () => {

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

