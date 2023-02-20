import {mainHeader} from "./Header/mainHeader.js";
import {offersHeader} from "./Header/offersHeader.js";
import styles from "./styles/main.css";
import {offerImages, logoSvg} from "../images/imagesFolder.js"
import {allRestaurantsContainer} from "./AllRestaurants/allRestaurantsContainer.js";
import {restaurantNavigation} from "./AllRestaurants/restaurantNavigation.js";
import{mainFooter} from './Footer/mainFooter.js';
import { RestaurantDetails } from "./AllRestaurants/RestaurantsDetails.js";

const body = document.getElementById('body');

// favicon for Swiggy Clone
const head = document.getElementById('head');
head.innerHTML +=`<link rel="icon" type="image/x-icon" href="https://cdn.worldvectorlogo.com/logos/swiggy-1.svg">`;


let mixin = {
    sayHi(event) {
        console.log(event.target.id, mixin);
        let defaultData = new allRestaurantsContainer(RestaurantDetails);
        switch(+event.target.id)
        {
            case 0:
                console.log("case0");
                allRestaurants.reallocate(["first", "choice"]);
                break;
            case 1:
                console.log("case1");
                allRestaurants.reallocate(["hi","hello"]);
                break;
            default:
                console.log("hi", allRestaurants.allRestaurantsTemplate, defaultData);
                allRestaurants.allRestaurantsTemplate.innerHTML = defaultData.get().innerHTML;
                break;
        }
    },
    reallocate(...args)
    {
        let str = ``;
        for(let i = 0 ;i<args.length;i++)
        str += `<div>${args[i]}</div>`;
        this.allRestaurantsTemplate.innerHTML = str;
    }
};
    
Object.assign(offersHeader.prototype, mixin);

Object.assign(allRestaurantsContainer.prototype, mixin);


let header = new mainHeader({logoURL:'https://www.swiggy.com/',logoSvg:logoSvg});
let offersSpace = new offersHeader(...offerImages);
let combinedHeader = document.createElement('header');
combinedHeader.className = styles.header;
combinedHeader.append(header.get());
combinedHeader.append(offersSpace.get());
body.append(combinedHeader);


let RestaurantHeader = new restaurantNavigation();
let allRestaurants = new allRestaurantsContainer(RestaurantDetails);
let restaurantsFooter = new mainFooter();
let combinedBody = document.createElement('div');
combinedBody.append(RestaurantHeader.get());
combinedBody.append(allRestaurants.get());
combinedBody.append(restaurantsFooter.get());
body.append(combinedBody);
