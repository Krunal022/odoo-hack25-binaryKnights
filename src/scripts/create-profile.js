document.getElementById('profileForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const reader = new FileReader();
  const imageFile = document.getElementById('photo').files[0]; // your input is id="photo"

  const profileData = {
    fullName: document.getElementById('fullName').value,
    location: document.getElementById('location').value,
    email: document.getElementById('email').value,
    skillsOffered: document.getElementById('skillsOffered').value,
    skillsWanted: document.getElementById('skillsWanted').value,
    availability: document.getElementById('availability').value,
    publicProfile: document.getElementById('publicProfile').checked,
    bio: document.getElementById('bio').value,
    profileImage: '' // This will hold the base64 image
  };

  if (imageFile) {
    reader.onload = function () {
      profileData.profileImage = reader.result;
      saveAndRedirect(profileData);
    };
    reader.readAsDataURL(imageFile);
  } else {
    saveAndRedirect(profileData);
  }
});

function saveAndRedirect(profileData) {
  const allProfiles = JSON.parse(localStorage.getItem('userProfiles')) || [];
  allProfiles.push(profileData);
  localStorage.setItem('userProfiles', JSON.stringify(allProfiles));
  localStorage.setItem('profileCreated', 'true');
  alert('Profile Created Successfully!');
  window.location.href = 'browse-users.html';
}
