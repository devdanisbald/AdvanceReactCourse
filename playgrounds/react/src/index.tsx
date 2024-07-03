import React from "react";
import ReactDOM from "react-dom/client";
import { Select } from "@ds.e/react";


import '@ds.e/scss/lib/Utilities.css'
import '@ds.e/scss/lib/Text.css'
import '@ds.e/scss/lib/Margin.css'
import '@ds.e/scss/lib/Select.css'
import '@ds.e/scss/lib/global.css'

const options = [{
    label: 'Strict Black',
    value: 'strict-black',
		hexValue: '#000'
}, {
    label: 'Heavenly Green',
    value: 'heavenly-green',
		hexValue: '#5ece7b'
}, {
    label: 'Sweet Pink',
    value: 'pink',
		hexValue: '#ff33cc'
}]

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<Select options={options} />
);

