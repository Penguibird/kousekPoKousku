import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { StaticImage } from 'gatsby-plugin-image';


const ProgramPage = () => {
    const title = 'Program slavnostního galavečera a&nbsp;koncertu pro kousek' as const;
    return (
        <Layout title="Program slavnostního galavečera a&nbsp;koncertů The&nbsp;Stringz | Nadační fond Kousek po Kousku">
            <main className="program">
                <section className="title section section-title yellow section-centered">
                    <h1 className="title title-centered" dangerouslySetInnerHTML={{ __html: title }}></h1>
                </section>
                <section className="section program section-text section-centered center text-centered">
                    <time dateTime="17:00">17:00</time>
                    {/* <p className="item">Prodej z kolekce <span className="highlighted">7. klášterního kouskování a výstavy ze šuplíku</span></p> */}
                    <p className="Vstup s VIP vstupenkou"></p>
                    <p className="item"><span className="highlighted">Komentovaná prohlídka kostela sv. Josefa a jeho zázemí</span></p>
                    <time dateTime="18:00">18:00</time>
                    <p className="item">Zahájení <span className="highlighted">slavnostního galavečera</span></p>
                    <p className="item">Příběhy, které ovlivnil darovaný kousek</p>
                    <p className="item">Zajímaví hosté a vystoupení</p>
                    <p className="item">Fulnek – město <span className="highlighted">mystické</span> historie</p>
                    <p className="item">Představení aktuálně podpořených projektů:</p>
                    <p className="item">Sociální <span className="highlighted">klinika, intervence</span> pro autismus, <span className="highlighted">Zahrada Hojnosti</span></p>
                    <p className="item">Něco končí, aby <span className="highlighted">NĚCO</span> začalo</p>
                    <time dateTime="19:00">19:00</time>
                    <p className="item"><span className="highlighted">koncert</span> popové houslistky <span className="highlighted">Lucie Klasek</span> a akustického tria <span className="highlighted">The Stringz</span></p>
                    <p className="last" style={{ marginTop: '2em' }}>Vstupenky:</p>
                    <p className="last"><a className="link" href="https://podpora.kousekpokousku.cz/vstupenky">podpora.kousekpokousku.cz/vstupenky</a></p>
                </section>
                <section className="section section-image">
                    <a href="/Program slavnostního galavečera.png">
                        <StaticImage className='img' src="../../static/Program slavnostního galavečera.png" alt='Program galavečera' layout='constrained' placeholder='blurred' />
                    </a>
                </section>
                <section className="section section-image">
                    <StaticImage className='img' src="../images/Koncert pro KOUSEK.png" layout='constrained' placeholder='blurred' alt='Nadační fond Kousek po Kousku ve spolupráci s Creative music lab uvádí Koncert pro Kousek. Tomáš Savka a The Stringz v kostele sv. Josefa ve fulneku. 17.10. 2021' />
                </section>
            </main>
        </Layout>
    )
}

export default ProgramPage
