/**
 * @description A test hook
 * @returns {{test: number}} A random number
 */
export default function useTest(): { test: number } {
  return {
    test: Math.random(),
  };
}
