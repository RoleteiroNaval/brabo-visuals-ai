import Hero from '../components/sections/Hero'
import ProblemSolution from '../components/sections/ProblemSolution'
import ScrollScene from '../components/sections/ScrollScene'
import Roadmap from '../components/sections/Roadmap'
import CodeControl from '../components/sections/CodeControl'
import HorizontalShowcase from '../components/sections/HorizontalShowcase'
import MultiFormat from '../components/sections/MultiFormat'
import LearnModules from '../components/sections/LearnModules'
import Comparison from '../components/sections/Comparison'
import Pricing from '../components/sections/Pricing'
import FAQ from '../components/sections/FAQ'

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <ScrollScene />          {/* NOVO: sequência pinada estilo Apple */}
      <Roadmap />
      <CodeControl />
      <HorizontalShowcase />   {/* NOVO: galeria horizontal pinada */}
      <MultiFormat />
      <LearnModules />
      <Comparison />
      <Pricing />
      <FAQ />
    </>
  )
}
