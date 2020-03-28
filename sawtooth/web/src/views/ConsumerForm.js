import m from 'mithril';
import Consumer from "../models/Consumer"
import { Form, FormGroup, Input, FormLabel, Icon, Icons, Button, CustomSelect, Classes } from 'construct-ui';

//var isSubmitting = false

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
                                                                Consumer.register()
                                                            }
                        }, [
                    m(FormGroup, { span }, [
                        m(FormLabel, { for: 'username' }, 'Username'),
                        m(Input, {
                            contentLeft: m(Icon, { name: Icons.USER }),
                            id: 'username',
                            name: 'username',
                            placeholder: 'Username...',
                            value: Consumer.current.name,
                            onchange: function() {
                                                                            console.log('value: ' + this.value)
                                                                            Consumer.current.name = this.value
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
                    m("label.error", Consumer.error)
                ])
    }
}