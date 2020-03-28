import m from "mithril"
import Data from "../models/Data"
import DatePicker from 'mithril-datepicker'
import { Form, FormGroup, Input, FormLabel, Icon, Icons, Button, Classes, CustomSelect } from 'construct-ui';

var myDate = Date.now()

DatePicker.localize({
  weekStart: 1,
  locale: 'en-us',
  prevNextTitles: ['1M', '1A', '10A'],
  formatOptions: {
    weekday: 'long',
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  }
})

var basic = false
var disabled = false
var fluid = false
var intent = false
var readonly = false
var options = ['Home', 'Work', 'Travel', 'Other']
var size = 'default'

export default {
//module.exports = {
    oninit: function(vnode) {
        Data.current.field1 = (new Date()).toISOString()
        Data.current.field2 = 'Home'
        },

    view: function(vnode) {
        const span = {
            xs: 12,
            sm: 12,
            md: 6
        }
        return m(Form, { gutter: 15, onsubmit: function(e) {
                        console.log('submit!')
                        e.preventDefault()
                        Data.add(vnode.attrs.client_key)
                    }
                }, [
                    m(FormGroup, { span }, [
                        m(FormLabel, { for: 'datevalue' }, 'Date'),
                        m(DatePicker, {
                            date: myDate,
                            onchange: function(chosenDate){
                                console.log("selected time: " + chosenDate.toISOString())
                                Data.current.field1 = chosenDate.toISOString()
                            }
                        }),
                    ]),
                    m(FormGroup, { span }, [
                        m(FormLabel, { for: 'location' }, 'Location'),
                        m(CustomSelect, {
            //                contentLeft: renderContent(contentLeft, Icons.USERS),
            //                contentRight: renderContent(contentRight, Icons.SEARCH),
                            basic: basic,
                            disabled: disabled,
                            fluid: fluid,
                            name: 'location',
                            intent: intent,
                            options: options,
                            size: size,
                            defaultValue: 'Home',
        //                    onchange: () => null
                            onchange: function() {
                                console.log("selected item in select box: " + this.selectedIndex)
                                console.log("selected value: " + options[this.selectedIndex])
                                Data.current.field2 = options[this.selectedIndex]
                            }
                        }),
                    ]),
                    m(FormGroup, { span }, [
                        m(FormLabel, { for: 'details' }, 'Details'),
                        m(Input, {
                            contentLeft: m(Icon, { name: Icons.CLIPBOARD }),
                            id: 'details',
                            name: 'details',
                            placeholder: 'Details...',
                            value: Data.current.field3,
                            onchange: function() {
                                console.log('value: ' + this.value)
                                Data.current.field3 = this.value
                            }
                        })
                    ]),
                    m(FormGroup, { class: Classes.ALIGN_LEFT }, [
                        m(Button, {
                            iconRight: Icons.CHEVRON_RIGHT,
                            type: 'submit',
                            label: 'Submit',
                            intent: 'primary',
//                            loading: isSubmitting
                        })
                    ]),
                    m("label.error", Data.error)
                ])
//        return m("form", {
//                onsubmit: function(e) {
//                    e.preventDefault()
//                    Data.add(vnode.attrs.client_key)
//                }
//            }, [
//            m(DatePicker, {
//                date: myDate,
//                onchange: function(chosenDate){
//                    console.log("selected time: " + chosenDate.toISOString())
//                    Data.current.field1 = chosenDate.toISOString()
//                }
//            }),
//            m('div'),
//            m(Select, {
//    //                contentLeft: renderContent(contentLeft, Icons.USERS),
//    //                contentRight: renderContent(contentRight, Icons.SEARCH),
//                    basic: basic,
//                    disabled: disabled,
//                    fluid: fluid,
//                    intent: intent,
//                    options: options,
//                    size: size,
//                    defaultValue: 'Home',
////                    onchange: () => null
//                    onchange: function(){
//                                    console.log("selected item in select box: " + this.selectedIndex)
//                                    console.log("selected value: " + options[this.selectedIndex])
//                                    Data.current.field2 = options[this.selectedIndex]
//                                }
//                }),
//            m("label.label", "Details"),
//            m("input.input[placeholder=Details]", {
//                oninput: m.withAttr("value", function(value) {Data.current.field3 = value}),
//                value: Data.current.field3
//            }),
//            m("button.button[type=submit]", "Add"),
//            m("label.error", Data.error)
//        ])
    }
//    view: function(vnode) {
//        return m("form", {
//                onsubmit: function(e) {
//                    e.preventDefault()
//                    Data.add(vnode.attrs.client_key)
//                }
//            }, [
//            m(DatePicker, {
//                date: myDate,
//                onchange: function(chosenDate){
//                    console.log("selected time: " + chosenDate.toISOString())
//                    Data.current.field1 = chosenDate.toISOString()
//                }
//            }),
//            m('div'),
//            m(Select, {
//    //                contentLeft: renderContent(contentLeft, Icons.USERS),
//    //                contentRight: renderContent(contentRight, Icons.SEARCH),
//                    basic: basic,
//                    disabled: disabled,
//                    fluid: fluid,
//                    intent: intent,
//                    options: options,
//                    size: size,
//                    defaultValue: 'Home',
////                    onchange: () => null
//                    onchange: function(){
//                                    console.log("selected item in select box: " + this.selectedIndex)
//                                    console.log("selected value: " + options[this.selectedIndex])
//                                    Data.current.field2 = options[this.selectedIndex]
//                                }
//                }),
//            m("label.label", "Details"),
//            m("input.input[placeholder=Details]", {
//                oninput: m.withAttr("value", function(value) {Data.current.field3 = value}),
//                value: Data.current.field3
//            }),
//            m("button.button[type=submit]", "Add"),
//            m("label.error", Data.error)
//        ])
//    }
}