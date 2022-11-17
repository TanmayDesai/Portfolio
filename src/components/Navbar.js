import Typewriter from "typewriter-effect";

const Navbar = () => {

    const brand = "< Tanmay Desai />"

    return(
    <div className="py-2  px-5 md:flex-row md:py-5 flex flex-col content-center justify-between bg-neutral-900 navbar">
        <div className='text-2xl py-4 px-6 self-center md:text-2xl md:py-0 md:font-light text-white'>
        <Typewriter className="loading" options={{
    strings: ['< Tanmay Desai / >'],
    autoStart: true,
    loop: true,
  }} />
        </div>
    </div>
    )
}

export default Navbar