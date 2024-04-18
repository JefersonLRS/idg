import imagemIrmaos from '../assets/images/imagemIrmaos.png'

export default function Profile() {
    return (
        <div className='flex flex-col lg:max-w-[1300px] md:mx-auto lg:flex-row justify-center items-center
        gap-6 lg:gap-[100px] mb-[30px] md:mb-[100px]'>
        <img src={imagemIrmaos} alt="Imagem dos irmãos Rocha" className='md:w-[550px] lg:w-[400px]'/>
        <div className='text-white w-[70%] lg:w-[40%] flex flex-col gap-7'>
          <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold'>Erico e Hugo Rocha</h1>
          <p>Os dois irmãos formaram os <span className='text-[#fde936]'>maiores empreendedores digitais do Brasil</span> e se
          tornaram referência na América Latina quando o assunto é lançamento.</p>
          <p>Desde 2013, ensinaram mais de 60 mil alunos a sair do absoluto <span className='text-[#fde936]'>zero</span> e chegar
          aos <span className='text-[#fde936]'>seis</span>, <span className='text-[#fde936]'>sete</span> e até <span className='text-[#fde936]'>oito</span> dígitos de faturamento em <span className='text-[#fde936]'>7 dias consecutivos.</span></p>
          <p>Seus alunos foram responsáveis por somar um faturamento de mais de <span className='text-[#fde936]'>
            1 bilhão
            de reais
          </span> nos últimos anos.</p>
          <p>Ambos acreditam que o <span className='text-[#fde936]'>empreendedorismo</span> tem a força necessária para
          transformar o país e, por isso, têm a missão de formar <span className='text-[#fde936]'>mil faixas-pretas</span>
          (empreendedores que faturam, anualmente, mais de R$ 2 milhões de reais no
          digital).</p>
        </div>
      </div>
    )
}