export type Servico = {
  slug: string
  nome: string
  descricao: string
  descricaoLonga: string
  icone: string
  beneficios: string[]
  faq: { pergunta: string; resposta: string }[]
}

export const SERVICOS: Servico[] = [
  {
    slug: 'inventario-judicial',
    nome: 'Inventário Judicial',
    descricao: 'Quando há menores herdeiros, testamento ou desacordo entre as partes, o inventário precisa ser feito pela via judicial.',
    descricaoLonga:
      'O inventário judicial é obrigatório quando existem herdeiros menores de idade, pessoas incapazes, testamento ou quando os herdeiros não chegam a um acordo. O processo tramita na Vara de Família e Sucessões e exige acompanhamento de advogado em todas as etapas. Cuidamos de todo o trâmite: da abertura do processo até a expedição do formal de partilha.',
    icone: '⚖️',
    beneficios: [
      'Acompanhamento jurídico completo em todas as fases',
      'Representação de todos os herdeiros ou de parte específica',
      'Elaboração de petições, recursos e acordos',
      'Comunicação clara sobre o andamento do processo',
    ],
    faq: [
      {
        pergunta: 'Quanto tempo leva um inventário judicial?',
        resposta:
          'Depende da complexidade do patrimônio e do volume de processos na comarca. Em média, leva de 1 a 3 anos. Casos simples e com acordo entre as partes podem ser encerrados em menos tempo.',
      },
      {
        pergunta: 'É possível fazer inventário judicial sem advogado?',
        resposta:
          'Não. O inventário judicial exige obrigatoriamente a representação por advogado habilitado. Cada herdeiro pode ter seu próprio advogado ou todos podem ser representados por um único profissional, desde que não haja conflito de interesses.',
      },
      {
        pergunta: 'Qual a diferença entre inventário judicial e extrajudicial?',
        resposta:
          'O extrajudicial é feito em cartório, é mais rápido e barato, mas só é permitido quando todos os herdeiros são maiores, capazes, estão de acordo e não há testamento. Quando alguma dessas condições não se aplica, o caminho é o judicial.',
      },
    ],
  },
  {
    slug: 'inventario-extrajudicial',
    nome: 'Inventário Extrajudicial',
    descricao: 'Feito em cartório, sem necessidade de processo judicial. Mais rápido, mais barato e igualmente válido.',
    descricaoLonga:
      'O inventário extrajudicial é realizado diretamente em cartório de notas, desde que todos os herdeiros sejam maiores de idade, capazes, estejam de acordo com a partilha e não haja testamento. É o caminho mais ágil: em muitos casos, pode ser concluído em semanas. Preparamos toda a documentação, calculamos os impostos devidos e acompanhamos o processo até a lavratura da escritura pública de inventário e partilha.',
    icone: '📋',
    beneficios: [
      'Processo muito mais rápido que a via judicial',
      'Custo total menor — sem custas processuais',
      'Escritura pública lavrada em cartório de sua escolha',
      'Documentação organizada e checada por advogado',
    ],
    faq: [
      {
        pergunta: 'Quanto custa um inventário extrajudicial em Sergipe?',
        resposta:
          'O custo envolve os honorários do advogado, as custas do cartório (calculadas sobre o valor dos bens) e o ITCMD — imposto estadual sobre herança. Em Sergipe, o ITCMD é de 4% sobre o valor venal dos bens. O cartório cobra uma escritura pública conforme tabela estadual.',
      },
      {
        pergunta: 'Em qual cartório fazer o inventário extrajudicial?',
        resposta:
          'O inventário extrajudicial pode ser feito em qualquer cartório de notas do Brasil, independentemente de onde o falecido morava ou onde estão os bens. Em Aracaju, há vários cartórios habilitados para esse serviço.',
      },
      {
        pergunta: 'E se um dos herdeiros discordar de algum ponto?',
        resposta:
          'Se houver qualquer desacordo entre os herdeiros, o inventário extrajudicial não pode ser feito. O caminho passa a ser o judicial. Por isso, é importante chegar com consenso antes de iniciar o processo em cartório.',
      },
    ],
  },
  {
    slug: 'partilha-de-bens',
    nome: 'Partilha de Bens',
    descricao: 'A divisão formal do patrimônio entre os herdeiros, feita com segurança jurídica para evitar conflitos futuros.',
    descricaoLonga:
      'A partilha de bens é a etapa em que o patrimônio do falecido é formalmente dividido entre os herdeiros. Pode ocorrer dentro do inventário ou de forma separada, quando já existe consenso sobre os bens. Elaboramos o esboço de partilha, calculamos a meação do cônjuge quando houver, verificamos se as cotas respeitam os direitos de cada herdeiro e garantimos que a divisão seja justa e sem brechas que causem problemas no futuro.',
    icone: '🏠',
    beneficios: [
      'Cálculo correto da meação e dos quinhões hereditários',
      'Verificação dos direitos de cada herdeiro conforme a lei',
      'Elaboração do esboço de partilha aceito por todos',
      'Prevenção de litígios futuros entre familiares',
    ],
    faq: [
      {
        pergunta: 'O cônjuge tem direito a herdar?',
        resposta:
          'Depende do regime de bens do casamento. No regime de comunhão parcial (o mais comum), o cônjuge tem direito à meação dos bens adquiridos durante o casamento — mas esse direito é diferente do direito à herança. O advogado calcula os dois separadamente para garantir que ninguém fique com menos do que tem direito.',
      },
      {
        pergunta: 'O que acontece com dívidas na partilha?',
        resposta:
          'As dívidas do falecido são pagas com o patrimônio antes da divisão entre os herdeiros. Os herdeiros não herdam dívidas além do valor dos bens — se as dívidas forem maiores que o patrimônio, os herdeiros simplesmente não recebem nada, mas também não precisam pagar com o próprio bolso.',
      },
      {
        pergunta: 'E se um imóvel não tiver como ser dividido?',
        resposta:
          'Imóvel indivisível pode ser licitado entre os herdeiros (um compra a parte dos outros) ou vendido a terceiros com o valor repartido. O acordo entre os herdeiros sobre essa questão precisa constar no esboço de partilha.',
      },
    ],
  },
  {
    slug: 'regularizacao-de-imoveis',
    nome: 'Regularização de Imóveis',
    descricao: 'Imóvel herdado sem escritura ou com documentação incompleta? Regularizamos a situação para que você possa vender, financiar ou transferir.',
    descricaoLonga:
      'Muitos imóveis em Sergipe foram adquiridos ou passados de geração em geração sem a devida formalização. Sem escritura, o imóvel não pode ser vendido formalmente, financiado em banco ou transferido para outra pessoa. Regularizamos imóveis herdados, rurais e urbanos, tratando desde a usucapião até o registro tardio de escritura, a abertura de matrícula e a atualização de dados no cartório de registro de imóveis.',
    icone: '📜',
    beneficios: [
      'Análise completa da situação documental do imóvel',
      'Regularização para venda, financiamento ou transferência',
      'Atendimento para imóveis rurais e urbanos',
      'Tramitação junto ao cartório de registro de imóveis',
    ],
    faq: [
      {
        pergunta: 'Posso vender um imóvel que está em inventário?',
        resposta:
          'Sim, mas com restrições. Para vender durante o inventário, todos os herdeiros precisam concordar e o juiz (ou tabelião, no caso extrajudicial) deve autorizar. O valor da venda entra no inventário e é dividido conforme a partilha. Após o inventário concluído, a venda é livre.',
      },
      {
        pergunta: 'O que é usucapião e quando se aplica?',
        resposta:
          'Usucapião é o reconhecimento legal da propriedade para quem ocupa um imóvel de forma contínua, pacífica e pública por um período determinado (varia de 5 a 15 anos dependendo da modalidade). É muito usado para regularizar imóveis onde a posse foi passando de pai para filho sem escritura formal.',
      },
      {
        pergunta: 'Quanto tempo leva para regularizar um imóvel?',
        resposta:
          'Depende da situação do imóvel. Uma regularização simples (atualização de dados ou registro de escritura já lavrada) pode levar semanas. Processos de usucapião ou abertura de matrícula nova podem levar meses. O diagnóstico inicial do advogado define o prazo realista para cada caso.',
      },
    ],
  },
]

export function getServico(slug: string): Servico | undefined {
  return SERVICOS.find((s) => s.slug === slug)
}
