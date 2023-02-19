import { z } from "zod";
import dotenv from "dotenv";
import path from "path";

dotenv.config({
	path:
		process.env.NODE_ENV === "production"
			? path.join(__dirname, "..", "..", "..", ".env")
			: path.join(__dirname, "..", "..", "..", ".env.local"),
});

const environmentSchema = z.object({
	api: z.object({
		metadata: z.object({
			image: z.string(),
		}),
	}),
	app: z.object({
		port: z.number().positive().finite(),
		host: z.string().url(),
		origin: z.string().array(),
	}),
	secret: z.object({}),
	db: z.object({}),
});

export const environment = environmentSchema.parse({
	api: {
		metadata: {
			image: "/image",
		},
	},
	app: {
		port: parseInt(process.env.PORT as string),
		host: `http://localhost:${process.env.PORT}/`,
		origin: [
			// server
			`http://localhost:${process.env.PORT}/`,
			// client
			`http://localhost:${process.env.CLIENT_PORT}/`,
		],
	},
	secret: {},
	db: {},
});
