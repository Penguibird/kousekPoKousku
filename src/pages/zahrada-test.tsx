import * as React from 'react';
import { Fragment, useState, useEffect } from 'react';

// @ts-ignore
import ivy from '../../assets/ivy_leaf.png';

interface ZahradaPageProps {

};

const ZahradaPage: React.FC<ZahradaPageProps> = ({ }) => {
    let leaves: JSX.Element[] = [];
    for (let i = 0; i < 10; i++) {
        leaves.push(<div className="leaf" id={"leaf-" + i}><img src={ivy} alt="Ivy leaf"  /></div>)
    }
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {

                const target = entry.target.querySelector('.leaf img');

                if (entry.isIntersecting && target) {
                    target.classList.add('leaf-animation');
                    return;
                }
                if (target) {
                    target.classList.remove('leaf-animation');
                }

            });
        });
        leaves.forEach((img, i: number) => {
            const el = document.querySelector(`#leaf-${i}`)
            if (el) observer.observe(el);

        })
    }, [])
    return <main className="ivy">
        {leaves}
        <svg width="1545" height="2380" viewBox="0 0 1545 2380" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.5 196.5C5.5 180.5 0.5 0 0.5 0C0.5 0 6.5 15 8.5 22.5C10.5 30 20.5 105.5 21 116C21.5 126.5 23.5 175 27.5 196.5C31.5 218 85.5 352.5 85.5 352.5L103 405L114 442.5C114 442.5 118.467 458 118.467 471C118.467 480.393 117 517.089 117 541.5C117 550.873 118 555 118.467 563.5C118.934 572 122 584 122 584L152.5 641C152.5 641 186.5 687 192.5 699C198.5 711 225 779.5 233.5 798C242 816.5 279 900.5 289 918C299 935.5 341.5 996 341.5 996C341.5 996 362 1022.5 375.5 1036C389 1049.5 481.5 1149 494.5 1154.5C507.5 1160 525.5 1171 525.5 1171L562 1184.5C562 1184.5 687.5 1247.5 775.5 1265.5C863.5 1283.5 901.5 1291.5 961 1302.5C1020.5 1313.5 1275.5 1438 1313.5 1473.5C1351.5 1509 1472.5 1680 1506 1776.5C1539.5 1873 1550.5 2126.5 1541 2189.5C1531.5 2252.5 1529.5 2285.5 1511.5 2348.5C1493.5 2411.5 1497 2363 1500.5 2335C1504 2307 1522 2235 1524 2196.5C1526 2158 1506 1846 1485.5 1782C1465 1718 1329 1521.5 1303 1489C1277 1456.5 1004.5 1330.5 971 1320C937.5 1309.5 865 1299.5 775.5 1279.5C686 1259.5 562 1200 562 1200C562 1200 492 1169.5 471.5 1154.5C451 1139.5 361 1039.5 352 1029C343 1018.5 274.5 924 274.5 924C274.5 924 239 849 230.5 834C222 819 206.5 775 196.5 751C186.5 727 182 710 164 685.5C146 661 125 640 114 617C103 594 99 560.5 98.5 553C98 545.5 100.5 468.5 96.5 448C92.5 427.5 69.5 368.5 69.5 368.5C69.5 368.5 11.5 212.5 8.5 196.5Z" fill="#635224" />
        </svg>

    </main>
}

export default ZahradaPage;
