import { createContext } from "react";

interface CurrentDSContextType {
  structure: string | null;
  setStructure: (ds:string) => void
}

export const CurrentDSContext = createContext<CurrentDSContextType>({
  structure: null,
  setStructure: () => null
});