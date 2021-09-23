import {TablePage, LoginPage, TreePage, CounterPage, UserCardsPage, MainPage,} from '../../Pages/OldProjectPages/';
import HomeIcon from "@material-ui/icons/Home";
import TocIcon from "@material-ui/icons/Toc";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import CodeIcon from "@material-ui/icons/Code";
import AppsIcon from "@material-ui/icons/Apps";

export const routes = [
    {
        id: 1,
        path: '',
        Component: MainPage,
        title: "Главная страница",
        icon: HomeIcon
    },
    {
        id: 2,
        path: 'tree',
        Component: TreePage,
        title: "Дерево",
        icon: AccountTreeIcon
    },
    {
        id: 3,
        path: 'counter',
        Component: CounterPage,
        title: "Счетчик",
        icon: CodeIcon
    },{
        id: 4,
        path: 'table',
        Component: TablePage,
        title: "Таблица",
        icon: TocIcon,
    },{
        id: 5,
        path: 'cards',
        Component: UserCardsPage,
        title: "Карточки",
        icon: AppsIcon
    }, {
        id: 5,
        path: 'login',
        Component: LoginPage,
        title: "Регистрация",
        icon: AppsIcon
    }
]