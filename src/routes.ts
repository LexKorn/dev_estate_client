import {COMPANY_ROUTE, MAIN_ROUTE, MORTGAGE_ROUTE} from './utils/consts';
import {CompanyPage, MainPage, MortgagePage} from './pages';

export const routes = [
    {
        path: COMPANY_ROUTE,
        Component: CompanyPage
    },
    {
        path: MAIN_ROUTE,
        Component: MainPage
    },
    {
        path: MORTGAGE_ROUTE,
        Component: MortgagePage
    },
];