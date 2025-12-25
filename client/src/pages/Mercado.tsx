import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import VitrineCard from "@/components/VitrineCard";
import LaboratorioModal from "@/components/LaboratorioModal";
import { motion } from "framer-motion";
import { ChartLineUp, TrendUp, Globe, Users, Database, Heart, ArrowRight } from "phosphor-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const content = {
  title: "Pesquisa Mercadológica",
  subtitle: "Análise de concorrentes, tendências e oportunidades",
  vitrine: {
    headline: "O Mercado de EdTech em Transformação",
    description: "A análise de mercado revelou oportunidades claras para diferenciação através de humanidade, personalização e foco em resultados.",
    tendencias: [
      { text: "Crescimento exponencial do mercado online", icon: TrendUp },
      { text: "Demanda por aprendizado personalizado", icon: Users },
      { text: "Importância de engajamento e comunidade", icon: Heart },
      { text: "Integração de dados e analytics", icon: Database },
      { text: "Tecnologia + Acompanhamento Humano", icon: Globe }
    ]
  },
  laboratorio: {
    benchmarkConcorrentes: "Análise de 5+ plataformas concorrentes revelou que a maioria mantém modelo tradicional de ensino, baseado em transmissão passiva de conteúdo.",
    lacunasIdentificadas: [
      "Falta de personalização real e adaptação ao ritmo do aluno",
      "Ausência de feedback claro sobre progresso",
      "Comunicação dispersa e pouco estruturada",
      "Falta de senso de comunidade e pertencimento",
      "Modelos de negócio baseados em venda pontual"
    ],
    oportunidadesPP: "A PP pode se diferenciar através de: centralização, personalização adaptativa, feedback visível, engajamento humano e modelo recorrente"
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
            O mercado de preparação para concursos públicos é vasto, competitivo e, muitas vezes, saturado de promessas milagrosas. Para posicionar a PP Concursos de forma estratégica, realizamos uma análise comparativa abrangente, examinando tanto os gigantes consolidados quanto os players de nicho que inovam em metodologia.
          </p>
          <p>
            Identificamos que, embora existam muitas plataformas de conteúdo (videoaulas e PDFs) e ferramentas de questões, há uma lacuna clara no segmento de "gestão de aprendizado". A maioria dos concorrentes foca na entrega de material, mas falha em ensinar o aluno a estudar ou em acompanhar seu progresso de forma humanizada. Foi nesse espaço em branco — entre o conteúdo massificado e a mentoria individual inescalável — que encontramos a oportunidade de ouro para a PP.
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
          <VitrineCard title="Onde os Concorrentes Falham" icon={<ChartLineUp size={24} />} delay={0.2}>
            <div className="space-y-4">
              {content.laboratorio.lacunasIdentificadas.map((lacuna, i) => (
                <div key={i} className="flex items-start gap-3 pb-4 border-b border-border last:border-0 last:pb-0">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                  <span className="text-muted-foreground">{lacuna}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-border">
              <LaboratorioModal title="Análise Competitiva Detalhada">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-bold mb-4 border-b border-border pb-2">Benchmark Geral</h3>
                    <p className="mb-4">{content.laboratorio.benchmarkConcorrentes}</p>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                    <h3 className="text-lg font-bold mb-4 text-blue-900">Oportunidades de Diferenciação</h3>
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
            <h3 className="text-xl font-bold mb-4">A Oportunidade de Ouro</h3>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              Enquanto o mercado foca em conteúdo massificado, a PP tem a chance de escalar o que ninguém mais consegue: <strong>o cuidado humano.</strong>
            </p>
            <Link href="/insights">
              <Button className="w-full bg-white text-primary hover:bg-white/90 font-semibold group">
                Ver Insights Estratégicos <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </VitrineCard>
        </div>
      </div>
    </Layout>
  );
}
