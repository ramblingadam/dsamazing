import { createContext, Dispatch, SetStateAction } from "react";

interface CurrentDSContextType {
  structure: string | null;
  setStructure: Dispatch<SetStateAction<string | null>>
}

export const CurrentDSContext = createContext<CurrentDSContextType>({
  structure: null,
  setStructure: () => {}
});