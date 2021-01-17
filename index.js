import React from "react";
import "./style.css";

const URLTextEditor = ({
  onChangeText,
  onChangeHtml,
  inlineStyle
}) => {
  const [text, setText] = React.useState(" ");
  const [text_with_URL, setTextWithURL] = React.useState(text);
  const textRef = React.useRef();

  const changeStringWithURLFormat = () => {
    const is_done_with_space = /\s+$/.test(text);

    if (is_done_with_space) {
      let array_text = [...text.split(" ")];
      array_text.forEach(string => {
        if (string.substr(0, 4) === "http") {
          var index = array_text.indexOf(string);
          const stringsplit = string.split(/(\s+)/);
          const resttext = stringsplit.length > 1 ? `<span>${stringsplit.slice(1).join(" ")}</span>` : "";
          const href = stringsplit[0];
          const string_with_url = `<a target='_blank' href='${href}'>${href}</a>${resttext}`;
          array_text[index] = string_with_url;
        }
      });
      return setTextWithURL(array_text.join(" "));
    } else {
      return setTextWithURL(text);
    }
  };

  const moveCaretToEnd = () => {
    var el = textRef.current;
    const range = document.createRange();
    const sel = window.getSelection();
    let count_element = el.childNodes.length - 1;
    range.setStart(el.childNodes[count_element], el.childNodes[count_element].length || 1);
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);
  };

  const inRender = () => {
    moveCaretToEnd();
    changeStringWithURLFormat();
    onChangeText(text);
    onChangeHtml(text_with_URL);
  };

  React.useEffect(inRender);
  return /*#__PURE__*/React.createElement("div", {
    className: "text-area",
    ref: textRef,
    style: inlineStyle,
    autoFocus: true,
    contentEditable: true,
    suppressContentEditableWarning: true,
    onInput: e => {
      if (e.target.innerText.length > 0) setText(e.target.innerText);
    },
    dangerouslySetInnerHTML: {
      __html: text_with_URL
    }
  });
};

export default URLTextEditor;