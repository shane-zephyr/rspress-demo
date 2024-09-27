import * as path from "path";
import { defineConfig } from "rspress/config";
import { withZephyr } from "zephyr-webpack-plugin";

const zephyrRsbuildPlugin = () => ({
	name: "zephyr-rsbuild-plugin",
	setup(api) {
		api.modifyRspackConfig((rspackConfig) => {
			return withZephyr()(rspackConfig);
		});
	},
});

export default defineConfig({
	root: path.join(__dirname, "docs"),
	title: "Zephyr Docs Demo",
	description: "Rspack-based Static Site Generator",
	icon: "/rspress-icon.png",
	plugins: [zephyrRsbuildPlugin()],
	logo: {
		light: "/rspress-light-logo.png",
		dark: "/rspress-dark-logo.png",
	},
	themeConfig: {
		socialLinks: [
			{
				icon: "github",
				mode: "link",
				content: "https://github.com/web-infra-dev/rspress",
			},
		],
	},
});
