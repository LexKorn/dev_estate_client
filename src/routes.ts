import { FAQ_ROUTE, COMPANY_ROUTE, MAIN_ROUTE, MORTGAGE_ROUTE, NEWS_ROUTE } from './utils/consts';
import { FaqPage, CompanyPage, MainPage, MortgagePage, NewsPage } from './pages';

export const routes = [
    {
        path: FAQ_ROUTE,
        Component: FaqPage
    },
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
    {
        path: NEWS_ROUTE,
        Component: NewsPage
    },
];