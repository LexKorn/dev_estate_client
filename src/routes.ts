import { MAIN_ROUTE, MORTGAGE_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE, ACCOUNT_ROUTE, COMPANY_ROUTE, FAQ_ROUTE, NEWS_ROUTE } from './utils/consts';
import { AuthPage, AccountPage, MainPage, MortgagePage, CompanyPage, FaqPage, NewsPage } from './pages';

export const routes = [
    {
        path: MAIN_ROUTE,
        Component: MainPage
    },
    {
        path: MORTGAGE_ROUTE,
        Component: MortgagePage
    },
    {
        path: COMPANY_ROUTE,
        Component: CompanyPage
    },
    {
        path: FAQ_ROUTE,
        Component: FaqPage
    },
    {
        path: NEWS_ROUTE,
        Component: NewsPage
    },
    {
        path: LOGIN_ROUTE,
        Component: AuthPage
    },
    {
        path: REGISTER_ROUTE,
        Component: AuthPage
    },
    {
        path: ACCOUNT_ROUTE,
        Component: AccountPage
    }
];