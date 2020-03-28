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

        return m('div' , [
                    m(Table, {
                            bordered: bordered1,
                            interactive: interactive1,
                            striped: striped1
                        }, [
                        m('tr', [
                            m('th', 'Who requested'),
                            m('th', 'To whom requested'),
                            m('th', 'Status'),
                            m('th', 'Action')
                        ]),
                        Data.consentRequestList.map(function(data) {
                            return m('tr', [
                                        m('td', data.src_pkey),
                                        m('td', data.dest_pkey),
                                        m('td', data.action_type),
                                        m('td', [
                                            m(Button, {
                                                label: 'Approve',
                                                intent: 'positive',
                                                fluid: true,
                                                onclick: function() {
                                                    Consumer.approve_request(data.dest_pkey, vnode.attrs.client_key)
                                                }
                                            }),
                                            m(Button, {
                                                label: 'Decline',
                                                intent: 'negative',
                                                fluid: true,
                                                onclick: function() {
                                                    Consumer.decline_request(data.dest_pkey, vnode.attrs.client_key)
                                                }
                                            }),
                                            m(Button, {
                                                label: 'Revoke',
                                                intent: 'warning',
                                                fluid: true,
                                                onclick: function() {
                                                    Consumer.revoke_request(data.dest_pkey, vnode.attrs.client_key)
                                                }
                                            })
                                        ])
                                    ])
                        })
                    ]),
                    m("label.error", Data.error)
        ])
    }
}