/**
 * Get the keys of an object
 */
export type ObjectKeys<T> = keyof T;

/**
 * Get the values of an object
 */
export type ObjectValues<T> = T[ObjectKeys<T>];
