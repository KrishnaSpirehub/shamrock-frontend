import { Database } from "./database.types";

// Pull out types based on the supabase database schema here
export type User = Database["public"]["Tables"]["users"]["Row"];
