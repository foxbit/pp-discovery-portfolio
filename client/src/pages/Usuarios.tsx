import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import VitrineCard from "@/components/VitrineCard";
import LaboratorioModal from "@/components/LaboratorioModal";
import { motion } from "framer-motion";
import { User, Clock, Target, Quotes, Warning, ArrowRight, HeartBreak } from "phosphor-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const content = {
  title: "User Mapping",
  subtitle: "Personas, journeys and real needs",
  vitrine: {
    headline: "Three Personas that Represent the PP Universe",
    description: "The discovery consolidated three representative personas that translate students' real needs, motivations and frustrations.",
    personas: [
      {
        id: "mariana",
        nome: "Mariana",
        subtitulo: "The Organized Exam Candidate",
        idade: 32,
        profissao: "Lawyer",
        tempoEstudo: "2 years",
        objetivo: "Have an efficient, structured and measurable study plan",
        dor: "Spends excessive time organizing spreadsheets and scattered materials",
        citacao: "I have the best material with PP, but I spend a huge amount of energy managing spreadsheets and apps to know if I'm really progressing.",
        motivadores: ["Clarity", "Organization", "Follow-up"],
        imagem: "/mariana.png"
      },
      {
        id: "rafael",
        nome: "Rafael",
        subtitulo: "The Disorganized Beginner",
        idade: 27,
        profissao: "Temporary civil servant",
        tempoEstudo: "6 months",
        objetivo: "Find the best way to study and keep motivation",
        dor: "Feels lost among so many subjects and different materials",
        citacao: "I start excited, but then I get lost in the middle of PDFs and messages. It feels like I study a lot and learn little.",
        motivadores: ["Support", "Belonging", "Visible results"],
        imagem: "/rafael.png"
      },
      {
        id: "camila",
        nome: "Camila",
        subtitulo: "The Persistent Balancer",
        idade: 35,
        profissao: "Court technician",
        tempoEstudo: "4 years",
        objetivo: "Move up to higher positions without giving up stability",
        dor: "Current model doesn't adapt to her pace or her time",
        citacao: "I don't need you to tell me what to study — I need you to help me see if I'm evolving, and motivate me when I'm not.",
        motivadores: ["Balance", "Autonomy", "Purpose"],
        imagem: "/camila.png"
      }
    ]
  },
  laboratorio: {
    jornada: {
      titulo: "The Exam Candidate's Vicious Cycle",
      fases: [
        { numero: 1, nome: "Initial Enthusiasm", descricao: "Student receives a new schedule and feels highly motivated" },
        { numero: 2, nome: "Progressive Disorganization", descricao: "Practical barriers start to impact the routine; student starts falling behind" },
        { numero: 3, nome: "Cognitive Fatigue", descricao: "Progress invisibility sets in; student works hard but sees no results" },
        { numero: 4, nome: "Emotional Demotivation", descricao: "Emotional barriers peak and engagement plummets" },
        { numero: 5, nome: "Break or Restart", descricao: "Student temporarily quits or restarts the cycle" }
      ],
      pontosCriticos: "The transition between weeks 2 and 4 is the most vulnerable"
    }
  }
};

export default function Usuarios() {
  return (
    <Layout>
      <SectionHeader 
        title={content.title} 
        subtitle={content.subtitle} 
      />

      <div className="max-w-4xl mx-auto mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="prose prose-lg prose-slate max-w-none text-muted-foreground"
        >
          <p>
            Behind every exam registration number there is a story of sacrifice, anxiety and hope. To design a platform that actually works, we needed to go beyond demographic data and understand the psychology of the exam candidate. Who are they? What motivates them to wake up at 5 a.m. to study? What makes them give up halfway?
          </p>
          <p>
            Through in-depth interviews, we mapped not only user profiles (personas), but also the emotional journey they go through. We discovered that the biggest pain is not lack of content, but loneliness and disorganization. The "Exam Candidate's Vicious Cycle" — initial enthusiasm, followed by overload, disorganization and guilt — was the most critical behavioral pattern our solution needed to break.
          </p>
        </motion.div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold text-primary mb-8">The Ecosystem Personas</h2>
        
        <Tabs defaultValue="mariana" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-muted/50 p-1 rounded-xl">
            {content.vitrine.personas.map((persona) => (
              <TabsTrigger 
                key={persona.id} 
                value={persona.id}
                className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm py-3 font-medium transition-all"
              >
                {persona.nome}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {content.vitrine.personas.map((persona) => (
            <TabsContent key={persona.id} value={persona.id} className="mt-0">
              <VitrineCard className="border-primary/10 bg-gradient-to-br from-white to-blue-50/30">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-4 flex flex-col items-center text-center lg:items-start lg:text-left border-b lg:border-b-0 lg:border-r border-border pb-8 lg:pb-0 lg:pr-8">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md mb-4 bg-white">
                      <img 
                        src={persona.imagem} 
                        alt={persona.nome} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-3xl font-bold text-primary mb-1">{persona.nome}</h3>
                    <span className="text-sm font-bold uppercase tracking-wider text-primary/60 mb-6">{persona.subtitulo}</span>
                    
                    <div className="w-full space-y-3 text-sm">
                      <div className="flex justify-between py-2 border-b border-border/50">
                        <span className="text-muted-foreground">Age</span>
                        <span className="font-medium">{persona.idade} years old</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-border/50">
                        <span className="text-muted-foreground">Profession</span>
                        <span className="font-medium">{persona.profissao}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-border/50">
                        <span className="text-muted-foreground">Study Time</span>
                        <span className="font-medium">{persona.tempoEstudo}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-8 space-y-8">
                    <div className="relative p-6 bg-white rounded-xl border border-border shadow-sm">
                      <Quotes size={32} weight="fill" className="absolute top-4 left-4 text-primary/10" />
                      <p className="text-lg italic text-foreground/80 relative z-10 pl-6">
                        "{persona.citacao}"
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="flex items-center gap-2 font-bold text-primary mb-3">
                          <Target size={20} /> Main Goal
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {persona.objetivo}
                        </p>
                      </div>
                      <div>
                        <h4 className="flex items-center gap-2 font-bold text-red-500 mb-3">
                          <HeartBreak size={20} /> Biggest Pain
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {persona.dor}
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-3">Key Motivators</h4>
                      <div className="flex flex-wrap gap-2">
                        {persona.motivadores.map((m, i) => (
                          <span key={i} className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium border border-green-100">
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </VitrineCard>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <VitrineCard title="The Current Journey (AS-IS)" icon={<Clock size={24} />}>
            <div className="relative pl-8 border-l-2 border-dashed border-border space-y-8 py-2">
              {content.laboratorio.jornada.fases.map((fase, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-white border-4 border-muted-foreground/30" />
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Phase {fase.numero}</span>
                    <h4 className="font-bold text-primary">{fase.nome}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">{fase.descricao}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-red-50 border border-red-100 rounded-lg flex items-start gap-3">
              <Warning size={24} className="text-red-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-red-700 text-sm mb-1">Critical Breaking Point</h4>
                <p className="text-red-600 text-sm">
                  {content.laboratorio.jornada.pontosCriticos}. This is where the lack of digital structure becomes fatal to consistency.
                </p>
              </div>
            </div>
          </VitrineCard>
        </div>
        
        <div className="lg:col-span-4 flex flex-col gap-6">
          <VitrineCard className="bg-primary text-white border-none flex-1 flex flex-col justify-center text-center">
            <h3 className="text-2xl font-bold mb-4">How to break this cycle?</h3>
            <p className="text-white/80 mb-8">
              We identified 5 strategic patterns to turn this painful journey into a flow experience.
            </p>
            <Link href="/insights">
              <Button className="w-full bg-white text-primary hover:bg-white/90 font-semibold group">
                See Strategic Solutions <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </VitrineCard>
        </div>
      </div>
    </Layout>
  );
}