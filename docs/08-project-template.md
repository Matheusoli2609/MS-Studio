# MS Studio Project Template

> Template oficial para criação de projetos da MS Studio.

Versão: 1.0

---

# Objetivo

Este documento define o padrão mínimo para qualquer projeto desenvolvido pela MS Studio.

Todos os novos projetos devem utilizar esta estrutura como ponto de partida.

O objetivo é garantir:

- Consistência
- Escalabilidade
- Organização
- Facilidade de manutenção
- Experiência semelhante entre projetos

---

# Processo de Desenvolvimento

Todo projeto da MS Studio segue as seguintes etapas:

1. Descoberta
2. Planejamento
3. Arquitetura
4. Design
5. Desenvolvimento
6. Testes
7. Documentação
8. Deploy
9. Evolução

Nenhuma etapa deve ser ignorada.

---

# Estrutura Recomendada

```
project-name/

docs/
public/
src/

README.md
package.json
vite.config.js
```

---

# Estrutura da Documentação

```
docs/

00-the-ms-way.md
01-master-roadmap.md
02-brand-book.md
03-engineering-handbook.md
04-ms-design-language.md
05-design-system.md
06-architecture.md
07-git-workflow.md
08-project-template.md
09-roadmap.md
10-changelog.md
```

---

# Estrutura do Front-end

```
src/

assets/
components/
hooks/
layouts/
pages/
router/
services/
styles/
utils/

App.jsx
main.jsx
```

---

# Organização das Páginas

```
pages/

Home/

Home.jsx

sections/

Hero/
About/
Services/
Projects/
Contact/
```

Cada página deve conter apenas a composição das seções.

Toda lógica reutilizável deve permanecer em componentes ou hooks.

---

# Organização dos Componentes

```
components/

Button/
Navbar/
Footer/
Container/
Logo/

Component.jsx
Component.css
index.js
```

Todo componente reutilizável deve possuir sua própria pasta.

---

# Organização dos Assets

```
assets/

images/
icons/
logos/
illustrations/
fonts/
```

Evite armazenar arquivos fora desta estrutura.

---

# Convenções

## Componentes

PascalCase

```
Navbar.jsx
HeroCard.jsx
PrimaryButton.jsx
```

---

## Variáveis

camelCase

```
heroTitle

backgroundColor

projectList
```

---

## Constantes

UPPER_SNAKE_CASE

```
MAX_WIDTH

API_URL
```

---

## CSS

kebab-case

```
hero-section

service-card

navbar-link
```

---

# Git

Branches

```
main

develop

feature/*
```

Commits

```
feat:

fix:

docs:

style:

refactor:

chore:
```

---

# Checklist Inicial

Antes de escrever qualquer código:

- [ ] Definir objetivo do projeto
- [ ] Criar repositório
- [ ] Configurar Git
- [ ] Criar documentação
- [ ] Definir arquitetura
- [ ] Definir identidade visual
- [ ] Criar roadmap

---

# Checklist Antes do Deploy

- [ ] Build funcionando
- [ ] ESLint sem erros
- [ ] Responsividade validada
- [ ] Performance revisada
- [ ] SEO básico configurado
- [ ] README atualizado
- [ ] Changelog atualizado

---

# Critérios de Qualidade

Todo projeto deve atender aos seguintes critérios:

- Código organizado
- Componentes reutilizáveis
- Interface consistente
- Documentação atualizada
- Performance satisfatória
- Acessibilidade considerada
- Arquitetura escalável

---

# Filosofia

Um projeto da MS Studio não termina quando funciona.

Ele termina quando transmite confiança.

---

# Pergunta Final

Antes de considerar um projeto concluído, perguntamos:

> Este projeto representa a qualidade que esperamos da MS Studio?

Se a resposta for não,

ele ainda precisa evoluir.

---

**MS Studio**

Mastery Solutions