import Projects from './projects'
import Skills from './skills-section'
import Experience from './experience-section'
import ContactForm from './contact-form'

export function PortfolioBody() {

  return (
    <div className="my-16 lg:pt-0 lg:w-1/2 lg:py-24">
      <Experience />
      <Projects />
      <Skills />
      <ContactForm />
    </div>
  )
}