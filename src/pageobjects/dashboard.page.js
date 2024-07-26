class DashboardPage {
    get pageTitle() { return $('.title'); }

    isOpen() {
        return this.pageTitle.getText() === 'Swag Labs';
    }
}

module.exports = new DashboardPage();
