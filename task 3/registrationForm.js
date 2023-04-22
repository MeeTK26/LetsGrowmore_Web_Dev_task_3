// Get form elements
const registrationForm = document.getElementById('registrationForm');
const usersList = document.getElementById('usersList');
const cancelBtn = document.getElementById('cancelBtn');

// Add form submit event listener
registrationForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const website = document.getElementById('website').value;
  const imageLink = document.getElementById('imageLink').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const skills = [];
  document.querySelectorAll('input[name="skills"]:checked').forEach((checkbox) => {
    skills.push(checkbox.value);
  });

  // Display registered user data on the right side of the page
  const li = document.createElement('li');
  li.innerHTML = `
    <strong>Name:</strong> ${name}<br>
    <strong>Email:</strong> ${email}<br>
    <strong>Website:</strong> ${website}<br>
    <strong>Image Link:</strong> ${imageLink}<br>
    <strong>Gender:</strong> ${gender}<br>
    <strong>Skills:</strong> ${skills.join(', ')}
  `;
  usersList.appendChild(li);

  // Reset form
  registrationForm.reset();
});

// Add cancel button click event listener to reset form
cancelBtn.addEventListener('click', () => {
  registrationForm.reset();
});
