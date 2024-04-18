import cadeadoIcon from '../assets/images/cadeadoIcone.svg'
import estrategiaIcon from '../assets/images/estrategiaIcone.svg'
import faixaIcon from '../assets/images/faixaIcone.svg'
import hackIcon from '../assets/images/hackIcone.svg'
import faixaPretaButton from '../assets/images/faixaPretaButton.png'

export default function ContentSection () {
    return (
    <div className='flex flex-col lg:max-w-[1300px] mx-auto justify-center mt-[500px] md:mt-[350px] lg:mt-[200px] mb-[40px] lg:mb-[200px]'>
        <h1 className='text-white font-bold text-3xl px-7 md:px-0 text-center'>O QUE VOCÊ VERÁ NO DIA <span className='text-[#FDE936]'>18 DE ABRIL:</span></h1>
        <div className='mt-[80px] lg:mt-[150px] mx-auto grid gap-[50px] grid-cols-1 lg:grid-cols-2'>
            
                <div className='flex flex-col justify-center items-center gap-4 w-[350px]'>
                    <img src={cadeadoIcon} className='w-24' alt="Cadeado icone"/>
                    <p className='text-white font-normal text-center text-lg'>O segredo para se manter atualizado em um mercado que muda o tempo todo</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-4 w-[350px]'>
                    <img src={estrategiaIcon} className='w-24' alt="Cadeado icone"/>
                    <p className='text-white font-normal text-center text-lg'>As estratégias testadas e comprovadas no campo de batalha que estão gerando muito resultado no
                    digital nos últimos 6 meses</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-4 w-[350px]'>
                    <img src={faixaIcon} className='w-[180px]' alt="Cadeado icone"/>
                    <p className='text-white font-normal text-center text-lg'>Inovações que estão ao seu alcance para acelerar o seu 6em7 ou a sua faixa preta</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-4 w-[350px]'>
                    <img src={hackIcon} className='w-24' alt="Cadeado icone"/>
                    <p className='text-white font-normal text-center text-lg'>Os últimos hacks testados e comprovados no campo de batalha pelos nossos alunos Faixas Pretas.</p>
                </div>
            
        </div>
        <div className='p-4 mx-auto mt-[100px] md:w-[577px] flex flex-col'>
            <button className='bg-[#fde936] md:w-full text-black p-6 font-black mt-3
            hover:bg-black hover:text-[#fde936] transition duration-500 ease-in-out'
            >QUERO PARTICIPAR AO VIVO</button>
            <img src={faixaPretaButton} alt="faixa preta"/>    
        </div>
    </div>
  )
}