import { createContext } from "react";
// type AppLocation = string | null

const defaultContext = {
  location: 'main'
}

const Store = createContext(defaultContext)

export default Store