const NotFound = () => import('./views/common/404.vue');
const Home = () => import('./views/Home.vue');
const blackList = () => import('./views/blackList.vue');
const FeedView = () => import('./views/FeedView.vue');
const Links = () => import('./views/ResourceLink.vue');
const About = () => import('./views/about.vue');

let routes = [
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true,
        projectHidden: true
    },
    {
        path: '/',
        component: Home,
        name: '',
        projectHidden: true,
        children: [
            { path: '/blackList', component: blackList, iconCls:'el-icon-bell', name: '公司黑名单'},
            { path: '/FeedView', component: FeedView, iconCls:'el-icon-message', name: '面试反馈'},
            { path: '/Resource', component: Links, iconCls:'el-icon-share', name: '资源链接'},
            { path: '/About', component: About, iconCls:'el-icon-info', name: '关于我们'},
            // { path: '/robot', component: robot, iconCls:'fa fa-id-card-o', name: '消息机器人', meta: { keepAlive: false }},
            ]
    },
];

export default routes;