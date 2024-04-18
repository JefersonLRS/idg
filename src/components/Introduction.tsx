import faixaPretaButton from '../assets/images/faixaPretaButton.png'
import calendario from '../assets/images/calendarioIcon.svg'
import imagemHeader from '../assets/images/imagemHeader.png'

export default function Introduction () {
    return (
      <div className='lg:max-w-[1300px] mx-auto'>
        <div className='absolute flex flex-col gap-8 md:gap-12 text-white p-6 md:p-16'>
          <div className='text-[21px] text-center md:text-start lg:text-4xl font-black'>
            <h1>AS INOVAÇÕES E AVANÇOS MAIS</h1>
            <h1>RECENTES DO <span className='text-[#FDE936]'>MARKETING DIGITAL</span></h1>
          </div>
        <div className='w-[45%] font-bold lg:font-medium lg:text-3xl lg:w-[600px]'>
          <p>Que estão gerando <span className='text-[#FDE936]'>milhões em vendas</span> na internet, totalmente ao seu alcance para replicar</p>
        </div>
        <div className='flex gap-6 my-7 lg:my-0 justify-center md:justify-start'>
          <img src={calendario} className='w-[70px] lg:w-[80px]' alt="imagem calendário"/>
          <div className='flex flex-col font-bold text-xl justify-center lg:text-2xl'>
            <p>Dia 18/04/23 (terça-feira)</p>
            <p>20:00h (horário de Brasília)</p>
          </div>
        </div>

        <form className='flex flex-col lg:max-w-[580px]'>
          <label className='mb-3 text-[18px] md:text-[17px] text-center md:text-start'>Deixe seu nome e e-mail abaixo para acessar o curso e o certificado <span className='font-bold text-lg'>gratuitamente:</span></label>
          <input placeholder='Digite seu email...' className='h-16 p-6 font-medium text-lg text-black' type="text"/>
          <button className='bg-[#fde936] text-black p-6 font-black mt-3
          hover:bg-black hover:text-[#fde936] transition duration-500 ease-in-out
          '>
            QUERO PARTICIPAR AO VIVO</button>
          <img src={faixaPretaButton} alt="faixa preta" />
        </form>

      </div>
      <div >
        <img className='mx-auto md:mt-0 mt-[60px]' src={imagemHeader}/>
      </div>
      </div>
    )
}