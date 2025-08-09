// ===== CONFIGURAÇÃO DA APRESENTAÇÃO =====
const PRESENTATION_CONFIG = {
    title: "TÍTULO DA SUA DISSERTAÇÃO",
    subtitle: "Subtítulo ou Descrição",
    author: "Seu Nome Completo",
    institution: "Sua Instituição",
    date: "Janeiro de 2025",
    location: "Auditório Principal",
    totalSlides: 15
};

// ===== CONTEÚDO DOS SLIDES =====
const SLIDES_CONTENT = {
    1: {
        title: "Capa",
        content: `
            <div class="content-container">
                <div style="text-align: center; padding: 60px 0;">
                    <h1 style="font-size: 3rem; color: var(--primary-color); margin-bottom: 30px;">
                        ${PRESENTATION_CONFIG.title}
                    </h1>
                    <div style="font-size: 1.5rem; color: var(--text-secondary); margin-bottom: 50px;">
                        ${PRESENTATION_CONFIG.subtitle}
                    </div>
                    <div class="highlight-box" style="max-width: 600px; margin: 0 auto;">
                        <p style="font-size: 1.2rem; margin-bottom: 10px;">
                            <strong>Autor:</strong> ${PRESENTATION_CONFIG.author}
                        </p>
                        <p style="font-size: 1.1rem;">
                            <strong>Orientador:</strong> Prof. Dr. Nome do Orientador
                        </p>
                    </div>
                    <div style="margin-top: 50px; font-size: 1.1rem; color: var(--text-secondary);">
                        ${PRESENTATION_CONFIG.institution}<br>
                        ${PRESENTATION_CONFIG.date}
                    </div>
                </div>
            </div>
        `
    },
    
    2: {
        title: "Sumário",
        content: `
            <div class="content-container">
                <h2 class="slide-title">Sumário</h2>
                <ol class="bullet-list" style="font-size: 1.2rem;">
                    <li>Introdução</li>
                    <li>Objetivos</li>
                    <li>Justificativa</li>
                    <li>Revisão Bibliográfica</li>
                    <li>Metodologia</li>
                    <li>Desenvolvimento</li>
                    <li>Resultados</li>
                    <li>Discussão</li>
                    <li>Conclusões</li>
                    <li>Trabalhos Futuros</li>
                    <li>Referências</li>
                </ol>
            </div>
        `
    },
    
    3: {
        title: "Introdução",
        content: `
            <div class="content-container">
                <h2 class="slide-title">Introdução</h2>
                <p class="content-text">
                    Este trabalho apresenta uma investigação aprofundada sobre...
                </p>
                <p class="content-text">
                    A importância deste estudo reside na necessidade de compreender...
                </p>
                <div class="highlight-box">
                    <h3 style="margin-bottom: 15px;">Contexto do Problema</h3>
                    <p>
                        Descrição detalhada do contexto em que o problema se insere,
                        incluindo os desafios atuais e as lacunas existentes na literatura.
                    </p>
                </div>
                <ul class="bullet-list">
                    <li>Primeiro aspecto importante da introdução</li>
                    <li>Segundo aspecto relevante</li>
                    <li>Terceiro ponto fundamental</li>
                </ul>
            </div>
        `
    },
    
    4: {
        title: "Objetivos",
        content: `
            <div class="content-container">
                <h2 class="slide-title">Objetivos</h2>
                
                <div class="highlight-box" style="margin-bottom: 30px;">
                    <h3 style="margin-bottom: 15px; font-size: 1.5rem;">Objetivo Geral</h3>
                    <p style="font-size: 1.1rem;">
                        Desenvolver e implementar uma solução inovadora para...
                    </p>
                </div>
                
                <h3 style="color: var(--primary-color); margin-bottom: 20px; font-size: 1.4rem;">
                    Objetivos Específicos
                </h3>
                <ul class="bullet-list">
                    <li>Realizar levantamento bibliográfico abrangente sobre o tema</li>
                    <li>Identificar e analisar os principais desafios existentes</li>
                    <li>Propor uma metodologia adequada para solução do problema</li>
                    <li>Implementar e validar a solução proposta</li>
                    <li>Comparar os resultados com trabalhos relacionados</li>
                </ul>
            </div>
        `
    },
    
    5: {
        title: "Justificativa",
        content: `
            <div class="content-container">
                <h2 class="slide-title">Justificativa</h2>
                <div class="two-columns">
                    <div class="column-card">
                        <h3 style="color: var(--secondary-color); margin-bottom: 15px;">
                            Relevância Acadêmica
                        </h3>
                        <p class="content-text">
                            Contribuições para o avanço do conhecimento na área...
                        </p>
                    </div>
                    <div class="column-card">
                        <h3 style="color: var(--secondary-color); margin-bottom: 15px;">
                            Impacto Social
                        </h3>
                        <p class="content-text">
                            Benefícios práticos para a sociedade...
                        </p>
                    </div>
                </div>
                <div class="highlight-box">
                    <p>
                        Este trabalho se justifica pela necessidade urgente de...
                    </p>
                </div>
            </div>
        `
    },
    
    6: {
        title: "Revisão Bibliográfica",
        content: `
            <div class="content-container">
                <h2 class="slide-title">Revisão Bibliográfica</h2>
                <p class="content-text">
                    Principais trabalhos relacionados ao tema:
                </p>
                <ul class="bullet-list">
                    <li><strong>Autor et al. (2023):</strong> Contribuição sobre...</li>
                    <li><strong>Pesquisador (2022):</strong> Estudo focado em...</li>
                    <li><strong>Grupo de Pesquisa (2024):</strong> Avanços na área de...</li>
                </ul>
            </div>
        `
    },
    
    7: {
        title: "Metodologia",
        content: `
            <div class="content-container">
                <h2 class="slide-title">Metodologia</h2>
                <p class="content-text">
                    Descrição detalhada da metodologia utilizada no trabalho.
                </p>
                <div class="two-columns">
                    <div class="column-card">
                        <h3>Fase 1: Planejamento</h3>
                        <p>Definição dos requisitos e escopo</p>
                    </div>
                    <div class="column-card">
                        <h3>Fase 2: Desenvolvimento</h3>
                        <p>Implementação da solução proposta</p>
                    </div>
                </div>
            </div>
        `
    },
    
    8: {
        title: "Desenvolvimento",
        content: `
            <div class="content-container">
                <h2 class="slide-title">Desenvolvimento</h2>
                <p class="content-text">
                    Detalhamento do processo de desenvolvimento...
                </p>
            </div>
        `
    },
    
    9: {
        title: "Resultados - Parte 1",
        content: `
            <div class="content-container">
                <h2 class="slide-title">Resultados - Parte 1</h2>
                <p class="content-text">
                    Apresentação dos primeiros resultados obtidos...
                </p>
            </div>
        `
    },
    
    10: {
        title: "Resultados - Parte 2",
        content: `
            <div class="content-container">
                <h2 class="slide-title">Resultados - Parte 2</h2>
                <p class="content-text">
                    Continuação dos resultados...
                </p>
            </div>
        `
    },
    
    11: {
        title: "Discussão",
        content: `
            <div class="content-container">
                <h2 class="slide-title">Discussão</h2>
                <p class="content-text">
                    Análise crítica dos resultados obtidos...
                </p>
            </div>
        `
    },
    
    12: {
        title: "Conclusões",
        content: `
            <div class="content-container">
                <h2 class="slide-title">Conclusões</h2>
                <ul class="bullet-list">
                    <li>Principal conclusão do trabalho</li>
                    <li>Objetivos alcançados</li>
                    <li>Contribuições relevantes</li>
                </ul>
            </div>
        `
    },
    
    13: {
        title: "Trabalhos Futuros",
        content: `
            <div class="content-container">
                <h2 class="slide-title">Trabalhos Futuros</h2>
                <p class="content-text">
                    Possíveis extensões e melhorias para o trabalho...
                </p>
            </div>
        `
    },
    
    14: {
        title: "Referências",
        content: `
            <div class="content-container">
                <h2 class="slide-title">Referências Bibliográficas</h2>
                <div style="font-size: 0.95rem; line-height: 1.8;">
                    <p style="margin-bottom: 10px;">
                        [1] AUTOR, Nome. <em>Título do Trabalho</em>. Editora, 2024.
                    </p>
                    <p style="margin-bottom: 10px;">
                        [2] PESQUISADOR, A. B. "Artigo Relevante". <em>Journal Name</em>, v. 10, n. 2, 2023.
                    </p>
                    <p style="margin-bottom: 10px;">
                        [3] GRUPO, Pesquisa. <em>Livro de Referência</em>. 3ª ed. Editora Acadêmica, 2022.
                    </p>
                </div>
            </div>
        `
    },
    
    15: {
        title: "Agradecimentos",
        content: `
            <div class="content-container">
                <div style="text-align: center; padding: 80px 0;">
                    <h1 style="font-size: 3rem; color: var(--primary-color); margin-bottom: 50px;">
                        Obrigado!
                    </h1>
                    <div class="highlight-box" style="max-width: 600px; margin: 0 auto;">
                        <p style="font-size: 1.2rem; margin-bottom: 20px;">
                            <strong>Contato:</strong>
                        </p>
                        <p>Email: seu.email@instituicao.br</p>
                        <p>LinkedIn: /in/seu-perfil</p>
                    </div>
                    <div style="margin-top: 50px; font-size: 1.1rem; color: var(--text-secondary);">
                        Perguntas?
                    </div>
                </div>
            </div>
        `
    }
};

// ===== VARIÁVEIS GLOBAIS =====
let currentSlide = 1;

// ===== FUNÇÕES DE NAVEGAÇÃO =====
function loadSlide(slideNumber) {
    if (slideNumber < 1 || slideNumber > PRESENTATION_CONFIG.totalSlides) {
        return;
    }
    
    currentSlide = slideNumber;
    const slide = SLIDES_CONTENT[slideNumber];
    
    if (!slide) {
        console.error(`Slide ${slideNumber} não encontrado`);
        return;
    }
    
    // Atualiza o conteúdo
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = slide.content;
    
    // Atualiza contador
    document.getElementById('current').textContent = slideNumber;
    
    // Atualiza estado dos botões
    updateNavigationButtons();
    
    // Salva estado
    localStorage.setItem('currentSlide', slideNumber);
    
    // Reinicia animações
    restartAnimations();
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('btnPrev');
    const nextBtn = document.getElementById('btnNext');
    
    prevBtn.disabled = currentSlide === 1;
    nextBtn.disabled = currentSlide === PRESENTATION_CONFIG.totalSlides;
}

function nextSlide() {
    if (currentSlide < PRESENTATION_CONFIG.totalSlides) {
        loadSlide(currentSlide + 1);
    }
}

function previousSlide() {
    if (currentSlide > 1) {
        loadSlide(currentSlide - 1);
    }
}

function restartAnimations() {
    const content = document.querySelector('.slide-content');
    content.style.animation = 'none';
    content.offsetHeight; // Trigger reflow
    content.style.animation = null;
}

// ===== ATALHOS DE TECLADO =====
document.addEventListener('keydown', (e) => {
    switch(e.key) {
        case 'ArrowRight':
        case ' ':
            e.preventDefault();
            nextSlide();
            break;
        case 'ArrowLeft':
            e.preventDefault();
            previousSlide();
            break;
        case 'Home':
            e.preventDefault();
            loadSlide(1);
            break;
        case 'End':
            e.preventDefault();
            loadSlide(PRESENTATION_CONFIG.totalSlides);
            break;
    }
});

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', () => {
    // Configura informações da apresentação
    document.querySelector('.presentation-title').textContent = PRESENTATION_CONFIG.title;
    document.querySelector('.presentation-subtitle').textContent = PRESENTATION_CONFIG.subtitle;
    document.querySelector('.author').textContent = `Autor: ${PRESENTATION_CONFIG.author}`;
    document.querySelector('.institution').textContent = `${PRESENTATION_CONFIG.institution} - ${PRESENTATION_CONFIG.date}`;
    document.querySelector('.date').textContent = PRESENTATION_CONFIG.date;
    document.querySelector('.location').textContent = PRESENTATION_CONFIG.location;
    document.getElementById('total').textContent = PRESENTATION_CONFIG.totalSlides;
    
    // Carrega slide inicial ou último visualizado
    const savedSlide = parseInt(localStorage.getItem('currentSlide') || '1');
    loadSlide(savedSlide);
});

// ===== MODO TELA CHEIA =====
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

// Adiciona listener para F11 ou duplo clique
document.addEventListener('dblclick', toggleFullscreen);