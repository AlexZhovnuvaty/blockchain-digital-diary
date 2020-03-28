import m from 'mithril'
import Academic from '../models/Academic'
import { Table } from 'construct-ui';

var bordered1 = true
var interactive1 = true
var striped1 = true

export default {

    oninit:
        function(vnode){
            Academic.loadList(vnode.attrs.client_key)
        },

    view: function() {

        return m('div' , [
                    m(Table, {
                            bordered: bordered1,
                            interactive: interactive1,
                            striped: striped1
                        }, [
                        m('tr', [
                            m('th', 'PublicKey'),
                            m('th', 'Name')
                        ]),
                        Academic.list.map(function(data) {
                            return m('tr', [
                                        m('td', data.public_key),
                                        m('td', data.name)
                                    ])
                        })
                    ]),
                    m("label.error", Academic.error)
        ])
//        return m(".user-list", Academic.list.map(function(academic) {
//            return m("a.user-list-item",
//                "PUBLIC KEY: " + academic.public_key +
//                "; NAME: " + academic.name)
//        }),
//        m("label.error", Academic.error))
    }
}