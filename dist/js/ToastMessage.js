'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var View = require('@futuredays/view');

module.exports = function (_View) {
    (0, _inherits3.default)(ToastMessage, _View);

    function ToastMessage() {
        var _ret;

        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        (0, _classCallCheck3.default)(this, ToastMessage);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ToastMessage.__proto__ || (0, _getPrototypeOf2.default)(ToastMessage)).call(this));

        _this.name = 'ToastMessage';
        _this.Icons = {
            error: require('./templates/lib/error')(),
            success: require('./templates/lib/checkmark')()
        };
        _this.requiresLogin = false;
        _this.template = require('./templates/ToastMessage');

        return _ret = _this.initialize(opts), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(ToastMessage, [{
        key: 'showMessage',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(type, message) {
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (!this.showing) {
                                    _context.next = 2;
                                    break;
                                }

                                return _context.abrupt('return');

                            case 2:

                                if (type !== 'error') this.els.container.classList.add('success');

                                this.els.message.textContent = message;
                                this.els.title.textContent = type === 'error' ? 'Error' : 'Success';
                                this.slurpTemplate({ insertion: { el: this.els.icon }, template: type === 'error' ? this.Icons.error : this.Icons.success });

                                this.showing = true;

                                _context.next = 9;
                                return this.animate(this.els.container, 'fade-in-slow');

                            case 9:
                                _context.next = 11;
                                return this.animate(this.els.container, 'fade-out-slow');

                            case 11:
                                this.teardown();

                            case 12:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function showMessage(_x2, _x3) {
                return _ref.apply(this, arguments);
            }

            return showMessage;
        }()
    }, {
        key: 'teardown',
        value: function teardown() {
            if (this.els.container.classList.contains('success')) this.els.container.classList.remove('success');
            this.els.message.textContent = '';
            this.els.message.title = '';
            if (this.els.icon.firstChild) this.els.icon.removeChild(this.els.icon.firstChild);
            this.showing = false;
        }
    }]);
    return ToastMessage;
}(View);