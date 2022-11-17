import '../App.css'


const Page = () => {
    return (
    <>
        <div className="page bg-slate-300 flex flex-row flex-wrap p-3 justify-center">
        <div className='mx-5 text-3xl my-3 font-light w-full'>Tech Skills:</div>
        <div className="Box"><img className='python' src='https://logos-world.net/wp-content/uploads/2021/10/Python-Symbol.png' alt='Python' /></div>
        <div className="Box"><img className='python' src='https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png' alt='Java' /></div>
        <div className="Box p-10"><img src='https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png' alt='HTML' /></div>
        <div className="Box"><img src='https://www.iconbolt.com/iconsets/social-media-logos/css3-html-logo-social-social-media.svg' alt='CSS' /></div>
        <div className="Box"><img src='https://logodownload.org/wp-content/uploads/2022/04/javascript-logo-4.png' alt='JavaScript' /></div>
        <div className="Box mb-3"><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' alt='ReactJS' /></div> 
        </div>
    </>
    )
}

export default Page