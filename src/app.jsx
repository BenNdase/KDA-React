import "./css/app.css"
import Card from "./components/card/card";
const App = () => {
    return <>
        <div className="contact-list">
            <h1 className="title">Liste contact</h1>
            <Card className="card"/>
            <Card className="card"/>
        </div>
    </>
}
export default App;