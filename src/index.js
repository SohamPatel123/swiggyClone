import {mainHeader} from "./Header/mainHeader.js";
import {offersHeader} from "./Header/offersHeader.js";
import styles from "./styles/main.css";
import {offerImages, logoSvg} from "../images/imagesFolder.js"
import {allRestaurantsContainer} from "./AllRestaurants/allRestaurantsContainer.js";
import {restaurantNavigation} from "./AllRestaurants/restaurantNavigation.js";
import{mainFooter} from './Footer/mainFooter.js';

const body = document.getElementById('body');

// favicon for Swiggy Clone
const head = document.getElementById('head');
head.innerHTML +=`<link rel="icon" type="image/x-icon" href="https://cdn.worldvectorlogo.com/logos/swiggy-1.svg">`;

let header = new mainHeader({logoURL:'https://www.swiggy.com/',logoSvg:logoSvg});
let offersSpace = new offersHeader(...offerImages);
let combinedHeader = document.createElement('header');
combinedHeader.className = styles.header;
combinedHeader.append(header.get());
combinedHeader.append(offersSpace.get());
body.append(combinedHeader);



let RestaurantHeader = new restaurantNavigation();
let allRestaurants = new allRestaurantsContainer();
let restaurantsFooter = new mainFooter();
let combinedBody = document.createElement('div');
combinedBody.append(RestaurantHeader.get());
combinedBody.append(allRestaurants.get());
combinedBody.append(restaurantsFooter.get());
body.append(combinedBody);
