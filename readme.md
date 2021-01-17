## React Text Editor to format every url in text to a link

### Install

```js
npm i react-url-texteditor or /
yarn add react-url-texteditor
```

### Import

```js
import URLTextEditor from "react-url-texteditor";
```

### How to Use

```js
<URLTextEditor
	inlineStyle={{ width: "50%" }}
	onChangeText={(plain_text) => console.log(plain_text)}
	onChangeHtml={(with_tag) => console.log(with_tag)}
/>
```

- onChangeText: to get callback plain text value
- onChangeHtml: to get callback html format with 'a' tag
- inlineStyle: customize your texteditor style

### Demo

<a target="_blank" href="http://nostalgic-euler-40af46.netlify.app/">Go to demo</a>

###### currently support for http only
