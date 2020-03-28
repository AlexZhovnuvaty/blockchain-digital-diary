import m from "mithril"
import Client from "../models/Client"
import { Input, List, ListItem } from 'construct-ui'

console.log('hello consumer')

var basic = false
var disabled = false
var fluid = true
var intent = false
var readonly = true
var size = 'default'
//var data;

export default {
//module.exports = {

    oninit: //Client.loadList
        function(vnode){
            Client.loadList()
        }
    ,
    view: function(vnode) {
        const data = [
//                { key: 1, title: 'Investigators List', url: "/academic_list/?client_key=" + Client.list['consumer'] },
                { key: 1, title: 'New User', url: "/consumer/new/" },
                { key: 2, title: 'Users List', url: "/consumer/consumer_list/?client_key=" + Client.list['consumer'] },
                { key: 3, title: 'Add Data', url: "/data/new/?client_key=" + Client.list['consumer'] },
                { key: 4, title: 'Data List', url: "/data_list/?client_key=" + Client.list['consumer'] },
                { key: 5, title: 'Consent Requests', url: "/consumer/consent_request_list/?client_key=" + Client.list['consumer'] }
            ];
        console.log('view consumer')
        return m("div", [
            m("label.label", "Client public key"),
            m(Input, {
                    basic: basic,
    //                contentLeft: renderContent(this.contentLeft, Icons.CALENDAR),
    //                contentRight: renderContent(this.contentRight, Icons.ALERT_CIRCLE),
                    disabled: disabled,
                    fluid: fluid,
                    intent: intent,
                    placeholder: 'TherapeuticArea...',
                    readonly: readonly,
                    value: Client.list['consumer'],
                    size: size
            }),
            m("label.label", "Menu items"),
            m(List, {
                interactive: this.interactive,
                size: this.size
                }, data.map(item => m(ListItem, {
                                                label: `${item.title}`,
                                                onclick: function(){
                                                    console.log('hello')
                                                    m.route.set( item.url )
                                                }
                                            })))
        ])
//        return m("div.user-list", [
//            m("label.label", "Client public key"),
//            m("input.input[type=text][placeholder=Client public key][disabled=false]", {
//                value: Client.list['consumer'] //vnode.attrs.client_pkey
//            }),
//            m("a.user-list-item", {href: "/academic_list/?client_key=" + Client.list['consumer'], oncreate: m.route.link}, "Investigators List"),
//            m("a.user-list-item", "---"),
//            m("a.user-list-item", {href: "/consumer/new/", oncreate: m.route.link}, "New User"),
//            m("a.user-list-item", {href: "/consumer/consumer_list/?client_key=" + Client.list['consumer'], oncreate: m.route.link}, "Users List"),
//            m("a.user-list-item", "---"),
//            m("a.user-list-item", {href: "/data/new/?client_key=" + Client.list['consumer'], oncreate: m.route.link}, "Add Data"),
//            m("a.user-list-item", {href: "/data_list/?client_key=" + Client.list['consumer'], oncreate: m.route.link}, "Data List"),
//            m("a.user-list-item", "---"),
//            m("a.user-list-item", {href: "/consumer/consent_request_list/?client_key=" + Client.list['consumer'], oncreate: m.route.link}, "Consent Requests"),
//        ])

    }
}