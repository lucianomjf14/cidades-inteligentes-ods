// ===== CONTROLADOR DO GLOBO 3D =====

let globe = null;
let globeInitialized = false;
let rotationAnimation = null;
let heatRotationAnimation = null;
let isHeatRotationActive = false;

// Coordenadas dos países
const COUNTRY_COORDINATES = {
    india: { lat: 20.5937, lng: 78.9629, altitude: 2 },
    france: { lat: 46.2276, lng: 2.2137, altitude: 2 },
    global: { lat: 0, lng: 0, altitude: 3 }
};

// Dados dos países para destacar
const COUNTRIES_DATA = [
    {
        name: 'India',
        lat: 20.5937,
        lng: 78.9629,
        color: '#3b82f6',
        size: 0.8
    },
    {
        name: 'France',
        lat: 46.2276,
        lng: 2.2137,
        color: '#ef4444',
        size: 0.6
    }
];

function initGlobe() {
    if (globeInitialized) return;
    
    const globeContainer = document.getElementById('globe-3d');
    if (!globeContainer) return;
    
    // Inicializar Globe.gl
    globe = Globe()
        (globeContainer)
        .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
        .bumpImageUrl('https://unpkg.com/three-globe/example/img/earth-topology.png')
        .backgroundImageUrl(null) // Remove fundo do universo
        .backgroundColor('rgba(0,0,0,0)') // Fundo transparente
        .width(globeContainer.offsetWidth)
        .height(globeContainer.offsetHeight)
        .showAtmosphere(true)
        .atmosphereColor('#4fc3f7')
        .atmosphereAltitude(0.15)
        // Configurações de rotação suave
        .enablePointerInteraction(false) // Desabilitar interação do usuário
        .pointOfView({ lat: 0, lng: 0, altitude: 3 }) // Vista inicial global
        // Inicializar sem pontos (serão adicionados durante demarcação)
        .pointsData([])
        .pointAltitude('size')
        .pointColor('color')
        .pointRadius(0.02)
        .pointResolution(8);
    
    // Rotação automática sutil
    startGlobeRotation();
    
    globeInitialized = true;
}

function startGlobeRotation() {
    if (!globe) return;
    
    // Parar rotação anterior se existir
    if (rotationAnimation) {
        cancelAnimationFrame(rotationAnimation);
    }
    
    // Rotação sutil e contínua
    const rotateGlobe = () => {
        if (globe) {
            const currentPov = globe.pointOfView();
            globe.pointOfView({
                lat: currentPov.lat,
                lng: currentPov.lng + 0.2, // Rotação lenta
                altitude: currentPov.altitude
            }, 50); // 50ms de transição suave
        }
        rotationAnimation = requestAnimationFrame(rotateGlobe);
    };
    
    rotateGlobe();
}

function stopGlobeRotation() {
    if (rotationAnimation) {
        cancelAnimationFrame(rotationAnimation);
        rotationAnimation = null;
    }
}

function animateToCountry(country, callback = null) {
    if (!globe || !COUNTRY_COORDINATES[country]) return;
    
    const coords = COUNTRY_COORDINATES[country];
    
    // Parar rotação automática durante animação
    stopGlobeRotation();
    
    // ETAPA 1: Giro elegante até o país (1.5 segundos)
    globe.pointOfView({
        lat: coords.lat,
        lng: coords.lng,
        altitude: 3 // Ainda distante
    }, 1500);
    
    // ETAPA 2: Zoom gradual após giro (1 segundo depois)
    setTimeout(() => {
        globe.pointOfView({
            lat: coords.lat,
            lng: coords.lng,
            altitude: coords.altitude // Zoom aproximado
        }, 1000);
        
        // ETAPA 3: Callback imediato após zoom (sem demarcação)
        setTimeout(() => {
            highlightCountry(country); // Apenas limpa dados antigos
            
            // Callback imediato - conectores serão ativados no JavaScript
            if (callback) {
                callback();
            }
        }, 1000); // Aguarda apenas o zoom completar
        
    }, 1500);
}

function highlightCountry(country) {
    if (!globe) return;
    
    let countryData = {};
    
    if (country === 'india') {
        countryData = {
            center: { lat: 20.5937, lng: 78.9629 },
            color: '#3b82f6',
            name: 'Mumbai, Índia'
        };
    } else if (country === 'france') {
        countryData = {
            center: { lat: 46.2276, lng: 2.2137 },
            color: '#ef4444', 
            name: 'Paris, França'
        };
    }
    
    if (!countryData.center) {
        // Para vista global, limpar pins
        globe.pointsData([]);
        return;
    }
    
    // Criar pin de localização elegante
    const locationPin = [{
        lat: countryData.center.lat,
        lng: countryData.center.lng,
        size: 1.0,
        color: countryData.color,
        name: countryData.name
    }];
    
    // Aplicar pin no globo
    globe.pointsData(locationPin)
        .pointAltitude(0.1) // Pin elevado para destaque
        .pointColor('color')
        .pointRadius(0.8) // Pin bem visível
        .pointResolution(16) // Suave e detalhado
        .pointLabel('name'); // Tooltip nativo do Globe.gl
}

function resetGlobeView() {
    if (!globe) return;
    
    // Parar rotação durante reset
    stopGlobeRotation();
    
    // Voltar para vista global elegantemente
    globe.pointOfView(COUNTRY_COORDINATES.global, 2000);
    
    // Limpar demarcações (pontos e arcos)
    globe.pointsData([]);
    globe.arcsData([]);
    
    // Reiniciar rotação automática após reset
    setTimeout(() => {
        startGlobeRotation();
    }, 2500); // Aguarda animação de volta completar
}

function showGlobe() {
    const globeContainer = document.getElementById('stage4-globe-container');
    if (globeContainer) {
        // Inicializar globo se não foi inicializado
        if (!globeInitialized) {
            setTimeout(() => {
                initGlobe();
            }, 300);
        }
    }
}

function hideGlobe() {
    // Resetar vista do globo
    resetGlobeView();
}

// Função para redimensionar o globo quando necessário
function resizeGlobe() {
    if (!globe) return;
    
    const globeContainer = document.getElementById('globe-3d');
    if (globeContainer) {
        globe.width(globeContainer.offsetWidth)
             .height(globeContainer.offsetHeight);
    }
}

// Listener para redimensionamento da janela
window.addEventListener('resize', resizeGlobe);

// ===== FUNÇÕES DE ROTAÇÃO ACELERADA PARA EFEITO DE CALOR =====

// Ativar rotação do globo durante animação de temperatura (mesma velocidade padrão)
function activateGlobeHeatRotation() {
    if (!globe || isHeatRotationActive) return;
    
    console.log('🔥 Ativando rotação do globo durante temperatura (velocidade padrão)...');
    isHeatRotationActive = true;
    
    // Parar rotação normal se estiver ativa
    stopGlobeRotation();
    
    // Usar a mesma lógica da rotação padrão (0.2 graus por frame)
    function heatRotationLoop() {
        if (!isHeatRotationActive || !globe) return;
        
        const currentPov = globe.pointOfView();
        globe.pointOfView({
            lat: currentPov.lat,
            lng: currentPov.lng + 0.2, // Mesma velocidade da rotação padrão
            altitude: currentPov.altitude
        }, 50); // Mesma transição suave de 50ms
        
        heatRotationAnimation = requestAnimationFrame(heatRotationLoop);
    }
    
    heatRotationLoop();
}

// Desativar rotação durante temperatura
function deactivateGlobeHeatRotation() {
    if (!isHeatRotationActive) return;
    
    console.log('❄️ Desativando rotação de calor do globo...');
    isHeatRotationActive = false;
    
    if (heatRotationAnimation) {
        cancelAnimationFrame(heatRotationAnimation);
        heatRotationAnimation = null;
    }
    
    // Voltar para rotação normal após 1 segundo
    setTimeout(() => {
        if (!isHeatRotationActive) {
            startGlobeRotation();
        }
    }, 1000);
}

// Expor funções globalmente para uso em slide-interactivity.js
window.activateGlobeHeatRotation = activateGlobeHeatRotation;
window.deactivateGlobeHeatRotation = deactivateGlobeHeatRotation;
