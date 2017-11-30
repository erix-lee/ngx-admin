
const headingMain = {
    text: 'Main Navigation',
    heading: true
};
const Home = {
    text: '首页',
    link: '/home',
    icon: 'fa fa-home'
};

const Dashboard = {
    text: '仪表盘',
    link: '/dashboard',
    icon: 'fa fa-dashboard',
    submenu: [
        {
            text: 'Dashbord v1',
            link: '/dashboard/v1'
        },
        {
            text: 'Dashbord v2',
            link: '/dashboard/v2'
        },
        {
            text: 'Dashbord v3',
            link: '/dashboard/v3'
        }
    ]
};

const Widgets = {
    text: '小部件',
    link: '/widgets',
    icon: 'fa fa-puzzle-piece'
};

const Elements = {
    text: '界面组件',
    link: '/elements',
    icon: 'fa fa-chemistry',
    submenu: [
        {
            text: 'Buttons',
            link: '/elements/buttons'
        },
        {
            text: 'Interaction',
            link: '/elements/interaction'
        },
        {
            text: 'Notification',
            link: '/elements/notification'
        },
        {
            text: 'SweetAlert',
            link: '/elements/sweetalert'
        },
        {
            text: 'Spinners',
            link: '/elements/spinners'
        },
        {
            text: 'Dropdown',
            link: '/elements/dropdown'
        },
        {
            text: 'Nav Tree',
            link: '/elements/navtree'
        },
        {
            text: 'Sortable',
            link: '/elements/sortable'
        },
        {
            text: 'Grid',
            link: '/elements/grid'
        },
        {
            text: 'Grid Masonry',
            link: '/elements/gridmasonry'
        },
        {
            text: 'Typography',
            link: '/elements/typography'
        },
        {
            text: 'Font Icons',
            link: '/elements/iconsfont'
        },
        {
            text: 'Weahter Icons',
            link: '/elements/iconsweather'
        },
        {
            text: 'Colors',
            link: '/elements/colors'
        },
        {
            text: 'Infinite Scroll',
            link: '/elements/infinitescroll'
        }
    ]
};

const Forms = {
    text: 'Forms',
    link: '/ngxui',
    icon: 'fa fa-note'
};

const Charts = {
    text: 'Charts',
    link: '/ngxchart',
    icon: 'fa fa-chart'
};

const Tables = {
    text: 'Tables',
    link: '/ngxtable',
    icon: 'fa fa-grid'
};

const Maps = {
    text: 'Maps',
    link: '/maps',
    icon: 'fa fa-map',
    submenu: [
        {
            text: 'Google',
            link: '/maps/google'
        },
        {
            text: 'Vector',
            link: '/maps/vector'
        }
    ]
};

const Pages = {
    text: 'Pages',
    link: '/pages',
    icon: 'fa fa-doc',
    submenu: [
        {
            text: 'Login',
            link: '/login'
        },
        {
            text: 'Register',
            link: '/register'
        },
        {
            text: 'Recover',
            link: '/recover'
        },
        {
            text: 'Lock',
            link: '/lock'
        },
        {
            text: '404',
            link: '/404'
        },
        {
            text: '500',
            link: '/500'
        },
        {
            text: 'Maintenance',
            link: '/maintenance'
        }
    ]
};

const Blog = {
    text: 'Blog',
    link: '/blog',
    icon: 'fa fa-notebook',
    submenu: [
        {
            text: 'List',
            link: '/blog/list'
        },
        {
            text: 'Post',
            link: '/blog/post'
        },
        {
            text: 'Articles',
            link: '/blog/articles'
        },
        {
            text: 'Article View',
            link: '/blog/articleview'
        }
    ]
}

const Ecommerce = {
    text: 'Ecommerce',
    link: '/ecommerce',
    icon: 'fa fa-basket-loaded',
    submenu: [
        {
            text: 'Orders',
            link: '/ecommerce/orders'
        },
        {
            text: 'Order View',
            link: '/ecommerce/orderview'
        },
        {
            text: 'Products',
            link: '/ecommerce/products'
        },
        {
            text: 'Product View',
            link: '/ecommerce/productview'
        },
        {
            text: 'Checkout',
            link: '/ecommerce/checkout'
        }
    ]
}

const Extras = {
    text: 'Extras',
    link: '/extras',
    icon: 'fa fa-cup',
    submenu: [
        {
            text: 'Contacts',
            link: '/extras/contacts'
        },
        {
            text: 'Contact details',
            link: '/extras/contactdetails'
        },
        {
            text: 'Projects',
            link: '/extras/projects'
        },
        {
            text: 'Projects details',
            link: '/extras/projectsdetails'
        },
        {
            text: 'Team Viewer',
            link: '/extras/teamviewer'
        },
        {
            text: 'Social Board',
            link: '/extras/socialboard'
        },
        {
            text: 'Vote links',
            link: '/extras/votelinks'
        },
        {
            text: 'Bug tracker',
            link: '/extras/bugtracker'
        },
        {
            text: 'Faq',
            link: '/extras/faq'
        },
        {
            text: 'Help center',
            link: '/extras/helpcenter'
        },
        {
            text: 'Followers',
            link: '/extras/followers'
        },
        {
            text: 'Settings',
            link: '/extras/settings'
        },
        {
            text: 'Plans',
            link: '/extras/plans'
        },
        {
            text: 'File manager',
            link: '/extras/filemanager'
        },
        {
            text: 'Forum',
            link: '/extras/forum'
        },
        {
            text: 'Mailbox',
            link: '/extras/mailbox'
        },
        {
            text: 'Timeline',
            link: '/extras/timeline'
        },
        {
            text: 'Calendar',
            link: '/extras/calendar'
        },
        {
            text: 'Invoice',
            link: '/extras/invoice'
        },
        {
            text: 'Search',
            link: '/extras/search'
        },
        {
            text: 'Todo list',
            link: '/extras/todolist'
        },
        {
            text: 'Profile',
            link: '/extras/profile'
        },
        {
            text: 'Code editor',
            link: '/extras/codeeditor'
        }
    ]
}



const headingComponents = {
    text: 'Components',
    heading: true
};

const headingMore = {
    text: 'More',
    heading: true
};

export const menu = [
    headingMain,
    Home,
    Dashboard,
    Widgets,
    headingComponents,
    Elements,
    Forms,
    Charts,
    Tables,
    Maps,
    headingMore,
    Pages,
    Blog,
    Ecommerce,
    Extras
];
