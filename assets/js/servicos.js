/* Fonte única dos planos, valores, checkouts e comparativo. */
const SERVICES = [
  {
    id: 'criativos_anuncios', short: 'Criativos', name: 'Criativos para Anúncios', price: 197,
    checkout: 'https://pay.kiwify.com.br/2eJRLxK', cta: 'QUERO MEUS CRIATIVOS',
    subtitle: 'Seu kit de campanha pronto para anunciar.',
    audience: 'Para quem já tem sua estrutura e precisa de material profissional para colocar uma campanha no ar.',
    includes: ['3 conceitos estratégicos de anúncio', '3 criativos publicitários', '3 copies para anúncios', 'Headlines', 'CTAs', 'Adaptações para Feed', 'Adaptações para Stories/Reels', '1 rodada de alterações'],
    outcome: 'Um kit de campanha com criativos e textos preparados para você subir nos seus anúncios.',
    excludes: ['Configuração do Meta Ads', 'Gerenciamento de campanha', 'Verba de mídia', 'Gestão de redes sociais', 'Garantia de resultados'],
    situation: 'Eu já tenho minha estrutura. Só preciso de anúncios melhores.',
    features: ['ad3', 'ad_creatives', 'ad_copy']
  },
  {
    id: 'presenca_digital_start', short: 'Presença Start', name: 'Presença Digital Start', price: 297,
    checkout: 'https://pay.kiwify.com.br/vyPE4Re', cta: 'PROFISSIONALIZAR MEU INSTAGRAM',
    subtitle: 'Seu Instagram organizado para representar melhor o seu negócio.',
    audience: 'Para quem já possui Instagram, mas sente que o perfil ainda parece improvisado, desorganizado ou pouco profissional.',
    includes: ['Diagnóstico do perfil', 'Otimização de nome, bio e CTA', 'Direção visual básica', '6 criativos estáticos', '6 legendas com CTA', 'Até 5 capas de destaques', 'Organização sugerida do feed', '1 rodada de alterações'],
    outcome: 'Uma base visual e estratégica pronta para apresentar seu negócio de forma mais organizada e profissional no Instagram.',
    deadline: 'Até 7 dias úteis após o recebimento completo do briefing e dos materiais.',
    excludes: ['Gestão mensal do Instagram', 'Publicação', 'Resposta a Direct/comentários', 'Criação de logotipo', 'Produção de vídeos', 'Landing page', 'Tráfego pago', 'Alterações ilimitadas'],
    situation: 'Meu Instagram existe, mas não parece profissional.',
    features: ['instagram', 'visual', 'content6', 'captions6', 'covers']
  },
  {
    id: 'estrutura_digital', short: 'Estrutura Digital', name: 'Estrutura Digital', price: 797,
    checkout: 'https://pay.kiwify.com.br/u3pKCgp', cta: 'QUERO MINHA ESTRUTURA DIGITAL', badge: 'ESTRUTURA COMPLETA',
    subtitle: 'Sua presença online pronta para começar a captar clientes.',
    audience: 'Para pequenos negócios que querem sair de uma presença digital improvisada para uma estrutura conectando Instagram, página própria e anúncios.',
    includes: ['Diagnóstico do negócio', 'Otimização do Instagram', 'Direção visual', '6 criativos', 'Landing page de uma página', 'Integração com WhatsApp', '2 criativos específicos para anúncios', 'Copies dos anúncios', 'Headlines e CTAs', 'Configuração inicial de 1 campanha Meta Ads', 'Orientação básica', '1 rodada de alterações por etapa'],
    outcome: 'Instagram organizado + landing page + WhatsApp integrado + criativos + primeira estrutura de campanha preparada para começar a captar oportunidades.',
    deadline: '10 a 15 dias úteis após briefing e materiais completos.',
    excludes: ['Verba utilizada nos anúncios', 'Gestão mensal do Meta Ads', 'Gestão mensal do Instagram', 'Postagens diárias', 'Resposta a leads', 'Produção presencial de fotos/vídeos', 'E-commerce complexo', 'Múltiplas landing pages', 'Campanhas ilimitadas', 'Alterações ilimitadas', 'Garantia de vendas'],
    situation: 'Preciso organizar tudo e começar a anunciar.',
    features: ['instagram', 'visual', 'content6', 'landing', 'whatsapp', 'ad_creatives', 'ad_copy', 'meta'],
    campaign: ['1 campanha', '1 conjunto de anúncios', 'Até 2 anúncios', 'Definição do objetivo', 'Público inicial', 'Região', 'Posicionamentos', 'Orçamento sugerido', 'Criativos', 'Copies', 'CTA', 'Link de destino', 'Configuração básica de rastreamento quando aplicável e tecnicamente possível']
  }
];

