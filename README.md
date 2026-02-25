# VG Manutenção em Painéis de LED

Landing page responsiva que apresenta os serviços de manutenção em painéis de LED oferecidos pela VG Manutenção. O layout foi atualizado para um visual mais imersivo, com tipografia exclusiva, gradientes dinâmicos e animações suaves.

## Tecnologias e dependências

- [Bootstrap 5.3](https://getbootstrap.com/) para grid e utilitários responsivos
- [Font Awesome 6](https://fontawesome.com/) para ícones
- [Google Fonts](https://fonts.google.com/specimen/Space+Grotesk) (Space Grotesk e Space Mono)

## Estrutura dos arquivos

```
VGled-Manutencao/
├── assets/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── main.js
├── favicon.ico
├── foradoar_index.html
├── index.html
├── logo.png
├── vgmanutencao.jpg
└── README.md
```

- `index.html`: estrutura semântica da página, com seções para hero, serviços, processo, diferenciais, CTA, rodapé e o acordeão neon inspirado no material promocional.
- `assets/css/style.css`: define variáveis de cor, tipografia personalizada, gradientes, animações e responsividade.
- `assets/js/main.js`: concentra a lógica para o navbar dinâmico, animações por `IntersectionObserver`, contadores e scroll suave.
- `foradoar_index.html`: página simples de manutenção emergencial (opcional).

## Como executar

1. Faça o download/clonagem do repositório.
2. Abra `index.html` diretamente no navegador ou sirva com qualquer servidor estático (VS Code Live Server, por exemplo).
3. Edite `style.css` ou `main.js` conforme necessário; o HTML já referencia ambos.

## Personalização

- **Paleta**: ajuste as variáveis em `:root` dentro de `assets/css/style.css` para testar novas cores rapidamente. A configuração atual privilegia o azul em diferentes profundidades, deixando apenas alguns detalhes em roxo escuro alinhados ao logotipo.
- **Hero**: substitua `vgmanutencao.jpg` pela imagem desejada mantendo as proporções para preservar o recorte do cartão.
- **Contato**: atualize o link do WhatsApp nas três ocorrências presentes no HTML.
- **Acordeão neon**: adapte os títulos/textos dentro de `#servicosAccordion` para destacar novos pacotes; as animações são controladas pela classe `neon-accordion`.
- **Seção de métricas**: existe uma seção pronta em `index.html` (logo após o hero) comentada. Remova o comentário para exibi-la e manter os contadores funcionando.

## Boas práticas adotadas

- HTML semântico e acessível (uso de `aria-label`, `aria-hidden`, foco em contraste e navegação por teclado).
- Separação de responsabilidades (HTML, CSS e JS independentes).
- Animações performáticas via `IntersectionObserver`, sanfona com glow controlado, aurora animada no hero, botões com efeito flutuante/pulse e gradiente animado no nome da empresa.
- Layout flexível que se adapta de desktops grandes a telas mobile menores que 360px sem dependências adicionais.
