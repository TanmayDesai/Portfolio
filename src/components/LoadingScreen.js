import Typewriter from "typewriter-effect";
import '../App.css'

const LoadingScreen = () => {
    return (
        <div className="loading">
        <Typewriter className="loading" options={{
    strings: ['L O A D I N G . . .'],
    autoStart: true,
    loop: true,
  }} />
    </div>
    )
}

export default LoadingScreen