"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var URLTextEditor = function URLTextEditor(_ref) {
  var onChangeText = _ref.onChangeText,
      onChangeHtml = _ref.onChangeHtml,
      inlineStyle = _ref.inlineStyle;

  var _React$useState = _react["default"].useState(" "),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      text = _React$useState2[0],
      setText = _React$useState2[1];

  var _React$useState3 = _react["default"].useState(text),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      text_with_URL = _React$useState4[0],
      setTextWithURL = _React$useState4[1];

  var textRef = _react["default"].useRef();

  var changeStringWithURLFormat = function changeStringWithURLFormat() {
    var is_done_with_space = /\s+$/.test(text);

    if (is_done_with_space) {
      var array_text = _toConsumableArray(text.split(" "));

      array_text.forEach(function (string) {
        if (string.substr(0, 4) === "http") {
          var index = array_text.indexOf(string);
          var stringsplit = string.split(/(\s+)/);
          var resttext = stringsplit.length > 1 ? "<span>".concat(stringsplit.slice(1).join(" "), "</span>") : "";
          var href = stringsplit[0];
          var string_with_url = "<a target='_blank' href='".concat(href, "'>").concat(href, "</a>").concat(resttext);
          array_text[index] = string_with_url;
        }
      });
      return setTextWithURL(array_text.join(" "));
    } else {
      return setTextWithURL(text);
    }
  };

  var moveCaretToEnd = function moveCaretToEnd() {
    var el = textRef.current;
    var range = document.createRange();
    var sel = window.getSelection();
    var count_element = el.childNodes.length - 1;
    range.setStart(el.childNodes[count_element], el.childNodes[count_element].length || 1);
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);
  };

  var inRender = function inRender() {
    moveCaretToEnd();
    changeStringWithURLFormat();
    onChangeText(text);
    onChangeHtml(text_with_URL);
  };

  _react["default"].useEffect(inRender);

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-area",
    ref: textRef,
    style: inlineStyle,
    autoFocus: true,
    contentEditable: true,
    suppressContentEditableWarning: true,
    onInput: function onInput(e) {
      if (e.target.innerText.length > 0) setText(e.target.innerText);
    },
    dangerouslySetInnerHTML: {
      __html: text_with_URL
    }
  });
};

var _default = URLTextEditor;
exports["default"] = _default;