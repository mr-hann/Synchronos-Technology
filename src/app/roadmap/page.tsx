import { Cpu, Dna, Building, Rocket } from 'lucide-react';

const phases = [
  {
    id: "phase-1",
    phase: "Phase One",
    title: "Digital Phase (Modern Technology Digitals)",
    icon: <Cpu className="h-10 w-10" />,
    description: "Our journey begins by establishing a strong digital foundation. We empower businesses to thrive in the digital age, create software that solves real-world problems, and nurture the next generation of tech innovators. This phase generates the initial capital and expertise to fund our future ambitions.",
    points: [
      "Web agency for small businesses.",
      "Software and tools for everyday problems (housing, automation).",
      "Training and community hub for web technologies.",
      "Startup incubation with equity sharing for reinvestment."
    ]
  },
  {
    id: "phase-2",
    phase: "Phase Two",
    title: "IoT and Accessories Phase",
    icon: <Dna className="h-10 w-10" />,
    description: "Building on our digital expertise, we move into the physical world. We develop interconnected IoT systems for homes, businesses, and cities. A parallel division for digital accessories creates innovative gadgets and generates revenue, strengthening our ecosystem.",
    points: [
      "IoT hardware and software systems.",
      "Connecting people, businesses, and cities.",
      "Development of digital accessories and wearables.",
      "Strategic brand mergers and acquisitions."
    ]
  },
  {
    id: "phase-3",
    phase: "Phase Three",
    title: "Real Estate and Power & Energy Phase",
    icon: <Building className="h-10 w-10" />,
    description: "With a connected world, we build the infrastructure to house and power it. This phase focuses on creating a model smart city—a living lab for future urbanism—and revolutionizing renewable energy to make it affordable and globally accessible.",
    points: [
      "Construction of an integrated smart city.",
      "Heavy investment in solar, wind, and clean energy.",
      "Focus on energy efficiency and affordability.",
      "Creating a global hub for innovation and tourism."
    ]
  },
  {
    id: "phase-4",
    phase: "Phase Four",
    title: "Space Exploration Phase",
    icon: <Rocket className="h-10 w-10" />,
    description: "The final frontier. Our ultimate goal is to make humanity a multi-planetary species. We will develop affordable, accessible space technology to extend human consciousness beyond Earth, starting with our solar system and aiming for the stars.",
    points: [
      "Developing affordable space travel technology.",
      "Building infrastructure for off-world living.",
      "Democratizing access to space for innovators and researchers.",
      "Ensuring the long-term survival and expansion of humanity."
    ]
  }
];

export default function RoadmapPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-16 sm:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline mb-4">
          Our Roadmap to a Type 3 Civilization
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          A step-by-step journey to architect the future of humanity.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary via-accent to-background hidden md:block" aria-hidden="true" />

        <div className="space-y-12 md:space-y-24">
          {phases.map((phase, index) => (
            <div key={phase.id} id={phase.id} className="relative flex items-center md:items-stretch">
              <div className={`flex w-full items-center justify-between flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-5/12">
                  <div className="rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 p-6 shadow-lg shadow-primary/10">
                    <h3 className="mb-3 text-2xl font-bold text-primary font-headline">{phase.phase}: {phase.title}</h3>
                    <p className="mb-4 text-muted-foreground">{phase.description}</p>
                    <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                      {phase.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="hidden md:block w-5/12"></div>
              </div>

              <div className="absolute left-1/2 top-0 md:top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-4 md:-translate-y-1/2 rounded-full border-4 border-primary bg-background flex items-center justify-center text-primary z-10">
                {phase.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
