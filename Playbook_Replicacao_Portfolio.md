# Playbook: Como Criar Portfólios de Discovery "State-of-the-Art"

Este documento serve como um guia prático para replicar a arquitetura, o design e a estratégia de conteúdo utilizada no projeto **PP Discovery Portfolio**. O objetivo é permitir que você transforme qualquer case técnico (Discovery, UX Research, Engenharia de Dados) em uma experiência narrativa premium.

---

## 1. A Filosofia do Design: O Modelo "Iceberg"

A premissa central deste portfólio é que **diferentes stakeholders consomem informação em diferentes profundidades**.

### Camada 1: A Vitrine (Storytelling)
*   **Público:** C-Levels, Recrutadores, Clientes em Prospecção.
*   **Objetivo:** Vender a visão, o impacto e a qualidade do pensamento estratégico.
*   **Formato:** Texto editorial (long-form), cards visuais, ícones, frases de destaque.
*   **Regra de Ouro:** Nunca mostre uma tabela crua aqui. Transforme dados em insights visuais.

### Camada 2: O Laboratório (Raw Data)
*   **Público:** Lead Designers, PMs, Engenheiros, Auditores Técnicos.
*   **Objetivo:** Provar a profundidade técnica e a veracidade do processo.
*   **Formato:** Modais interativos, listas de requisitos, tabelas de dados, transcrições.
*   **Regra de Ouro:** A transparência gera confiança. Permita que quem quiser "ver o código" (ou os dados brutos) possa fazê-lo sem sair da página.

---

## 2. Estratégia de Conteúdo: Do Relatório à Narrativa

Não copie e cole seu relatório de Discovery. Reescreva-o como uma história.

### Estrutura de Página Recomendada
Para cada seção do seu portfólio (ex: Usuários, Mercado, Solução), siga este fluxo:

1.  **Cabeçalho (Section Header):** Título claro + Subtítulo que resume a conclusão principal.
2.  **Introdução Narrativa (The Hook):** 2 a 3 parágrafos de texto corrido.
    *   *Não diga:* "Fizemos 10 entrevistas."
    *   *Diga:* "Para entender a dor real do usuário, mergulhamos na rotina de 10 pessoas e descobrimos um padrão invisível..."
3.  **Destaques Visuais (Bento Grid/Cards):** Os 3-5 pontos principais em cards bonitos. Use ícones grandes e cores semânticas (Verde = Oportunidade, Vermelho = Dor).
4.  **Aprofundamento (Modal/Laboratório):** Um botão ou link discreto ("Ver dados detalhados") que abre o conteúdo técnico.

### Tom de Voz
*   **Profissional, mas Humano:** Use "Nós descobrimos", "O desafio era".
*   **Editorial:** Pense como uma revista (Wired, Harvard Business Review), não como um TCC.
*   **Honesto:** Destaque as falhas e os desafios, não apenas os sucessos. O "Paradoxo do Crescimento" da PP é um exemplo de como uma fraqueza vira uma história poderosa.

---

## 3. Stack Tecnológica & Componentes Chave

Para replicar a qualidade visual e a interatividade, recomendamos esta stack:

*   **Framework:** React (Vite) + TypeScript
*   **Estilização:** Tailwind CSS (pela velocidade e consistência de design tokens)
*   **Animação:** Framer Motion (essencial para a sensação "premium")
*   **Ícones:** Phosphor Icons (consistentes e elegantes)

### Componentes Essenciais (Copie estes padrões)

#### A. `Layout.tsx` (Navegação Lateral)
Uma sidebar fixa à esquerda que funciona como índice do relatório.
*   *Por que:* Dá a sensação de um "livro digital" ou dashboard, diferente de um site de marketing comum.

#### B. `VitrineCard.tsx` (O Bloco de Construção)
Um componente de card flexível com:
*   Sombra suave (`shadow-sm` a `shadow-md` no hover).
*   Borda sutil (`border-border`).
*   Animação de entrada (`framer-motion` fade-in-up).
*   Efeito de hover (`scale-105` ou `lift`).

#### C. `LaboratorioModal.tsx` (A Camada Oculta)
Um componente Dialog/Modal que recebe qualquer conteúdo `children`.
*   *Uso:* Coloque tabelas gigantes, listas de 50 requisitos ou fluxogramas complexos aqui dentro. Mantenha a página limpa.

---

## 4. Guia Passo a Passo de Execução

### Passo 1: Extração e Estrutura (O Esqueleto)
1.  Pegue seu relatório original (PDF/Doc).
2.  Crie um arquivo `sitemap.txt` definindo as seções (ex: Contexto, Pesquisa, Ideação).
3.  Para cada seção, escreva o "Resumo Narrativo" (os parágrafos de introdução).

### Passo 2: Setup do Projeto
1.  Inicie um projeto React + Tailwind.
2.  Defina suas cores no `tailwind.config.js` ou `index.css`:
    *   `primary`: Cor da marca (ex: Azul Marinho).
    *   `muted`: Cor de fundo suave (ex: Cinza Gelo).
    *   `accent`: Cor de destaque (ex: Verde Sucesso).
3.  Instale `framer-motion` e `phosphor-react`.

### Passo 3: Desenvolvimento em Camadas
1.  **Crie o Layout:** Sidebar + Área de Conteúdo.
2.  **Crie a Home:** Conte a história da empresa/projeto. Use a estrutura de "Blog Post" que criamos.
3.  **Crie as Páginas Internas:** Use o padrão Introdução -> Cards -> Modal.

### Passo 4: Polimento (O "State-of-the-Art")
1.  **Animações de Entrada:** Nada deve aparecer "seco". Tudo deve deslizar suavemente (`y: 20` -> `y: 0`, `opacity: 0` -> `opacity: 1`).
2.  **Micro-interações:** Botões devem reagir ao clique. Links devem mudar de cor.
3.  **Responsividade:** Teste se a sidebar vira um menu hambúrguer no mobile.

---

## 5. Checklist de Qualidade Final

Antes de entregar, verifique:
- [ ] **Leiturabilidade:** Os textos introdutórios estão fluídos? (Leia em voz alta).
- [ ] **Hierarquia:** Títulos são maiores que subtítulos? Cores de destaque são usadas com parcimônia?
- [ ] **Navegação:** É fácil ir de uma seção para outra?
- [ ] **Performance:** As animações travam? (Otimize se necessário).
- [ ] **Storytelling:** O portfólio responde à pergunta "Qual era o problema e como você resolveu?"

---

**Dica Final:** O segredo não é a tecnologia, é a **curadoria**. O que você *escolhe não mostrar* na vitrine é tão importante quanto o que você mostra. Use o "Laboratório" para o resto.
