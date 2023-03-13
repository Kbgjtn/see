/** @type {import('ts-jest').JestConfigWithTsJest} */

const config = {
	/* Preference settings */
	verbose: true, // verbose enabled
	rootDir: "./",

	preset: "ts-jest",
	testEnvironment: "node",

	/* Global test preference */
	clearMocks: true,
	coveragePathIgnorePatterns: ["/node_modules", "/tests/"],
	collectCoverage: true,
	setupFiles: ["dotenv/config"],
};

export default config;
