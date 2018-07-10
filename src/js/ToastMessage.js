const View = require('@futuredays/view')

module.exports = class ToastMessage extends View {

    constructor( opts ={} ) {
        super()
        return this.initialize( opts )
    }

    name = 'ToastMessage'

    Icons = {
        error: require('./templates/lib/error')(),
        success: require('./templates/lib/checkmark')()
    }

    requiresLogin = false

    async showMessage( type, message ) {
        if( this.showing ) return

        if( type !== 'error' ) this.els.container.classList.add('success')

        this.els.message.textContent = message
        this.els.title.textContent = type === 'error' ? 'Error' : 'Success'
        this.slurpTemplate( { insertion: { el: this.els.icon }, template: type === 'error' ? this.Icons.error : this.Icons.success } )
        
        this.showing = true

        await this.animate( this.els.container, 'fade-in-slow' )
        await this.animate( this.els.container, 'fade-out-slow' )
        this.teardown()
    }

    teardown() {
        if( this.els.container.classList.contains('success') ) this.els.container.classList.remove('success')
        this.els.message.textContent = ''
        this.els.message.title = ''
        if( this.els.icon.firstChild ) this.els.icon.removeChild( this.els.icon.firstChild )
        this.showing = false
    }

    template = require('./templates/ToastMessage')

}