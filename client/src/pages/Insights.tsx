import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import VitrineCard from "@/components/VitrineCard";
import LaboratorioModal from "@/components/LaboratorioModal";
import { motion } from "framer-motion";
import { Lightbulb, CheckCircle, ArrowRight, PuzzlePiece, ChartBar, UsersThree, CurrencyDollar, Heart } from "phosphor-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const content = {
  title: "Key Insights & Opportunities",
  subtitle: "From analysis to strategic action",
  vitrine: {
    headline: "Five Strategic Patterns Revealed",
    description: "The in-depth analysis revealed patterns that explain current pain points and point to paths of evolution.",
    padroes: [
      {
        titulo: "Fragmentation Blocks Focus",
        descricao: "A journey scattered across PDFs, WhatsApp and external apps is a cognitive barrier that drains energy from learning",
        oportunidade: "Centralize the study ecosystem in a single, integrated platform",
        icon: PuzzlePiece
      },
      {
        titulo: "Manual Operation Limits Scale",
        descricao: "A model dependent on manual execution has hit its operational ceiling",
        oportunidade: "Build a technology foundation that automates processes",
        icon: ChartBar
      },
      {
        titulo: "Lack of Feedback Hides Progress",
        descricao: "Students report feeling stuck because they can't measure their evolution",
        oportunidade: "Make learning visible and measurable using data",
        icon: CheckCircle
      },
      {
        titulo: "Mentoring is the Soul and the Bottleneck",
        descricao: "Human follow-up is the most valuable asset, but the current format is unsustainable",
        oportunidade: "Amplify human care with automation of the trivial",
        icon: UsersThree
      },
      {
        titulo: "Business Model Creates Instability",
        descricao: "One-off sales create a cycle of revenue peaks and valleys",
        oportunidade: "Transition to a recurring subscription model",
        icon: CurrencyDollar
      }
    ]
  },
  laboratorio: {
    principios: [
      { titulo: "Everything in one place", aplicacao: "Unify schedules, content, video lectures, questions and progress in a single platform" },
      { titulo: "Visible learning", aplicacao: "Create clear, visual progress indicators with charts and goals" },
      { titulo: "Guided autonomy", aplicacao: "Offer automated guidance while keeping human follow-up where it adds value" },
      { titulo: "Adaptive personalization", aplicacao: "System learns from student behavior and adjusts the plan dynamically" },
      { titulo: "Constant human engagement", aplicacao: "Incorporate gamification, community and recognition with empathetic messaging" },
      { titulo: "Clarity and focus in interaction", aplicacao: "Create organized channels for questions, feedback and announcements" },
      { titulo: "Data-driven decisions", aplicacao: "Integrate performance metrics to guide pedagogical actions" },
      { titulo: "Visible purpose", aplicacao: "Design a narrative that reminds the student of their bigger goal" }
    ]
  }
};

export default function Insights() {
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
            Raw data doesn't make decisions; insights do. After diving into user pain points and market gaps, we synthesized all the learning into clear strategic directions. This stage marks the "turn of the analysis": the moment we stop looking at the problem and start designing the solution.
          </p>
          <p>
            We defined 5 Strategic Patterns that turn each identified weakness into an innovation opportunity. In addition, we established the Design Principles that will serve as a compass for product development, ensuring that every feature, button or interaction reinforces PP's central value proposition: scalable humanization.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        <div className="lg:col-span-4">
          <div className="sticky top-24">
            <h2 className="text-3xl font-bold text-primary mb-6 leading-tight">
              {content.vitrine.headline}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {content.vitrine.description}
            </p>
            
            <LaboratorioModal title="Guiding Design Principles">
              <div className="grid grid-cols-1 gap-6">
                {content.laboratorio.principios.map((principio, i) => (
                  <div key={i} className="p-4 bg-white border border-border rounded-lg">
                    <h3 className="font-bold text-primary mb-2 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs">{i + 1}</span>
                      {principio.titulo}
                    </h3>
                    <p className="text-sm text-muted-foreground">{principio.aplicacao}</p>
                  </div>
                ))}
              </div>
            </LaboratorioModal>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-6">
          {content.vitrine.padroes.map((padrao, index) => {
            const Icon = padrao.icon;
            return (
              <VitrineCard 
                key={index} 
                delay={index * 0.1}
                className="group hover:border-primary/30 transition-all"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-red-500 shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={24} weight="duotone" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-2">{padrao.titulo}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {padrao.descricao}
                    </p>
                    
                    <div className="p-4 bg-green-50 border border-green-100 rounded-lg flex items-start gap-3">
                      <Lightbulb size={20} weight="fill" className="text-green-600 mt-0.5 shrink-0" />
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-green-700 block mb-1">Strategic Opportunity</span>
                        <p className="text-green-800 font-medium text-sm">{padrao.oportunidade}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </VitrineCard>
            );
          })}
        </div>
      </div>

      <div className="bg-gradient-to-r from-primary to-blue-900 rounded-2xl p-8 md:p-12 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        <div className="relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            How to turn this into a product?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            We mapped the essential features to bring this strategic vision to life.
          </p>
          <Link href="/funcionalidades">
            <Button className="bg-white text-primary hover:bg-white/90 rounded-full px-8 py-6 text-lg font-semibold shadow-xl shadow-black/20 group border-none">
              See Features <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}