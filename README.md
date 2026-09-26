# Andrew | Presença Digital

Site institucional de serviços digitais (sites, portfólios, identidade visual, conteúdo e tráfego pago) para profissionais autônomos e pequenos negócios.

HTML, CSS e JavaScript puros — sem build, sem framework, sem backend. Basta abrir `index.html` ou publicar a pasta no GitHub Pages.

## Estrutura

```
.
├── index.html          # Home (hero cinematográfico, pacotes, como funciona, sobre)
├── servicos.html        # Serviços organizados em 4 grupos, com preços
├── projetos.html         # Cases reais + Sobre + FAQ + Contato/orçamento
├── assets/
│   ├── css/
│   │   └── styles.css   # Design system e estilos de todas as páginas
│   ├── js/
│   │   └── main.js       # Header, hero scroll-driven, reveals, FAQ, formulário
│   └── images/
│       ├── andrew-hero.webp / .jpg   # Foto do hero da Home
│       └── projects/                 # Imagens dos cases (Andressa, Evy Braids, Galpão da Evy, Gustavo)
└── README.md
```

## Design system

| Token | Valor |
|---|---|
| Fundo principal | `#0D0D0F` |
| Fundo secundário | `#17171A` |
| Texto principal | `#F3F1EC` |
| Texto secundário | `#B8B8BC` |
| Destaque (âmbar) | `#D9923B` |
| Título | Instrument Sans |
| Corpo | Inter |

## Hero da Home

Seção `.hero` com 400vh de altura; o JS calcula o progresso do scroll dentro dela e:
- troca a "cena" de texto ativa entre os 4 momentos do briefing;
- aplica um zoom (Ken Burns) sutil na foto.

Não há vídeo ainda — o efeito usa a foto estática. Para trocar por um vídeo real controlado pelo scroll, troque o bloco que aplica `transform: scale()` na imagem por `video.currentTime = progress * video.duration` em `assets/js/main.js` (função `applyHeroProgress`).

No mobile (`max-width: 860px`) e com `prefers-reduced-motion: reduce`, o hero mostra direto a cena final, sem o efeito de scroll.

## Formulário de orçamento

O site é estático, então o formulário em `projetos.html#contato` não envia para um servidor: ao enviar, ele monta um `mailto:` para `prod.eodrew@gmail.com` já com nome, serviço e mensagem preenchidos. Para receber os pedidos direto (planilha, e-mail automático, CRM), trocar por um serviço como Formspree ou um backend próprio, mantendo os mesmos campos.

Os links de "Solicitar orçamento" nos cards de `servicos.html` já passam o nome do serviço pela URL (`?servico=...`), que é lido pelo JS e preenche o campo automaticamente ao abrir a página de contato.

## Publicação (GitHub Pages)

1. Subir o conteúdo desta pasta na raiz do repositório (ou branch/pasta configurada no GitHub Pages).
2. Nenhuma etapa de build é necessária — os arquivos já são estáticos.

## Contato do negócio

- Instagram: [@andrewgestortrafego](https://www.instagram.com/andrewgestortrafego/)
- E-mail: prod.eodrew@gmail.com
