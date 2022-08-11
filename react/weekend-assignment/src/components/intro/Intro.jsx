import "./intro.css"
import My from "../../components/image/My.png"


const intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="intro">Hello,my name is</h2>
                    <h1 className="name">Mohamed Rizwan</h1>
                    <div className="title">
                        <div className="title-wrapper">
                            <div className="title-item">UG Student</div>
                            <div className="title-item">Gyanmatrix intern</div>
                            <div className="title-item">Creative Thinker</div>
                            <div className="title-item">mechanical student</div>
                        </div>
                    </div>
                    <div className="description">I am at present a enginnering student,Pursuing my UG mechanical enginnering degree at Eshwar collage of engineering
                    </div>
                </div>
            </div>
            <div className="i-right">
                <div className="background"></div>
                <img src={My} alt="" className="img" />
            </div>
        </div>

    )
}

export default intro