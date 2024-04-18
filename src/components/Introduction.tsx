import faixaPretaButton from '../assets/images/faixaPretaButton.png'
import calendario from '../assets/images/calendarioIcon.svg'
import imagemHeader from '../assets/images/imagemHeader.png'
import imagemHeaderMobile from '../assets/images/imagemHeaderMobile.png'

import { useState, useEffect } from 'react';

export default function Introduction () {

  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 540) {
        setIsMobile(true);
      } else if (window.innerWidth < 768) {
        setIsMobile(false);
        setIsTablet(true);
      }
      else {
        setIsMobile(false);
        setIsTablet(false);
      }
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [isMobile, isTablet]);

    return (
      <div className='lg:max-w-[1300px] mx-auto'>
        <div className={`${!isMobile && !isTablet ? 'absolute flex flex-col gap-8 md:gap-12 text-white p-6 md:p-16' 
        : isMobile ? 'absolute flex flex-col justify-center items-center gap-8 md:gap-12 text-white p-6 md:p-16' 
        : 'absolute flex flex-col justify-center items-center gap-8 md:gap-12 text-white p-6 md:p-16'}`}>
          <div className={`${!isTablet && !isMobile ? 'text-[21px] text-center md:text-start lg:text-4xl font-black' 
          : isMobile ? 'text-lg font-extrabold text-center' 
          : 'text-4xl font-extrabold text-center mt-5'}`}>
            <h1>AS INOVAÇÕES E AVANÇOS MAIS</h1>
            <h1>RECENTES DO <span className='text-[#FDE936]'>MARKETING DIGITAL</span></h1>
          </div>
          <div className={`${!isMobile && !isTablet ? 'w-[45%] font-bold lg:font-medium lg:text-3xl lg:w-[600px]' 
          : isMobile ? 'px-2 font-bold text-xl text-center mt-[300px]' 
          : 'w-[80%] font-bold text-5xl text-center mt-[500px]'}`}>
            <p>Que estão gerando <span className='text-[#FDE936]'>milhões em vendas</span> na internet, totalmente ao seu alcance para replicar</p>
          </div>
          <div className='flex gap-6 my-7 lg:my-0 justify-center md:justify-start'>
            <img src={calendario} className='w-[70px] lg:w-[80px]' alt="imagem calendário"/>
            <div className={`${!isMobile && !isTablet ? 'flex flex-col font-bold text-xl justify-center lg:text-2xl' 
            : isMobile ? 'flex flex-col font-bold justify-center' 
            : 'flex flex-col font-bold text-3xl justify-center'}`}>
              <p>Dia 18/04/23 (terça-feira)</p>
              <p>20:00h (horário de Brasília)</p>
            </div>
          </div>

        <form className='flex flex-col lg:max-w-[580px]'>
          <label className={`${!isMobile && !isTablet ? 'mb-3 text-[18px] md:text-[17px] text-center md:text-start' 
          : 'mb-3 text-[15px] text-center'}`}>
            Deixe seu nome e e-mail abaixo para acessar o curso e o certificado <span className='font-bold text-lg'>gratuitamente:</span>
          </label>
          <input placeholder='Digite seu email...' className='h-16 p-6 font-medium text-lg text-black' type="text"/>
          <button className='bg-[#fde936] text-black p-6 font-black mt-3
          hover:bg-black hover:text-[#fde936] transition duration-500 ease-in-out
          '>
            QUERO PARTICIPAR AO VIVO</button>
          <img src={faixaPretaButton} alt="faixa preta" />
        </form>

      </div>
      <div >
        {!isMobile && !isTablet ? <img src={imagemHeader} className='mx-auto mt-0' alt="Imagem irmãos Rocha"/> : <img src={imagemHeaderMobile} className='mt-[60px]' alt="Imagem irmãos Rocha"/> }
      </div>
      </div>
    )
}