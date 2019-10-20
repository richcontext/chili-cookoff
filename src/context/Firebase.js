import { createContext } from 'preact';

const FirebaseContext = createContext(null);

export const FirebaseProvider = FirebaseContext.Provider;

export default FirebaseContext;
