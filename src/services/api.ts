import type { Tax, Country } from '../types';

const API_BASE_URL = 'https://685013d7e7c42cfd17974a33.mockapi.io';

export const api = {
  // Get all taxes
  getTaxes: async (): Promise<Tax[]> => {
    const response = await fetch(`${API_BASE_URL}/taxes`);
    if (!response.ok) {
      throw new Error('Failed to fetch taxes');
    }
    return response.json();
  },

  // Get tax by ID
  getTaxById: async (id: string): Promise<Tax> => {
    const response = await fetch(`${API_BASE_URL}/taxes/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch tax');
    }
    return response.json();
  },

  // Get all countries
  getCountries: async (): Promise<Country[]> => {
    const response = await fetch(`${API_BASE_URL}/countries`);
    if (!response.ok) {
      throw new Error('Failed to fetch countries');
    }
    return response.json();
  },

  // Update tax
  updateTax: async (id: string, data: Partial<Tax>): Promise<Tax> => {
    const response = await fetch(`${API_BASE_URL}/taxes/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Failed to update tax');
    }
    return response.json();
  },
};

