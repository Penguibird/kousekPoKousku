import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const ONadaciPage = () => {
    return (
        <Layout>
            <main className="o-nadaci">
                <section className="hero">
                    <h1 className="lone-title hero-title">O nadaci</h1>
                </section>

                <section className="section-text section mise">
                    <h2 className="title">Mise</h2>
                    <p className="text">Věříme, že čemu je věnována pozornost, to se děje. Naše pozornost míří k podpoře těch, kterým mnohdy chybí jen malý kousek k cíli. Snaží se, kousek po kousku postupují po cestě za svým snem, někteří i přes nesnáze a zkoušky osudu. Podpora v pravou chvíli, další kousek, jim přinese pocit naplnění, spravedlnosti a štěstí. Radost je pak cennější a společná.</p>
                    <p className="text">Svým příběhem, často aniž by se o to snažili, motivují a inspirují další.  Jsou důkazem, že být tvůrcem je správná cesta. Že energie vložená do tvořivosti se vrací. </p>
                </section>

                <section className="section-text section vize">
                    <h2 className="title">VIZE</h2>

                    {/* These paragrphs were bold */}
                    <p className="text">Kousek po kousku se dají zvládnout velké věci. Dokazuje to i 10 let fungování Nadačního fondu Kousek po kousku. Jde o rodinný nadační fond, rodinné strojírenské firmy. Za období 10 let rozdělil NF mezi více než 110 projektů přes 3 miliony korun. </p>
                    <p className="text">Posláním Nadačního fondu Kousek po kousku je současně vyhlašovat a řídit granty, zapojit další dárce a filantropy, budovat a udržovat vlastní projekt Zahrada Hojnosti a připravovat další její navazující fáze. </p>

                    <p className="text">
                        Záměrem NF KpK je představit ostatním firmám z Moravskoslezského kraje výsledky své práce a inspirovat je k vlastním filantropickým a dárcovským počinům. Podpořit je v myšlence, aby se prostředky vytvořené zde v regionu, znovu vrátily do místních projektů.
                    </p>
                    <p className="text">Nadační fond Kousek po kousku nabízí na poli filantropie a dárcovství spolupráci, poskytuje zkušenosti, svou správu a v případě zájmu i možnost spolurozhodovat při výběru některých přihlášených projektů. </p>
                    <p className="text">Mimo granty umožňuje i účast na vlastním, unikátním díle, kterým je Zahrada Hojnosti ve Fulneku.  Jde o dlouhodobý projekt, který má za sebou několik let příprav a první etapu výsevu a výsadby datovanou na jaře roku 2021.  Na pozemku Nadačního fondu Kousek po kousku o rozloze 16 000 m2 se postupně rodí výjimečné místo pro tělo, mysl a duši, harmonizační a inspirativní prostor pro psychickou i fyzickou relaxaci.  Zázemí zahrady umožní zapojení do dobrovolnických projektů, sociální a mezigenerační stmelování, edukační přesah pro všechny věkové skupiny i spoluúčast na výjimečném ekonomickém procesu. Prostřednictvím samosběrů květin, bylin a plodů jedlé zahrady představí totiž NF naprosto unikátní způsob hospodaření pro dosažení soběstačnosti. </p>
                </section>

                <section className="section-text section poslani">
                    <h2 className="title">POSLÁNÍ</h2>
                    <ul className="list">
                        <li>Konkrétními skutky dělat život lepší.</li>
                        <li>Pomáhat těm, ke kterým nebyl osud milostivý.</li>
                        <li>Podporovat tvořivé a aktivní bytosti na jejich cestě.</li>
                        <li>Šířit myšlenky udržitelnosti a soběstačnosti.</li>
                        <li>Připomínat, že nezištná pomoc patří k životu.</li>
                        <li>Inspirovat k dárcovství a filantropickým aktivitám.</li>
                        <li>Pokoušet se o změny ve společnosti vlastními, byť malými, činy.</li>
                        <li>Vytvářet hodnoty, které přetrvají staletí pro další generace.</li>
                        <li>Být v souladu s přírodou, šetři ji, pečovat o ni a být příkladem pro ostatní</li>
                        <li>Následovat odkaz J. Á. Komenského, zejména podporovat téma Škola hrou</li>
                        <li>Podporovat popularizaci historických památek Fulneku i za hranicemi regionu</li>
                    </ul>
                </section>
            </main>
        </Layout>
    )
}

export default ONadaciPage
