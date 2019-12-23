const path = require('path')
module.exports = {
    base: '/wiki/',
    title: 'vuepress开发',
    description: '开发人员规范',
    head: [
        ['link', { rel: 'icon', href: '/imgs/logo.png', type: 'image/png' }] //不生效呀
    ],
    themeConfig: {
        lastUpdated: 'Last Updated',
        nav: [
            { text: '主页', link: '/' },
            { text: '指南', link: '/guide/' }
        ],
        sidebarDepth: 2,
        sidebar: [{
                title: '入门',
                collapsable: false,
                children: [
                    '/install/',
                    '/quick-start/',
                ]
            },
            {
                title: '自定义组件',
                collapsable: false,
                children: [
                    '/components/cButton',
                    '/components/cInput',
                ]
            },
            {
                title: '基础组件',
                collapsable: false,
                children: [
                    '/components/layout',
                    '/components/icon',
                    '/components/button'
                ]
            },
            {
                title: 'Form组件',
                collapsable: false,
                children: [
                    '/components/radio',
                    '/components/Checkbox',
                    '/components/input',
                    '/components/InputNumber',
                    '/components/Select',
                    '/components/Cascader',
                    '/components/Switch',
                    '/components/Slider',
                    '/components/TimePicker',
                    '/components/DatePicker',
                    '/components/DateTimePicker',
                    '/components/Upload',
                    '/components/rate',
                    '/components/colorPicker',
                    '/components/transfer',
                    '/components/form'
                ]
            },
            {
                title: 'Data组件',
                collapsable: false,
                children: [
                    '/components/table',
                    '/components/tag',
                    '/components/progress',
                    '/components/tree',
                    '/components/pagination',
                    '/components/badge',
                    '/components/avatar'
                ]
            },
            {
                title: 'Notice组件',
                collapsable: false,
                children: [
                    '/components/alert',
                    '/components/loading',
                    '/components/message',
                    '/components/MessageBox',
                    '/components/Notification',
                ]
            },
            {
                title: 'Navigations组件',
                collapsable: false,
                children: [
                    '/components/navMenu',
                    '/components/tabs',
                    '/components/breadcrumb',
                    '/components/pageHeader',
                    '/components/dropdown',
                    '/components/step',
                ]
            },
            {
                title: '其他组件',
                collapsable: false,
                children: [
                    '/components/Dialog',
                    '/components/Tooltip',
                    '/components/Popover',
                    '/components/Card',
                    '/components/Carousel',
                    '/components/Collapse',
                    '/components/Timeline',
                    '/components/Divider',
                    '/components/Calendar',
                    '/components/Image',
                    '/components/Backtop',
                    '/components/InfiniteScroll',
                    '/components/Drawer',


                ]
            }
        ]
    },
    scss: {
        includePaths: [path.join(__dirname, '../../styles')]
    },
    markdown: {
        lineNumbers: true
    }
}