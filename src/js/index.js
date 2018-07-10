const View = require('@futuredays/view')

module.exports = class Toast extends View {

    constructor( opts ={} ) {
        super()
        return this.initialize( opts )
    }

    ToastMessage = require('./ToastMessage')

    name = 'Toast'

    postRender() {
        this.messages = { }
        return this
    }

    requiresLogin = false

    createMessage( type, message ) {
        if( !this.messages[ message ] ) this.messages[ message ] = new this.ToastMessage( {
            range: { value: this.range },
            insertion: { value: { el: this.els.container } }
        } )

        return this.messages[ message ].showMessage( type, message ).catch( this.Error )
    }

    template = require('./templates/Toast')

}
