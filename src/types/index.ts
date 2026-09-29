export interface User {
  id: string;
  email: string;
  full_name: string;
  created_at: string;
}

export interface Client {
  id: string;
  user_id: string;
  name: string;
  email: string;
  company?: string;
  created_at: string;
}

export interface Invoice {
  id: string;
  user_id: string;
  client_id: string;
  amount: number;
  status: 'Draft' | 'Sent' | 'Paid' | 'Overdue';
  due_date: string;
  stripe_payment_link?: string;
  created_at: string;
}

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, fullName: string) => Promise<void>;
  signOut: () => Promise<void>;
}
