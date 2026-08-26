import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import VitrineCard from "@/components/VitrineCard";
import LaboratorioModal from "@/components/LaboratorioModal";
import { motion } from "framer-motion";
import { ListChecks, CalendarCheck, Books, Exam, ChartLineUp, UsersThree, BellRinging, Check } from "phosphor-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const content = {
  title: "Features Identified",
  subtitle: "Platform modules and capabilities",
  vitrine: {
    headline: "Solution Architecture in 6 Pillars",
    description: "The features were organized into 6 pillars that cover the entire student journey.",
    eixos: [
      {
        numero: 1,
        titulo: "Journey Planning",
        descricao: "Dynamic schedules, personalized goals and adaptation to the student's pace",
        icon: CalendarCheck
      },
      {
        numero: 2,
        titulo: "Library and Base Material",
        descricao: "Centralization of content, video lectures, PDFs and teaching materials",
        icon: Books
      },
      {
        numero: 3,
        titulo: "Knowledge Reinforcement",
        descricao: "Question bank, mock exams and smart review",
        icon: Exam
      },
      {
        numero: 4,
        titulo: "Performance Dashboard",
        descricao: "Progress dashboards, indicators and evolution reports",
        icon: ChartLineUp
      },
      {
        numero: 5,
        titulo: "Community",
        descricao: "Forum, exchanges between students and a sense of belonging",
        icon: UsersThree
      },
      {
        numero: 6,
        titulo: "Cross-cutting Elements",
        descricao: "Notifications, gamification, follow-up and support",
        icon: BellRinging
      }
    ]
  }
};

export default function Funcionalidades() {
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
            The solution architecture is not just a list of features; it is the materialization of the strategy. To address the challenges of fragmentation and lack of scale, we designed an integrated ecosystem made up of 6 functional pillars. Each module was designed to solve a specific pain in the user journey, creating a continuous learning flow.
          </p>
          <p>
            From automated planning to an engaged community, every feature has a clear purpose: remove operational friction so the student can focus on what matters — studying. Below, we present the modular structure of the PP Platform, detailing how each component contributes to the unified experience we are building.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {content.vitrine.eixos.map((eixo, index) => {
          const Icon = eixo.icon;
          return (
            <VitrineCard 
              key={index} 
              delay={index * 0.1}
              className="h-full hover:-translate-y-1 transition-transform duration-300 border-t-4 border-t-primary"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Icon size={24} weight="duotone" />
                </div>
                <span className="text-4xl font-bold text-muted-foreground/10">0{eixo.numero}</span>
              </div>
              
              <h3 className="text-xl font-bold text-primary mb-3">{eixo.titulo}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {eixo.descricao}
              </p>
              
              <div className="pt-4 border-t border-border">
                <LaboratorioModal title={`Details: ${eixo.titulo}`} triggerText="View Requirements">
                  <div className="space-y-4">
                    <p className="text-muted-foreground italic">
                      Detailed list of functional requirements for the {eixo.titulo} module.
                    </p>
                    <ul className="space-y-2">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <li key={i} className="flex items-start gap-2 p-2 hover:bg-muted/50 rounded">
                          <Check size={16} className="text-green-600 mt-0.5" />
                          <span className="text-sm">Detailed functional requirement {eixo.numero}.{i} - Technical description of the specific feature for this module.</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </LaboratorioModal>
              </div>
            </VitrineCard>
          );
        })}
      </div>

      <div className="bg-muted/30 rounded-2xl p-8 md:p-12 border border-border text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
          Ready to see the result?
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          This portfolio documents the Discovery phase. Platform development follows the principles established here.
        </p>
        <Link href="/">
          <Button variant="outline" className="rounded-full px-8 py-6 border-primary/20 text-primary hover:bg-primary/5">
            Back to Home
          </Button>
        </Link>
      </div>
    </Layout>
  );
}