# Site integrado — Andrew Moura

## Estrutura

index.html — página principal
planos/index.html — comparação e contratação
assets/css/inicio.css — aparência da página principal
assets/css/planos.css — aparência dos planos
assets/js/servicos.js — fonte única de nomes, preços, entregas e checkouts
assets/js/inicio.js — funcionamento da página principal
assets/js/planos.js — funcionamento e eventos da página de planos
assets/cases/ — imagens originais dos projetos
assets/favicon.svg — ícone
.nojekyll — compatibilidade com GitHub Pages

## Publicar

1. Extraia o ZIP.
2. Abra o repositório presencadigital, na branch usada pelo GitHub Pages.
3. Envie o CONTEÚDO desta pasta para a raiz do repositório: index.html, planos e assets devem ficar diretamente na raiz. Não envie uma pasta externa envolvendo tudo.
4. Salve o commit e aguarde o deploy atual do Pages.
5. Abra https://druzinho.github.io/presencadigital/ e use o menu Planos.

Página de planos: https://druzinho.github.io/presencadigital/planos/

O site principal foi preservado com seus projetos e visual, acrescentando acesso aos planos no menu, hero, rodapé e CTA final. Os cards da página principal agora levam aos detalhes do plano escolhido. As informações dos serviços foram sincronizadas com o escopo aprovado. A pasta original fornecida não foi alterada.

## Manutenção

Para alterar um preço, entrega ou checkout, edite apenas assets/js/servicos.js. As duas páginas usam essa mesma fonte. Para editar FAQ ou textos gerais, abra o index.html da página correspondente. Não é necessário instalar programas nem executar build.

Os antigos styles.css e script.js da raiz e de planos não são mais utilizados. Se já existirem no repositório, podem permanecer sem afetar a nova versão; não foram incluídos aqui. Não substitua esta entrega por um ZIP anterior.

## Rastreamento e links

Meta Pixel original preservado nas duas páginas, com o mesmo ID e PageView. O evento select_service permanece nos botões de checkout da página de planos, sem Purchase e sem evento duplicado por clique. Links internos não disparam seleção de contratação.

Os três checkouts diretos foram atualizados e verificados: Criativos — https://pay.kiwify.com.br/2eJRLxK; Presença Digital Start — https://pay.kiwify.com.br/vyPE4Re; Estrutura Digital — https://pay.kiwify.com.br/u3pKCgp. Todos responderam HTTP 200 e permaneceram no respectivo endereço de pagamento, sem redirecionar para o site. Nenhuma compra foi realizada.

Este pacote não foi publicado automaticamente.


## Atualização apenas dos links

Se a versão integrada já está publicada, substitua somente assets/js/servicos.js pelo arquivo deste pacote e salve o commit. Depois do deploy, recarregue a página de planos com Ctrl+F5. Para instalação completa, siga as instruções de publicação acima.
