import supabase from './supabaseClient';

const authService = {
  // Register a new user
  register: async (userData) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: userData.email,
        password: userData.password,
        options: {
          data: {
            name: userData.name,
          },
        },
      });

      if (error) throw error;
      
      return data;
    } catch (error) {
      throw error;
    }
  },

  // Login user
  login: async (credentials) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: credentials.email,
        password: credentials.password,
      });

      if (error) throw error;
      
      return data;
    } catch (error) {
      throw error;
    }
  },

  // Logout user
  logout: async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (error) {
      console.error('Logout error:', error);
    }
  },

  // Get current user
  getCurrentUser: async () => {
    try {
      const { data } = await supabase.auth.getUser();
      return data?.user || null;
    } catch (error) {
      console.error('Get current user error:', error);
      return null;
    }
  },

  // Check if user is authenticated
  isAuthenticated: async () => {
    const { data } = await supabase.auth.getSession();
    return !!data.session;
  },

  // Get session
  getSession: async () => {
    const { data } = await supabase.auth.getSession();
    return data.session;
  },

  // Update user profile
  updateProfile: async (userData) => {
    try {
      const { data, error } = await supabase.auth.updateUser({
        data: userData
      });

      if (error) throw error;
      
      return data;
    } catch (error) {
      throw error;
    }
  }
};

export default authService;