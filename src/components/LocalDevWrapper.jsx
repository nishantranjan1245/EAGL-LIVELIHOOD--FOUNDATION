import React, { useEffect } from 'react';
import { base44 } from '@/api/base44Client';

// This component prevents authentication redirects on localhost
export default function LocalDevWrapper({ children }) {
  useEffect(() => {
    // Check if running on localhost
    const isLocalhost = window.location.hostname === 'localhost' || 
                        window.location.hostname === '127.0.0.1';
    
    if (isLocalhost && base44?.auth) {
      console.log('🔧 Localhost detected - Overriding authentication');
      
      // Store original redirectToLogin
      const originalRedirect = base44.auth.redirectToLogin;
      
      // Override to prevent redirects
      base44.auth.redirectToLogin = function(nextUrl) {
        console.warn('⚠️ Authentication redirect blocked for localhost');
        return Promise.resolve();
      };
      
      // Also override isAuthenticated to always return true
      const originalIsAuth = base44.auth.isAuthenticated;
      base44.auth.isAuthenticated = function() {
        return Promise.resolve(true);
      };
      
      // Override me() to return mock data
      const originalMe = base44.auth.me;
      base44.auth.me = function() {
        return Promise.resolve({
          id: 'local_dev_user',
          email: 'dev@localhost.com',
          full_name: 'Local Developer',
          role: 'admin',
          created_date: new Date().toISOString(),
        });
      };
      
      console.log('✅ Authentication overrides applied for localhost');
      
      // Cleanup function to restore original methods
      return () => {
        if (originalRedirect) base44.auth.redirectToLogin = originalRedirect;
        if (originalIsAuth) base44.auth.isAuthenticated = originalIsAuth;
        if (originalMe) base44.auth.me = originalMe;
      };
    }
  }, []);
  
  return <>{children}</>;
}