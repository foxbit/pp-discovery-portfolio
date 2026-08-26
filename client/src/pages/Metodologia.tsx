import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import VitrineCard from "@/components/VitrineCard";
import LaboratorioModal from "@/components/LaboratorioModal";
import { motion } from "framer-motion";
import { MagnifyingGlass, Users, FileText, Lightbulb, PresentationChart, ArrowRight } from "phosphor-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const content = {
  title: "Discovery Methodology",
  subtitle: "Qualitative, exploratory and user-centered approach",
  vitrine: {
    headline: "Deep Research with Real Users",
    description: "The discovery was structured across multiple methodological fronts to cross-reference different information sources and generate a comprehensive view.",
    metodologias: [
      {
        nome: "Qualitative Interviews",
        descricao: "11 in-depth interviews with candidates and former candidates of different profiles.",
        icon: Users
      },
      {
        nome: "Competitor Analysis",
        descricao: "Detailed benchmark of educational platforms to identify gaps.",
        icon: PresentationChart
      },
      {
        nome: "Document Analysis",
        descricao: "Survey of pedagogical best practices and market references.",
        icon: FileText
      },
      {
        nome: "Persona Consolidation",
        descricao: "Synthesis of observed patterns into representative archetypes.",
        icon: Users
      },
      {
        nome: "Stakeholder Workshops",
        descricao: "Collaborative sessions to validate findings and co-create solutions.",
        icon: Lightbulb
      }
    ]
  },
  laboratorio: {
    abordagem: "Qualitative and exploratory, aiming to deeply understand students' behavior, motivations and difficulties.",
    fases: [
      "Definition of objectives and planning",
      "Data collection through multiple methodologies",
      "Qualitative analysis and pattern identification",
      "Synthesis of personas and journeys",
      "Consolidation of insights and opportunities",
      "Formulation of strategic directions"
    ]
  }
};

export default function Metodologia() {
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
            To ensure the proposed solution was not based only on assumptions, we structured a rigorous, multifaceted Discovery process. We believe that deeply understanding the problem is the most important step in designing the right solution. That is why we immersed ourselves in the reality of students and PP Concursos' operations through a qualitative, exploratory approach.
          </p>
          <p>
            Our investigation combined active listening to real users with a cold analysis of the market and internal documents. We did not just seek to validate hypotheses, but to uncover behavioral patterns and latent pain points that even the students themselves could not clearly articulate. The result was a detailed map of human and technical needs that guided every design decision in this project.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        <div className="lg:col-span-5">
          <div className="sticky top-24">
            <h2 className="text-3xl font-bold text-primary mb-6 leading-tight">
              {content.vitrine.headline}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {content.vitrine.description}
            </p>
            
            <LaboratorioModal title="Complete Methodological Process">
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold mb-4 border-b border-border pb-2">Scientific Approach</h3>
                  <p className="mb-4">{content.laboratorio.abordagem}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-4 border-b border-border pb-2">Discovery Phases</h3>
                  <div className="relative pl-8 border-l-2 border-primary/10 space-y-8">
                    {content.laboratorio.fases.map((fase, i) => (
                      <div key={i} className="relative">
                        <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-white border-4 border-primary" />
                        <h4 className="font-bold text-primary mb-1">Phase {i + 1}</h4>
                        <p className="text-muted-foreground">{fase}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </LaboratorioModal>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-4">
          {content.vitrine.metodologias.map((metodo, index) => {
            const Icon = metodo.icon;
            return (
              <VitrineCard 
                key={index} 
                delay={index * 0.1}
                className="flex items-start gap-6 p-6 hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Icon size={24} weight="duotone" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">{metodo.nome}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {metodo.descricao}
                  </p>
                </div>
              </VitrineCard>
            );
          })}
        </div>
      </div>

      <div className="bg-muted/30 rounded-2xl p-8 md:p-12 border border-border text-center">
        <MagnifyingGlass size={48} weight="duotone" className="text-primary mx-auto mb-6 opacity-50" />
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
          What did we find out?
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          The research revealed a market in transformation and deep user needs that were not being met.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/mercado">
            <Button variant="outline" className="rounded-full px-6 border-primary/20 text-primary hover:bg-primary/5">
              View Market Analysis
            </Button>
          </Link>
          <Link href="/usuarios">
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 shadow-lg shadow-primary/20 group">
              Meet the Users <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}