import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const CounterInputPage = () => {

    const [currentCounter, setcurrentCounter] = React.useState("Nacitam");
    React.useEffect(() => {
        fetch("https://us-central1-kousekpokousku.cloudfunctions.net/readValue")
            .then(res => res.text())
            .then(res => {
                setcurrentCounter(res);
            })
    }, []);

    const [text, setText] = React.useState("");
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setText(e.target.value);
    }
    const update = () => {
        setcurrentCounter("Nahravam")
        fetch(`https://us-central1-kousekpokousku.cloudfunctions.net/setValue?text=${text}`)
            .then(res => res.text())
            .then(res => {
                setResponse(res);
                setcurrentCounter(text)
            })
    }
    const [response, setResponse] = React.useState("")
    return (
        <Layout title="404 - Stránka nenalezena | Nadační fond Kousek po Kousku" >
            <div style={{ margin: '10em', marginBottom: "2em" }}>
                <h1>ADMIN - zmena pocitadla</h1>
                <p>{currentCounter}</p>
                <input type="text" value={text} onChange={handleChange} />
                <button className="button" onClick={update}>Nahrat novou hodnotu</button>
                <p>Odpoved serveru: {response}</p>
            </div>
        </Layout>
    )
}

export default CounterInputPage
