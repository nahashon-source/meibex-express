import Layout from '../components/layout/Layout'
import Hero from '../components/sections/Hero'
import Services from '../components/sections/Services'
import Industries from '../components/sections/Industries'
import Coverage from '../components/sections/Coverage'
import Stats from '../components/sections/Stats'
import CTA from '../components/sections/CTA'

function Home() {
  return (
    <Layout>
      <Hero />
      <Services />
      <Industries />
      <Coverage />
      <Stats />
      <CTA />
    </Layout>
  )
}

export default Home
