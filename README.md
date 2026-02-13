# Cidades Inteligentes como Vetores para os ODS

**Apresentação interativa desenvolvida para defesa de dissertação de Mestrado em Administração e Desenvolvimento Empresarial (MADE)**

---

## Sobre o Projeto

Apresentação acadêmica interativa que explora como as Cidades Inteligentes podem funcionar como vetores para o alcance dos Objetivos de Desenvolvimento Sustentável (ODS) da ONU, baseada em uma Revisão Sistemática da Literatura (RSL).

**Título completo:** Cidades Inteligentes como Vetores para os ODS: Sinergias, Desafios e Oportunidades para o Desenvolvimento Urbano Sustentável através de uma RSL

---

## Da pesquisa ao produto visual

```mermaid
flowchart LR
    A["RSL\nRevisão Sistemática"] --> B["Dados\nUrbanização + ODS"]
    B --> C["Visualização\nGlobo 3D + Gráficos"]
    C --> D["Apresentação\nInterativa e navegável"]
```

---

## Conteúdo da Apresentação

| Slide | Título | Destaques |
|-------|--------|----------|
| 1 | Capa | Identificação do trabalho, banca examinadora |
| 2 | Resumo da Apresentação | Introdução, Referencial Teórico, Metodologia (RSL), Resultados, Discussão |
| 3 | Pergunta Central | Por que pesquisar Cidades Inteligentes e os ODS? |
| 4 | Contextualização e Justificativa | Dados de urbanização, projeções demográficas, impactos climáticos |

---

## Recursos Interativos

- Globo 3D interativo (Globe.gl) com dados georreferenciados
- Gráfico circular animado de urbanização (55% para 68% até 2050)
- Projeção de +2 bilhões de habitantes urbanos até 2050
- Tooltips com dados reais (Mumbai 944mm de chuva em 2005, França 14.800 mortes em 2003)
- Overlay de temperatura com projeção para 2040
- Animações CSS customizadas (fadeInUp, slideInLeft, zoomIn)

---

## Tecnologias

| Tecnologia | Uso |
|------------|-----|
| HTML5 / CSS3 | Estrutura e estilização |
| JavaScript | Lógica, animações e interatividade |
| TailwindCSS | Framework de estilos utilitários |
| Globe.gl | Visualização 3D do globo terrestre |

---

## Como Executar

Por ser uma aplicação estática (HTML/CSS/JS), basta abrir o arquivo `index.html` em qualquer navegador moderno.

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

## Informações Acadêmicas

| Campo | Detalhe |
|-------|--------|
| **Programa** | Mestrado em Administração e Desenvolvimento Empresarial (MADE) |
| **Instituição** | Universidade Estácio de Sá |
| **Mestrando** | Luciano Marinho Silveira |
| **Orientador** | Prof. Dr. José Aires Trigo |
| **Avaliador** | Prof. Dr. Antonio Augusto Gonçalves |
| **Local** | Rio de Janeiro, 2025 |

---

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

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
