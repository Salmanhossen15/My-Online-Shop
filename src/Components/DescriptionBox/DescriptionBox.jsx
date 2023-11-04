import "./DescriptionBox.css"

const DescriptionBox = () => {
    return (
        <div className="description-box">
            <div className="descriptionBox-navigator">
                <div className="descriptionbox-navbox">
                    Description
                </div>
                <div className="descriptionbox-navbox fade">
                    Reviews(122)
                </div>

            </div>
            <div className="descriptionbox-description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur libero deserunt dicta. Ut inventore ex dolor, cum totam amet architecto velit sint voluptate consequuntur cupiditate, reprehenderit recusandae ipsam tenetur nisi? Impedit facilis consectetur dolorum unde, beatae repudiandae provident nemo necessitatibus esse, harum tempore sapiente voluptate ab expedita at dignissimos? Beatae!</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur totam molestias amet deserunt magnam quae accusamus optio exercitationem, incidunt nihil blanditiis similique nemo laboriosam? Voluptatum, consequuntur tempore! Architecto, asperiores excepturi?</p>
            </div>
        </div>
    );
};

export default DescriptionBox;