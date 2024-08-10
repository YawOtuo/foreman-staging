// useSignUpStore.ts
import {create} from 'zustand';

// Define the state and actions types
interface SignUpState {
  username: string;
  setUsername: (username: string) => void;
}

// Create the Zustand store with type definitions
const useSignUpStore = create<SignUpState>((set) => ({
  username: '',
  setUsername: (username) => set({ username }),
}));

export default useSignUpStore;
