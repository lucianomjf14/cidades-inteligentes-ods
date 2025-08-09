// ===== CONTROLE DE INTERATIVIDADE DO SLIDE 4 =====

let slide4Stage = 0;
let isAnimating = false;

function initSlide4Interactivity() {
    slide4Stage = 0;
    isAnimating = false;
    
    // Adicionar listener de clique para o slide 4
    const slideContainer = document.getElementById('dynamicContent');
    if (slideContainer) {
        slideContainer.addEventListener('click', handleSlide4Click);
    }
}

function handleSlide4Click(e) {
    // Verificar se estamos no slide 4
    if (currentSlideIndex !== 3) return;
    
    // Prevenir múltiplos cliques durante animação
    if (isAnimating) return;
    
    isAnimating = true;
    
    switch(slide4Stage) {
        case 0:
            // Transição da Etapa 1 para Etapa 2 (palavras para gráfico)
            transitionToChart();
            slide4Stage = 1;
            break;
        case 1:
            // Transição da Etapa 2 para Etapa 3 (2024 para 2050)
            transitionTo2050();
            slide4Stage = 2;
            break;
        case 2:
            // Já está na última etapa, pode avançar para próximo slide
            document.getElementById('click-indicator').style.display = 'none';
            nextSlide();
            break;
    }
    
    setTimeout(() => {
        isAnimating = false;
    }, 1500);
}

function transitionToChart() {
    // Fade out das palavras
    const stage1 = document.getElementById('stage1-words');
    const stage2 = document.getElementById('stage2-chart');
    
    // Animar saída das palavras
    stage1.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
    stage1.style.opacity = '0';
    stage1.style.transform = 'scale(0.8)';
    
    setTimeout(() => {
        stage1.style.display = 'none';
        
        // Mostrar e animar entrada do gráfico
        stage2.style.opacity = '0';
        stage2.style.pointerEvents = 'auto';
        stage2.style.transition = 'opacity 0.8s ease-in';
        
        setTimeout(() => {
            stage2.style.opacity = '1';
            
            // Animar o círculo de progresso para 55%
            // Cálculo correto: 55% de 754 (circunferência) = 414.7
            const progressCircle = document.getElementById('progress-2024');
            progressCircle.style.strokeDasharray = '414.7 754';
            
        }, 50);
    }, 500);
}

function transitionTo2050() {
    // Elementos a serem atualizados
    const yearLabel = document.getElementById('year-label');
    const percentageLabel = document.getElementById('percentage-label');
    const progressCircle = document.getElementById('progress-2024');
    const progress2050 = document.getElementById('progress-2050');
    const stage3Info = document.getElementById('stage3-info');
    const billionInfo = document.getElementById('billion-info');
    const gradStop1 = document.querySelector('#gradient2024 stop:first-child');
    const gradStop2 = document.querySelector('#gradient2024 stop:last-child');
    
    // Atualizar cor do gradiente para tons mais intensos
    gradStop1.setAttribute('stop-color', '#14b8a6');
    gradStop2.setAttribute('stop-color', '#06b6d4');
    
    // Atualizar labels com transição suave
    yearLabel.textContent = '2050';
    yearLabel.style.color = '#14b8a6';
    percentageLabel.textContent = '68%';
    percentageLabel.style.color = '#06b6d4';
    
    // Ocultar círculo de 2024 e mostrar círculo de 2050
    progressCircle.style.opacity = '0';
    progress2050.style.opacity = '1';
    progress2050.style.strokeDasharray = '512.72 754';
    
    // Mostrar informação adicional após a animação do gráfico
    setTimeout(() => {
        stage3Info.style.opacity = '1';
        stage3Info.style.pointerEvents = 'auto';
        billionInfo.style.transform = 'scale(1)';
        
        // Atualizar indicador
        const indicator = document.getElementById('click-indicator');
        indicator.textContent = 'Clique para próximo slide →';
    }, 800);
}

// Resetar o slide 4 quando sair dele
function resetSlide4() {
    slide4Stage = 0;
    isAnimating = false;
    
    // Resetar todos os elementos para estado inicial
    const stage1 = document.getElementById('stage1-words');
    const stage2 = document.getElementById('stage2-chart');
    const stage3Info = document.getElementById('stage3-info');
    
    if (stage1) {
        stage1.style.display = 'flex';
        stage1.style.opacity = '1';
        stage1.style.transform = 'scale(1)';
    }
    
    if (stage2) {
        stage2.style.opacity = '0';
        stage2.style.pointerEvents = 'none';
    }
    
    if (stage3Info) {
        stage3Info.style.opacity = '0';
        stage3Info.style.pointerEvents = 'none';
    }
    
    // Resetar gráfico
    const progressCircle = document.getElementById('progress-2024');
    const progress2050 = document.getElementById('progress-2050');
    const yearLabel = document.getElementById('year-label');
    const percentageLabel = document.getElementById('percentage-label');
    const billionInfo = document.getElementById('billion-info');
    const gradStop1 = document.querySelector('#gradient2024 stop:first-child');
    const gradStop2 = document.querySelector('#gradient2024 stop:last-child');
    
    if (progressCircle) {
        progressCircle.style.strokeDasharray = '0 754';
        progressCircle.style.opacity = '1';
    }
    
    if (progress2050) {
        progress2050.style.strokeDasharray = '0 754';
        progress2050.style.opacity = '0';
    }
    
    if (gradStop1 && gradStop2) {
        gradStop1.setAttribute('stop-color', '#3b82f6');
        gradStop2.setAttribute('stop-color', '#14b8a6');
    }
    
    if (yearLabel) {
        yearLabel.textContent = '2024';
        yearLabel.style.color = '#1f2937';
    }
    
    if (percentageLabel) {
        percentageLabel.textContent = '55%';
        percentageLabel.style.color = '#3b82f6';
    }
    

    
    if (billionInfo) {
        billionInfo.style.transform = 'scale(0)';
    }
    
    // Resetar indicador
    const indicator = document.getElementById('click-indicator');
    if (indicator) {
        indicator.textContent = 'Clique para continuar →';
        indicator.style.display = 'block';
    }
}

// Remover listener ao sair do slide
function cleanupSlide4() {
    const slideContainer = document.getElementById('dynamicContent');
    if (slideContainer) {
        slideContainer.removeEventListener('click', handleSlide4Click);
    }
}