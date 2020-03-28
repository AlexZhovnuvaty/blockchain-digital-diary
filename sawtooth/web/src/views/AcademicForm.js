import m from 'mithril'
import Academic from '../models/Academic'
import { Form, FormGroup, Input, FormLabel, Icon, Icons, Button, CustomSelect, Classes } from 'construct-ui';

export default {

    view: function() {
        const span = {
            xs: 12,
            sm: 12,
            md: 6
        }

        return m(Form, { gutter: 15, onsubmit: function(e) {
                                                                console.log('submit!')
                                                                e.preventDefault()
                                                                Academic.register()
                                                            }
                        }, [
                    m(FormGroup, { span }, [
                        m(FormLabel, { for: 'username' }, 'Name'),
                        m(Input, {
                            contentLeft: m(Icon, { name: Icons.USER }),
                            id: 'username',
                            name: 'username',
                            placeholder: 'Name...',
                            value: Academic.current.name,
                            onchange: function() {
                                                                            console.log('value: ' + this.value)
                                                                            Academic.current.name = this.value
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
                    m("label.error", Academic.error)
                ])

//        return m("form", {
//                onsubmit: function(e) {
//                    e.preventDefault()
//                    Academic.register()
//                }
//            }, [
//            m("label.label", "Name"),
//            m("input.input[type=text][placeholder=Name]", {
//                oninput: m.withAttr("value", function(value) {Academic.current.name = value}),
//                value: Academic.current.name
//            }),
//            m("button.button[type=submit]", "Register"),
//            m("label.error", Academic.error)
//        ])
    }
}