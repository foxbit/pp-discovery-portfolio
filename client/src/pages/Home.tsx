import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import VitrineCard from "@/components/VitrineCard";
import LaboratorioModal from "@/components/LaboratorioModal";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Warning, ChartLineUp, UsersThree } from "phosphor-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

// Dados extraídos do site-content.json
const content = {
  title: "Sobre a PP Concursos",
  subtitle: "Trajetória, missão e o desafio de escalar",
  vitrine: {
    headline: "De Mentoria Manual para Plataforma Digital",
    description: "Desde 2018, a PP Concursos construiu sua reputação sobre um pilar inegável: o acompanhamento humano e personalizado. Mas esse sucesso inicial tornou-se seu principal limitador de crescimento.",
    keyPoints: [
      "Fundada em 2018 com foco em mentoria humanizada",
      "Alta reputação e resultados expressivos com alunos",
      "Modelo artesanal e manual limitando escalabilidade",
      "Dependência operacional dos fundadores",
      "Necessidade urgente de transformação digital"
    ],
    paradox: "O mesmo fator que gerou o sucesso inicial — a proximidade humana e o acompanhamento individualizado — tornou-se também o principal limitador do crescimento."
  },
  laboratorio: {
    historico: "A PP Concursos nasceu de uma visão clara: oferecer preparação de qualidade para concursos públicos com acompanhamento próximo e personalizado. Seu modelo inicial era baseado em grupos de WhatsApp, PDFs distribuídos manualmente e mentoria direta dos fundadores.",
    situacaoAtual: "Operação em modelo artesanal com planilhas, PDFs e grupos de WhatsApp. Processos manuais e fragmentados. Ausência de dados estruturados. Sobrecarga da equipe.",
    desafiosEscala: "O negócio atingiu um teto de escalabilidade onde cada novo aluno representa aumento linear no esforço. Crescimento sustentável tornou-se impossibilidade operacional."
  }
};

export default function Home() {
  return (
    <Layout>
      <SectionHeader 
        title={content.title} 
        subtitle={content.subtitle} 
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        {/* Main Hero Card */}
        <div className="lg:col-span-8">
          <VitrineCard className="h-full bg-gradient-to-br from-white to-blue-50/50 border-primary/10">
            <div className="flex flex-col h-full justify-between">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6 leading-tight">
                  {content.vitrine.headline}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {content.vitrine.description}
                </p>
                
                <div className="space-y-4 mb-8">
                  {content.vitrine.keyPoints.map((point, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle size={20} weight="fill" className="text-green-600 mt-1 shrink-0" />
                      <span className="text-foreground/80 font-medium">{point}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-primary/10 flex flex-wrap gap-4 items-center justify-between">
                <LaboratorioModal title="Histórico e Contexto Operacional">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-bold mb-2">1. Histórico da Empresa</h3>
                      <p>{content.laboratorio.historico}</p>
                    </div>
                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <h3 className="text-lg font-bold mb-2 text-yellow-800 flex items-center gap-2">
                        <Warning size={20} /> Situação Atual (AS-IS)
                      </h3>
                      <p className="text-yellow-900">{content.laboratorio.situacaoAtual}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">3. O Teto de Escalabilidade</h3>
                      <p>{content.laboratorio.desafiosEscala}</p>
                    </div>
                  </div>
                </LaboratorioModal>
                
                <Link href="/projeto">
                  <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 shadow-lg shadow-primary/20 group">
                    Ver Desafios do Projeto <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </VitrineCard>
        </div>

        {/* Side Cards */}
        <div className="lg:col-span-4 space-y-6">
          {/* Paradox Card */}
          <VitrineCard 
            title="O Paradoxo do Crescimento" 
            icon={<ChartLineUp size={24} />}
            className="bg-primary text-white border-none shadow-xl shadow-primary/20"
            delay={0.2}
          >
            <p className="text-white/90 text-lg font-medium leading-relaxed italic">
              "{content.vitrine.paradox}"
            </p>
            <div className="mt-6 flex items-center gap-2 text-white/60 text-sm">
              <div className="h-px bg-white/20 flex-1" />
              <span>Insight Central</span>
            </div>
          </VitrineCard>

          {/* Stats/Visual Placeholder */}
          <VitrineCard 
            title="Impacto Atual" 
            icon={<UsersThree size={24} />}
            delay={0.3}
            className="bg-white"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-muted/30 rounded-lg text-center">
                <span className="block text-3xl font-bold text-primary">2018</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Fundação</span>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg text-center">
                <span className="block text-3xl font-bold text-green-600">High</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">NPS</span>
              </div>
            </div>
            <div className="mt-4 p-3 bg-red-50 border border-red-100 rounded-lg text-center">
              <span className="text-red-600 font-bold text-sm flex items-center justify-center gap-2">
                <Warning size={16} weight="fill" />
                Limite Operacional Atingido
              </span>
            </div>
          </VitrineCard>
        </div>
      </div>
      

    </Layout>
  );
}
