import "./Newsletter.css"

const Newsletter = () => {
    return (
        <div className="newsletter">
            <h1>Get Exclusive Offer On Your Email</h1>
            <p>Subscribe To Our NewsLetter And Stay Up To Date</p>
            <div>
                <input type="email" placeholder="Your Email Id"/>
               <button>Subscribe</button>
            </div>
        </div>
    );
};

export default Newsletter;