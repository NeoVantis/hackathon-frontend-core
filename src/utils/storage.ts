/**
 * Utility functions for safe localStorage operations.
 * All functions in this module interact with browser localStorage.
 */

const PENDING_USER_ID_KEY = 'pendingUserId';

export const storage = {
  /**
   * Get the pending user ID from localStorage
   */
  getPendingUserId: (): string | null => {
    try {
      return localStorage.getItem(PENDING_USER_ID_KEY);
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return null;
    }
  },

  /**
   * Set the pending user ID in localStorage
   */
  setPendingUserId: (userId: string): void => {
    try {
      localStorage.setItem(PENDING_USER_ID_KEY, userId);
    } catch (error) {
      console.error('Error writing to localStorage:', error);
    }
  },

  /**
   * Remove the pending user ID from localStorage
   */
  removePendingUserId: (): void => {
    try {
      localStorage.removeItem(PENDING_USER_ID_KEY);
    } catch (error) {
      console.error('Error removing from localStorage:', error);
    }
  },

  /**
   * Clear all registration-related data from localStorage
   */
  clearRegistrationData: (): void => {
    storage.removePendingUserId();
  }
};