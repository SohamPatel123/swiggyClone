import styles from "./offersHeader.css";

export class offersHeader {

    constructor (...args)
    {
        let val = [...args], offersCards =``;
        for(let index = 0; index != val.length ;index++)
        {
            offersCards += `<span class="${styles.cards}" id="cards">
                                <img src = "${val[index]}" id = "${index}" alt="offer number ${index}" width="260px" height="260px"/>
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
                <img class = "${styles.rightArrowKeyImage}" src = "https://img.icons8.com/ios-filled/2x/long-arrow-right.png" alt="rightScroll" id="rightScrollImage"/>
            </button>
            <button class = "${styles.leftArrowKey}" id="leftScroll">
                <img class = "${styles.leftArrowKeyImage}" src = "https://img.icons8.com/ios-filled/2x/long-arrow-right.png" id="leftScrollImage" alt="leftScroll"/>
            </button>
            </div>
        `;

        let scrollValue = 0, offset=310;
        let handleCarouselScroll = (event) => {
            let offerWrapper = this.offersHeaderTemplate.querySelector('#offerWrapper');
            if(event.target.id=="rightScroll")
            {
                scrollValue -= offset;
                scrollValue = Math.max(scrollValue,-offset * (val.length - 1));
            }
            else 
            {
                scrollValue += offset;
                scrollValue = Math.min(scrollValue, 0);
            }
            offerWrapper.style.marginLeft = scrollValue +'px';
            this.offersHeaderTemplate.querySelector("#leftScroll").style.display = scrollValue<0 ? 'block':'none';
            this.offersHeaderTemplate.querySelector("#leftScrollImage").style.display = scrollValue<0 ? 'block':'none';
            this.offersHeaderTemplate.querySelector("#rightScroll").style.display = scrollValue > (-offset * (val.length - 3)) ? 'block':'none';
            this.offersHeaderTemplate.querySelector("#rightScrollImage").style.display = scrollValue > (-offset * (val.length - 3)) ? 'block':'none';
        }

        this.offersHeaderTemplate.querySelector(`.${styles.offerWrapper}`).addEventListener('dblclick', this.sayHi);
        this.offersHeaderTemplate.querySelector('#rightScroll').addEventListener('click', handleCarouselScroll);
        this.offersHeaderTemplate.querySelector('#leftScroll').addEventListener('click', handleCarouselScroll);
    }

    get () {
        return this.offersHeaderTemplate;
    }

}
