import Navbar from './Navbar'
import Footer from './Footer'
import FloatingButtons from '../ui/FloatingButtons'

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-950 flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        {children}
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  )
}

export default Layout
