# Removed scripts from shoptet stored here for posterity

<!-- These were only on order finish i think -->
<script>

const number = Number.parseInt(document.querySelector("#content > div > div:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(3) > td > strong").innerText);
const isJurta = /transparent/gi.test(document.querySelector("#content > div > div:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(2) > td > strong").innerText)

if (isJurta) {
		fetch(`https://us-central1-kousekpokousku.cloudfunctions.net/incrementValue?text=${number}`)
    	.then(res => res.text())
    	.then(console.log);
  	const bic = "CEKOCZPP";
    const name ="";
    const IBAN = "CZ31 0300 0000 0003 0107 5890";
    const ibanNoSpace = IBAN.replace(/ /g,"");
    const currency = "CZK";
    const amount = Number.parseInt(document.querySelector("#content > div > div:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(3) > td > strong").innerText);
    const varSymbolNode = document.querySelector("#content > div > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(4) > td");
    document.querySelector('body').classList.add("display-different-table")
    document.querySelector("#content > div > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(1) > td > strong").innerText = "301075890/0300";
    document.querySelector("#content > div > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(2) > td > strong").innerText = IBAN;
    document.querySelector("#content > div > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(3) > td > strong").innerText = bic;
		  
	
  	const callback = (mutationsList, observer) => {
			console.log(mutationsList, observer);
    	for(const mutation of mutationsList) {
            const ref = varSymbolNode.querySelector("strong").innerText;
      			console.log(ref)
            if (ref !== "") {
            	const src = `https://us-central1-kousekpokousku.cloudfunctions.net/generateQRCode?text=SPD*1.0*ACC:${ibanNoSpace}*RN:Kousek po kousku*AM:${amount}.00*CC:${currency}*X-VS:${ref}`;
    					document.querySelector("#content > div > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(5) > td > img").src = src;

    					document.querySelector("#content > div > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(5) > td > img").style.display = "block";
              observer.unobserve()
          	}
    			
    	}
    }

    const observer = new MutationObserver(callback);
    
    observer.observe(varSymbolNode, {characterData : true, subtree: true, childList: true });
        const ref = varSymbolNode.querySelector("strong").innerText;
      			console.log(ref)
            if (ref !== "") {
            	const src = `https://us-central1-kousekpokousku.cloudfunctions.net/generateQRCode?text=SPD*1.0*ACC:${ibanNoSpace}*RN:Kousek po kousku*AM:${amount}.00*CC:${currency}*X-VS:${ref}`;
    					document.querySelector("#content > div > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(5) > td > img").src = src;

    					document.querySelector("#content > div > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(5) > td > img").style.display = "block";
              observer.unobserve()
          	}

} else {
		document.querySelector('body').classList.add("display-default-table")
}

if (document.querySelector("#product-detail-form > div.p-info-wrapper > div.p-details-bottom > div > table > tbody > tr:nth-child(2) > td").innerText === "999 kg") {
    document.querySelector("#product-detail-form > div.p-info-wrapper > div.p-details-bottom > div > table > tbody > tr:nth-child(2)").style.display = "none";
}

</script>



<!-- These were on every page i think -->




<script defer>
if (document.querySelector("#product-detail-form > div.p-info-wrapper > div.p-details-bottom > div > table > tbody > tr:nth-child(2) > td")?.innerText === "999 kg") {
    document.querySelector("#product-detail-form > div.p-info-wrapper > div.p-details-bottom > div > table > tbody > tr:nth-child(2)").style.display = "none";
}
</script>

<script>

const isObjednavka1 = /podpora.kousekpokousku.cz\/objednavka\/krok-1/gi.test(window.location);
const isObjednavka2 = /podpora.kousekpokousku.cz\/objednavka\/krok-2/gi.test(window.location);
const isObjednavkaDone =  /podpora.kousekpokousku.cz\/objednavka\/dekujeme/gi.test(window.location);
const warning = document.createElement('div');
warning.setAttribute("class","box box-sm box-bg-default co-box jurta-warning");
warning.innerHTML = `
	<h4>Pozor</h4>
  <strong>Ujistěte se, že máte validní kombinaci dopravy a produktů!</strong>
  <br />přispíváte na transparentní účet číslo 301075890/0300
  Pokud přispíváte na jurtu, ujistěte se, že máte v košíku jen certifikáty a že přispíváte na transparentní účet číslo 301075890/0300.
`;
if (isObjednavka1 || isObjednavka2) {
	
	document.querySelector("#checkoutContent > div").insertAdjacentElement("beforeend", warning);
}
if (isObjednavkaDone) {
	warning.classList.add('centered');
	document.querySelector("#content > div").insertAdjacentElement("beforeend", warning);
}


</script>