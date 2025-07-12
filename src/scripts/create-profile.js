document.getElementById('profileForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const profileData = {
    fullName: document.getElementById('fullName').value,
    location: document.getElementById('location').value,
    email: document.getElementById('email').value,
    skillsOffered: document.getElementById('skillsOffered').value,
    skillsWanted: document.getElementById('skillsWanted').value,
    availability: document.getElementById('availability').value,
    publicProfile: document.getElementById('publicProfile').checked,
    bio: document.getElementById('bio').value,
  };

  // Optional: Handle profile image later with FileReader if needed
  localStorage.setItem('userProfile', JSON.stringify(profileData));

  alert('Profile Created Successfully!');
  window.location.href = '../index.html'; // Redirect to homepage after saving
});
