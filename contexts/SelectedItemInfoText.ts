import { createContext, Dispatch, SetStateAction } from 'react'

interface SelectedItemInfoTextContextType {
  selectedItemInfoTextArr: string[]
  setSelectedItemInfoTextArr: Dispatch<SetStateAction<string[]>>
}

export const SelectedItemInfoTextContext =
  createContext<SelectedItemInfoTextContextType>({
    selectedItemInfoTextArr: [''],
    setSelectedItemInfoTextArr: () => {},
  })
