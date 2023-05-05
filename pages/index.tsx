import { CurrentDSContext } from '@/contexts/CurrentDS'
import { useState } from 'react'

//// COMPONENTS
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Main from '@/components/Main'



export default function Home() {
  const [currentStructure, setCurrentStructure] = useState<string | null>(null)

  return (
    <div
      className="app-wrapper box-border flex flex-col min-h-screen font-sans antialiased text-black bg-teal-100"
    >
      <CurrentDSContext.Provider value={{structure: currentStructure, setStructure: setCurrentStructure}}>
        <Header />
        <Main />
        <Footer />
      </CurrentDSContext.Provider>
    </div>
  )
}