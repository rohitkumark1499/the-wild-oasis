/* eslint-disable no-undef */
import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://vvjvvwjeppdscjclxddt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ2anZ2d2plcHBkc2NqY2x4ZGR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk3NTYzNTQsImV4cCI6MjAwNTMzMjM1NH0.CvL9EV0ePMr-fjS3sfx9pDxis0C37L3io9MIwjm3uqg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
