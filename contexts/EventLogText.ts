import { createContext, Dispatch, SetStateAction } from 'react'

interface EventLogTextContextType {
  eventLogTextArr: string[]
  setEventLogTextArr: Dispatch<SetStateAction<string[]>>
}

export const EventLogTextContext = createContext<EventLogTextContextType>({
  eventLogTextArr: [''],
  setEventLogTextArr: () => {},
})
