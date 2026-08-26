import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import VitrineCard from "@/components/VitrineCard";
import LaboratorioModal from "@/components/LaboratorioModal";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle, 
  Warning, 
  ChartLineUp, 
  UsersThree, 
  Quotes, 
  TrendUp, 
  ShieldWarning, 
  Clock, 
  HeartBreak,
  Buildings,
  Target,
  RocketLaunch
} from "phosphor-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

// Expanded data from the Discovery report
const content = {
  title: "About PP Concursos",
  subtitle: "The story of a company that grew through human care and stalled on operations",
  intro: {
    headline: "The Handcrafted Growth Paradox",
    text: "Ponto a Ponto Concursos (PP) is not just another prep course. Founded in 2018, it was born from a concern: the market was full of content, but empty of care. While big players sold video lectures at scale, PP chose to sell guidance. It worked. It worked so well that the handcrafted model that made them famous ironically became the ceiling that kept them from flying higher."
  },
  historia: {
    ano: "2018",
    origem: "Born from the initiative of teachers who saw students lost amid an excess of directionless material.",
    diferencial: "Collective Mentoring: Structured planning + Close follow-up + Direct support.",
    resultado: "High reputation, visceral engagement and outstanding approval results."
  },
  swot: {
    forcas: [
      "Validated methodology loved by students",
      "Brand with high perceived value and trust",
      "Real closeness between founders and students",
      "High-quality original content"
    ],
    fraquezas: [
      "Critical dependence on founders for operations",
      "Manual processes based on spreadsheets and PDFs",
      "Fragmented communication (WhatsApp, Email, Drive)",
      "Complete absence of structured progress data"
    ]
  },
  dores: [
    {
      titulo: "The Founder Bottleneck",
      descricao: "\"Everything goes through us. If we stop, the operation stops.\" The centralization is not ego; it is the necessity of an undocumented process.",
      icon: UsersThree
    },
    {
      titulo: "The Piracy Weakness",
      descricao: "PDF materials circulate freely in Telegram groups minutes after being sent. Intellectual value drains away without control.",
      icon: ShieldWarning
    },
    {
      titulo: "The Logistics Chaos",
      descricao: "Students spend more time organizing files and hunting for links than studying. The experience is fragmented.",
      icon: Clock
    },
    {
      titulo: "The Data Blindness",
      descricao: "\"We don't know who actually studies.\" Without metrics, PP flies blind, relying only on mentors' gut feeling.",
      icon: ChartLineUp
    }
  ],
  vozDoUsuario: [
    {
      quote: "I love PP, the material is incredible. But some days I spend 20 minutes looking for today's class PDF in the WhatsApp group.",
      author: "Veteran Student, 3 years of study"
    },
    {
      quote: "I feel like I study a lot, but I don't know if I'm moving forward. I miss that visual feedback of 'you advanced 10%'.",
      author: "New Student, 6 months in"
    }
  ]
};

export default function Home() {
  return (
    <Layout>
      <SectionHeader 
        title={content.title} 
        subtitle={content.subtitle} 
      />

      {/* Intro Section - Blog Style */}
      <div className="max-w-4xl mx-auto mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="prose prose-lg prose-slate max-w-none text-muted-foreground"
        >
          <p className="mb-12 leading-relaxed">
            Ponto a Ponto Concursos (PP) is not just another prep course. Founded in 2018, it was born from a concern: the market was full of content, but empty of care. While big players sold video lectures at scale, PP chose to sell guidance. It worked. It worked so well that the handcrafted model that made them famous ironically became the ceiling that kept them from flying higher.
          </p>
          <p className="leading-relaxed">
            The initial success was built on human closeness: mentors who knew students by name, hand-crafted schedules and WhatsApp support. But scaling that level of attention without technology proved impossible. What was once a competitive edge — the "do everything by hand" approach — turned into an operational bottleneck threatening team health and delivery quality. This is the story of how we turned that paradox into a digital evolution plan.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 mt-24">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-border/60 relative overflow-hidden group hover:shadow-md transition-all">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Buildings size={120} weight="duotone" className="text-primary" />
            </div>
            <span className="text-sm font-bold uppercase tracking-wider text-primary/60 mb-2 block">The Origin</span>
            <h3 className="text-3xl font-bold text-primary mb-4">{content.historia.ano}</h3>
            <p className="text-muted-foreground leading-relaxed relative z-10">
              {content.historia.origem}
              <br/><br/>
              The differentiator was always the <strong>{content.historia.diferencial}</strong>
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary to-blue-900 p-8 rounded-2xl shadow-lg text-white relative overflow-hidden">
            <div className="absolute bottom-0 right-0 p-4 opacity-10">
              <RocketLaunch size={120} weight="duotone" className="text-white" />
            </div>
            <span className="text-sm font-bold uppercase tracking-wider text-white/60 mb-2 block">The Result</span>
            <h3 className="text-3xl font-bold mb-4">Success & Bottleneck</h3>
            <p className="text-white/90 leading-relaxed relative z-10">
              The reputation exploded. The approvals came. But each new student meant more manual spreadsheets, more individual messages and more operational hours.
              <br/><br/>
              <strong>Growth became unsustainable.</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Deep Dive Section - The Pain Points */}
      <div className="mb-20">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px bg-border flex-1" />
          <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
            <Warning size={24} className="text-red-500" />
            The Operational Diagnosis
          </h2>
          <div className="h-px bg-border flex-1" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {content.dores.map((dor, index) => {
            const Icon = dor.icon;
            return (
              <VitrineCard key={index} delay={index * 0.1} className="border-l-4 border-l-red-400">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-50 rounded-lg text-red-500 shrink-0">
                    <Icon size={24} weight="duotone" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-2">{dor.titulo}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {dor.descricao}
                    </p>
                  </div>
                </div>
              </VitrineCard>
            );
          })}
        </div>
      </div>

      {/* User Voice Section */}
      <div className="bg-muted/30 rounded-3xl p-8 md:p-16 mb-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-green-500 to-primary" />
        <Quotes size={64} weight="fill" className="text-primary/10 absolute top-8 left-8" />
        
        <div className="relative z-10 text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">The Voice of Those Who Study</h2>
          <p className="text-muted-foreground">
            In the interviews, we heard a clear pattern: love for the brand, frustration with the process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.vozDoUsuario.map((voz, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + (i * 0.1) }}
              className="bg-white p-8 rounded-xl shadow-sm border border-border relative"
            >
              <div className="absolute -top-3 left-8 bg-primary text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full">
                Real Feedback
              </div>
              <p className="text-lg text-foreground/80 italic mb-6 leading-relaxed">
                "{voz.quote}"
              </p>
              <div className="flex items-center gap-3 border-t border-border pt-4">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold text-xs">
                  {voz.author.charAt(0)}
                </div>
                <span className="text-sm font-medium text-muted-foreground">{voz.author}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SWOT Analysis & Lab Data */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        <div className="lg:col-span-8">
          <VitrineCard title="Strategic Balance (SWOT)" icon={<Target size={24} />}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="flex items-center gap-2 font-bold text-green-700 mb-4 bg-green-50 p-2 rounded-lg">
                  <TrendUp size={20} /> Strengths (Preserve)
                </h4>
                <ul className="space-y-3">
                  {content.swot.forcas.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                      <CheckCircle size={16} weight="fill" className="text-green-500 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="flex items-center gap-2 font-bold text-red-700 mb-4 bg-red-50 p-2 rounded-lg">
                  <HeartBreak size={20} /> Weaknesses (Solve)
                </h4>
                <ul className="space-y-3">
                  {content.swot.fraquezas.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                      <Warning size={16} weight="fill" className="text-red-500 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </VitrineCard>
        </div>


      </div>

      {/* CTA Section */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-primary mb-4">The diagnosis is clear. And the solution?</h2>
        <p className="text-muted-foreground mb-8">
          We understood who PP is and where it hurts. The next step was designing the project that would heal those pain points without killing the company's soul.
        </p>
        <Link href="/projeto">
          <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-xl shadow-primary/20 group">
            See the Transformation Project <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </Layout>
  );
}