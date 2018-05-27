const View = require('view')

module.exports = class Toast extends View {

    ToastMessage = require('./ToastMessage')

    name = 'Toast'

    postRender() {
        this.messages = { }
        return this
    }

    requiresLogin = false

    createMessage( type, message ) {
        if( !this.messages[ message ] ) this.messages[ message ] = new this.ToastMessage( {
            Factory: { value: this.Factory },
            insertion: { value: { el: this.els.container } }
        } )

        return this.messages[ message ].showMessage( type, message ).catch( this.Error )
    }

    template = require('./templates/Toast')

}
