// Simple authentication service
export const auth = {
  login: (userData) => {
    try {
      // Basic validation
      if (!userData.email || !userData.password) {
        console.error('Missing required fields');
        return false;
      }

      // In a real app, you would validate credentials with a backend server
      // For demo, we'll just store the user data
      localStorage.setItem('user', JSON.stringify(userData));
      console.log('User data stored successfully');
      return true;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  },

  logout: () => {
    try {
      localStorage.removeItem('user');
      console.log('User logged out successfully');
    } catch (error) {
      console.error('Logout error:', error);
    }
  },

  getCurrentUser: () => {
    try {
      const user = localStorage.getItem('user');
      return user ? JSON.parse(user) : null;
    } catch (error) {
      console.error('Error getting current user:', error);
      return null;
    }
  },

  isAuthenticated: () => {
    try {
      const user = localStorage.getItem('user');
      return user !== null;
    } catch (error) {
      console.error('Error checking authentication:', error);
      return false;
    }
  }
}; 