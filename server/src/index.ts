import { environment } from "./application/configuration/environment";
import { server } from "./application/configuration/server";
import { Request, Response } from "express";

const main = async () => {
	const app = await server();

	app.get("/checkhealth", async (req: Request, res: Response) => {
		console.log("HIT ENDPOINT: /checkhealth [ GET ]");

		res.status(200);
		res.json({
			status: "OK",
			code: "200",
			message: "I’m okay! 😁😁😁",
			uptime: process.uptime(),
			timestamp: Date.now(),
			response_time: process.hrtime()[1],
			links: {
				self: `${req.protocol}://${req.get("host")}${
					req.originalUrl
				}`,
			},
		});
		res.end();
	});

	app.listen(environment.app.port, () =>
		console.log(
			`[ App is running on pid: ${process.pid} & url: ${environment.app.host} ]`,
		),
	);
};

main();

process
	.on("SIGTERM", () => {
		console.log("SIGTERM signal received.");
		console.log("PID PROCESS: " + process.pid);
		console.log("SIGTERM signal received: closing HTTP server");
		process.exit(0);
	})
	.on("SIGINT", () => {
		console.log("Server is shut down!");
		process.exit(0);
	})
	.on("unhandledRejection", (error) => {
		console.log(`unhandledRejaction captured: ${error}`);
		process.exit(0);
	})
	.on("uncaughtException", (error) => {
		console.log(`uncaughtException captured: ${error}`);
		process.exit(0);
	});
