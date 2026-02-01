/**
 * Auth API – client-only stubs. No backend requests.
 * Login/register flow is handled by useAuth with local state only.
 */

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
}

export interface User {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
}

export interface AuthResponse {
  access_token: string;
  token_type?: string;
  refresh_token: string;
  user?: User;
}

const MOCK_TOKEN = 'local-auth-token';

function mockUser(overrides: Partial<User> = {}): User {
  return {
    id: 'local-user',
    email: 'user@example.com',
    first_name: 'User',
    last_name: '',
    ...overrides,
  };
}

export const authApi = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    return {
      access_token: MOCK_TOKEN,
      refresh_token: MOCK_TOKEN,
      user: mockUser({ email: credentials.email }),
    };
  },

  register: async (data: RegisterData): Promise<AuthResponse> => {
    return {
      access_token: MOCK_TOKEN,
      refresh_token: MOCK_TOKEN,
      user: mockUser({
        email: data.email,
        first_name: data.first_name,
        last_name: data.last_name,
      }),
    };
  },

  logout: async (): Promise<void> => {
    // No-op
  },

  getCurrentUser: async (): Promise<User> => {
    return mockUser();
  },

  forgotPassword: async (email: string): Promise<{ message: string }> => {
    void email;
    return { message: 'Check your email for reset instructions.' };
  },

  resetPassword: async (data: {
    token: string;
    new_password: string;
  }): Promise<{ message: string }> => {
    void data;
    return { message: 'Password has been reset.' };
  },
};
