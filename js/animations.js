// ===== ANIMAÇÕES DO FOOTER =====
function initFooterAnimations() {
    // Animar formas geométricas
    for (let i = 1; i <= 10; i++) {
        const shape = document.getElementById(`shape1-${i}`);
        if (shape) {
            setTimeout(() => {
                shape.style.animation = 'bounceIn 0.8s ease-out forwards';
                
                // Após entrada, aplicar rotação contínua
                setTimeout(() => {
                    if (i % 3 === 0) {
                        shape.classList.add('slow-rotating');
                    } else {
                        shape.classList.add('rotating-square');
                    }
                }, 800);
            }, 1800 + (i * 50));
        }
    }
    
    // Rotação dos elementos laterais
    setTimeout(() => {
        const leftGeo = document.getElementById('left-geo1');
        const rightGeo = document.getElementById('right-geo1');
        
        if (leftGeo) {
            leftGeo.style.animation = 'slowRotation 3s ease-in-out infinite alternate';
        }
        
        if (rightGeo) {
            rightGeo.style.animation = 'continuousRotation 5s linear infinite';
        }
    }, 2000);
}

// Reiniciar animações ao trocar de slide
function restartContentAnimations() {
    const content = document.getElementById('dynamicContent');
    const children = content.querySelectorAll('.hidden-initially');
    
    children.forEach(child => {
        child.style.animation = 'none';
        child.offsetHeight; // Trigger reflow
        child.style.animation = null;
    });
}