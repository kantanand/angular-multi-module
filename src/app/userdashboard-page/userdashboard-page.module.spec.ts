import { UserdashboardPageModule } from './userdashboard-page.module';

describe('UserdashboardPageModule', () => {
    let UserdashboardPageModule: UserdashboardPageModule;

    beforeEach(() => {
        UserdashboardPageModule = new UserdashboardPageModule();
    });

    it('should create an instance', () => {
        expect(UserdashboardPageModule).toBeTruthy();
    });
});
