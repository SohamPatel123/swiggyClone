import styles from "./offersHeader.css";
import rightArrowSrc from "/images/rightArrowNav.png";

export class offersHeader {

    constructor (...args)
    {
        let val = [...args];
        
        let offersCards =``;
        for(let index = 0; index != val.length ;index++)
        {
            offersCards += `<span class="${styles.cards}">
                <img src = "${val[index]}" alt="offer number ${index}" width="260px" height="260px"/>
            </span>`;
        }

        this.offersHeaderTemplate = document.createElement('div');
        this.offersHeaderTemplate.className = styles.offerSpace;
        this.offersHeaderTemplate.innerHTML = `
            <div class="${styles.buttonWrapper}">
            <div class = "${styles.offerHeader}">
                <div class="${styles.offerWrapper}" id="offerWrapper">
                        ${offersCards}
                </div>
            </div>
            <button class = "${styles.rightArrowKey}" id="rightScroll">
                <img class = "${styles.rightArrowKeyImage}" src = "${rightArrowSrc}" alt="rightScroll" id="rightScrollImage"/>
            </button>
            <button class = "${styles.leftArrowKey}" id="leftScroll">
                <img class = "${styles.leftArrowKeyImage}" src = "${rightArrowSrc}" id="leftScrollImage" alt="leftScroll"/>
            </button>
            </div>
        `;

        let scrollValue = 0, offset=310;
        let leftScrollHandler = () => {
            let offerWrapper = this.offersHeaderTemplate.querySelector('#offerWrapper');
            console.log(offerWrapper.scrollLeft)
            scrollValue += offset;
            scrollValue = Math.min(scrollValue, 0)
            offerWrapper.style.marginLeft = scrollValue +'px';
            console.log("scroll value",scrollValue);
            this.offersHeaderTemplate.querySelector("#leftScroll").style.display = scrollValue<0 ? 'block':'none';
            this.offersHeaderTemplate.querySelector("#leftScrollImage").style.display = scrollValue<0 ? 'block':'none';
            this.offersHeaderTemplate.querySelector("#rightScroll").style.display = scrollValue > (-offset * (val.length - 3)) ? 'block':'none';
            this.offersHeaderTemplate.querySelector("#rightScrollImage").style.display = scrollValue > (-offset * (val.length - 3)) ? 'block':'none';
        };

        let rightScrollHandler = () => {
            let offerWrapper = this.offersHeaderTemplate.querySelector('#offerWrapper');
            console.log(offerWrapper.scrollLeft)
            scrollValue -= offset;
            scrollValue = Math.max(scrollValue,-offset * (val.length - 1));
            offerWrapper.style.marginLeft = scrollValue +'px';
            this.offersHeaderTemplate.querySelector("#leftScroll").style.display = scrollValue<0 ? 'block':'none';
            this.offersHeaderTemplate.querySelector("#leftScrollImage").style.display = scrollValue<0 ? 'block':'none';
            this.offersHeaderTemplate.querySelector("#rightScroll").style.display = scrollValue > (-offset * (val.length - 3)) ? 'block':'none';
            this.offersHeaderTemplate.querySelector("#rightScrollImage").style.display = scrollValue > (-offset * (val.length - 3)) ? 'block':'none';
            console.log(scrollValue);
        };

        this.offersHeaderTemplate.querySelector('#rightScroll').addEventListener('click', rightScrollHandler);
        this.offersHeaderTemplate.querySelector('#leftScroll').addEventListener('click', leftScrollHandler);
        
    }

    get () {
        return this.offersHeaderTemplate;
    }

}
