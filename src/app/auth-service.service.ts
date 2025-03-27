import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../enviornment/enviornment'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private supabase: SupabaseClient;
  private authState = new BehaviorSubject<boolean>(false);


  constructor() {
    this.supabase = createClient(environment.supabase.url, environment.supabase.anonKey);
  }

  async getCurrentUser() {
    const { data, error } = await this.supabase.auth.getUser();
    if (error) throw error;
    return data.user; 
  }

  getAuthState() {
    return this.authState.asObservable();
  }

  async login(email: string, password: string) {
    const { data, error } = await this.supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    this.authState.next(true);  
    return data.user;
  }

  async logout() {
    await this.supabase.auth.signOut();
    this.authState.next(false);  // ✅ Set auth state to false
  }
}