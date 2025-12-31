// For Vercel serverless: use '/api' (same domain)
// For local dev with Express: use 'http://localhost:3001/api'
const API_BASE_URL = import.meta.env.VITE_API_URL || (
  import.meta.env.PROD ? '/api' : 'http://localhost:3001/api'
);

export const emailApi = {
  // Subscribe to newsletter
  subscribeNewsletter: async (email: string) => {
    try {
      const response = await fetch(`${API_BASE_URL}/email/newsletter`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to subscribe');
      }

      return data;
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      throw error;
    }
  },

  // Submit contact form
  submitContact: async (formData: {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
  }) => {
    try {
      const response = await fetch(`${API_BASE_URL}/email/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message');
      }

      return data;
    } catch (error) {
      console.error('Contact form error:', error);
      throw error;
    }
  },
};

