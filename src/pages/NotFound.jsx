import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Layout from '../components/layout/Layout'

function NotFound() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <p className="text-orange-500 font-bold text-6xl mb-4">404</p>
          <h1 className="text-white font-bold text-2xl mb-3">Page Not Found</h1>
          <p className="text-gray-400 text-sm mb-8">
            The page you are looking for does not exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
          >
            Back to Home <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default NotFound
