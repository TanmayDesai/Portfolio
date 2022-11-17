import Typewriter from "typewriter-effect";

const Navbar = () => {

    const brand = "< Tanmay Desai />"

    return(
    <div className="sticky top-0 py-2  px-5 md:flex-row md:py-5 flex flex-col content-center justify-between bg-neutral-900 navbar">
        <div className='brand text-2xl font-light py-4 px-6 self-center md:text-2xl md:py-0 md:font-light text-white'>
        <Typewriter options={{
    strings: [brand],
    autoStart: true,
    loop: true,
  }} />
        </div>
    </div>
    )
}

export default Navbar