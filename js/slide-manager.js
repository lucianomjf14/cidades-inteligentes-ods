// ===== GERENCIADOR DE SLIDES =====
let currentSlideIndex = 0;

// Função para carregar um slide
function loadSlide(index) {
    if (index < 0 || index >= SLIDES_DATA.length) return;
    
    // Resetar slide 4 se estiver saindo dele
    if (currentSlideIndex === 3 && index !== 3) {
        resetSlide4();
    }
    
    currentSlideIndex = index;
    const slide = SLIDES_DATA[index];
    
    // Atualiza o conteúdo
    const contentArea = document.getElementById('dynamicContent');
    contentArea.innerHTML = slide.content;
    
    // Atualiza contador
    document.getElementById('currentSlide').textContent = slide.id;
    document.getElementById('totalSlides').textContent = TOTAL_SLIDES;
    
    // Reinicia animações do conteúdo
    if (slide.animations) {
        slide.animations.forEach(anim => {
            animateElement(anim.id, anim.animation, anim.delay);
        });
    }
    
    // Inicializar interatividade se o slide tiver
    if (slide.hasInteractivity && slide.id === 4) {
        setTimeout(() => {
            initSlide4Interactivity();
        }, 1500); // Aguardar animações iniciais
    }
    
    // Salva posição atual
    localStorage.setItem('currentSlide', index);
}

// Navegação
function nextSlide() {
    if (currentSlideIndex < SLIDES_DATA.length - 1) {
        loadSlide(currentSlideIndex + 1);
    }
}

function previousSlide() {
    if (currentSlideIndex > 0) {
        loadSlide(currentSlideIndex - 1);
    }
}

// Função para animar elementos
function animateElement(elementId, animation, delay = 0) {
    const element = document.getElementById(elementId);
    if (element) {
        setTimeout(() => {
            element.style.animation = `${animation} 0.8s ease-out forwards`;
            element.classList.remove('hidden-initially');
        }, delay);
    }
}

// Atalhos de teclado
document.addEventListener('keydown', (e) => {
    // Desabilitar navegação por teclado durante interatividade do slide 4
    if (currentSlideIndex === 3 && slide4Stage < 2 && (e.key === 'ArrowRight' || e.key === ' ')) {
        e.preventDefault();
        handleSlide4Click();
        return;
    }
    
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
            loadSlide(0);
            break;
        case 'End':
            e.preventDefault();
            loadSlide(SLIDES_DATA.length - 1);
            break;
        case 'f':
        case 'F':
            e.preventDefault();
            toggleFullscreen();
            break;
    }
});

// Tela cheia
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

// Swipe para mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
        nextSlide(); // Swipe left
    }
    if (touchEndX > touchStartX + 50) {
        previousSlide(); // Swipe right
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    // Carrega último slide visualizado ou começa do início
    const savedSlide = parseInt(localStorage.getItem('currentSlide') || '0');
    loadSlide(savedSlide);
    
    // Inicia animações do footer (sempre presentes)
    initFooterAnimations();
});