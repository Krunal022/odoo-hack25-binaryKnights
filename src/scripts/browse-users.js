document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('profilesContainer');
  const profiles = JSON.parse(localStorage.getItem('userProfiles')) || [];

  if (profiles.length === 0) {
    container.innerHTML = '<p style="color:gray;text-align:center;">No profiles found.</p>';
    return;
  }

  profiles.forEach(profile => {
    const card = document.createElement('div');
    card.className = 'profile-card';

    const image = profile.profileImage
      ? `<img src="${profile.profileImage}" alt="Profile Image" class="profile-img" />`
      : `<img src="https://via.placeholder.com/300x240?text=👤" class="profile-img" alt="Default" />`;

    card.innerHTML = `
      ${image}
      <div class="profile-content">
        <div>
          <div class="profile-name">
            ${profile.fullName}
            <span style="color: #1dd1a1;">✔️</span>
          </div>
          <div class="profile-role">${profile.bio}</div>
          <div class="profile-stats">
            <span>📍 ${profile.location}</span>
            <span>📧 ${profile.email}</span>
          </div>
        </div>
        <button class="follow-btn">Request</button>
      </div>
    `;

    container.appendChild(card);
  });
});
