import {colors, levelColors, makeTheme} from "../mixins.js";

const arcColors = {
	blue: "#69C3FF",
	green: "#3CEC85",
	greenalt: "#A4EF58",
	grey: "#808080",
	orange: "#FF955C",
	pink: "#F38CEC",
	purple: "#B78AFF",
	red: "#E35535",
	salmon: "#FF738A",
	transparent: "#00000000",
	turquoize: "#22ECDB",
	yellow: "#EACD61",
};

const arcLevels = {
	danger: "#E35535",
	success: "#3CEC85",
	warning: "#FF955C",
	info: "#69C3FF",
};

const arc = makeTheme(
	"arc",
	Object.assign(
		{
			primary: "#9DACC3",
			primaryalt: "#364154",
			uiborder: "#131720",
			uibackground: "#222A38",
			uibackgroundalt: "#1D232F",
			default: "#b8c6d1",
			defaultMain: "#b8c6d1",
			defaultalt: "#576375",
		},
		colors,
		levelColors,
	),
);

const arcEolstorm = makeTheme(
	"arc-eolstorm",
	Object.assign(
		{
			primary: "#9DACC3",
			primaryalt: "#364154",
			uiborder: "#131720",
			uibackground: "#222A38",
			uibackgroundalt: "#1D232F",
			default: "#ffffff",
			defaultMain: "#ffffff",
			defaultalt: "#576375",
		},
		arcColors,
		arcLevels,
	),
);
const arcEggplant = makeTheme(
	"arc-eggplant",
	Object.assign(
		{
			primary: "#a3a5d6",
			primaryalt: "#231e36",
			uiborder: "#0b0812",
			uibackground: "#181424",
			uibackgroundalt: "#14101f",
			default: "#ffffff",
			defaultMain: "#ffffff",
			defaultalt: "#585775",
		},
		arcColors,
		arcLevels,
	),
);
const arcBlueBerry = makeTheme(
	"arc-blueberry",
	Object.assign(
		{
			primary: "#a4b9db",
			primaryalt: "#222d47",
			uiborder: "#0d111f",
			uibackground: "#161a2b",
			uibackgroundalt: "#111524",
			default: "#ffffff",
			defaultMain: "#ffffff",
			defaultalt: "#576275",
		},
		arcColors,
		arcLevels,
	),
);

export default {arc, arcBlueBerry, arcEggplant, arcEolstorm};
