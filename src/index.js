import {mainHeader} from "./Header/mainHeader.js";
import {offersHeader} from "./Header/offersHeader.js";
import styles from "./styles/main.css";
import {offerImages, logoSvg} from "../images/imagesFolder.js"
import { allRestaurantsContainer } from "./AllRestaurants/allRestaurantsContainer.js";

const body = document.getElementById('body');

let header = new mainHeader({logoURL:'https://www.swiggy.com/', location:"ahmedabad",logoSvg:logoSvg});
let offersSpace = new offersHeader(...offerImages);

let allRestaurants = new allRestaurantsContainer();

let combinedHeader = document.createElement('div');
combinedHeader.className = styles.header;
combinedHeader.append(header.get());
combinedHeader.append(offersSpace.get());
body.append(combinedHeader);
body.append(allRestaurants.get());
