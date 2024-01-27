import React, {useState, useEffect, useContext} from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import { MAIN_ROUTE, MORTGAGE_ROUTE, LOGIN_ROUTE, ACCOUNT_ROUTE, COMPANY_ROUTE, FAQ_ROUTE, NEWS_ROUTE } from "../../utils/consts";
// import { Context } from '../../index';

import './header.sass';


const Header: React.FC = () => {
    const location = useLocation();
    const [classMenu, setClassMenu] = useState<string>('');
    // const {user} = useContext(Context);

    useEffect(() => {
        setClassMenu('');
    }, [location.pathname]);

    const menuHandler = () => {
        classMenu === '' ? setClassMenu('open-menu') : setClassMenu('');
    };

    // const logOut = () => {
    //     user.setIsAuth(false);
    //     localStorage.clear();
    // };

    return (
        <>
            {/* {user.isAuth ? */}
                <div className='header'>
                    <div className={"header__menu-burger" + ' ' + classMenu} onClick={() => menuHandler()}>
                        <span></span>
                    </div>

                    <nav className={'header__nav' + ' ' + classMenu}>
                        <ul className="header__menu">
                            <li className="header__menu_item">
                                <NavLink to={MAIN_ROUTE} className={location.pathname === MAIN_ROUTE ? "active" : ''} >
                                    КВАРТИРЫ
                                </NavLink>
                            </li>
                            <li className="header__menu_item">
                                <NavLink to={MORTGAGE_ROUTE} className={location.pathname === MORTGAGE_ROUTE ? "active" : ''} >
                                    ИПОТЕКА
                                </NavLink>
                            </li>
                            {/* <li className="header__menu_item">
                                <NavLink to={COMPANY_ROUTE} className={location.pathname === COMPANY_ROUTE ? "active" : ''} >
                                    О КОМПАНИИ
                                </NavLink>
                            </li>
                            <li className="header__menu_item">
                                <NavLink to={NEWS_ROUTE} className={location.pathname === NEWS_ROUTE ? "active" : ''} >
                                    НОВОСТИ
                                </NavLink>
                            </li>
                            <li className="header__menu_item">
                                <NavLink to={FAQ_ROUTE} className={location.pathname === FAQ_ROUTE ? "active" : ''} >
                                    FAQ
                                </NavLink>
                            </li> */}
                            <li className="header__menu_item">
                                <NavLink to={LOGIN_ROUTE} className={location.pathname === LOGIN_ROUTE ? "active" : ''} >
                                    АВТОРИЗАЦИЯ
                                </NavLink>
                            </li>
                            <li className="header__menu_item">
                                <NavLink to={ACCOUNT_ROUTE} className={location.pathname === ACCOUNT_ROUTE ? "active" : ''} >
                                    ЛИЧНЫЙ КАБИНЕТ
                                </NavLink>
                            </li>
                            {/* <li className="header__menu_item">
                                <Button 
                                    variant={"outline-secondary"} 
                                    onClick={() => logOut()} 
                                    className="ms-2 nav-btn"
                                    >Выйти
                                </Button> 
                            </li> */}
                        </ul>
                    </nav>
                </div>
            {/* :
                <div></div>
            } */}
        </>
    );
};

export default Header;