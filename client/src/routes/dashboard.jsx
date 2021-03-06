import Dashboard from 'views/Dashboard/Dashboard.jsx';
import AddSchool from 'views/AddSchool/AddSchool.jsx';
import AddData from 'views/AddData/AddData.jsx';
import UserTableList from 'views/UserTableList/UserTableList.jsx';
import DataTableList from 'views/DataTableList/DataTableList.jsx';
import UserPage from 'views/UserPage/UserPage.jsx';
// import TableList from 'views/TableList/TableList.jsx';
// import Icons from 'views/Icons/Icons.jsx';
// import Notifications from 'views/Notifications/Notifications.jsx';
// import Typography from 'views/Typography/Typography.jsx';
// import Maps from 'views/Maps/Maps.jsx';
// import Upgrade from 'views/Upgrade/Upgrade.jsx';

var dashRoutes = [
    { path: "/dashboard", name: "Dashboard", icon: "design_app", component: Dashboard },
    { path: "/user-tables", name: "User Table", icon: "users_single-02", component: UserTableList },
    { path: "/add-school", name: "Add School", icon: "education_hat", component: AddSchool },
    { path: "/add-data", name: "Add Data", icon: "files_paper", component: AddData },
    { path: "/data-tables", name: "Data Table", icon: "files_single-copy-04", component: DataTableList },
    { path: "/user-page", name: "User Profile", icon: "users_single-02", component: UserPage },
    // { path: "/extended-tables", name: "Table List", icon: "files_paper", component: TableList },
    // { path: "/icons", name: "Icons", icon: "design_image", component: Icons },
    // { path: "/maps", name: "Maps", icon: "location_map-big", component: Maps },
    // { path: "/notifications", name: "Notifications", icon: "ui-1_bell-53", component: Notifications },
    // { path: "/typography", name: "Typography", icon: "design-2_ruler-pencil", component: Typography },
    // { pro: true, path: "/upgrade", name: "Upgrade to PRO", icon: "objects_spaceship", component: Upgrade },
    { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
];
export default dashRoutes;
