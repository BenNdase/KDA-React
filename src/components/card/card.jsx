import "./card.css";
import Image from "../image/image";
import Texts from "../texts/texts";
import Button from '../btn/btn';
const Card = () => {
    return <>
        <div className="card">
            <div className="image-content">
                <Image src="https://www.journee-mondiale.com//medias/grande/images/journee/tigre.jpg" className="img-cercle" />
            </div>
            <div className="biography">
                <Texts className="title"/>
            </div>
            <div className="button">
                <Button className="btn"/>
            </div>
        </div>
    </>
}
export default Card;