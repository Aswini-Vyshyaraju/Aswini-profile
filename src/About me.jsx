import profile from "./assets/profile.png"

function About() {

    return (
        <>
        <div className="background2">
            <div className="col box1 box2">
                <div className="row "><h1 className="about-me">About me
        <div className="back-line3"></div>
                    
                     </h1>
                
                </div>

                <p className="matter">I'm BCA Student Who Pursuing Degree to achieve the Dreams of my Life. Currently, Interested to Learn Some Skills which Sharpens my Ability and Sometimes I do Embroidery as a Hobbby.  </p>
            </div>

            <div className="row">
                <div className="profile">
                    <img src={profile} alt="profile-pic" className="profile-pic" />
                    <div className="about">Aswini Vysyaraju</div>
                </div>
             
            </div>
            </div>
        </>
    );

}

export default About