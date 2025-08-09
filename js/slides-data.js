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
    title: "Urbanização e Crescimento",
    content: `
        <!-- Título do Slide -->
        <div id="slide4-title" class="text-center mb-8 hidden-initially">
            <h1 class="text-3xl font-bold text-gray-900">
                CIDADES INTELIGENTES COMO VETORES PARA O DESENVOLVIMENTO URBANO SUSTENTÁVEL
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
                    
                    <!-- Container do gráfico circular -->
                    <div class="flex items-center justify-center gap-12">
                            <!-- Gráfico Circular -->
                        <div class="relative">
                            <svg width="300" height="300" viewBox="0 0 300 300">
                                    <!-- Círculo de fundo -->
                                    <circle cx="150" cy="150" r="120" fill="none" stroke="#e5e7eb" stroke-width="40"/>
                                    <!-- Círculo de progresso para 2024 (55%) -->
                                    <circle id="progress-2024" cx="150" cy="150" r="120" fill="none" 
                                            stroke="url(#gradient2024)" stroke-width="40"
                                            stroke-dasharray="0 754"
                                            stroke-dashoffset="188.5"
                                            transform="rotate(-90 150 150)"
                                            class="transition-all duration-1000 ease-out"/>
                                    <!-- Círculo de progresso para 2050 (68%) - inicialmente oculto -->
                                    <circle id="progress-2050" cx="150" cy="150" r="120" fill="none" 
                                            stroke="url(#gradient2050)" stroke-width="40"
                                            stroke-dasharray="0 754"
                                            stroke-dashoffset="188.5"
                                            transform="rotate(-90 150 150)"
                                            class="transition-all duration-1000 ease-out opacity-0"/>
                                    <!-- Gradientes -->
                                <defs>
                                        <linearGradient id="gradient2024" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stop-color="#3b82f6"/>
                                            <stop offset="100%" stop-color="#14b8a6"/>
                                        </linearGradient>
                                        <linearGradient id="gradient2050" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stop-color="#14b8a6"/>
                                            <stop offset="100%" stop-color="#06b6d4"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                                <!-- Texto central -->
                            <div class="absolute inset-0 flex flex-col items-center justify-center">
                                    <div id="year-label" class="text-3xl font-bold text-gray-800">2024</div>
                                    <div id="percentage-label" class="text-5xl font-bold text-blue-600">55%</div>
                                </div>
                        </div>
                        
                            <!-- Legenda -->
                        <div class="space-y-4">
                            <div class="flex items-center gap-3">
                                <div class="w-4 h-4 bg-gradient-to-r from-blue-600 to-teal-600 rounded"></div>
                                <span class="text-gray-700">População urbana</span>
                            </div>
                            <div class="flex items-center gap-3">
                                <div class="w-4 h-4 bg-gray-200 rounded"></div>
                                <span class="text-gray-700">População rural</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Etapa 3: Informação adicional 2050 -->
            <div id="stage3-info" class="absolute bottom-8 left-0 right-0 opacity-0 pointer-events-none">
                <div class="text-center transform scale-0 transition-all duration-500" id="billion-info">
                    <div class="inline-block bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-8 py-4 rounded-2xl shadow-2xl">
                        <span class="text-4xl font-bold">+2,5 BILHÕES</span>
                        <span class="text-2xl ml-3">de pessoas até 2050</span>
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