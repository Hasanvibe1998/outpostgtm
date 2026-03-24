import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://xixxylobftvhipenxwws.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhpeHh5bG9iZnR2aGlwZW54d3dzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQzNzg1ODcsImV4cCI6MjA4OTk1NDU4N30.tmZuxjYD-BSPeRuQUvyIuu0YoynqCCuxAH-ZgYsY-Hg"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)