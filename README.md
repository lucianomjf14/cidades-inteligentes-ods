# Cidades Inteligentes como Vetores para os ODS

**Apresentação interativa desenvolvida para defesa de dissertação de Mestrado em Administração e Desenvolvimento Empresarial (MADE)**

---

## Sobre o Projeto

Apresentação acadêmica interativa que explora como as Cidades Inteligentes podem funcionar como vetores para o alcance dos Objetivos de Desenvolvimento Sustentável (ODS) da ONU, baseada em uma Revisão Sistemática da Literatura (RSL).

**Titulo completo:** Cidades Inteligentes como Vetores para os ODS: Sinergias, Desafios e Oportunidades para o Desenvolvimento Urbano Sustentável atraves de uma RSL

---

## Da pesquisa ao produto visual

```mermaid
flowchart LR
    A["RSL\nRevisão Sistemática"] --> B["Dados\nUrbanização + ODS"]
    B --> C["Visualização\nGlobo 3D + Gráficos"]
    C --> D["Apresentação\nInterativa e navegável"]
```

---

## Conteudo da Apresentacao

| Slide | Titulo | Destaques |
|-------|--------|----------|
| 1 | Capa | Identificacao do trabalho, banca examinadora |
| 2 | Resumo da Apresentacao | Introducao, Referencial Teorico, Metodologia (RSL), Resultados, Discussao |
| 3 | Pergunta Central | Por que pesquisar Cidades Inteligentes e os ODS? |
| 4 | Contextualizacao e Justificativa | Dados de urbanizacao, projecoes demograficas, impactos climaticos |

---

## Recursos Interativos

- Globo 3D interativo (Globe.gl) com dados georreferenciados
- Grafico circular animado de urbanizacao (55% para 68% ate 2050)
- Projecao de +2 bilhoes de habitantes urbanos ate 2050
- Tooltips com dados reais (Mumbai 944mm de chuva em 2005, Franca 14.800 mortes em 2003)
- Overlay de temperatura com projecao para 2040
- Animacoes CSS customizadas (fadeInUp, slideInLeft, zoomIn)

---

## Tecnologias

| Tecnologia | Uso |
|------------|-----|
| HTML5 / CSS3 | Estrutura e estilizacao |
| JavaScript | Logica, animacoes e interatividade |
| TailwindCSS | Framework de estilos utilitarios |
| Globe.gl | Visualizacao 3D do globo terrestre |

---

## Como Executar

Por ser uma aplicacao estatica (HTML/CSS/JS), basta abrir o arquivo `index.html` em qualquer navegador moderno.

```
git clone https://github.com/lucianomjf14/cidades-inteligentes-ods.git
cd cidades-inteligentes-ods
```

Abra `index.html` no navegador ou utilize um servidor local:

```
npx serve .
```

---

## Estrutura do Projeto

```
cidades-inteligentes-ods/
|-- css/
|   |-- animations.css
|   |-- layout.css
|-- js/
|   |-- animations.js
|   |-- globe-controller.js
|   |-- slide-interactivity.js
|   |-- slide-manager.js
|   |-- slides-data.js
|-- styles/
|-- index.html
|-- apresentacao-completa.html
|-- LICENSE
|-- README.md
```

---

## Informacoes Academicas

| Campo | Detalhe |
|-------|--------|
| **Programa** | Mestrado em Administracao e Desenvolvimento Empresarial (MADE) |
| **Instituicao** | Universidade Estacio de Sa |
| **Mestrando** | Luciano Marinho Silveira |
| **Orientador** | Prof. Dr. Jose Aires Trigo |
| **Avaliador** | Prof. Dr. Antonio Augusto Goncalves |
| **Local** | Rio de Janeiro, 2025 |

---

## Licenca

Este projeto esta licenciado sob a [Licenca MIT](LICENSE).

---

## Autor

<div align="center">

<img src="https://github.com/lucianomjf14.png" width="150" style="border-radius: 50%;" alt="Luciano Marinho Silveira">

### Luciano Marinho Silveira

Mestre em Administração | Gestão e Arquitetura Organizacional | Processos, Dados e Inovação | Inteligência Artificial

Juiz de Fora, MG, Brasil

[![GitHub](https://img.shields.io/badge/GitHub-lucianomjf14-181717?style=flat-square&logo=github)](https://github.com/lucianomjf14)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Luciano_Silveira-0A66C2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/luciano-marinho-silveira)
[![DIO](https://img.shields.io/badge/DIO-Perfil-7C3AED?style=flat-square)](https://web.dio.me/users/lucianomjf14)
[![Lattes](https://img.shields.io/badge/Lattes-CNPq-006B3F?style=flat-square)](http://lattes.cnpq.br/8717991759915273)
[![Email](https://img.shields.io/badge/Email-lucianomjf14%40gmail.com-EA4335?style=flat-square&logo=gmail)](mailto:lucianomjf14@gmail.com)

</div>
