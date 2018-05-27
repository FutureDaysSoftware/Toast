const View = require('view')

module.exports = class ToastMessage extends View {

    name = 'ToastMessage'

    Icons = {
        error: require('./templates/lib/error')(),
        success: require('./templates/lib/checkmark')()
    }

    postRender() {
        this.on( 'shown', () => this.status = 'shown' )
        this.on( 'hidden', () => this.status = 'hidden' )

        return this
    }

    requiresLogin = false

    showMessage( type, message ) {
        return new Promise( async ( resolve, reject ) => {
            if( /show/.test( this.status ) ) this.teardown()

            this.resolution = resolve

            if( type !== 'error' ) this.els.container.classList.add('success')

            this.els.message.textContent = message
            this.els.title.textContent = type === 'error' ? 'Error' : 'Success'
            this.slurp( { insertion: { el: this.els.icon }, template: type === 'error' ? this.Icons.error : this.Icons.success } )
            
            this.status = 'showing'

            await this.animate( this.els.container, 'fade-in-slow' )
            await this.animate( this.els.container, 'fade-out-slow' )
            this.teardown()
        } )
    }

    teardown() {
        if( this.els.container.classList.contains('success') ) this.els.container.classList.remove('success')
        this.els.message.textContent = ''
        this.els.message.title = ''
        if( this.els.icon.firstChild ) this.els.icon.removeChild( this.els.icon.firstChild )
        this.resolution()
    }

    template = require('./templates/ToastMessage')

}