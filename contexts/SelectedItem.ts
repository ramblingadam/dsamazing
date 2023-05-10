import { createContext, Dispatch, SetStateAction } from 'react'

export type SelectedItem = {
  id: string | null
  textArr: string[]
}

interface SelectedItemContextType {
  selectedItem: SelectedItem | null
  setSelectedItem: Dispatch<SetStateAction<SelectedItem>>
}

export const SelectedItemContext = createContext<SelectedItemContextType>({
  selectedItem: null,
  setSelectedItem: () => {},
})
