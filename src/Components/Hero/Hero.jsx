import "./Hero.css"
import hand_Icon from "../Assets/hand_icon.png"
import arrow_icon from "../Assets/arrow.png"
import hero_img from "../Assets/hero_image.png"


const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-left">
                <h2>NEW ARRIVAL ONLY</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>New</p>
                        <img src={hand_Icon} alt="" />

                    </div>
                    <p>collections</p>
                    <p>for everyone</p>
                </div>
                <div className="hero-latest-button">
                    <div>Letest Collection</div>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_img} alt="" />
            </div>
        </div>
    );
};

export default Hero;