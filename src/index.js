import {mainHeader} from "./Header/mainHeader.js";
import {offersHeader} from "./Header/offersHeader.js";
import styles from "./styles/main.css";
import {offerImages, logoSvg} from "../images/imagesFolder.js"

const body = document.getElementById('body');

let header = new mainHeader({logoURL:'https://www.swiggy.com/', logoSvg:logoSvg});
let offersSpace = new offersHeader(...offerImages);

let combinedHeader = document.createElement('div');
combinedHeader.className = styles.header;

combinedHeader.append(header.get());
combinedHeader.append(offersSpace.get());

body.append(combinedHeader);
