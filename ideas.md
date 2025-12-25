# Brainstorming de Design - PP Discovery Portfolio

## Contexto
O projeto é um portfólio documental de um case de Product Discovery para a PP Concursos. O objetivo é equilibrar excelência técnica com storytelling visual, usando uma arquitetura em camadas (Vitrine vs. Laboratório).

## Opções de Design

<response>
<probability>0.05</probability>
<text>
<idea>
  **Design Movement**: Neumorfismo Executivo (Soft UI Enterprise)
  
  **Core Principles**:
  1. **Profundidade Tátil**: Elementos parecem extrudados da superfície, convidando ao toque.
  2. **Clareza Radical**: Uso extremo de whitespace para separar conceitos complexos.
  3. **Hierarquia por Elevação**: A importância do conteúdo é ditada por quão "perto" ele está do usuário (z-index visual).
  4. **Transparência Funcional**: Vidro fosco (glassmorphism) apenas para contextos de sobreposição de dados.

  **Color Philosophy**:
  Baseada na confiança e estabilidade. O Azul Escuro (#00346a) serve como base sólida (fundo ou texto principal), enquanto o Verde (#6ca63c) é usado como luz indicativa de sucesso e progresso. O ambiente geral é claro (off-white) para facilitar a leitura de documentos densos, com o azul escuro trazendo peso institucional.

  **Layout Paradigm**:
  **"The Floating Dashboard"**. Em vez de seções empilhadas tradicionalmente, o conteúdo flutua em "ilhas" ou cards que deslizam suavemente sobre um fundo fixo ou com parallax sutil. A navegação lateral é persistente, lembrando ferramentas de produtividade (Notion, Linear).

  **Signature Elements**:
  1. **Soft Cards**: Cards com sombras duplas (luz e sombra) criando efeito de relevo suave.
  2. **Data Pills**: Badges e tags com bordas totalmente arredondadas e cores pastéis derivadas da marca.
  3. **Timeline Conectada**: Uma linha do tempo vertical que conecta fisicamente as seções da página, guiando o olhar.

  **Interaction Philosophy**:
  "Tangibilidade". Botões afundam suavemente ao clique. Hover states não apenas mudam de cor, mas alteram a elevação percebida. Transições de página parecem deslizar camadas físicas.

  **Animation**:
  Movimentos lentos e fluidos (spring physics com alta fricção). Elementos entram em cena com um leve "overshoot" e assentam.

  **Typography System**:
  **Inter** para tudo, mas com tracking (espaçamento entre letras) ajustado. Títulos em **Bold** e **Tight** tracking para impacto. Corpo de texto com altura de linha generosa (1.6) para legibilidade. Labels em **Uppercase** com tracking expandido.
</idea>
</text>
</response>

<response>
<probability>0.03</probability>
<text>
<idea>
  **Design Movement**: Brutalismo Corporativo (Swiss Style Modernizado)
  
  **Core Principles**:
  1. **Grelha Exposta**: A estrutura é visível e celebrada, não escondida.
  2. **Tipografia Gigante**: Títulos funcionam como imagens.
  3. **Contraste Máximo**: Preto sobre branco, azul sobre verde, sem meios-termos.
  4. **Honestidade Material**: Dados brutos são apresentados sem "maquiagem", em tabelas monoespaçadas.

  **Color Philosophy**:
  Uso agressivo das cores da marca. O Azul Escuro (#00346a) e o Verde (#6ca63c) são usados em blocos sólidos de cor, sem degradês. O fundo pode alternar drasticamente entre branco puro e azul profundo para separar seções lógicas (Vitrine vs. Laboratório).

  **Layout Paradigm**:
  **"The Modular Grid"**. Layouts assimétricos baseados em uma grade rigorosa. Linhas divisórias visíveis (1px solid) separam todo o conteúdo. O "Laboratório" usa uma estética de terminal ou planilha técnica.

  **Signature Elements**:
  1. **Linhas Divisórias**: Bordas visíveis separando cada componente.
  2. **Tipografia Mono**: Uso de fonte monoespaçada (JetBrains Mono ou Roboto Mono) para dados, datas e labels técnicos.
  3. **Botões Retangulares**: Cantos retos ou com raio mínimo (2px), evocando precisão.

  **Interaction Philosophy**:
  "Instantaneidade". Hover states são trocas de cor imediatas (sem transição suave). Cliques são responsivos e secos. O foco é na eficiência e na clareza da informação.

  **Animation**:
  Cortes secos ou slides rápidos e lineares. Sem "bounces" ou curvas de aceleração complexas. A animação serve apenas para orientar a mudança de contexto.

  **Typography System**:
  **Inter** para títulos (pesos Black ou ExtraBold) e **JetBrains Mono** para dados, legendas e o "Laboratório". Contraste extremo de tamanho: Títulos de 64px+ contra textos de 14px.
</idea>
</text>
</response>

<response>
<probability>0.08</probability>
<text>
<idea>
  **Design Movement**: Editorial Digital (Magazine Layout)
  
  **Core Principles**:
  1. **Narrativa Visual**: O layout serve à história, mudando conforme o conteúdo exige.
  2. **Tipografia Expressiva**: Uso da tipografia para criar atmosfera e ritmo.
  3. **Espaço Negativo Ativo**: Grandes áreas de respiro para dar peso às citações e insights.
  4. **Imagens como Protagonistas**: Screenshots e diagramas ocupam largura total ou quebram o grid.

  **Color Philosophy**:
  Sofisticada e editorial. Fundo predominantemente creme ou off-white (#f9f9f9) para conforto de leitura. Azul Escuro (#00346a) usado para texto e elementos de marca. Verde (#6ca63c) usado com parcimônia, apenas para destaques vitais (highlights de texto, CTAs principais).

  **Layout Paradigm**:
  **"The Story Scroll"**. Uma coluna central de leitura confortável, pontuada por elementos que "furam" a margem (full-width images, side notes, citações flutuantes). A navegação é discreta, permitindo imersão total no conteúdo.

  **Signature Elements**:
  1. **Citações Gigantes**: Depoimentos de usuários tratados como obras de arte tipográficas.
  2. **Imagens com Legenda Lateral**: Estilo revista, com notas explicativas na margem.
  3. **Drop Caps e Divisores Elegantes**: Detalhes tipográficos que enriquecem o texto.

  **Interaction Philosophy**:
  "Fluidez". Scroll suave (lenis scroll). Elementos aparecem com fade-in e slide-up conforme o usuário lê. Imagens têm zoom sutil no hover.

  **Animation**:
  Parallax suave em imagens e elementos de fundo. Texto aparece palavra por palavra ou linha por linha em momentos de impacto.

  **Typography System**:
  **Inter** (ou uma serifa moderna como Playfair Display para títulos, se permitido, mas manteremos Inter conforme guia) usada com pesos variados. Títulos em Light ou Regular (elegância) em tamanhos grandes. Corpo de texto com serifa (Merriweather ou similar) para leitura longa, ou Inter com ajustes de leitura.
</idea>
</text>
</response>

## Escolha Final: Neumorfismo Executivo (Soft UI Enterprise)

**Justificativa**:
Esta abordagem equilibra perfeitamente a necessidade de "Vitrine" (visual, digerível, premium) com "Laboratório" (dados, clareza, estrutura). O estilo "Soft UI" transmite modernidade e tecnologia, enquanto a estrutura de "Dashboard" organiza a complexidade do Discovery de forma lógica. O uso de "ilhas" de conteúdo permite separar visualmente os insights (Vitrine) dos dados brutos (Laboratório) sem quebra de continuidade.

**Adaptação ao Guia de Estilo**:
- **Cores**: Azul Escuro (#00346a) será a cor primária para textos fortes e elementos ativos. Verde (#6ca63c) será a cor de sucesso e CTAs. Fundo será um cinza muito claro azulado (ex: #f0f4f8) para harmonizar com o azul da marca.
- **Tipografia**: Inter será usada em toda a interface, explorando pesos (Bold para títulos, Medium para labels, Regular para corpo) e cores (Azul escuro para títulos, Cinza escuro para corpo) para criar hierarquia.
- **Formas**: Cantos arredondados (radius-lg ou xl) são essenciais para este estilo. Sombras suaves (shadow-lg com cor azulada) criarão a profundidade necessária.
