import * as React from 'react';
//import {Fragment, useState, useEffect} from 'react';

interface CounterProps extends Partial<React.PropsWithChildren<React.ReactHTMLElement<HTMLDivElement>>> {
    green?: boolean
};

const Counter: React.FC<CounterProps> = ({ children, green = true, ...props }) => {

    const approxeq = (v1: number, v2: number): boolean => {
        const epsilon = 0.001;

        return Math.abs(v1 - v2) < epsilon;
    };

    const animateValue = (obj: Element | null, start: number, end: number, duration: number, decimal: number = 0): void => {
        if (window && obj) {
            const stepperValueBoundary = decimal === 0
                ? 1
                : 1 / (decimal * 10);
            const equal = decimal === 0
                ? (a: number, b: number) => a === b
                : approxeq;
            let startTimestamp: number | null = null;
            const step = (timestamp: number) => {
                if (!startTimestamp) startTimestamp = timestamp;

                // Calculate how far along in the animation we are
                const progress = Math.min((timestamp - startTimestamp) / (duration), 1);

                // let t = (timestamp - startTimestamp);
                // let c = ;
                // let d = duration;
                // let b = start;

                // t = progress;

                // let val =  


                // From that calculate what number to show
                obj.innerHTML = Math.round((progress * (end - start) + start)).toLocaleString("cs-CZ");
                // obj.innerHTML = (-(end - start) * progress * (progress - 2) + start).toFixed(decimal).toString();

                // If the animation isnt finished, queue up next animation
                // * uses approxeq to deal with floating points
                if (!equal(progress, 1)) {
                    window.requestAnimationFrame(step);
                }
            };
            // Kick off the animation
            window.requestAnimationFrame(step);
        }
    }

    const startValue = 0;
    const animDuration = 1000;
    React.useEffect(() => {
        fetch("https://us-central1-kousekpokousku.cloudfunctions.net/readValue")
            .then(res => res.text())
            .then(text => {
                const number = Number.parseInt(text);
                console.log("animating number counter to value", number)
                console.log("Na jurtu vybrano", number)
                const observe = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            animateValue(document.getElementById('JurtaNumber'), startValue ?? 0, number, animDuration);
                        }
                    })
                }, {});

                const target = document.querySelector('#counter');
                if (target) observe.observe(target);
            })
    }, [])

    return <div id="counter" className={"counter " + (green ? " green" : " red")} {...props}>
        <h2 className={green ? "green" : ""}>Už jsme vybrali</h2>
        <p className="number"><span className="" id="JurtaNumber">10 000</span></p>
        {/* <p style={{ fontWeight: 700 }}> z cílových 300 000 Kč</p> */}

    </div>
}

export default Counter;
