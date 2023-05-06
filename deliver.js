let nav = document.querySelector("nav");
[
  ["index.html", "BIO"],
  ["portfolio.html", "PORTFOLIO"],
  ["files/resume.pdf", "RESUME"],
  ["contact.html", "CONTACT"],
].forEach(link=>{
  let a = document.createElement('a');
  a.href = link[0];
  a.innerText = link[1];
  a.classList.add('bubble');
  if (!link[0].includes('.html'))
    a.target = "_blank";
  console.log(a.href, window.location.pathname);
  // if (a.href == (window.location.pathname == '/' ? 'index.html' : window.location.pathname)) {
  //   a.classList.add("active");
  // }
  nav.appendChild(a);
});

// document.querySelector("nav").innerHTML = `
// <a href="index.html" class="bubble">BIO</a>
// <a href="portfolio.html" class="bubble">PORTFOLIO</a>
// <a href="files/resume.pdf" target="_blank" class="bubble">RESUME</a>
// <a href="contact.html" class="bubble">CONTACT</a>
// `;