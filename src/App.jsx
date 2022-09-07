import Dp from "./components/Dp"
import Headline from "./components/Headline"
import Contacts from "./components/Contacts"
import Me from "./components/Me"
import Footer from "./components/Footer"

export default function App() {
    return (
        <div className="card">
            <Dp />
            <div className="content">
                <Headline />
                <Contacts />
                <Me />
            </div>
            <Footer />
        </div>
    )
}