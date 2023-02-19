import express, { Application } from "express";
import { setup } from "./setup";

export const server = async () => {
	const app: Application = express();
	setup(app);

	return app;
};
