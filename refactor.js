function fetchUserData(userId) {
  return fetch(`/api/users/${userId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('User not found');
      }
      return response.json();
    })
    .then(data => {
      return {
        name: data.name,
        email: data.email,
        role: data.role
      };
    })
    .catch(error => {
      console.error('Error fetching user:', error);
      return null;
    });
}