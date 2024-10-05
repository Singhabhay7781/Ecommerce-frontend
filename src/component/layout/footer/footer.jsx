/* eslint-disable react/no-unescaped-entities */
import playstore from "../../../images/playstore.png";
import AppStore from "../../../images/appstore.png";
import './footer.css';

const Footer=()=>{
    return(
        
        <footer id="footer">
            <div className="leftFooter">
                <h4>DOWNLOAD OUR APP</h4>
                <p>Download app for Android and IOS mobile phone</p>
                <img src={playstore} alt="playstore"/>
                <img src={AppStore} alt="AppStore"/>
            </div>
            <div className="midFooter">
                <h1>Let's Shop</h1>
                <p>High Quality is our first priority</p>

                <p>Copyrights 2024 & copy;SejalSingh</p>
            </div>
            <div className="rightFooter">
                <h4>Follow Us</h4>
                <a href="http://instagram.com/singh_sejal.21">Instagram</a>
                <a href="http://linkedin.com/sejalSingh">Linkedin</a>
            </div>
        </footer>
        
    );
};
export default Footer;