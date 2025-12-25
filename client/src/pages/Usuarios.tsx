import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import VitrineCard from "@/components/VitrineCard";
import LaboratorioModal from "@/components/LaboratorioModal";
import { motion } from "framer-motion";
import { User, Clock, Target, Quotes, Warning, ArrowRight, HeartBreak } from "phosphor-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const content = {
  title: "Mapeamento do Usuário",
  subtitle: "Personas, jornadas e necessidades reais",
  vitrine: {
    headline: "Três Personas que Representam o Universo PP",
    description: "O discovery consolidou três personas representativas que traduzem necessidades, motivações e frustrações reais dos estudantes.",
    personas: [
      {
        id: "mariana",
        nome: "Mariana",
        subtitulo: "A Concurseira Organizada",
        idade: 32,
        profissao: "Advogada",
        tempoEstudo: "2 anos",
        objetivo: "Ter plano de estudos eficiente, estruturado e mensurável",
        dor: "Gasta tempo excessivo organizando planilhas e materiais dispersos",
        citacao: "Eu tenho o melhor material com a PP, mas gasto uma energia enorme gerenciando planilhas e apps pra saber se estou realmente progredindo.",
        motivadores: ["Clareza", "Organização", "Acompanhamento"],
        imagem: "/mariana.png"
      },
      {
        id: "rafael",
        nome: "Rafael",
        subtitulo: "O Iniciante Desorganizado",
        idade: 27,
        profissao: "Servidor temporário",
        tempoEstudo: "6 meses",
        objetivo: "Descobrir a melhor forma de estudar e manter motivação",
        dor: "Sente-se perdido entre tantas disciplinas e materiais diferentes",
        citacao: "Eu começo animado, mas depois me perco no meio dos PDFs e mensagens. Parece que estudo muito e aprendo pouco.",
        motivadores: ["Apoio", "Pertencimento", "Resultados visíveis"],
        imagem: "/rafael.png"
      },
      {
        id: "camila",
        nome: "Camila",
        subtitulo: "A Persistente Equilibrista",
        idade: 35,
        profissao: "Técnica judiciária",
        tempoEstudo: "4 anos",
        objetivo: "Evoluir para cargos mais altos sem abrir mão da estabilidade",
        dor: "Modelo atual não se adapta ao seu ritmo nem ao seu tempo",
        citacao: "Eu não preciso que me digam o que estudar, preciso que me ajudem a ver se estou evoluindo — e me motivem quando eu não estiver.",
        motivadores: ["Equilíbrio", "Autonomia", "Propósito"],
        imagem: "/camila.png"
      }
    ]
  },
  laboratorio: {
    jornada: {
      titulo: "O Ciclo Vicioso do Concurseiro",
      fases: [
        { numero: 1, nome: "Entusiasmo Inicial", descricao: "Aluno recebe novo cronograma e se sente altamente motivado" },
        { numero: 2, nome: "Desorganização Progressiva", descricao: "Barreiras práticas começam a impactar rotina, aluno começa a se atrasar" },
        { numero: 3, nome: "Fadiga Cognitiva", descricao: "Invisibilidade do progresso se instala, aluno se esforça mas não vê resultados" },
        { numero: 4, nome: "Desmotivação Emocional", descricao: "Barreiras emocionais atingem pico, engajamento despenca" },
        { numero: 5, nome: "Ruptura ou Recomeço", descricao: "Aluno abandona temporariamente ou recomeça o ciclo" }
      ],
      pontosCriticos: "Transição entre 2ª e 4ª semana é mais vulnerável"
    }
  }
};

export default function Usuarios() {
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
            Por trás de cada número de inscrição em um concurso, existe uma história de sacrifício, ansiedade e esperança. Para projetar uma plataforma que realmente funcione, precisávamos ir além dos dados demográficos e entender a psicologia do concurseiro. Quem são eles? O que os motiva a acordar às 5 da manhã para estudar? O que os faz desistir no meio do caminho?
          </p>
          <p>
            Através de entrevistas em profundidade, mapeamos não apenas os perfis de usuários (personas), mas também a jornada emocional que eles percorrem. Descobrimos que a maior dor não é a falta de conteúdo, mas a solidão e a desorganização. O "Ciclo Vicioso do Concurseiro" — entusiasmo inicial, seguido de sobrecarga, desorganização e culpa — foi o padrão comportamental mais crítico que nossa solução precisava quebrar.
          </p>
        </motion.div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold text-primary mb-8">As Personas do Ecossistema</h2>
        
        <Tabs defaultValue="mariana" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-muted/50 p-1 rounded-xl">
            {content.vitrine.personas.map((persona) => (
              <TabsTrigger 
                key={persona.id} 
                value={persona.id}
                className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm py-3 font-medium transition-all"
              >
                {persona.nome}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {content.vitrine.personas.map((persona) => (
            <TabsContent key={persona.id} value={persona.id} className="mt-0">
              <VitrineCard className="border-primary/10 bg-gradient-to-br from-white to-blue-50/30">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-4 flex flex-col items-center text-center lg:items-start lg:text-left border-b lg:border-b-0 lg:border-r border-border pb-8 lg:pb-0 lg:pr-8">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md mb-4 bg-white">
                      <img 
                        src={persona.imagem} 
                        alt={persona.nome} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-3xl font-bold text-primary mb-1">{persona.nome}</h3>
                    <span className="text-sm font-bold uppercase tracking-wider text-primary/60 mb-6">{persona.subtitulo}</span>
                    
                    <div className="w-full space-y-3 text-sm">
                      <div className="flex justify-between py-2 border-b border-border/50">
                        <span className="text-muted-foreground">Idade</span>
                        <span className="font-medium">{persona.idade} anos</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-border/50">
                        <span className="text-muted-foreground">Profissão</span>
                        <span className="font-medium">{persona.profissao}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-border/50">
                        <span className="text-muted-foreground">Tempo de Estudo</span>
                        <span className="font-medium">{persona.tempoEstudo}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-8 space-y-8">
                    <div className="relative p-6 bg-white rounded-xl border border-border shadow-sm">
                      <Quotes size={32} weight="fill" className="absolute top-4 left-4 text-primary/10" />
                      <p className="text-lg italic text-foreground/80 relative z-10 pl-6">
                        "{persona.citacao}"
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="flex items-center gap-2 font-bold text-primary mb-3">
                          <Target size={20} /> Objetivo Principal
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {persona.objetivo}
                        </p>
                      </div>
                      <div>
                        <h4 className="flex items-center gap-2 font-bold text-red-500 mb-3">
                          <HeartBreak size={20} /> Maior Dor
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {persona.dor}
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-3">Motivadores Chave</h4>
                      <div className="flex flex-wrap gap-2">
                        {persona.motivadores.map((m, i) => (
                          <span key={i} className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium border border-green-100">
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </VitrineCard>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <VitrineCard title="A Jornada Atual (AS-IS)" icon={<Clock size={24} />}>
            <div className="relative pl-8 border-l-2 border-dashed border-border space-y-8 py-2">
              {content.laboratorio.jornada.fases.map((fase, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-white border-4 border-muted-foreground/30" />
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Fase {fase.numero}</span>
                    <h4 className="font-bold text-primary">{fase.nome}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">{fase.descricao}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-red-50 border border-red-100 rounded-lg flex items-start gap-3">
              <Warning size={24} className="text-red-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-red-700 text-sm mb-1">Ponto Crítico de Ruptura</h4>
                <p className="text-red-600 text-sm">
                  {content.laboratorio.jornada.pontosCriticos}. É aqui que a falta de estrutura digital se torna fatal para a constância.
                </p>
              </div>
            </div>
          </VitrineCard>
        </div>
        
        <div className="lg:col-span-4 flex flex-col gap-6">
          <VitrineCard className="bg-primary text-white border-none flex-1 flex flex-col justify-center text-center">
            <h3 className="text-2xl font-bold mb-4">Como quebrar esse ciclo?</h3>
            <p className="text-white/80 mb-8">
              Identificamos 5 padrões estratégicos para transformar essa jornada de dor em uma experiência de fluxo.
            </p>
            <Link href="/insights">
              <Button className="w-full bg-white text-primary hover:bg-white/90 font-semibold group">
                Ver Soluções Estratégicas <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </VitrineCard>
        </div>
      </div>
    </Layout>
  );
}
