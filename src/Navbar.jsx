function Navbar(){

 useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "google-site-verification";
    meta.content = "3y3MmdncIcM91MHz9MpTX7-jCfKqhG6tvsw-NHeO8w8";
    document.head.appendChild(meta);

    return () => {
      document.head.removeChild(meta);
    };
        
    }, []);
    
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="left-navbar">
                    <h1 className="logo">AV</h1>

                    <ul className="">
                        <li> <a href="#">Home</a> </li>
                        <li> <a href="/Aswini-profile/gallery.html">Gallery</a> </li>
                        <li> <a href="https://www.instagram.com/_aswini_vysyaraju_/" target="_blank">Contact</a> </li>

                    </ul>
                </div>
            </div>
        </div>
        </>
    );
}

export default Navbar
