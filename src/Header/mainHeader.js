import styles from "./mainHeader.css";
import {globalOptionsLogo, locationDropDown} from "../../images/imagesFolder.js";


export class mainHeader {

    constructor (args)
    {
        this.mainHeaderTemplate= document.createElement('div');
        this.mainHeaderTemplate.className = `${styles.headerWrapper}`;
        let globalOptionsTemplate = ``;
        for (const [key, value] of Object.entries(globalOptionsLogo)) {
            
            if(key=="Offers")
            globalOptionsTemplate += `
            <div class = "${styles.globalOption}">
                <span>${value}</span>
                <span>${key}</span> 
                <span class="${styles.newTag}">NEW</span>
            </div>
            `;
            else
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
                    <span class=${styles.preciseLocation} id = "preciseLocation">Sector 42</span>
                    <span class=${styles.locationValue} id = "locationValue">Gurugram, Haryana 122002, India</span>
                    <span class="${styles.locationDropDown}">
                        ${locationDropDown}
                    </span>
                </div>
            </div>
            <div class = "${styles.globalOptionsMenu}">
                ${globalOptionsTemplate}
            </div>
        </div>
        `;

        let handleLocation = () => {
            let newArea = prompt("enter your exact area where you reside");
            let newAddress = prompt("enter your city and state name");
            newArea = newArea.length ? newArea: 'sector 42';
            newAddress = newAddress.length ? newAddress: 'Gurugram, Haryana 122002, India';
            this.mainHeaderTemplate.querySelector('#preciseLocation').innerHTML = newArea;
            this.mainHeaderTemplate.querySelector('#locationValue').innerHTML = newAddress;
        }

        this.mainHeaderTemplate.querySelector(`.${styles.userLocation}`).addEventListener('click', handleLocation, false);
    }

    get () {
        return this.mainHeaderTemplate;
    }

}
