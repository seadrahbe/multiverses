
/* ON-LOAD ACTIONS -S */
addEventListener("DOMContentLoaded", (event) => { 

    // Source - https://stackoverflow.com/a/49916376
    // Posted by Lahiru Jayakody, modified by community. See post 'Timeline' for change history
    // Retrieved 2026-02-24, License - CC BY-SA 4.0
    
    // Sets max date for date input - S

    document.getElementById("date").max = new Date().toLocaleDateString('fr-ca');


})

/* PREVENTS TAB FROM GOING TO NEXT FORM OPTION  - S */
document.getElementById('poem').addEventListener('keydown', function(e) {
  if (e.key == 'Tab') {
    e.preventDefault();
    var start = this.selectionStart;
    var end = this.selectionEnd;

    // set textarea value to: text before caret + tab + text after caret
    this.value = this.value.substring(0, start) +
      "\t" + this.value.substring(end);

    // put caret at right position again
    this.selectionStart =
      this.selectionEnd = start + 1;
  }
});


/* TAGS FUNCTIONALITY VARIABLES + EVENT LISTENER - S*/

// Declare variables, including hidden tag input, container, and array to store hashtags
let input = document.querySelector('#tags');
let hiddenInput = document.getElementById('hidden-tag-input')
let container = document.querySelector('#tag-container')
let hashtagArray = [];

// On-press of enter or space, add tag to tag container for display
input.addEventListener('keyup', () => {
    if ((event.code === 'Space' ||  event.code === 'Enter') && input.value.trim().length > 0) {

        // Display container
        container.style.display = "flex";
        
        // Visual tag text + text container (p))
        var text = input.value.trim();
        var p = document.createElement('p');

        // Add p to parent container and text to p, label p with tag class for styling
        p.innerHTML = text;
        p.classList.add('tag');
        container.appendChild(p);
        
        // Reset input to blank
        input.value = '';
        
        // Create list of all p tags
        let deleteTags = document.querySelectorAll('.tag');
        
        // Add event listener to all tags to delete on-click (could be shortened -- return to this for updating)
        for(let i = 0; i < deleteTags.length; i++) {
            deleteTags[i].addEventListener('click', () => {
                container.removeChild(deleteTags[i]);
                if (container.children.length === 0) {
                    container.style.display = "none";
                }
            });
        }

    }
});


 /* FORM SUBMIT INPUT VALIDATION  - S*/
document.getElementById("submit_form").onsubmit = () => {

    let isValid = true;

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

    // Add tags
    var children = container.children;
    for (var i = 0; i < children.length; i++) {
        if (i < children.length - 1) {
            hiddenInput.value += (children[i].innerHTML.toLowerCase() + " ");
        } else {
            hiddenInput.value += (children[i].innerHTML.toLowerCase());
        }
    }

    return isValid;

}

function clearErrors() {
    let errors = document.getElementsByClassName("err");
    for (let i = 0; i<errors.length; i++) {
        errors[i].style.display = "none";
    }
    
}

