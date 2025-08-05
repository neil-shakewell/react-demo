import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  projects: [
    {
      name: 'Desktop Chrome',
      use: { ...devices['Desktop Chrome'] },
    },
    // Add other browsers/devices as needed
  ],
  use: {
    baseURL: 'http://localhost:8000', // Adjust to your React app's development server URL
  },
  // Other options like `fullyParallel`, `retries`, `reporter`, `webServer` etc.
});