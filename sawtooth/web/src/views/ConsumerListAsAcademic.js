import m from 'mithril'
import Consumer from '../models/Consumer'
import { Table, Button, Icons } from 'construct-ui';

var bordered1 = true
var interactive1 = true
var striped1 = true

export default {

    oninit:
        function(vnode){
            Consumer.loadList(vnode.attrs.client_key)
        },

    view: function(vnode) {

        return m('div' , [
                    m(Table, {
                            bordered: bordered1,
                            interactive: interactive1,
                            striped: striped1
                        }, [
                        m('tr', [
                            m('th', 'PublicKey'),
                            m('th', 'Name'),
                            m('th', 'Action')
                        ]),
                        Consumer.list.map(function(data) {
                            return m('tr', [
                                        m('td', data.public_key),
                                        m('td', data.name),
                                        m('td', [
                                            m(Button, {
                                                label: 'Request Consent',
                                                intent: 'positive',
                                                fluid: true,
                                                onclick: function() {
                                                    Consumer.request_consent(data.public_key, vnode.attrs.client_key)
                                                }
                                            })
                                        ])
                                    ])
                        })
                    ]),
                    m("label.error", Consumer.error)
        ])
    }
}