export type Cidade = {
  slug: string
  nome: string
  estado: string
  siglaEstado: string
  populacao: string
  contextoLocal: string
}

export const CIDADES: Cidade[] = [
  {
    slug: 'aracaju',
    nome: 'Aracaju',
    estado: 'Sergipe',
    siglaEstado: 'SE',
    populacao: '650 mil',
    contextoLocal:
      'Em Aracaju, os cartórios de notas estão concentrados no Centro e no bairro Salgado Filho. A cidade vive um ciclo intenso de valorização imobiliária — bairros como Coroa do Meio, Jabotiana e Farolândia têm muitos imóveis herdados que precisam de regularização para serem vendidos ou financiados.',
  },
  {
    slug: 'nossa-senhora-do-socorro',
    nome: 'Nossa Senhora do Socorro',
    estado: 'Sergipe',
    siglaEstado: 'SE',
    populacao: '200 mil',
    contextoLocal:
      'Nossa Senhora do Socorro é a segunda maior cidade de Sergipe e cresceu muito rápido nas últimas décadas. Com essa expansão acelerada, uma parcela significativa dos imóveis — especialmente em bairros como Marcos Freire I, II e III — ainda não tem documentação regularizada, o que torna o inventário ainda mais importante para garantir a transferência legal da propriedade.',
  },
  {
    slug: 'lagarto',
    nome: 'Lagarto',
    estado: 'Sergipe',
    siglaEstado: 'SE',
    populacao: '103 mil',
    contextoLocal:
      'Lagarto é polo do sul sergipano e concentra uma grande quantidade de propriedades rurais — sítios, chácaras e terrenos agrícolas que muitas vezes passam de geração em geração sem escritura formal. O inventário e a regularização desses imóveis rurais têm particularidades que exigem atenção jurídica especializada.',
  },
  {
    slug: 'itabaiana',
    nome: 'Itabaiana',
    estado: 'Sergipe',
    siglaEstado: 'SE',
    populacao: '100 mil',
    contextoLocal:
      'Conhecida como a "capital do agreste sergipano", Itabaiana é um dos municípios mais dinâmicos do interior do estado. Com forte tradição comercial e grande quantidade de pequenas propriedades rurais e urbanas na família há gerações, é comum encontrar imóveis sem escritura ou em nome de pessoas já falecidas.',
  },
  {
    slug: 'sao-cristovao',
    nome: 'São Cristóvão',
    estado: 'Sergipe',
    siglaEstado: 'SE',
    populacao: '85 mil',
    contextoLocal:
      'São Cristóvão foi fundada em 1590 e é uma das cidades mais antigas do Brasil — o que significa que muitos imóveis no município têm documentação antiga, incompleta ou simplesmente inexistente. Regularizar a situação de imóveis históricos na cidade exige conhecimento específico e paciência com a burocracia cartorária.',
  },
]

export function getCidade(slug: string): Cidade | undefined {
  return CIDADES.find((c) => c.slug === slug)
}
