'use strict';

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
    (0, _inherits3.default)(Toast, _View);

    function Toast() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Toast);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Toast.__proto__ || (0, _getPrototypeOf2.default)(Toast)).call.apply(_ref, [this].concat(args))), _this), _this.ToastMessage = require('./ToastMessage'), _this.name = 'Toast', _this.requiresLogin = false, _this.template = require('./templates/Toast'), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Toast, [{
        key: 'postRender',
        value: function postRender() {
            this.messages = {};
            return this;
        }
    }, {
        key: 'createMessage',
        value: function createMessage(type, message) {
            if (!this.messages[message]) this.messages[message] = new this.ToastMessage({
                Factory: { value: this.Factory },
                insertion: { value: { el: this.els.container } }
            });

            return this.messages[message].showMessage(type, message).catch(this.Error);
        }
    }]);
    return Toast;
}(View);