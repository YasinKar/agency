import { getFAQ, getSettings } from "@/actions/content.actions";
import { getProjects, getServices } from "@/actions/service.actions";
import About from "@/components/about";
import Contact from "@/components/contact";
import FAQ from "@/components/faq";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Services from "@/components/Whatweoffer";

export default async function Home() {
  const services = await getServices()
  const faqs = await getFAQ()
  const settings = await getSettings()
  const projects = await getProjects()

  return (
    <>
      <Hero />
      <Services services={services} />
      <Projects projects={projects} />
      <About about={settings.about_us} />
      <FAQ faqs={faqs} />
      <Contact />
    </>
  );
}
