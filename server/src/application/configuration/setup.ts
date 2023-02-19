import bodyParser from "body-parser";
// import cors from "cors";
import { Application } from "express";

export const setup = (app: Application) => {
	// app.use(cors());
	app.use(
		bodyParser.json({ limit: "100kb" }),
		bodyParser.urlencoded({
			extended: false,
			limit: "100kb",
		}),
		bodyParser.raw({
			type: "application/octet-stream",
			limit: "100kb",
		}),
	);
};
