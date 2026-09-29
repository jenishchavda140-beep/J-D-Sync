import { User, Client, Invoice } from '@/types';

export type { User, Client, Invoice };

export interface ApiResponse<T> {
  data?: T;
  error?: string;
  status: number;
}
