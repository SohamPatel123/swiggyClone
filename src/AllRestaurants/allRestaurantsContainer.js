import styles from "./allRestaurantsContainer.css";
import { RestaurantDetails, starImageSVG, discountImageSVG, defaultImage } from "./RestaurantsDetails.js";

export class allRestaurantsContainer {
    constructor(args) {
        this.allRestaurantsTemplate = document.createElement('div');
        this.allRestaurantsTemplate.className = `${styles.allRestaurantsContainer}`;

        let validate = (validateStr, defaultVal) => {
            let validStr = validateStr.length > 0 ? validateStr: defaultVal;
            return validStr;
        }

        let vas = `${styles.dontDisplay}`;

        let validatingPromotion = (i, cardIndex) =>{
            if(validate(RestaurantDetails[i+cardIndex].RestaurantPromotionTag,'').length >0)
            {
                let promotionStrText = `
                <div class="${styles.RestaurantPromotionTag}">${RestaurantDetails[i+cardIndex].RestaurantPromotionTag}</div>
                <span class="${styles.RestaurantPromotionBanner}"></span>
                `;
                return promotionStrText;
            }
            return `<div class="${styles.dontDisplay}"></div>`;
        }
        let cardIndex = 0, outerString=``;
        for(let i =0; i<RestaurantDetails.length;i+=4)
        {
            outerString += `<div class=${styles.outerCont}>`;
            let innerString = ``;
            while(cardIndex < 4)
            {
                innerString += `<div class="${styles.Card}">
                    <img class= ${styles.RestaurantCardImage} src="${validate(RestaurantDetails[i+cardIndex].RestaurantImageSrc, defaultImage)}" alt="hi" />
                    <div class="${styles.RestaurantName}">${validate(RestaurantDetails[i+cardIndex].RestaurantName,'Restaurant Name')}</div>
                    <div class="${styles.RestaurantDishes}">${validate(RestaurantDetails[i+cardIndex].RestaurantDishes,'No dishes')}</div>
                    <div class="${styles.InnerWrapper}">
                        <div class="${styles.ratingWrapper}">
                            ${starImageSVG}
                            <div class="${styles.RestaurantRating}">
                            ${validate(RestaurantDetails[i+cardIndex].RestaurantRating,'0.0')}
                            </div>
                        </div>
                        <span>•</span>
                        <div class="${styles.RestaurantTime}">${validate(RestaurantDetails[i+cardIndex].RestaurantTime,'10 MINS')}</div>
                        <span>•</span>
                        <div class="${styles.RestaurantServingSize}">${validate(RestaurantDetails[i+cardIndex].RestaurantServingSize,'₹500 FOR TWO')}</div>
                    </div>
                    ${validatingPromotion(i,cardIndex)}
                    <div class="${styles.RestaurantOffers}">
                        ${discountImageSVG}
                        <div class="${styles.offerSyntax}">${validate(RestaurantDetails[i+cardIndex].RestaurantOffers,'50% Off | Use WELCOME50')}</div>                    
                    </div>
                    <div class="${styles.quickView}">QUICK VIEW</div>
                </div>`;
                cardIndex++;
            }
            outerString += innerString + `</div>`;
            cardIndex=0;

        }

        this.allRestaurantsTemplate.innerHTML = `
        <div class=${styles.RestaurantWrapper}>
            ${outerString}
        </div>
        `;

    }
    
    get() {
        return this.allRestaurantsTemplate;
    }
}