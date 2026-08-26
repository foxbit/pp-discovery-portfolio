import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import VitrineCard from "@/components/VitrineCard";
import LaboratorioModal from "@/components/LaboratorioModal";
import { motion } from "framer-motion";
import { Target, Check, LockKey, Desktop, ChartBar, HeartBreak, ArrowRight } from "phosphor-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const content = {
  title: "The Contracted Project",
  subtitle: "Challenges, scope and identified opportunities",
  vitrine: {
    headline: "Turning Pain into Opportunity",
    description: "The Discovery project mapped 6 critical challenges limiting PP Concursos. Each one represents a strategic value opportunity.",
    desafios: [
      {
        titulo: "Operational Dependency",
        descricao: "The operation depends almost exclusively on the founders, creating a critical bottleneck.",
        icon: Target
      },
      {
        titulo: "Fragmented Processes",
        descricao: "Schedules and materials scattered across multiple tools and channels.",
        icon: Desktop
      },
      {
        titulo: "Piracy Risk",
        descricao: "Uncontrolled PDF distribution compromises intellectual property.",
        icon: LockKey
      },
      {
        titulo: "Fragmented Experience",
        descricao: "Chaotic study journey, demanding excessive management from the student.",
        icon: HeartBreak
      },
      {
        titulo: "Absence of Data",
        descricao: "Lack of structured metrics prevents evidence-based decisions.",
        icon: ChartBar
      },
      {
        titulo: "Team Overload",
        descricao: "Mentors face high emotional and operational overload.",
        icon: UsersThree
      }
    ]
  },
  laboratorio: {
    escopo: "Development of an Interactive Content Editor (WYSIWYG) and a Digital Reader (e-Reader) for creating and consuming educational materials based on reusable content blocks.",
    objetivos: [
      "Centralize schedules, materials, video lectures and communication in a single environment",
      "Automate operational tasks to free mentors for pedagogical follow-up",
      "Make learning visible and measurable through data and indicators",
      "Amplify human care, not replace it",
      "Transition to a recurring, sustainable business model"
    ]
  }
};

import { UsersThree } from "phosphor-react";

export default function Projeto() {
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
            PP Concursos' digital transformation project was born not from an aesthetic demand, but from a need for operational survival. After years running on manual processes that limited growth, the company reached an inflection point: either it digitized its pedagogical intelligence, or it would stagnate in the face of its own complexity.
          </p>
          <p>
            The contracted scope aimed to attack the roots of the problem, proposing not just a "new website", but a complete learning management ecosystem. The central goal was to lift the operational burden off the founders' and mentors' shoulders, letting technology handle the logistics while humans took care of the students. Below, we detail the critical challenges identified and the solution architected to overcome them.
          </p>
        </motion.div>
      </div>

      <div className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-primary">The 6 Critical Challenges</h2>
          <LaboratorioModal title="Detailed Technical Scope">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold mb-4 border-b border-border pb-2">Contracted Scope</h3>
                <p className="mb-4">{content.laboratorio.escopo}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-4 border-b border-border pb-2">Strategic Objectives</h3>
                <ul className="space-y-3">
                  {content.laboratorio.objetivos.map((obj, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-muted/50 p-6 rounded-lg border border-border">
                <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-4">Macro Functional Requirements</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="p-3 bg-white rounded border border-border">
                    <strong className="block text-primary mb-1">WYSIWYG Editor</strong>
                    Modular content creation with reusable blocks
                  </div>
                  <div className="p-3 bg-white rounded border border-border">
                    <strong className="block text-primary mb-1">Digital Reader</strong>
                    Interactive consumption with annotations and progress
                  </div>
                  <div className="p-3 bg-white rounded border border-border">
                    <strong className="block text-primary mb-1">Version Management</strong>
                    Change control and document history
                  </div>
                  <div className="p-3 bg-white rounded border border-border">
                    <strong className="block text-primary mb-1">Access Control</strong>
                    Granular permissions per course and module
                  </div>
                </div>
              </div>
            </div>
          </LaboratorioModal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.vitrine.desafios.map((desafio, index) => {
            const Icon = desafio.icon;
            return (
              <VitrineCard 
                key={index} 
                delay={index * 0.1}
                className="h-full hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Icon size={24} weight="duotone" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{desafio.titulo}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {desafio.descricao}
                </p>
              </VitrineCard>
            );
          })}
        </div>
      </div>

      <div className="bg-primary rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500/20 rounded-full translate-y-1/3 -translate-x-1/3 blur-3xl" />
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider mb-6 border border-white/20">
              The Proposed Solution
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              A Unified Digital Ecosystem
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Not just a website, but a complete platform that centralizes the student experience and automates the company's operation.
            </p>
            <Link href="/metodologia">
              <Button className="bg-white text-primary hover:bg-white/90 rounded-full px-8 py-6 text-lg font-semibold shadow-xl shadow-black/10 group border-none">
                View Methodology <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Smart Centralization",
              "Adaptive Personalization",
              "Human Follow-up",
              "Visible Engagement",
              "Scalable Foundation",
              "Content Security"
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/10 p-4 rounded-xl flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                  <Check size={14} weight="bold" className="text-white" />
                </div>
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}