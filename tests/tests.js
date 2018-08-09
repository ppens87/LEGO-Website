module.exports = {
    beforeEach: browser => {
        browser.url('https://shop.lego.com/en-US/')
        browser.maximizeWindow()

    },

    after: browser => {
        browser.end()
    },

    'log in and log out check': browser => {
        let pageObjects = browser.page.pageObjects()
        browser.url('https://shop.lego.com/en-US/')
        pageObjects
            .click('@Annoying Banner')
            .click('@Account')
            .waitForElementVisible('@Sign In Button', 5000)
            .click('@Sign In Button')
        browser.pause(500)
            .keys('TestQA6')
            .keys(browser.Keys.TAB)
            .keys('DevMountain')
            .keys(browser.Keys.ENTER)
        // .window_handles(function(result){
        //     console.log(result.value)
        // })
        // .click('.check-order__status-link')
        // .pause(1000)
        // .expect.element('h2').text.to.equal('Log In')
        // browser.pause()
        // browser
        //     .useXpath()
        //     .waitForElementPresent('//div[@class="login default account-wrapper has-valueproposition"]', 5000)
        //     .useCss()
        // pageObjects
        //     .setValue('@Username', 'TestQA6')
        //     .setValue('@Password', 'DevMountain')
        //     .click('@Log In Button')
        // .click('@Account')
        pageObjects
            .waitForElementVisible('@Log Out Button', 5000)
            .click('@Log Out Button')
        browser.pause(1000)

    },

    // 'adding removing items from wishlist': browser => {
    //     let pageObjects = browser.page.pageObjects()
    //     browser.url('https://shop.lego.com/en-US/')
    //     pageObjects
    //         .click('@Account')
    //         .waitForElementVisible('@Sign In Button', 5000)
    //         .click('@Sign In Button')
    //     browser.pause(500)
    //         .keys('TestQA6')
    //         .keys(browser.Keys.TAB)
    //         .keys('DevMountain')
    //         .keys(browser.Keys.ENTER)
    //     pageObjects
    //         .waitForElementVisible('@Log Out Button', 5000)
    //         .waitForElementVisible('@Search Field', 7000)
    //         .setValue('@Search Field', 'James Bond Aston Martin db5\uE007')
    //     browser.pause(500)
    //     pageObjects
    //         .waitForElementVisible('@Add to Wishlist', 5000)
    //         .click('@Add to Wishlist')
    //     browser.pause(4000)
    //     pageObjects
    //         .click('@Wish List Button')
    //         .waitForElementVisible('@Delete', 6000)
    //         .click('@Delete')


    // },

    'redirecting to LEGOLAND website': browser => {
        let pageObjects = browser.page.pageObjects()
        browser.url('https://shop.lego.com/en-US/')
        pageObjects
            .waitForElementVisible('@LEGOLAND', 5000)
            .click('@LEGOLAND')
        browser.window_handles(function (result) {
            var handle = result.value[1]
            browser.switchWindow(handle)
        })
        pageObjects
            .expect.element('@LEGOLANDLOGO').to.be.visible.after(5000)

    },

    'Confirm the user can get to payment screen': browser => {
        let pageObjects = browser.page.pageObjects()
        browser.url('https://shop.lego.com/en-US/cart')
        pageObjects
            .click('@Account')
            .waitForElementVisible('@Sign In Button', 5000)
            .click('@Sign In Button')
        browser.pause(500)
            .keys('TestQA6')
            .keys(browser.Keys.TAB)
            .keys('DevMountain')
            .keys(browser.Keys.ENTER)
        pageObjects
            .waitForElementVisible('@Search Field', 7000)
            .setValue('@Search Field', '75192\uE007')
            .waitForElementVisible('@Add to Bag', 5000)
            .click('@Add to Bag')
        browser.pause(500)
        pageObjects
            .click('@My Bag Button')
            .waitForElementVisible('@Edit/Checkout Button', 7000)
            .click('@Edit/Checkout Button')
            .click('@Zip Code')
            .setValue('@Zip Code', '84101')
            .click('@Apply Button')
            .click('@Checkout Button')
            .click('@Next Button')
            .expect.element('.checkout-content-beta__header').to.be.visible.after(6000)

    },

    'Search by theme': browser => {
        let pageObjects = browser.page.pageObjects()
        browser.url('https://shop.lego.com/en-US/')
        pageObjects
            .click('@Search Field')
            .setValue('@Search Field', 'Harry Potter Sets\uE007')
            .expect.element('.search-filter-bar__filters').to.be.visible.after(6000)

    },

    'Move Item from Bag to Wishlist': browser => {
        let pageObjects = browser.page.pageObjects()
        browser.url('https://shop.lego.com/en-US/cart')
        // pageObjects
        //     .click('@Account')
        //     .waitForElementVisible('@Sign In Button', 5000)
        //     .click('@Sign In Button')
        // browser.pause(500)
        //     .keys('TestQA6')
        //     .keys(browser.Keys.TAB)
        //     .keys('DevMountain')
        //     .keys(browser.Keys.ENTER)
        pageObjects
            .click('@Search Field')
            .setValue('@Search Field', '75192\uE007')
            .waitForElementVisible('@Add to Bag', 3000)
            .click('@Add to Bag')
            .click('@My Bag Button')
            .waitForElementVisible('@Edit/Checkout Button', 7000)
            .click('@Edit/Checkout Button')
            .click('@Move to Wishlist')
            .click('@Wish List Button')
            .expect.element('.wishlist-header__container').to.be.visible.after(9000)

    }



}








