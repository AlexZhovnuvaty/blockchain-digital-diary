import m from "mithril"
import { Tabs, TabItem, Icons } from 'construct-ui'

const items = [
  'As User',
  'As Investigator'
];

var align = 'center'
var active = 'As User'
var size = 'default'
var bordered = false
var fluid = false
var isLoading = false

//module.exports = {
export default {

    view: function(vnode) {

        const attrs = {
            size: this.size,
            intent: this.intent,
            rounded: this.rounded,
            basic: this.basic,
            fluid: this.fluid,
            outlined: this.outlined
        };

        return m("main.layout", [
            m("nav.menu", [
                m(Tabs, {
                        align: align,
                        bordered: bordered,
                        fluid: fluid,
                        size: size
                    },
                        [
                        items.map(item => m(TabItem, {
                            label: [
//                                item === 'Settings' && m(Icon, {
//                                                            name: Icons.SETTINGS,
//                                                            style: 'margin-right: 5px'
//                                }),
//                                item === 'As User' && m("a", {href: "/consumer", oncreate: m.route.link}, "As User"),
//                                item === 'As Investigator' && m("a", {href: "/academic", oncreate: m.route.link}, "As Investigator"),
                                item
                            ],
                            active: active === item,
                            loading: item === 'Projects' && isLoading,
                            onclick: function(){
                                    active = item
                                    item === 'As User' && m.route.set( "/consumer" )
                                    item === 'As Investigator' && m.route.set( "/academic" )
//                                    window.location.replace( "/main" )
                                }
                        }))
                    ]),
            ]),
            m("section", vnode.children),
        ])

//        return  m('main.layout',[
//                    m(ButtonGroup, { ...attrs }, [
//                        m(Button, {
//                            iconLeft: Icons.COPY,
//                            label: this.label && 'Copy'
//                        }),
//                        m(Button, {
//                            iconLeft: Icons.SETTINGS,
//                            label: this.label && 'Settings'
//                        }),
//                        m(Button, {
//                            iconLeft: Icons.LINK,
//                            iconRight: Icons.CHEVRON_DOWN,
//                            label: this.label && 'Link'
//                        })
//                    ])
////                    m(Tabs, {
////                        align: align,
////                        bordered: bordered,
////                        fluid: fluid,
////                        size: size
////                    },
////                        [
////                        items.map(item => m(TabItem, {
////                            label: [
//////                                item === 'Settings' && m(Icon, {
//////                                                            name: Icons.SETTINGS,
//////                                                            style: 'margin-right: 5px'
//////                                }),
//////                                item === 'As User' && m("a", {href: "/consumer", oncreate: m.route.link}, "As User"),
//////                                item === 'As Investigator' && m("a", {href: "/academic", oncreate: m.route.link}, "As Investigator"),
////                                item
////                            ],
////                            active: active === item,
////                            loading: item === 'Projects' && isLoading,
////                            onclick: function(){
////                                    active = item
////                                    item === 'As User' && m.route.set( "/consumer" )
////                                    item === 'As Investigator' && m.route.set( "/academic" )
//////                                    window.location.replace( "/main" )
////                                }
////                        }))
////                    ]
////
////                    [
////                        m("nav.menu", [
////                            m("a", {href: "/consumer", oncreate: m.route.link}, "As User|"),
////                            m("a", {href: "/academic", oncreate: m.route.link}, "As Investigator|"),
////                        ]),
////                        m("section", vnode.children),
////                    ]
////                ),
//                ])
    }
}