// ===== CONTROLE DE INTERATIVIDADE DO SLIDE 4 =====

let slide4Stage = 0;
let isAnimating = false;

// Função para animar contador de porcentagem
function animatePercentage(element, startValue, endValue, duration) {
    const startTime = Date.now();
    const valueDifference = endValue - startValue;
    
    function updatePercentage() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Usar função de easing ease-out para suavizar a animação
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        
        const currentValue = Math.round(startValue + (valueDifference * easedProgress));
        element.textContent = currentValue + '%';
        
        if (progress < 1) {
            requestAnimationFrame(updatePercentage);
        }
    }
    
    requestAnimationFrame(updatePercentage);
}

// Função para animar contador de números grandes com formatação
function animateNumber(element, startValue, endValue, duration) {
    const startTime = Date.now();
    const valueDifference = endValue - startValue;
    
    function updateNumber() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Usar função de easing ease-out para suavizar a animação
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        
        const currentValue = Math.round(startValue + (valueDifference * easedProgress));
        
        // Formatar número com separadores de milhares
        element.textContent = currentValue.toLocaleString('pt-BR');
        
        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        }
    }
    
    requestAnimationFrame(updateNumber);
}

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
            // Primeiro clique: Transição das palavras para gráfico + renderizar 55% automaticamente
            transitionToChart();
            slide4Stage = 1;
            break;
        case 1:
            // Segundo clique: Transição para 68% com cor de urgência
            transitionTo2050();
            slide4Stage = 2;
            break;
        case 2:
            // Terceiro clique: Mostrar painel climático + título
            showClimatePanel();
            slide4Stage = 3;
            break;
        case 3:
            // Quarto clique: Mostrar Mumbai
            showMumbaiImpact();
            slide4Stage = 4;
            break;
        case 4:
            // Quinto clique: Mostrar França
            showFranceImpact();
            slide4Stage = 5;
            break;
        case 5:
            // Sexto clique: Mostrar Projeção 2040
            showProjectionImpact();
            slide4Stage = 6;
            break;
        case 6:
            // Sétimo clique: Avançar para próximo slide
            document.getElementById('click-indicator').style.display = 'none';
            nextSlide();
            break;
    }
    
    setTimeout(() => {
        isAnimating = false;
    }, slide4Stage <= 1 ? 2000 : (slide4Stage === 2 ? 2000 : 1000)); // Timing diferenciado por etapa
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
            
            // Renderizar automaticamente 55% após mostrar o gráfico
            setTimeout(() => {
                const progressCircle = document.getElementById('progress-2024');
                const percentageLabel = document.getElementById('percentage-label');
                
                // Adicionar transição suave
                progressCircle.style.transition = 'stroke-dasharray 1.2s ease-out';
                
                // Animar o círculo de progresso para 55%
                progressCircle.style.strokeDasharray = '552.92 452.39';
                
                // Animar contador da porcentagem de 0% até 55%
                animatePercentage(percentageLabel, 0, 55, 1200);
            }, 300); // Delay para dar tempo do gráfico aparecer
        }, 50);
    }, 500);
}



function transitionTo2050() {
    // Elementos a serem atualizados
    const yearLabel = document.getElementById('year-label');
    const percentageLabel = document.getElementById('percentage-label');
    const progressCircle = document.getElementById('progress-2024');
    const stage3Info = document.getElementById('stage3-info');
    const billionInfo = document.getElementById('billion-info');
    const gradStop1 = document.querySelector('#gradient2024 stop:first-child');
    const gradStop2 = document.querySelector('#gradient2024 stop:last-child');
    
    // Garantir que o círculo tenha transição suave
    progressCircle.style.transition = 'stroke-dasharray 1.5s ease-in-out, stroke 0.8s ease-in-out';
    
    // Atualizar cor do gradiente para tons de urgência (vermelho sutil) com transição
    gradStop1.style.transition = 'stop-color 0.8s ease-in-out';
    gradStop2.style.transition = 'stop-color 0.8s ease-in-out';
    gradStop1.setAttribute('stop-color', '#f87171'); // Vermelho claro sutil
    gradStop2.setAttribute('stop-color', '#fca5a5'); // Vermelho mais claro ainda
    
    // Atualizar labels com transição suave e delay escalonado
    yearLabel.style.transition = 'color 0.6s ease-in-out';
    percentageLabel.style.transition = 'color 0.6s ease-in-out';
    
    // Primeiro, animar o círculo para 68%
    setTimeout(() => {
        // Manter o mesmo círculo e apenas aumentar o preenchimento para 68%
        // Cálculo correto: 68% de 1005.31 (circunferência) = 683.61
        progressCircle.style.strokeDasharray = '683.61 321.7';
        
        // Animar contador da porcentagem de 55% até 68%
        animatePercentage(percentageLabel, 55, 68, 1500); // 1.5s para sincronizar com o gráfico
    }, 100);
    
    // Depois, atualizar os labels com delay para sincronizar com a animação
    setTimeout(() => {
        yearLabel.textContent = '2050';
        yearLabel.style.color = '#dc2626'; // Vermelho mais intenso para o ano
        // A cor da porcentagem será atualizada pela função animatePercentage
        percentageLabel.style.color = '#ef4444'; // Vermelho médio para a porcentagem
    }, 600);
    
    // Mostrar informação adicional simultaneamente com a transição para 68%
    setTimeout(() => {
        // Transição suave de opacidade
        stage3Info.style.opacity = '1';
        stage3Info.style.pointerEvents = 'auto';
        
        // Transição suave de escala - mais sutil
        billionInfo.style.transform = 'scale(1)';
        
        // Animar contador de 2,5 bilhões com delay mais gradual
        setTimeout(() => {
            const billionCounter = document.getElementById('billion-counter');
            // Animação mais lenta e suave
            animateNumber(billionCounter, 0, 2500000000, 2000); // 2s para ser mais suave
        }, 400); // Delay maior para transição mais esmaecida
        
        // Atualizar indicador com delay
        setTimeout(() => {
            const indicator = document.getElementById('click-indicator');
            indicator.textContent = 'Clique para próximo slide →';
        }, 600);
    }, 1000); // Delay maior para entrada mais suave
}

function showClimatePanel() {
    // Elementos principais
    const stage2Chart = document.getElementById('stage2-chart');
    const stage3Info = document.getElementById('stage3-info');
    const globeContainer = document.getElementById('stage4-globe-container');
    
    // Transição elegante: gráfico se move mais para a esquerda, dando espaço para o globo centralizar
    stage2Chart.style.transition = 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)';
    stage2Chart.style.transform = 'translateX(-35%) scale(0.8)';
    
    // Ocultar informação de 2,5 bilhões suavemente
    stage3Info.style.transition = 'opacity 0.8s ease-out';
    stage3Info.style.opacity = '0';
    
    // Mostrar globo (50% do lado direito)
    setTimeout(() => {
        globeContainer.style.opacity = '1';
        globeContainer.style.pointerEvents = 'auto';
        
        // Inicializar globo
        showGlobe();
        
        // Atualizar indicador
        setTimeout(() => {
            const indicator = document.getElementById('click-indicator');
            indicator.textContent = 'Clique para Mumbai →';
        }, 600);
        
    }, 300);
}

function showMumbaiImpact() {
    // Animar globo para Índia com sequência elegante: giro → zoom → pin → tooltip
    animateToCountry('india', () => {
        // Pin aparece automaticamente via highlightCountry()
        // Mostrar tooltip após zoom e pin aparecerem
        setTimeout(() => {
            const indiaTooltip = document.getElementById('india-tooltip');
            indiaTooltip.style.opacity = '1';
            indiaTooltip.style.transform = 'scale(1)';
            
            // Atualizar indicador
            setTimeout(() => {
                const indicator = document.getElementById('click-indicator');
                indicator.textContent = 'Clique para França →';
            }, 500);
        }, 500); // Pin já está visível
    });
}

function showFranceImpact() {
    // Ocultar tooltip da Índia
    const indiaTooltip = document.getElementById('india-tooltip');
    indiaTooltip.style.opacity = '0';
    indiaTooltip.style.transform = 'scale(0.9)';
    
    // Animar globo para França com sequência elegante: giro → zoom → pin → tooltip
    animateToCountry('france', () => {
        // Pin aparece automaticamente via highlightCountry()
        // Mostrar tooltip após zoom e pin aparecerem
        setTimeout(() => {
            const franceTooltip = document.getElementById('france-tooltip');
            franceTooltip.style.opacity = '1';
            franceTooltip.style.transform = 'scale(1)';
            
            // Atualizar indicador
            setTimeout(() => {
                const indicator = document.getElementById('click-indicator');
                indicator.textContent = 'Clique para Projeção 2040 →';
            }, 500);
        }, 500); // Pin já está visível
    });
}

function showProjectionImpact() {
    // Ocultar tooltip da França
    const franceTooltip = document.getElementById('france-tooltip');
    franceTooltip.style.opacity = '0';
    franceTooltip.style.transform = 'scale(0.9)';
    
    // Voltar para vista global (sem pin específico)
    animateToCountry('global', () => {
        // Ativar animação de temperatura no globo
        setTimeout(() => {
            const temperatureOverlay = document.getElementById('temperature-overlay');
            temperatureOverlay.style.opacity = '1';
            
            // Ativar animações específicas para cada elemento
            const outerRing = temperatureOverlay.querySelector('div:first-child div:first-child');
            const middleRing = temperatureOverlay.querySelector('div:first-child div:nth-child(2)');
            const innerRing = temperatureOverlay.querySelector('div:first-child div:nth-child(3)');
            const atmosphere = temperatureOverlay.querySelector('div:nth-child(2)');
            const particles = temperatureOverlay.querySelectorAll('.heat-particle');
            
            if (outerRing) outerRing.classList.add('heat-ring-outer');
            if (middleRing) middleRing.classList.add('heat-ring-middle');
            if (innerRing) innerRing.classList.add('heat-ring-inner');
            if (atmosphere) atmosphere.classList.add('atmospheric-heat');
            
            // Ativar partículas de calor
            particles.forEach(particle => {
                particle.classList.add('heat-particle');
            });
            
            // Ativar rotação acelerada do globo durante o aquecimento
            if (window.activateGlobeHeatRotation) {
                window.activateGlobeHeatRotation();
            }
        }, 200);
        
        // Mostrar tooltip da projeção global
        setTimeout(() => {
            const globalTooltip = document.getElementById('global-tooltip');
            globalTooltip.style.opacity = '1';
            globalTooltip.style.transform = 'scale(1)';
            
            // Atualizar indicador
            setTimeout(() => {
                const indicator = document.getElementById('click-indicator');
                indicator.textContent = 'Clique para próximo slide →';
            }, 500);
        }, 500);
    });
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
    
    // Resetar globo container
    const globeContainer = document.getElementById('stage4-globe-container');
    if (globeContainer) {
        globeContainer.style.opacity = '0';
        globeContainer.style.pointerEvents = 'none';
    }
    
    // Ocultar globo
    hideGlobe();
    
    // Resetar tooltips
    const tooltips = ['india-tooltip', 'france-tooltip', 'global-tooltip'];
    
    tooltips.forEach(id => {
        const tooltip = document.getElementById(id);
        if (tooltip) {
            tooltip.style.opacity = '0';
            tooltip.style.transform = 'scale(0.9)';
        }
    });
    
    // Resetar animação de temperatura
    const temperatureOverlay = document.getElementById('temperature-overlay');
    if (temperatureOverlay) {
        temperatureOverlay.style.opacity = '0';
        
        // Remover todas as classes de animação de temperatura
        const allElements = temperatureOverlay.querySelectorAll('*');
        allElements.forEach(element => {
            element.classList.remove(
                'heat-ring-outer', 'heat-ring-middle', 'heat-ring-inner',
                'atmospheric-heat', 'heat-particle'
            );
        });
        
        // Desativar rotação acelerada do globo
        if (window.deactivateGlobeHeatRotation) {
            window.deactivateGlobeHeatRotation();
        }
    }
    
    // Resetar transformação do gráfico
    if (stage2) {
        stage2.style.transition = '';
        stage2.style.transform = '';
    }
    
    // Resetar gráfico
    const progressCircle = document.getElementById('progress-2024');
    const yearLabel = document.getElementById('year-label');
    const percentageLabel = document.getElementById('percentage-label');
    const billionInfo = document.getElementById('billion-info');
    const gradStop1 = document.querySelector('#gradient2024 stop:first-child');
    const gradStop2 = document.querySelector('#gradient2024 stop:last-child');
    
    if (progressCircle) {
        progressCircle.style.strokeDasharray = '0 1005.31';
        progressCircle.style.opacity = '1';
        progressCircle.style.transition = ''; // Limpar transições
    }
    
    if (gradStop1 && gradStop2) {
        gradStop1.setAttribute('stop-color', '#3b82f6');
        gradStop2.setAttribute('stop-color', '#14b8a6');
        gradStop1.style.transition = ''; // Limpar transições
        gradStop2.style.transition = ''; // Limpar transições
    }
    
    if (yearLabel) {
        yearLabel.textContent = '2024';
        yearLabel.style.color = '#1f2937';
        yearLabel.style.transition = ''; // Limpar transições
    }
    
    if (percentageLabel) {
        percentageLabel.textContent = '0%';
        percentageLabel.style.color = '#3b82f6';
        percentageLabel.style.transition = ''; // Limpar transições
    }
    

    
    if (billionInfo) {
        billionInfo.style.transform = 'scale(0.95)'; // Volta ao estado inicial mais suave
    }
    
    // Resetar contador de bilhões
    const billionCounter = document.getElementById('billion-counter');
    if (billionCounter) {
        billionCounter.textContent = '0';
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