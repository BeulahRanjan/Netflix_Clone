import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return(
        <div
        className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-white"
        style={{backgroundImage: `url('/404.png')`}}>
            <header className='absolute top-0 left-0 p-4 bg-black w-full'>
                <Link to={"/"}>
                <img src="/netflix-logo.png" alt="Netflix" className="h-8" />
                </Link>
            </header>
            
        </div>
    )
}

export default NotFoundPage;
