import { useState } from 'react';
import { useAuthStore } from '../store/authStore';

const MOCK_TOKEN = 'local-auth-token';

function createMockUser(overrides: { email?: string; first_name?: string; last_name?: string } = {}) {
  return {
    id: 'local-user',
    email: overrides.email ?? 'user@example.com',
    first_name: overrides.first_name ?? 'User',
    last_name: overrides.last_name ?? '',
  };
}

export const useAuth = () => {
  const { user, setAuth, clearAuth } = useAuthStore();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (email: string, password: string) => {
    void password;
    setLoading(true);
    setError(null);
    const mockUser = createMockUser({ email });
    setAuth(mockUser, MOCK_TOKEN);
    localStorage.setItem('access_token', MOCK_TOKEN);
    setLoading(false);
  };

  const register = async (
    email: string,
    password: string,
    first_name: string,
    last_name: string
  ) => {
    void password;
    setLoading(true);
    setError(null);
    const mockUser = createMockUser({ email, first_name, last_name });
    setAuth(mockUser, MOCK_TOKEN);
    localStorage.setItem('access_token', MOCK_TOKEN);
    setLoading(false);
  };

  const logout = () => {
    clearAuth();
  };

  const forgotPassword = async (email: string) => {
    void email;
    setLoading(true);
    setError(null);
    setLoading(false);
    return { message: 'Check your email for reset instructions.' };
  };

  const resetPassword = async (token: string, newPassword: string) => {
    void token;
    void newPassword;
    setLoading(true);
    setError(null);
    setLoading(false);
    return { message: 'Password has been reset.' };
  };

  return {
    user,
    loading,
    error,
    setError,
    login,
    register,
    logout,
    forgotPassword,
    resetPassword,
    isAuthenticated: !!user,
  };
};
