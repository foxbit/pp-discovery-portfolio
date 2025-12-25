import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import VitrineCard from "@/components/VitrineCard";
import LaboratorioModal from "@/components/LaboratorioModal";
import { motion } from "framer-motion";
import { Target, Check, LockKey, Desktop, ChartBar, HeartBreak, ArrowRight } from "phosphor-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const content = {
  title: "O Projeto Contratado",
  subtitle: "Desafios, escopo e oportunidades identificadas",
  vitrine: {
    headline: "Transformando Dor em Oportunidade",
    description: "O projeto de Discovery mapeou 6 desafios críticos que limitam a PP Concursos. Cada um deles representa uma oportunidade de valor estratégico.",
    desafios: [
      {
        titulo: "Dependência Operacional",
        descricao: "A operação depende quase exclusivamente dos fundadores, criando gargalo crítico.",
        icon: Target
      },
      {
        titulo: "Processos Fragmentados",
        descricao: "Cronogramas e materiais dispersos entre múltiplas ferramentas e canais.",
        icon: Desktop
      },
      {
        titulo: "Risco de Pirataria",
        descricao: "Distribuição descontrolada de PDFs compromete propriedade intelectual.",
        icon: LockKey
      },
      {
        titulo: "Experiência Fragmentada",
        descricao: "Jornada de estudos caótica, exigindo gestão excessiva do aluno.",
        icon: HeartBreak
      },
      {
        titulo: "Ausência de Dados",
        descricao: "Falta de métricas estruturadas impede decisão baseada em evidências.",
        icon: ChartBar
      },
      {
        titulo: "Sobrecarga da Equipe",
        descricao: "Mentores enfrentam alta sobrecarga emocional e operacional.",
        icon: UsersThree
      }
    ]
  },
  laboratorio: {
    escopo: "Desenvolvimento de um Editor de Conteúdo Interativo (WYSIWYG) e Leitor Digital (e-Reader) para criação e consumo de materiais didáticos baseados em blocos de conteúdo reutilizáveis.",
    objetivos: [
      "Centralizar cronogramas, materiais, videoaulas e comunicação em ambiente único",
      "Automatizar tarefas operacionais para liberar mentores para acompanhamento pedagógico",
      "Tornar o aprendizado visível e mensurável através de dados e indicadores",
      "Potencializar o cuidado humano, não substituí-lo",
      "Transicionar para modelo de negócio recorrente e sustentável"
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

      <div className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-primary">Os 6 Desafios Críticos</h2>
          <LaboratorioModal title="Escopo Técnico Detalhado">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold mb-4 border-b border-border pb-2">Escopo Contratado</h3>
                <p className="mb-4">{content.laboratorio.escopo}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-4 border-b border-border pb-2">Objetivos Estratégicos</h3>
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
                <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-4">Requisitos Funcionais Macro</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="p-3 bg-white rounded border border-border">
                    <strong className="block text-primary mb-1">Editor WYSIWYG</strong>
                    Criação de conteúdo modular com blocos reutilizáveis
                  </div>
                  <div className="p-3 bg-white rounded border border-border">
                    <strong className="block text-primary mb-1">Leitor Digital</strong>
                    Consumo interativo com anotações e progresso
                  </div>
                  <div className="p-3 bg-white rounded border border-border">
                    <strong className="block text-primary mb-1">Gestão de Versões</strong>
                    Controle de alterações e histórico de documentos
                  </div>
                  <div className="p-3 bg-white rounded border border-border">
                    <strong className="block text-primary mb-1">Controle de Acesso</strong>
                    Permissões granulares por curso e módulo
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
              A Solução Proposta
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Um Ecossistema Digital Unificado
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Não apenas um site, mas uma plataforma completa que centraliza a experiência do aluno e automatiza a operação da empresa.
            </p>
            <Link href="/metodologia">
              <Button className="bg-white text-primary hover:bg-white/90 rounded-full px-8 py-6 text-lg font-semibold shadow-xl shadow-black/10 group border-none">
                Ver Metodologia <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Centralização Inteligente",
              "Personalização Adaptativa",
              "Acompanhamento Humano",
              "Engajamento Visível",
              "Base Escalável",
              "Segurança de Conteúdo"
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
