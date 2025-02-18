import { useEffect } from "react";
import img1 from "./assets/Black White Modern Handwritten Square Studio Logo.png"

function Component1() {


    return (<>
        <div className="back-color"></div>
        <div className="container mid">
            <div className="row">
                <div className=" left-side-pic">
                    <div className="background-color"></div>
                    <img src={img1} alt="girl" className="main-pic" />
                </div>

                <div className="row info">
                    <h1 className="name">I’m Aswini Vysyaraju</h1>
                    <h1 className="interest">Photographer / Artist / Traveller</h1>
                    <p>Hi There, I'm passionate to travelling, Drawing, and photography who finds beauty in every corner of the world.
                       And My Favorite Place is ARAKU.
                    </p>
                </div>
            </div>
        </div>
        <div className="back-line"></div>

    </>);
}

export default Component1
