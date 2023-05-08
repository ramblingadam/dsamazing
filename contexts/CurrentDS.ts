import { createContext, Dispatch, SetStateAction } from 'react'

interface CurrentDSContextType {
  structure: string
  setStructure: Dispatch<SetStateAction<string>>
}

export const CurrentDSContext = createContext<CurrentDSContextType>({
  structure: '',
  setStructure: () => {},
})
