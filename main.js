const year = document.getElementById("year");
const thisYear = new Date().getFullYear();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;

function sendMail() {
  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_xkb7aoa", "template_3djs6a4", parms)
    .then(alert("Email Sent!!"));
}
if (!parms.name || !parms.email || !parms.message) {
  alert("Please fill in all fields!");
  return;
}
