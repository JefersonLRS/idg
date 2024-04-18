export default function Footer () {
    return (
        <div className="bg-gradient-to-t from-black to-transparent">
        <div className='text-white lg:max-w-[1300px] w-full opacity-80 mx-auto mt-20 md:mt-0 py-10 lg:items-center lg:justify-around lg:flex'>
          <div className='lg:flex lg:gap-2 text-center mb-7 lg:mb-0'>
            <p>CNPJ: 10332345/0001-04,</p>
            <p>Ignição Digital Tecnologia da Inormação Ltda.</p>
          </div>
          <div className='flex flex-col pb-5 lg:flex-row mt-2 gap-3 items-center justify-center md:gap-10 no-underline'>
            <a className='hover:opacity-70' target='_blank' href="https://oplano6em7.com.br/termos-de-uso/?_gl=1*r8qvkk*_ga*MjMyOTMzODU0LjE3MTMyODU5MTI.*_ga_JVSNGXCF32*MTcxMzQwMzIyMy43LjEuMTcxMzQwMzI3Mi4xMS4wLjA.">Termos de uso</a>
            <a className='hover:opacity-70' target='_blank' href="https://oplano6em7.com.br/politica-privacidade/?_gl=1*ts5hvy*_ga*MjMyOTMzODU0LjE3MTMyODU5MTI.*_ga_JVSNGXCF32*MTcxMzQwMzIyMy43LjAuMTcxMzQwMzIzMC41My4wLjA.">Políticas de privacidade</a>
            <a className='hover:opacity-70' href="#">Contato</a>
          </div>
        </div>
      </div>
    )
}