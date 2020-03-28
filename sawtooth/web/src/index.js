var m = require("mithril")

import AcademicList from './views/AcademicList'
import AcademicForm from './views/AcademicForm'
import ConsumerList from './views/ConsumerList'
import ConsumerListAsAcademic from './views/ConsumerListAsAcademic'
import ConsumerForm from './views/ConsumerForm'
import DataList from './views/DataList'
import DataForm from './views/DataForm'
import ConsumerConsentRequestList from './views/ConsumerConsentRequestList'
import AcademicConsentRequestList from './views/AcademicConsentRequestList'
import ConsumerActionsList from "./views/ConsumerActionsList"
import AcademicActionsList from "./views/AcademicActionsList"
import Layout from "./views/Layout"

m.route(document.body, "/consumer", {

    "/academic_list": {
        render: function(vnode) {
            return m(Layout, m(AcademicList, vnode.attrs))
        }
    },
    "/academic/new/": {
        render: function() {
            return m(Layout, m(AcademicForm))
        }
    },
    "/academic/consumer_list/": {
        render: function(vnode) {
            return m(Layout, m(ConsumerListAsAcademic, vnode.attrs))
        }
    },
    "/consumer/consumer_list/": {
        render: function(vnode) {
            return m(Layout, m(ConsumerList, vnode.attrs))
        }
    },
    "/consumer/new/": {
        render: function() {
            return m(Layout, m(ConsumerForm))
        }
    },
    "/data_list": {
        render: function(vnode) {
            return m(Layout, m(DataList, vnode.attrs))
        }
    },
    "/consumer/consent_request_list": {
        render: function(vnode) {
            return m(Layout, m(ConsumerConsentRequestList, vnode.attrs))
        }
    },
    "/academic/consent_request_list": {
        render: function(vnode) {
            return m(Layout, m(AcademicConsentRequestList, vnode.attrs))
        }
    },
    "/data/new/": {
        render: function(vnode) {
            return m(Layout, m(DataForm, vnode.attrs))
        }
    },
    "/consumer": {
//        onmatch: function(args, requestedPath, route) {
//            if (!localStorage.getItem("auth-token")) m.route.set("/login")
//            else return m(Layout, m(HospitalActionsList))
//        },
        render: function() {
            return m(Layout, m(ConsumerActionsList))
        }
    },
    "/academic": {
        render: function() {
            return m(Layout, m(AcademicActionsList))
        }
    },
//    "/login": {
//        render: function() {
//            return m(Login)
//        }
//    },
})