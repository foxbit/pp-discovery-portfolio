import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import VitrineCard from "@/components/VitrineCard";
import LaboratorioModal from "@/components/LaboratorioModal";
import { motion } from "framer-motion";
import { Lightbulb, CheckCircle, ArrowRight, PuzzlePiece, ChartBar, UsersThree, CurrencyDollar, Heart } from "phosphor-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const content = {
  title: "Insights-Chave e Oportunidades",
  subtitle: "Da análise à ação estratégica",
  vitrine: {
    headline: "Cinco Padrões Estratégicos Revelados",
    description: "A análise aprofundada revelou padrões que explicam as dores atuais e apontam caminhos de evolução.",
    padroes: [
      {
        titulo: "A Fragmentação Impede o Foco",
        descricao: "Jornada dispersa entre PDFs, WhatsApp e apps externos é barreira cognitiva que desvia energia do aprendizado",
        oportunidade: "Centralizar o ecossistema de estudo em plataforma única e integrada",
        icon: PuzzlePiece
      },
      {
        titulo: "A Operação Manual Limita a Escala",
        descricao: "Modelo dependente de execução manual atingiu teto operacional",
        oportunidade: "Construir base tecnológica que automatize processos",
        icon: ChartBar
      },
      {
        titulo: "Ausência de Feedback Invisibiliza Progresso",
        descricao: "Alunos relatam sensação de estagnação por não conseguirem medir evolução",
        oportunidade: "Tornar aprendizado visível e mensurável usando dados",
        icon: CheckCircle
      },
      {
        titulo: "A Mentoria é a Alma e o Gargalo",
        descricao: "Acompanhamento humano é ativo mais valioso mas formato atual é insustentável",
        oportunidade: "Potencializar cuidado humano com automação do trivial",
        icon: UsersThree
      },
      {
        titulo: "Modelo de Negócio Gera Instabilidade",
        descricao: "Venda avulsa cria ciclo de picos e vales de faturamento",
        oportunidade: "Transição para modelo de assinatura recorrente",
        icon: CurrencyDollar
      }
    ]
  },
  laboratorio: {
    principios: [
      { titulo: "Tudo em um só lugar", aplicacao: "Unificar cronogramas, conteúdo, videoaulas, dúvidas e progresso em plataforma única" },
      { titulo: "Aprendizado visível", aplicacao: "Criar indicadores claros e visuais de progresso com gráficos e metas" },
      { titulo: "Autonomia guiada", aplicacao: "Oferecer orientação automatizada mantendo acompanhamento humano onde agrega valor" },
      { titulo: "Personalização adaptativa", aplicacao: "Sistema aprende com comportamento do aluno e ajusta plano dinamicamente" },
      { titulo: "Engajamento humano e constante", aplicacao: "Incorporar gamificação, comunidade e reconhecimento com mensagens empáticas" },
      { titulo: "Clareza e foco na interação", aplicacao: "Criar canais organizados para dúvidas, feedbacks e anúncios" },
      { titulo: "Decisões guiadas por dados", aplicacao: "Integrar métricas de desempenho para orientar ações pedagógicas" },
      { titulo: "Propósito visível", aplicacao: "Projetar narrativa que relembre aluno de seu objetivo maior" }
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
            Dados brutos não tomam decisões; insights sim. Após mergulhar nas dores dos usuários e nas lacunas do mercado, sintetizamos todo o aprendizado em direcionamentos estratégicos claros. Esta etapa marca a "virada da análise": o momento em que deixamos de olhar para o problema e começamos a desenhar a solução.
          </p>
          <p>
            Definimos 5 Padrões Estratégicos que transformam cada fraqueza identificada em uma oportunidade de inovação. Além disso, estabelecemos os Princípios de Design que servirão como bússola para o desenvolvimento do produto, garantindo que cada funcionalidade, botão ou interação reforce a proposta de valor central da PP: a humanização escalável.
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
            
            <LaboratorioModal title="Princípios Norteadores de Design">
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
                        <span className="text-xs font-bold uppercase tracking-wider text-green-700 block mb-1">Oportunidade Estratégica</span>
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
            Como traduzir isso em produto?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Mapeamos as funcionalidades essenciais para materializar essa visão estratégica.
          </p>
          <Link href="/funcionalidades">
            <Button className="bg-white text-primary hover:bg-white/90 rounded-full px-8 py-6 text-lg font-semibold shadow-xl shadow-black/20 group border-none">
              Ver Funcionalidades <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
