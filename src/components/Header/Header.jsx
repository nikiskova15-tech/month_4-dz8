import { Link, useLocation } from 'react-router-dom';
import cls from './Header.module.scss';

export const Header = () => {

    const links = [
        { id: 1, title: "Главная", path: "/" },
        { id: 2, title: "О нас", path: "/about" },
        { id: 3, title: "Посты", path: "/posts" },
    ]

    const { pathname } = useLocation()



    return (
        <div className={cls.header}>
            <h2>Header</h2>
            <ul className={cls.list}>
                {links.map((link) => (
                    <li key={link.id}>
                        <Link to={link.path}
                            className={pathname === link.path ? cls.active : ""}>
                            {link.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}