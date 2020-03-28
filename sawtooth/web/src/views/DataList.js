import m from 'mithril'
import Data from "../models/Data"
import { Table } from 'construct-ui';

var bordered1 = true
var interactive1 = true
var striped1 = true

export default {

    oninit:
        function(vnode){
            Data.loadList(vnode.attrs.client_key)
        },

    view: function(vnode) {
        return m('div' , [
                    m(Table, {
                            bordered: bordered1,
                            interactive: interactive1,
                            striped: striped1
                        }, [
                        m('tr', [
                            m('th', 'Date'),
                            m('th', 'Location'),
                            m('th', 'Details')
                        ]),
                        Data.list.map(function(data) {
                            return m('tr', [
                                        m('td', data.field1),
                                        m('td', data.field2),
                                        m('td', data.field3)
                                    ])
                        })
                    ]),
                    m("label.error", Data.error)
        ])
//        return m(".user-list", Data.list.map(function(data) {
//            return m("a.user-list-item",
//                "Date: " + data.field1 +
//                "; Location: " + data.field2 +
//                "; Details: " + data.field3 +
//                "; Timestamp: " + data.event_time +
//                ";"
//            )
//        }),
//        m("label.error", Data.error))
    }
}