import m from "mithril"
import Client from "../models/Client"
import { Input, List, ListItem } from 'construct-ui'

console.log('hello academic')

var basic = false
var disabled = false
var fluid = true
var intent = false
var readonly = true
var size = 'default'
//var data;
//module.exports = {
export default {

    oninit:
        function(vnode){
            Client.loadList()
        }
    ,
    view: function(vnode) {
        const data = [
                { key: 1, title: 'New Investigator', url: "/academic/new/" },
                { key: 2, title: 'Investigators List', url: "/academic_list/?client_key=" + Client.list['academic'] },
                { key: 3, title: 'Users List', url: "/academic/consumer_list/?client_key=" + Client.list['academic'] },
                { key: 4, title: 'Data List', url: "/data_list/?client_key=" + Client.list['academic'] },
                { key: 5, title: 'Consent Requests', url: "/academic/consent_request_list/?client_key=" + Client.list['academic'] }
            ];
        console.log('view academic')
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
                    value: Client.list['academic'],
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

    }
}