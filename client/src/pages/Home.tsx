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

// Dados expandidos do relatório de Discovery
const content = {
  title: "Sobre a PP Concursos",
  subtitle: "A trajetória de uma empresa que cresceu pela humanidade e travou pela operação",
  intro: {
    headline: "O Paradoxo do Crescimento Artesanal",
    text: "A Ponto a Ponto Concursos (PP) não é apenas mais um curso preparatório. Fundada em 2018, ela nasceu de uma inquietação: o mercado estava cheio de conteúdo, mas vazio de cuidado. Enquanto grandes players vendiam videoaulas em massa, a PP decidiu vender acompanhamento. Deu certo. Tão certo que o modelo artesanal que os consagrou tornou-se, ironicamente, o teto que os impedia de voar mais alto."
  },
  historia: {
    ano: "2018",
    origem: "Nascida da iniciativa de professores que viam alunos perdidos em meio a excesso de material sem direção.",
    diferencial: "Mentoria Coletiva: Planejamento estruturado + Acompanhamento próximo + Suporte direto.",
    resultado: "Alta reputação, engajamento visceral e resultados expressivos de aprovação."
  },
  swot: {
    forcas: [
      "Metodologia validada e amada pelos alunos",
      "Marca com alta percepção de valor e confiança",
      "Proximidade real entre fundadores e estudantes",
      "Conteúdo autoral de altíssima qualidade"
    ],
    fraquezas: [
      "Dependência crítica dos fundadores na operação",
      "Processos manuais baseados em planilhas e PDFs",
      "Comunicação fragmentada (WhatsApp, E-mail, Drive)",
      "Ausência total de dados estruturados de progresso"
    ]
  },
  dores: [
    {
      titulo: "O Gargalo dos Fundadores",
      descricao: "“Tudo passa por nós. Se a gente para, a operação para.” A centralização não é ego, é necessidade de um processo não documentado.",
      icon: UsersThree
    },
    {
      titulo: "A Fragilidade da Pirataria",
      descricao: "Materiais em PDF circulam livremente em grupos de Telegram minutos após o envio. O valor intelectual escoa sem controle.",
      icon: ShieldWarning
    },
    {
      titulo: "O Caos Logístico",
      descricao: "Alunos gastam mais tempo organizando arquivos e procurando links do que estudando. A experiência é fragmentada.",
      icon: Clock
    },
    {
      titulo: "A Cegueira de Dados",
      descricao: "“Não sabemos quem estuda de verdade.” Sem métricas, a PP voa às cegas, dependendo apenas do feeling dos mentores.",
      icon: ChartLineUp
    }
  ],
  vozDoUsuario: [
    {
      quote: "Eu amo a PP, o material é incrível. Mas tem dia que eu passo 20 minutos procurando onde está o PDF da aula de hoje no grupo do WhatsApp.",
      author: "Aluna Veterana, 3 anos de estudo"
    },
    {
      quote: "Sinto que estudo muito, mas não sei se estou saindo do lugar. Falta aquele feedback visual de 'você avançou 10%'.",
      author: "Aluno Iniciante, 6 meses de casa"
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
          className="prose prose-lg prose-slate max-w-none"
        >
          <p className="text-2xl font-medium text-primary/80 leading-relaxed border-l-4 border-primary pl-6 mb-12 italic">
            "{content.intro.text}"
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-border/60 relative overflow-hidden group hover:shadow-md transition-all">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Buildings size={120} weight="duotone" className="text-primary" />
            </div>
            <span className="text-sm font-bold uppercase tracking-wider text-primary/60 mb-2 block">A Origem</span>
            <h3 className="text-3xl font-bold text-primary mb-4">{content.historia.ano}</h3>
            <p className="text-muted-foreground leading-relaxed relative z-10">
              {content.historia.origem}
              <br/><br/>
              O diferencial sempre foi a <strong>{content.historia.diferencial}</strong>
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary to-blue-900 p-8 rounded-2xl shadow-lg text-white relative overflow-hidden">
            <div className="absolute bottom-0 right-0 p-4 opacity-10">
              <RocketLaunch size={120} weight="duotone" className="text-white" />
            </div>
            <span className="text-sm font-bold uppercase tracking-wider text-white/60 mb-2 block">O Resultado</span>
            <h3 className="text-3xl font-bold mb-4">Sucesso & Gargalo</h3>
            <p className="text-white/90 leading-relaxed relative z-10">
              A reputação explodiu. As aprovações vieram. Mas cada novo aluno significava mais planilhas manuais, mais mensagens individuais e mais horas operacionais.
              <br/><br/>
              <strong>O crescimento tornou-se insustentável.</strong>
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
            O Diagnóstico Operacional
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
          <h2 className="text-3xl font-bold text-primary mb-4">A Voz de Quem Estuda</h2>
          <p className="text-muted-foreground">
            Nas entrevistas, ouvimos um padrão claro: amor pela marca, frustração com o processo.
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
          <VitrineCard title="Balanço Estratégico (SWOT)" icon={<Target size={24} />}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="flex items-center gap-2 font-bold text-green-700 mb-4 bg-green-50 p-2 rounded-lg">
                  <TrendUp size={20} /> Forças (Preservar)
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
                  <HeartBreak size={20} /> Fraquezas (Resolver)
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

        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-white p-6 rounded-xl border border-border shadow-sm flex-1 flex flex-col justify-center items-center text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
              <ChartLineUp size={32} weight="duotone" />
            </div>
            <h3 className="font-bold text-lg mb-2">Dados Operacionais</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Acesse os detalhes brutos sobre o modelo de negócio atual, ticket médio e estrutura de custos.
            </p>
            <LaboratorioModal title="Raio-X Operacional da PP">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold mb-2">Modelo de Negócio Atual</h3>
                  <p>Venda avulsa de cursos (Lançamentos). Sem recorrência.</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-muted rounded border border-border">
                    <span className="text-xs text-muted-foreground block">Ticket Médio</span>
                    <span className="font-mono font-bold text-primary">R$ 1.200 - 1.400</span>
                  </div>
                  <div className="p-3 bg-muted rounded border border-border">
                    <span className="text-xs text-muted-foreground block">Canais</span>
                    <span className="font-mono font-bold text-primary">WhatsApp + PDF</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-red-600">Riscos Mapeados</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Pirataria imediata pós-lançamento</li>
                    <li>Burnout da equipe de mentoria</li>
                    <li>Invisibilidade de métricas de evasão</li>
                  </ul>
                </div>
              </div>
            </LaboratorioModal>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-primary mb-4">O Diagnóstico está claro. E a solução?</h2>
        <p className="text-muted-foreground mb-8">
          Entendemos quem a PP é e onde ela dói. O próximo passo foi desenhar o projeto que curaria essas dores sem matar a alma da empresa.
        </p>
        <Link href="/projeto">
          <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-xl shadow-primary/20 group">
            Ver o Projeto de Transformação <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </Layout>
  );
}
