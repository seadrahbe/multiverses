/* ON-LOAD */

addEventListener("DOMContentLoaded", (event) => { 

  /* COUNTER LOGIC (ADDING SUBMISSION #)) -S */

  // Make a list of all the section elements
  const sectionList = document.querySelectorAll("section")

  // Counter
  let counter = sectionList.length;

  // Fore each section element / "node"
  sectionList.forEach (
    function(node) {

      // Screate a span element
      let htmlCounter = document.createElement("span")

      // Set span HTML to coutner val
      htmlCounter.innerHTML = counter;

      // Add to section after "Submission #"
      node.insertBefore(htmlCounter, node.childNodes[2]);

      // Increment
      counter--;
    }
  );


});