export interface Issue {
  id?: string,
  subject: string;
  description: string;
  created_at: any;
  resolved: boolean; // false by default
  user_id: number;
}
