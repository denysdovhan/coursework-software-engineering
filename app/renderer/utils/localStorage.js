/**
 * Load saved state from localStorage
 */
export function loadState() {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error('Failed to load state:', error);
    return undefined;
  }
}

/**
 * Save application state to localStorage
 * @param {object} state Application state
 */
export function saveState(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (error) {
    console.error('Failed to save state:', state);
  }
}
