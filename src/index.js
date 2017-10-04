/* Wait until the DOM has been loaded. */
$(document).ready(function() {
  var projects = $(".project_thumb");
  shuffleProjects(projects);
});

/**
* ShuffleProjects
* Shuffles the entire collection of project thumbnails.
*/
function shuffleProjects(projects) {
  for(var i = 0; i < projects.length; i++) {
    var a = Math.floor(Math.random() * projects.length - 1) + 1; /* Pick a random project */
    var b = Math.floor(Math.random() * projects.length - 1) + 1; /* Pick a random project */
    projects.eq(a).before(projects.eq(b)); /* Swap the two randomly selected projects */
  }
}
