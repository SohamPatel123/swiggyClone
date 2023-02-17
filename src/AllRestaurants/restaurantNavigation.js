import styles from "./restaurantNavigation.css";

class restaurantNavigation {
    constructor (args) {
        this.NavigationTemplate = document.createElement('div');
        this.NavigationTemplate.className = styles.restaurantNavigation;

        this.NavigationTemplate.innerHTML  = `
        <div class=${styles.navigationWrapper}>
            <div class="${styles.restaurantCount}">100 restaurants</div>
            <div class="${styles.filtersWrapper}">
                <div class="${styles.filterOptions}">Relevance</div>
                <div class="${styles.filterOptions}">Delivery Time</div>
                <div class="${styles.filterOptions}">Rating</div>
                <div class="${styles.filterOptions}">Cost: Low to High</div>
                <div class="${styles.filterOptions}">Cost: Low to High</div>
                <div class="${styles.filterOptions}">
                    <span>Filters</span>
                    <span class="${styles.filterImageWrapper}">
                        <img src="https://as1.ftcdn.net/v2/jpg/04/02/77/08/1000_F_402770898_3yxaOfo0e8sTJ6mgebY1KaOPcwgWKSHE.jpg" alt="hi" class="${styles.filterImage}"/>
                    </span>
                </div>
            </div>
        </div>
        `;
    }
    
    get() {
        return this.NavigationTemplate;
    }
}

export {restaurantNavigation};