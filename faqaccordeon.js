document.addEventListener("DOMContentLoaded", function() {
  var acc = document.getElementsByClassName("accordion");
  var i;

  function openAccordionById(id) {
    var accordion = document.getElementById(id);
    if (accordion) {
      accordion.classList.add("active");
      var panel = accordion.nextElementSibling;
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }

  function updateUrl(hash) {
    if (history.pushState) {
      history.pushState(null, null, '#' + hash);
    } else {
      location.hash = '#' + hash;
    }
  }

  var hash = window.location.hash.substring(1);
  if (hash !== "") {
    openAccordionById(hash);
  }

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        updateUrl('');
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        var id = this.getAttribute('id');
        updateUrl(id);
      }
    });
  }
});
