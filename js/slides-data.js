// ===== DADOS DOS SLIDES =====
const SLIDES_DATA = [
    {
        id: 1,
        title: "Capa",
        content: `
            <div class="slide1-content">
                <div id="subtitle1" class="text-center hidden-initially">
                    <h2 class="subtitle font-bold text-gray-900">
                        MESTRADO EM ADMINISTRAÇÃO E DESENVOLVIMENTO EMPRESARIAL - MADE
                    </h2>
                </div>

                <div id="main-title1" class="text-center hidden-initially">
                    <h1 class="main-title font-bold text-gray-900 leading-tight tracking-wide">
                        CIDADES INTELIGENTES COMO VETORES PARA OS ODS: SINERGIAS, DESAFIOS E
                        OPORTUNIDADES PARA O DESENVOLVIMENTO URBANO SUSTENTÁVEL ATRAVÉS DE UMA RSL
                    </h1>
                </div>

                <div id="student-info1" class="text-center hidden-initially">
                    <p class="text-gray-900 font-bold content-text">Mestrando: Luciano Marinho Silveira</p>
                </div>

                <div id="committee-info1" class="text-center hidden-initially">
                    <p class="text-gray-900 font-semibold mb-1">Banca Examinadora:</p>
                    <p class="text-gray-800 mb-1">Orientador: Prof. Dr. José Aires Trigo</p>
                    <p class="text-gray-800">Avaliador: Prof. Dr. Antônio Augusto Gonçalves</p>
                </div>

                <div id="location-date1" class="text-center hidden-initially">
                    <p class="text-gray-800 font-bold content-text">Rio de Janeiro, 2025</p>
                </div>
            </div>
        `,
        animations: [
            { id: 'subtitle1', animation: 'fadeInUp', delay: 200 },
            { id: 'main-title1', animation: 'fadeInUp', delay: 400 },
            { id: 'student-info1', animation: 'fadeInUp', delay: 600 },
            { id: 'committee-info1', animation: 'fadeInUp', delay: 800 },
            { id: 'location-date1', animation: 'fadeInUp', delay: 1000 }
        ]
    },
    {
        id: 2,
        title: "Resumo da Apresentação",
        content: `
            <div id="slide-title2" class="text-center hidden-initially flex-shrink-0">
                <h1 class="main-title font-bold text-gray-900">
                    RESUMO DA APRESENTAÇÃO
                </h1>
                <h2 class="subtitle font-semibold text-gray-700">
                    Tópicos que serão abordados
                </h2>
            </div>

            <!-- Lista de tópicos -->
            <div class="max-w-5xl mx-auto">
                <div class="grid">
                    <!-- Tópico 1 -->
                    <div id="topic2-1" class="topic-item rounded-lg border-l-4 border-blue-500 hidden-initially cursor-pointer hover:bg-blue-50 transition-all duration-300">
                        <div class="topic-number bg-gradient-to-br from-blue-500 to-blue-600 text-white font-bold">
                            1
                        </div>
                        <div>
                            <h3 class="font-bold text-gray-900">Introdução</h3>
                            <p class="text-gray-600">Contextualização do problema e objetivos da pesquisa</p>
                        </div>
                    </div>

                    <!-- Tópico 2 -->
                    <div id="topic2-2" class="topic-item rounded-lg border-l-4 border-teal-500 hidden-initially">
                        <div class="topic-number bg-gradient-to-br from-teal-500 to-teal-600 text-white font-bold">
                            2
                        </div>
                        <div>
                            <h3 class="font-bold text-gray-900">Referencial Teórico</h3>
                            <p class="text-gray-600">Fundamentação teórica sobre cidades inteligentes e ODS</p>
                        </div>
                    </div>

                    <!-- Tópico 3 -->
                    <div id="topic2-3" class="topic-item rounded-lg border-l-4 border-cyan-500 hidden-initially">
                        <div class="topic-number bg-gradient-to-br from-cyan-500 to-cyan-600 text-white font-bold">
                            3
                        </div>
                        <div>
                            <h3 class="font-bold text-gray-900">Metodologia</h3>
                            <p class="text-gray-600">Revisão Sistemática da Literatura (RSL) aplicada</p>
                        </div>
                    </div>

                    <!-- Tópico 4 -->
                    <div id="topic2-4" class="topic-item rounded-lg border-l-4 border-blue-600 hidden-initially">
                        <div class="topic-number bg-gradient-to-br from-blue-600 to-blue-700 text-white font-bold">
                            4
                        </div>
                        <div>
                            <h3 class="font-bold text-gray-900">Resultados</h3>
                            <p class="text-gray-600">Principais achados da revisão sistemática</p>
                        </div>
                    </div>

                    <!-- Tópico 5 -->
                    <div id="topic2-5" class="topic-item rounded-lg border-l-4 border-teal-600 hidden-initially">
                        <div class="topic-number bg-gradient-to-br from-teal-600 to-teal-700 text-white font-bold">
                            5
                        </div>
                        <div>
                            <h3 class="font-bold text-gray-900">Discussão, Sugestões para Pesquisas Futuras e Considerações Finais</h3>
                            <p class="text-gray-600">Análise dos resultados, limitações e direcionamentos futuros</p>
                        </div>
                    </div>
                </div>
            </div>
        `,
        animations: [
            { id: 'slide-title2', animation: 'fadeInDown', delay: 200 },
            { id: 'topic2-1', animation: 'slideInLeft', delay: 400 },
            { id: 'topic2-2', animation: 'slideInLeft', delay: 500 },
            { id: 'topic2-3', animation: 'slideInLeft', delay: 600 },
            { id: 'topic2-4', animation: 'slideInLeft', delay: 700 },
            { id: 'topic2-5', animation: 'slideInLeft', delay: 800 }
        ]
    },
    {
        id: 3,
        title: "Pergunta Central",
        content: `
            <!-- Pergunta principal centralizada e ajustada -->
            <div id="main-question3" class="text-center hidden-initially flex items-center justify-center h-full">
                <h1 class="font-bold text-blue-900 leading-tight question-slide">
                    Por que pesquisar <span class="text-teal-600">Cidades Inteligentes</span> e os <span class="text-blue-700">ODS</span>?
                </h1>
            </div>
        `,
        animations: [
            { id: 'main-question3', animation: 'scaleIn', delay: 400 }
        ]
    },
{
    id: 4,
    title: "Contextualização e Justificativa",
    content: `
        <!-- Título do Slide -->
        <div id="slide4-title" class="text-center mb-8 hidden-initially">
            <h1 class="text-3xl font-bold text-gray-900">
                CONTEXTUALIZAÇÃO E JUSTIFICATIVA: CRESCIMENTO POPULACIONAL E URBANIZAÇÃO NO SÉCULO XXI
            </h1>
        </div>

        <!-- Container principal para as etapas -->
        <div class="relative h-full flex items-center justify-center">
            
            <!-- Etapa 1: Palavras iniciais -->
            <div id="stage1-words" class="absolute inset-0 flex flex-col items-center justify-center">
                <div id="word-urbanization" class="hidden-initially">
                    <h2 class="text-6xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                        URBANIZAÇÃO
                    </h2>
                </div>
                <div id="word-plus" class="hidden-initially my-4">
                    <span class="text-4xl text-gray-400">+</span>
                </div>
                <div id="word-population" class="hidden-initially">
                    <h2 class="text-6xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                        CRESCIMENTO POPULACIONAL
                    </h2>
                </div>
            </div>

                <!-- Etapa 2: Gráfico 2024 -->
            <div id="stage2-chart" class="absolute inset-0 flex flex-col items-center justify-center opacity-0 pointer-events-none">
                <div class="w-full max-w-4xl">
                    <!-- Título do gráfico -->
                    <div class="text-center mb-8">
                        <h3 class="text-2xl font-semibold text-gray-800 mb-2">População Mundial em Áreas Urbanas</h3>
                        <p class="text-sm text-gray-600">Fonte: ONU-Habitat</p>
                    </div>
                    
                    <!-- Container do gráfico circular - Layout melhorado -->
                    <div class="flex flex-col items-center justify-center gap-8">
                        <!-- Gráfico Circular - Aumentado -->
                        <div class="relative">
                            <svg width="420" height="420" viewBox="0 0 420 420" class="drop-shadow-lg">
                                <!-- Círculo de fundo -->
                                <circle cx="210" cy="210" r="160" fill="none" stroke="#e5e7eb" stroke-width="50"/>
                                <!-- Círculo de progresso (55% -> 68%) -->
                                <circle id="progress-2024" cx="210" cy="210" r="160" fill="none" 
                                        stroke="url(#gradient2024)" stroke-width="50"
                                        stroke-dasharray="0 1005.31"
                                        stroke-dashoffset="251.33"
                                        transform="rotate(-90 210 210)"
                                        class="transition-all duration-1000 ease-out"/>
                                <!-- Gradientes -->
                                <defs>
                                    <!-- Gradiente que muda de azul/teal (55%) para vermelho sutil (68% - urgência) -->
                                    <linearGradient id="gradient2024" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stop-color="#3b82f6"/>
                                        <stop offset="100%" stop-color="#14b8a6"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                            <!-- Texto central - Aumentado -->
                            <div class="absolute inset-0 flex flex-col items-center justify-center">
                                <div id="year-label" class="text-4xl font-bold text-gray-800 mb-2">2024</div>
                                <div id="percentage-label" class="text-7xl font-bold text-blue-600">0%</div>
                                <div class="text-lg text-gray-600 mt-2 font-medium">População Urbana</div>
                            </div>
                        </div>
                        
                        <!-- Legenda - Reorganizada -->
                        <div class="flex items-center justify-center gap-8">
                            <div class="flex items-center gap-3">
                                <div class="w-5 h-5 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full shadow-sm"></div>
                                <span class="text-gray-700 font-medium text-lg">População urbana</span>
                            </div>
                            <div class="flex items-center gap-3">
                                <div class="w-5 h-5 bg-gray-200 rounded-full shadow-sm"></div>
                                <span class="text-gray-700 font-medium text-lg">População rural</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Etapa 3: Informação adicional 2050 -->
            <div id="stage3-info" class="absolute bottom-8 left-0 right-0 opacity-0 pointer-events-none transition-opacity duration-1000 ease-out">
                <div class="text-center transform scale-95 transition-all duration-1000 ease-out" id="billion-info">
                    <div class="inline-block bg-gradient-to-r from-red-500/80 to-red-600/80 backdrop-blur-sm text-white px-8 py-6 rounded-2xl shadow-lg border border-red-400/20">
                        <div class="flex items-center justify-center gap-2">
                            <span class="text-2xl font-bold opacity-90">+</span>
                            <span id="billion-counter" class="text-4xl font-bold tabular-nums opacity-95">0</span>
                        </div>
                        <div class="text-lg mt-1 font-medium opacity-85">pessoas até 2050</div>
                    </div>
                </div>
            </div>

            <!-- Etapa 4: Globo 3D (mais centralizado) -->
            <div id="stage4-globe-container" class="absolute right-0 top-0 w-3/5 h-full opacity-0 pointer-events-none transition-all duration-1200 ease-out">
                <div id="globe-3d" class="w-full h-full"></div>
                
                <!-- Overlay de temperatura para projeção 2040 (acima do globo) -->
                <div id="temperature-overlay" class="absolute inset-0 opacity-0 pointer-events-none transition-all duration-1000 ease-out z-10">
                    <!-- Múltiplos anéis de calor concêntricos que seguem o globo -->
                    <div class="absolute inset-0 flex items-center justify-center">
                        <!-- Anel externo - mais intenso -->
                        <div class="absolute w-full h-full rounded-full border-4 border-red-500/60 shadow-lg" 
                             style="filter: blur(2px); box-shadow: 0 0 20px rgba(239, 68, 68, 0.8), inset 0 0 20px rgba(239, 68, 68, 0.3);"></div>
                        
                        <!-- Anel médio -->
                        <div class="absolute w-5/6 h-5/6 rounded-full border-3 border-orange-400/70" 
                             style="filter: blur(1px); box-shadow: 0 0 15px rgba(251, 146, 60, 0.7), inset 0 0 15px rgba(251, 146, 60, 0.2);"></div>
                        
                        <!-- Anel interno -->
                        <div class="absolute w-4/5 h-4/5 rounded-full border-2 border-yellow-300/50" 
                             style="filter: blur(0.5px); box-shadow: 0 0 10px rgba(253, 224, 71, 0.6), inset 0 0 10px rgba(253, 224, 71, 0.1);"></div>
                    </div>
                    
                    <!-- Gradiente de calor atmosférico -->
                    <div class="absolute inset-0 rounded-full opacity-40" 
                         style="background: radial-gradient(circle at center, transparent 35%, rgba(239, 68, 68, 0.15) 45%, rgba(220, 38, 38, 0.25) 65%, rgba(185, 28, 28, 0.35) 85%, rgba(153, 27, 27, 0.45) 95%);
                                filter: blur(3px);"></div>
                    
                    <!-- Partículas de calor flutuantes -->
                    <div class="absolute inset-0">
                        <div class="heat-particle absolute w-1 h-1 bg-red-400 rounded-full opacity-70" style="top: 20%; left: 30%;"></div>
                        <div class="heat-particle absolute w-1 h-1 bg-orange-400 rounded-full opacity-60" style="top: 40%; left: 70%;"></div>
                        <div class="heat-particle absolute w-1 h-1 bg-red-300 rounded-full opacity-80" style="top: 60%; left: 20%;"></div>
                        <div class="heat-particle absolute w-1 h-1 bg-orange-300 rounded-full opacity-50" style="top: 80%; left: 80%;"></div>
                        <div class="heat-particle absolute w-1 h-1 bg-red-500 rounded-full opacity-75" style="top: 30%; left: 60%;"></div>
                        <div class="heat-particle absolute w-1 h-1 bg-orange-500 rounded-full opacity-65" style="top: 70%; left: 40%;"></div>
                    </div>
                </div>
                
                <!-- Tooltip da Índia -->
                <div id="india-tooltip" class="absolute top-20 left-8 bg-blue-900/85 backdrop-blur-md text-white p-4 rounded-lg shadow-xl opacity-0 transform scale-90 transition-all duration-500 ease-out max-w-xs">
                    
                    <div class="flex items-center gap-3 mb-3">
                        <!-- Bandeira da Índia -->
                        <div class="w-8 h-6 rounded shadow-md overflow-hidden flex flex-col">
                            <div class="h-1/3 bg-orange-500"></div>
                            <div class="h-1/3 bg-white flex items-center justify-center">
                                <div class="w-1 h-1 border border-blue-800 rounded-full"></div>
                            </div>
                            <div class="h-1/3 bg-green-600"></div>
                        </div>
                        <h3 class="font-bold text-lg">Mumbai, Índia</h3>
                    </div>
                    <div class="space-y-2 text-sm">
                        <p><span class="font-bold text-xl text-blue-300">944mm</span> de chuva em 24h (2005)</p>
                        <p class="text-blue-200">Enchentes devastadoras em área urbana densa</p>
                    </div>
                </div>
                
                <!-- Tooltip da França -->
                <div id="france-tooltip" class="absolute top-20 left-8 bg-red-900/85 backdrop-blur-md text-white p-4 rounded-lg shadow-xl opacity-0 transform scale-90 transition-all duration-500 ease-out max-w-xs">
                    
                    <div class="flex items-center gap-3 mb-3">
                        <!-- Bandeira da França -->
                        <div class="w-8 h-6 rounded shadow-md overflow-hidden flex">
                            <div class="w-1/3 bg-blue-700"></div>
                            <div class="w-1/3 bg-white"></div>
                            <div class="w-1/3 bg-red-600"></div>
                        </div>
                        <h3 class="font-bold text-lg">França</h3>
                    </div>
                    <div class="space-y-2 text-sm">
                        <p><span class="font-bold text-xl text-red-300">14.800</span> mortes (2003)</p>
                        <p class="text-red-200">Onda de calor - excesso de mortalidade de 142%</p>
                    </div>
                </div>
                
                <!-- Tooltip da Projeção Global -->
                <div id="global-tooltip" class="absolute bottom-20 left-8 bg-orange-900/85 backdrop-blur-md text-white p-4 rounded-lg shadow-xl opacity-0 transform scale-90 transition-all duration-500 ease-out max-w-xs">
                    
                    <div class="flex items-center gap-3 mb-3">
                        <div class="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-md">
                            <div class="text-xs font-bold text-orange-100">2040</div>
                        </div>
                        <h3 class="font-bold text-lg">Projeção 2040</h3>
                    </div>
                    <div class="space-y-2 text-sm">
                        <p><span class="font-bold text-xl text-orange-300">+2 bilhões</span> de pessoas urbanas</p>
                        <p class="text-orange-200">Expostas a aumentos de temperatura >0,5°C</p>
                    </div>
                </div>
            </div>

            <!-- Indicador de clique -->
            <div id="click-indicator" class="absolute bottom-4 right-4 text-gray-400 text-sm animate-pulse">
                Clique para continuar →
            </div>
        </div>
    `,
    animations: [
        { id: 'slide4-title', animation: 'fadeInDown', delay: 200 },
        { id: 'word-urbanization', animation: 'zoomIn', delay: 600 },
        { id: 'word-plus', animation: 'fadeIn', delay: 900 },
        { id: 'word-population', animation: 'zoomIn', delay: 1200 }
    ],
    hasInteractivity: true
}
];

// Total de slides
const TOTAL_SLIDES = SLIDES_DATA.length;