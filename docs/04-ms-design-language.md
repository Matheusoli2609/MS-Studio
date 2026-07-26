# MS Design Language

> A linguagem de design oficial da MS Studio.

Versão: 1.0

---

# Introdução

A MS Design Language (MSDL) define como os produtos da MS Studio devem parecer, comportar-se e comunicar.

Ela não descreve componentes específicos.

Ela define os princípios que orientam a construção de qualquer interface produzida pela MS Studio.

Todo produto deve transmitir a mesma sensação:

> Confiança.

Independentemente da tecnologia utilizada.

---

# Nossa Filosofia

Interfaces devem desaparecer.

O usuário não deve prestar atenção na interface.

Ele deve prestar atenção no problema que está resolvendo.

Quando a interface chama mais atenção do que o conteúdo, falhamos.

---

# Personalidade Visual

Toda interface da MS Studio deve transmitir:

- Clareza
- Elegância
- Organização
- Precisão
- Modernidade
- Confiança

Evitamos:

- Poluição visual
- Excesso de cores
- Excesso de animações
- Complexidade desnecessária

---

# Princípios Fundamentais

## Clareza

Cada elemento possui uma função.

Nada existe apenas como decoração.

---

## Hierarquia

As informações devem possuir prioridade visual clara.

O usuário sempre sabe onde olhar primeiro.

---

## Consistência

Componentes iguais possuem comportamento igual.

Não existem exceções sem justificativa.

---

## Simplicidade

Menos elementos.

Mais significado.

---

## Performance

Performance faz parte do design.

Velocidade é experiência.

---

# Espaçamento

Utilizamos uma escala baseada em múltiplos de 8.

Exemplo:

4px

8px

16px

24px

32px

48px

64px

96px

128px

Todo novo componente deve seguir essa escala.

---

# Grid

Utilizamos containers centralizados.

Layouts responsivos.

Muito espaço negativo.

Preferimos respirar do que preencher.

---

# Typography

## Fonte Oficial

A MS Studio utiliza **Inter** como sua fonte oficial.

### Justificativa

A escolha da Inter foi baseada em critérios técnicos:

- Excelente legibilidade em telas;
- Desenvolvida especificamente para interfaces digitais;
- Amplamente utilizada em produtos e aplicações modernas;
- Grande variedade de pesos tipográficos;
- Ótimo suporte para o idioma português;
- Gratuita e de fácil integração com projetos web.

## Escala Tipográfica

| Elemento | Tamanho |
|----------|---------:|
| XS | 12px |
| SM | 14px |
| MD | 16px |
| LG | 20px |
| XL | 24px |
| 2XL | 32px |
| 3XL | 48px |

## Pesos

- Regular (400)
- Medium (500)
- SemiBold (600)
- Bold (700)

## Diretrizes

- Utilizar apenas uma família tipográfica principal.
- Priorizar legibilidade e hierarquia visual.
- Evitar o uso excessivo de pesos diferentes.
- Utilizar H1 apenas uma vez por página.

---

# Cores

As cores possuem função.

Não decoração.

Cada cor comunica um estado.

Exemplo:

Primária

Neutros

Sucesso

Aviso

Erro

Informação

Nunca utilizamos cores apenas porque são bonitas.

| Token                     | Valor     |
| ------------------------- | --------- |
| Primary 100               | `#F7EAEC` |
| Primary 200               | `#E9D7DA` |
| Primary 300               | `#D9A9B2` |
| Primary 400               | `#A33A47` |
| Primary 500               | `#7D1120` |
| **Primary 600 (Oficial)** | `#66010F` |
| Primary 700               | `#54000C` |
| Primary 800               | `#450009` |
| Primary 900               | `#2F0006` |


---

# Design Tokens

Toda a identidade visual da MS Studio é centralizada em Design Tokens.

Os tokens representam a fonte oficial de verdade para:

- Cores
- Tipografia
- Espaçamentos
- Bordas
- Sombras
- Motion
- Layout

Implementação:

src/styles/tokens.css

Nenhum valor visual deve ser definido diretamente nos componentes quando existir um token equivalente.

# Icons

## Biblioteca Oficial

A MS Studio utiliza **Lucide React** como biblioteca oficial de ícones.

## Motivos

- Design minimalista
- Consistência visual
- SVG puro
- Excelente integração com React
- Compatível com Tailwind CSS
- Tree Shaking (melhor performance)
- Comunidade ativa

## Princípios

- Utilizar apenas Lucide React.
- Não misturar bibliotecas de ícones.
- Preferir ícones outline.
- Todo ícone deve possuir significado funcional.
- Ícones não substituem textos importantes.
- Utilizar tamanhos padronizados.
---

# Movimento

Animações existem para orientar.

Nunca para distrair.

Toda animação deve responder uma pergunta:

"O usuário entende melhor a interface por causa dela?"

Se não...

Ela deve ser removida.

---

# Microinterações

Pequenas respostas da interface.

Hover.

Focus.

Loading.

Success.

Erro.

Todas devem transmitir naturalidade.

---

# Acessibilidade

Todos os produtos devem buscar:

Contraste adequado.

Navegação por teclado.

Semântica HTML.

Compatibilidade com leitores de tela.

---

# Responsividade

Mobile primeiro.

Desktop refinado.

Nunca escondemos funcionalidades importantes apenas para facilitar o layout.

---

# Experiência

O usuário nunca deve sentir que está aprendendo a usar o sistema.

Tudo deve parecer natural.

---

# Evolução

A MS Design Language é um documento vivo.

Ela evolui junto com a empresa.

Mudanças significativas devem ser registradas no Changelog.

---

# Pergunta Final

Antes de aprovar qualquer interface perguntamos:

> Esta interface parece ter sido feita pela MS Studio?

Se a resposta for não,

ela ainda não está pronta.

---

**MS Studio**

Mastery Solutions