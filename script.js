function addExperience() {
  const title = document.getElementById("title").value;
  const duration = document.getElementById("duration").value;
  const description = document.getElementById("description").value;

  if (!title || !duration || !description) {
    alert("Please fill all fields!");
    return;
  }

  const jobDiv = document.createElement("div");
  jobDiv.className = "job";
  jobDiv.innerHTML = `
    <h4>${title}</h4>
    <p>${duration}</p>
    <p>${description}</p>
  `;

  document.getElementById("experienceSection").appendChild(jobDiv);

  // Clear the input fields
  document.getElementById("title").value = "";
  document.getElementById("duration").value = "";
  document.getElementById("description").value = "";
}