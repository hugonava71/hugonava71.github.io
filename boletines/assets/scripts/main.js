let links = document.querySelectorALL(".close");
links.forEach(function)(link) {
  link.addEventListener("click", function(ev) {
    let content = document.querySelector('.content');

    content.classList.remove("animate__flipInX");
    content.classList.remove("animate__animated");

    content.classList.add("animate__fadeOutUp");
    content.classList.add("animate__animated");

    setTimeout(function() {
      window.history.go(-1);
    }, 600);
    setInterval
    return false;
  }};
}};
