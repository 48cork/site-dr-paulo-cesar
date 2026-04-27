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
      'Quem mora em Aracaju e perdeu um familiar frequentemente descobre que o imóvel herdado não pode ser vendido nem financiado sem antes passar pelo inventário. O Dr. Paulo Cesar cuida de todo esse processo — da documentação inicial até o registro final em cartório.',
  },
  {
    slug: 'nossa-senhora-do-socorro',
    nome: 'Nossa Senhora do Socorro',
    estado: 'Sergipe',
    siglaEstado: 'SE',
    populacao: '200 mil',
    contextoLocal:
      'Nossa Senhora do Socorro cresceu muito rápido, e boa parte dos imóveis da cidade ainda não tem escritura ou está em nome de pessoas já falecidas. Se é o seu caso, o Dr. Paulo Cesar pode dizer exatamente o que precisa ser feito — e fazer.',
  },
  {
    slug: 'lagarto',
    nome: 'Lagarto',
    estado: 'Sergipe',
    siglaEstado: 'SE',
    populacao: '103 mil',
    contextoLocal:
      'Em Lagarto, é comum que sítios e propriedades rurais passem de pai para filho por décadas sem nenhum documento formal. Quando chega a hora de regularizar, as famílias não sabem nem por onde começar. O Dr. Paulo Cesar já resolveu casos assim mais vezes do que consegue contar.',
  },
  {
    slug: 'itabaiana',
    nome: 'Itabaiana',
    estado: 'Sergipe',
    siglaEstado: 'SE',
    populacao: '100 mil',
    contextoLocal:
      'Itabaiana tem uma das maiores concentrações de pequenas propriedades rurais e urbanas do interior sergipano — e boa parte delas ainda está em nome de avós ou bisavós. Se o inventário está parado ou nunca foi aberto, o Dr. Paulo Cesar pode retomar de onde parou ou começar do zero.',
  },
  {
    slug: 'sao-cristovao',
    nome: 'São Cristóvão',
    estado: 'Sergipe',
    siglaEstado: 'SE',
    populacao: '85 mil',
    contextoLocal:
      'São Cristóvão foi fundada em 1590, e isso tem consequências práticas: muitos imóveis têm documentação antiga, incompleta ou simplesmente inexistente. Regularizar isso exige paciência com a burocracia — e o Dr. Paulo Cesar tem.',
  },
]

export function getCidade(slug: string): Cidade | undefined {
  return CIDADES.find((c) => c.slug === slug)
}
