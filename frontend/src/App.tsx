'use client'

import Layout from './components/layout'
import Hero from './components/hero'
import Services from './components/services'
import Projects from './components/projects'
import FAQ from './components/faq'
import Contact from './components/contact'


export default function App() {
  return (
    <Layout>
      <Hero />
      <Services />
      <Projects />
      <FAQ />
      <Contact />
    </Layout>
  )
}

