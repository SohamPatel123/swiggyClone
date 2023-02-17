import styles from "./mainFooter.css";

class mainFooter {

    constructor (args) {
        this.mainFooterTemplate = document.createElement('div');
        this.mainFooterTemplate.className = styles.mainFooterTemplate;

        this.mainFooterTemplate.innerHTML = `
        <div class=${styles.footerWrapper}>
            <div class=${styles.companySupports}>
                <div>
                    <div>Company</div>
                    <div>About us</div>
                    <div>Team</div>
                    <div>Careers</div>
                    <div>Swiggy Blog</div>
                    <div>Bug Bounty</div>
                    <div>Swiggy One</div>
                    <div>Swiggy Corporate</div>
                    <div>Swiggy Instamart</div>
                    <div>Swiggy Genie</div>
                </div>
                <div>
                    <div>Contact</div>
                    <div>Email: swiggyclonesupport@swiggy.com</div>
                    <div>Instagram: _swiggy_clone_</div>
                    <div>Helpline no: (+91)9876543210</div>
                </div>
                <div>
                    <div>Legal</div>
                    <div>No nothing is legal here</div>
                    <div>Cloned from www.swiggy.com</div>
                </div>
                <div>
                    <div>Social media handles</div>
                    <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2880px-Google_Play_Store_badge_EN.svg.png?20220907104002" alt="download options image" class= ${styles.downloadOptions}>
                    <img src = "https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="image for app store" class="${styles.downloadOptions}" />
                </div>
            </div>

            <div class=${styles.availableLocations}>
            HIII
            </div>
        </div>
        `;
    }

    get() {
        return this.mainFooterTemplate;
    }
}


export {mainFooter};