import m from 'mithril'
import Data from '../models/Data'
import Consumer from '../models/Consumer'
import { Table, Button, Icons } from 'construct-ui';

var bordered1 = true
var interactive1 = true
var striped1 = true

export default {

    oninit:
        function(vnode){
            Data.loadConsentRequestList(vnode.attrs.client_key)
        },

    view: function(vnode) {
//        return m(".user-list", Data.consentRequestList.map(function(consent_request) {
//            return m("a.user-list-item", "SRC PUBLIC KEY: " + consent_request.src_pkey +
//                                        "; DEST PUBLIC KEY: " + consent_request.dest_pkey +
//                                        "; STATUS: " + consent_request.action_type,
//                    m("div")
//                )
//            }),
//            m("label.error", Data.error))

        return m('div' , [
                    m(Table, {
                            bordered: bordered1,
                            interactive: interactive1,
                            striped: striped1
                        }, [
                        m('tr', [
                            m('th', 'Who requested'),
                            m('th', 'To whom requested'),
                            m('th', 'Status')
                        ]),
                        Data.consentRequestList.map(function(data) {
                            return m('tr', [
                                        m('td', data.src_pkey),
                                        m('td', data.dest_pkey),
                                        m('td', data.action_type)
                                    ])
                        })
                    ]),
                    m("label.error", Data.error)
        ])
    }
}