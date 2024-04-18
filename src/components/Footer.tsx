export default function Footer () {
    return (
        <div className='h-[300px] md:h-[150px] bg-gradient-to-t from-black to-transparent
        flex items-center text-center md:items-end md:flex-row'>
        <div className='text-white md:w-[1300px] w-full opacity-80 mx-auto md:py-10 md:items-center md:justify-around md:flex'>
          <div className='md:flex md:gap-2'>
            <p>CNPJ: 10332345/0001-04,</p>
            <p>Ignição Digital Tecnologia da Inormação Ltda.</p>
          </div>
          <div className='flex flex-col md:flex-row mt-2 gap-3 md:items-center md:justify-center md:gap-10 no-underline'>
            <a className='hover:opacity-70' target='_blank' href="https://oplano6em7.com.br/termos-de-uso/?_gl=1*r8qvkk*_ga*MjMyOTMzODU0LjE3MTMyODU5MTI.*_ga_JVSNGXCF32*MTcxMzQwMzIyMy43LjEuMTcxMzQwMzI3Mi4xMS4wLjA.">Termos de uso</a>
            <a className='hover:opacity-70' target='_blank' href="https://oplano6em7.com.br/politica-privacidade/?_gl=1*ts5hvy*_ga*MjMyOTMzODU0LjE3MTMyODU5MTI.*_ga_JVSNGXCF32*MTcxMzQwMzIyMy43LjAuMTcxMzQwMzIzMC41My4wLjA.">Políticas de privacidade</a>
            <a className='hover:opacity-70' href="#">Contato</a>
          </div>
        </div>
      </div>
    )
}