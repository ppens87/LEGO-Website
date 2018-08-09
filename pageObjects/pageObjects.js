module.exports = {
    url: 'https://shop.lego.com/en-US/',
    elements: {
        'Account' : 'div[id="util-bar-dropdown-account"]',
        'Sign In Button' : 'button[class="legoid__login-button"]',
        'Username' : 'input[name="fieldUsername"]',
        // 'Username' : '.field-wrapper.icon.username.valid',
        'Password' : 'input[name="fieldPassword"]',
        'Log In Button' : 'button[id="buttonSubmitLogin"]',
        'Log Out Button' : 'button[class="account__logout-link"]',

        'Search Dropdown' : 'div[id="main-bar-dropdown-search"]',
        'Search' : { selector : '(//input[@id="query"])[2]', locateStrategy: 'xpath' },
        'Add to Wishlist' : 'button[class="add-to-wishlist-button"]',
        'Wish List Button' : 'a[class="util-bar__link-wishlist"]',

        'LEGOLAND' : { selector : '(//a[@data-test="expand-link-2"])[3]', locateStrategy: 'xpath' },
        'LEGOLANDLOGO' : '.dc-home__logo',
        'Annoying Banner' : '.cookie-banner__accept-button',
        'Search Field' : 'input[data-test="search-input"]',

        'Delete' : 'a[class="wishlist-item__remove"]',

        'Move to Wishlist' : 'button[class="cart-item__move-to-wishlist"]',

        'Shipping Method' : 'select[id="shipping-method-chooser-select"]',
        'Shipping Method Selection' : { selector : '(//option[@value="01"])[1]', locateStrategy: 'xpath' },

        'Zip Code' : 'input[name="postal_code"]',

        'Apply Button' : 'button[class="form-button-submit"]',

        'Checkout Button' : 'button[class="checkout-next__button"]',

        'Next Button' : { selector : '(//button[@class="checkout-next__button"])[2]', locateStrategy: 'xpath' }, 
  
        'Add to Bag' : { selector : '(//button[@class="add-to-cart-button"])[1]', locateStrategy: 'xpath' },
        'My Bag Button' : 'div[id="util-bar-dropdown-cart"]',
        'Edit/Checkout Button' : 'a[class="mini-cart__checkout-link"]',
    },

}