import styles from "./restaurantNavigation.css";

class restaurantNavigation {
    constructor (args) {
        this.NavigationTemplate = document.createElement('nav');
        this.NavigationTemplate.className = styles.restaurantNavigation;

        this.NavigationTemplate.innerHTML  = `
        <div class=${styles.navigationWrapper}>
            <div class="${styles.restaurantCount}">100 restaurants</div>
            <ul class="${styles.filtersWrapper}">
                <li class="${styles.filterOptions}">Relevance</li>
                <li class="${styles.filterOptions}">Delivery Time</li>
                <li class="${styles.filterOptions}">Rating</li>
                <li class="${styles.filterOptions}">Cost: Low to High</li>
                <li class="${styles.filterOptions}">Cost: Low to High</li>
                <li class="${styles.filterOptions}">
                    <span>Filters</span>
                    <span class="${styles.filterImageWrapper}">
                        <img src="https://as1.ftcdn.net/v2/jpg/04/02/77/08/1000_F_402770898_3yxaOfo0e8sTJ6mgebY1KaOPcwgWKSHE.jpg" alt="hi" class="${styles.filterImage}"/>
                    </span>
                </div>
            </ul>
        </div>
        `;
    }
    
    get() {
        return this.NavigationTemplate;
    }
}

export {restaurantNavigation};