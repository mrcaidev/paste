import { createClient } from "@supabase/supabase-js";

export interface Database {
  public: {
    Tables: {
      default: {
        Row: {
          id: string;
          created_at: string;
          title: string;
          content: string;
          password: string;
        };
        Insert: {
          id: string;
          title: string;
          content: string;
          password: string;
        };
      };
    };
  };
}

const supabaseUrl = process.env.SUPABASE_URL ?? "";
const supabaseKey = process.env.SUPABASE_KEY ?? "";

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);
