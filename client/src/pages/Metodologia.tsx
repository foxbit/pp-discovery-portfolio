import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import VitrineCard from "@/components/VitrineCard";
import LaboratorioModal from "@/components/LaboratorioModal";
import { motion } from "framer-motion";
import { MagnifyingGlass, Users, FileText, Lightbulb, PresentationChart, ArrowRight } from "phosphor-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const content = {
  title: "Metodologia de Discovery",
  subtitle: "Abordagem qualitativa, exploratória e centrada no usuário",
  vitrine: {
    headline: "Pesquisa Profunda com Usuários Reais",
    description: "O discovery foi estruturado em múltiplas frentes metodológicas para cruzar diferentes fontes de informação e gerar visão abrangente.",
    metodologias: [
      {
        nome: "Entrevistas Qualitativas",
        descricao: "11 entrevistas em profundidade com candidatos e ex-candidatos de diferentes perfis.",
        icon: Users
      },
      {
        nome: "Análise de Concorrentes",
        descricao: "Benchmark detalhado de plataformas educacionais para identificar lacunas.",
        icon: PresentationChart
      },
      {
        nome: "Análise Documental",
        descricao: "Levantamento de boas práticas pedagógicas e referências de mercado.",
        icon: FileText
      },
      {
        nome: "Consolidação de Personas",
        descricao: "Síntese de padrões observados em arquétipos representativos.",
        icon: Users
      },
      {
        nome: "Workshops com Stakeholders",
        descricao: "Sessões colaborativas para validar achados e co-criar soluções.",
        icon: Lightbulb
      }
    ]
  },
  laboratorio: {
    abordagem: "Qualitativa e exploratória, com objetivo de compreender em profundidade o comportamento, motivações e dificuldades dos estudantes.",
    fases: [
      "Definição de objetivos e planejamento",
      "Coleta de dados através de múltiplas metodologias",
      "Análise qualitativa e identificação de padrões",
      "Síntese de personas e jornadas",
      "Consolidação de insights e oportunidades",
      "Formulação de direcionamentos estratégicos"
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
            Para garantir que a solução proposta não fosse baseada apenas em suposições, estruturamos um processo de Discovery rigoroso e multifacetado. Acreditamos que entender o problema em profundidade é o passo mais importante para desenhar a solução correta. Por isso, mergulhamos na realidade dos estudantes e da operação da PP Concursos através de uma abordagem qualitativa e exploratória.
          </p>
          <p>
            Nossa investigação combinou a escuta ativa de usuários reais com a análise fria do mercado e dos documentos internos. Não buscamos apenas validar hipóteses, mas descobrir padrões de comportamento e dores latentes que nem mesmo os alunos conseguiam verbalizar claramente. O resultado foi um mapa detalhado das necessidades humanas e técnicas que guiaram cada decisão de design deste projeto.
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
            
            <LaboratorioModal title="Processo Metodológico Completo">
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold mb-4 border-b border-border pb-2">Abordagem Científica</h3>
                  <p className="mb-4">{content.laboratorio.abordagem}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-4 border-b border-border pb-2">Fases do Discovery</h3>
                  <div className="relative pl-8 border-l-2 border-primary/10 space-y-8">
                    {content.laboratorio.fases.map((fase, i) => (
                      <div key={i} className="relative">
                        <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-white border-4 border-primary" />
                        <h4 className="font-bold text-primary mb-1">Fase {i + 1}</h4>
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
          O que descobrimos?
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          A pesquisa revelou um mercado em transformação e necessidades profundas dos usuários que não estavam sendo atendidas.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/mercado">
            <Button variant="outline" className="rounded-full px-6 border-primary/20 text-primary hover:bg-primary/5">
              Ver Análise de Mercado
            </Button>
          </Link>
          <Link href="/usuarios">
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 shadow-lg shadow-primary/20 group">
              Conhecer os Usuários <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
