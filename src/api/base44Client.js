import { createClient } from '@base44/sdk';

// Create a client without requiring authentication
export const base44 = createClient({
  appId: "68f1e479452527a7a4e86570", 
  requiresAuth: false // Disable auth requirement for public site
});
