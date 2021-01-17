import "./style.css";
import URLTextEditor from "./component";

const App = () => {
	return (
		<div className="app">
			<h1>Simple URL Text Editor</h1>

			<URLTextEditor
				inlineStyle={{ width: "50%" }}
				onChangeText={(plain_text) => console.log(plain_text)}
				onChangeHtml={(with_tag) => console.log(with_tag)}
			/>
		</div>
	);
};

export default App;
