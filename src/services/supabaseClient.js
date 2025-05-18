import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jsazdjfkjqbrbnqzuvox.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpzYXpkamZranFicmJucXp1dm94Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc1NjM1MjksImV4cCI6MjA2MzEzOTUyOX0.8twPBmib6kxvNUImh-DWABnH352RWNS_WQ2OFjAmVgw';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;