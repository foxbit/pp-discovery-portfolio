import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import VitrineCard from "@/components/VitrineCard";
import LaboratorioModal from "@/components/LaboratorioModal";
import { motion } from "framer-motion";
import { ChartLineUp, TrendUp, Globe, Users, Database, Heart, ArrowRight } from "phosphor-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const content = {
  title: "Market Research",
  subtitle: "Analysis of competitors, trends and opportunities",
  vitrine: {
    headline: "The EdTech Market in Transformation",
    description: "The market analysis revealed clear opportunities for differentiation through humanity, personalization and focus on results.",
    tendencias: [
      { text: "Exponential growth of the online market", icon: TrendUp },
      { text: "Demand for personalized learning", icon: Users },
      { text: "Importance of engagement and community", icon: Heart },
      { text: "Data and analytics integration", icon: Database },
      { text: "Technology + Human Follow-up", icon: Globe }
    ]
  },
  laboratorio: {
    benchmarkConcorrentes: "Analysis of 5+ competitor platforms revealed that most keep a traditional teaching model, based on passive content delivery.",
    lacunasIdentificadas: [
      "Lack of real personalization and adaptation to the student's pace",
      "Absence of clear feedback on progress",
      "Scattered, poorly structured communication",
      "Lack of community and belonging",
      "Business models based on one-off sales"
    ],
    oportunidadesPP: "PP can differentiate through: centralization, adaptive personalization, visible feedback, human engagement and a recurring model"
  }
};

export default function Mercado() {
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
            The public exam prep market is vast, competitive and often saturated with miracle promises. To position PP Concursos strategically, we carried out a comprehensive comparative analysis, examining both the established giants and the niche players innovating in methodology.
          </p>
          <p>
            We found that, although there are many content platforms (video lectures and PDFs) and question tools, there is a clear gap in the "learning management" segment. Most competitors focus on delivering material, but fail to teach students how to study or to track their progress in a humanized way. It was in this white space — between mass-produced content and unscalable one-on-one mentoring — that we found the golden opportunity for PP.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <VitrineCard className="h-full bg-gradient-to-br from-primary/5 to-transparent border-primary/10">
          <h2 className="text-3xl font-bold text-primary mb-6 leading-tight">
            {content.vitrine.headline}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            {content.vitrine.description}
          </p>
          
          <div className="space-y-4">
            {content.vitrine.tendencias.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-3 bg-white rounded-lg border border-border shadow-sm"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Icon size={16} weight="bold" />
                  </div>
                  <span className="font-medium text-foreground/80">{item.text}</span>
                </motion.div>
              );
            })}
          </div>
        </VitrineCard>

        <div className="space-y-6">
          <VitrineCard title="Where Competitors Fail" icon={<ChartLineUp size={24} />} delay={0.2}>
            <div className="space-y-4">
              {content.laboratorio.lacunasIdentificadas.map((lacuna, i) => (
                <div key={i} className="flex items-start gap-3 pb-4 border-b border-border last:border-0 last:pb-0">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                  <span className="text-muted-foreground">{lacuna}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-border">
              <LaboratorioModal title="Detailed Competitive Analysis">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-bold mb-4 border-b border-border pb-2">General Benchmark</h3>
                    <p className="mb-4">{content.laboratorio.benchmarkConcorrentes}</p>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                    <h3 className="text-lg font-bold mb-4 text-blue-900">Differentiation Opportunities</h3>
                    <p className="text-blue-800 font-medium leading-relaxed">
                      {content.laboratorio.oportunidadesPP}
                    </p>
                  </div>
                </div>
              </LaboratorioModal>
            </div>
          </VitrineCard>

          <VitrineCard 
            className="bg-primary text-white border-none shadow-xl shadow-primary/20"
            delay={0.3}
          >
            <h3 className="text-xl font-bold mb-4">The Golden Opportunity</h3>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              While the market focuses on mass-produced content, PP has the chance to scale what no one else can: <strong>human care.</strong>
            </p>
            <Link href="/insights">
              <Button className="w-full bg-white text-primary hover:bg-white/90 font-semibold group">
                See Strategic Insights <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </VitrineCard>
        </div>
      </div>
    </Layout>
  );
}