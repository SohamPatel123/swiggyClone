import styles from "./mainHeader.css";
import {globalOptionsLogo} from "../../images/imagesFolder.js";


export class mainHeader {

    constructor (args)
    {
        this.mainHeaderTemplate= document.createElement('div');
        this.mainHeaderTemplate.className = `${styles.headerWrapper}`;

        let globalOptionsTemplate = ``;

        for (const [key, value] of Object.entries(globalOptionsLogo)) {
            globalOptionsTemplate += `
            <div class = "${styles.globalOption}">
                <span>${value}</span>
                <span>${key}</span> 
            </div>
            `;
        }

        this.mainHeaderTemplate.innerHTML = `
        <div class="${styles.mainHeader}">
            <div class= "${styles.wrapper}">
                <a href="${args.logoURL}" class = "${styles.logo} ${styles.logoImage}" >
                    ${args.logoSvg}
                </a>
                <div class = "${styles.userLocation}">
                    <span class=${styles.preciseLocation}> Sector 42</span>
                    <span value="${args.location}" class="${styles.locationValue}">Gurugram, Haryana 122002, India</span>
                </div>
            </div>
            <div class = "${styles.globalOptionsMenu}">
                ${globalOptionsTemplate}
            </div>
        </div>
        `;
    }

    get () {
        return this.mainHeaderTemplate;
    }

}
