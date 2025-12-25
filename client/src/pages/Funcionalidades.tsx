import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import VitrineCard from "@/components/VitrineCard";
import LaboratorioModal from "@/components/LaboratorioModal";
import { motion } from "framer-motion";
import { ListChecks, CalendarCheck, Books, Exam, ChartLineUp, UsersThree, BellRinging, Check } from "phosphor-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const content = {
  title: "Funcionalidades Levantadas",
  subtitle: "Módulos e capacidades da plataforma",
  vitrine: {
    headline: "Arquitetura de Solução em 6 Eixos",
    description: "As funcionalidades foram organizadas em 6 eixos que cobrem toda a jornada do aluno.",
    eixos: [
      {
        numero: 1,
        titulo: "Planejamento da Jornada",
        descricao: "Cronogramas dinâmicos, metas personalizadas e adaptação ao ritmo do aluno",
        icon: CalendarCheck
      },
      {
        numero: 2,
        titulo: "Biblioteca e Material Base",
        descricao: "Centralização de conteúdo, videoaulas, PDFs e materiais didáticos",
        icon: Books
      },
      {
        numero: 3,
        titulo: "Reforço do Conhecimento",
        descricao: "Banco de questões, simulados e revisão inteligente",
        icon: Exam
      },
      {
        numero: 4,
        titulo: "Painel de Desempenho",
        descricao: "Dashboards de progresso, indicadores e relatórios de evolução",
        icon: ChartLineUp
      },
      {
        numero: 5,
        titulo: "Comunidade",
        descricao: "Fórum, trocas entre alunos e senso de pertencimento",
        icon: UsersThree
      },
      {
        numero: 6,
        titulo: "Elementos Transversais",
        descricao: "Notificações, gamificação, acompanhamento e suporte",
        icon: BellRinging
      }
    ]
  }
};

export default function Funcionalidades() {
  return (
    <Layout>
      <SectionHeader 
        title={content.title} 
        subtitle={content.subtitle} 
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {content.vitrine.eixos.map((eixo, index) => {
          const Icon = eixo.icon;
          return (
            <VitrineCard 
              key={index} 
              delay={index * 0.1}
              className="h-full hover:-translate-y-1 transition-transform duration-300 border-t-4 border-t-primary"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Icon size={24} weight="duotone" />
                </div>
                <span className="text-4xl font-bold text-muted-foreground/10">0{eixo.numero}</span>
              </div>
              
              <h3 className="text-xl font-bold text-primary mb-3">{eixo.titulo}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {eixo.descricao}
              </p>
              
              <div className="pt-4 border-t border-border">
                <LaboratorioModal title={`Detalhes: ${eixo.titulo}`} triggerText="Ver Requisitos">
                  <div className="space-y-4">
                    <p className="text-muted-foreground italic">
                      Lista detalhada de requisitos funcionais para o módulo de {eixo.titulo}.
                    </p>
                    <ul className="space-y-2">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <li key={i} className="flex items-start gap-2 p-2 hover:bg-muted/50 rounded">
                          <Check size={16} className="text-green-600 mt-0.5" />
                          <span className="text-sm">Requisito funcional detalhado {eixo.numero}.{i} - Descrição técnica da funcionalidade específica para este módulo.</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </LaboratorioModal>
              </div>
            </VitrineCard>
          );
        })}
      </div>

      <div className="bg-muted/30 rounded-2xl p-8 md:p-12 border border-border text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
          Pronto para ver o resultado?
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Este portfólio documenta a fase de Discovery. O desenvolvimento da plataforma segue os princípios aqui estabelecidos.
        </p>
        <Link href="/">
          <Button variant="outline" className="rounded-full px-8 py-6 border-primary/20 text-primary hover:bg-primary/5">
            Voltar ao Início
          </Button>
        </Link>
      </div>
    </Layout>
  );
}
