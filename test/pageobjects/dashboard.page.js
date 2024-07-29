class DashboardPage {
    get pageHeading() { return $('.title'); }

    async isOpen() {
        return this.pageHeading.isDisplayed();
    }
}

module.exports = new DashboardPage();
