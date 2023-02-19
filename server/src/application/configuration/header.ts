import { NextFunction, Request, Response } from "express";
import { environment } from "./environment";

export const header = (req: Request, res: Response, next: NextFunction) => {
	res.removeHeader("X-Powered-By");

	if (environment.app.origin.includes(req.headers.origin!)) {
		res.setHeader("Access-Control-Allow-Origin", req.headers.origin!);
	}

	res.header(
		"Access-Control-Allow-Methods",
		"OPTIONS, GET, PUT, DELETE, POST",
	);
	res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
	res.header("Access-Control-Allow-Credentials", "true");
	res.setHeader("X-Content-Type-Options", "nosniff");
	res.setHeader(
		"Cache-control",
		"no-cache, no-store, max-age=0, must-revalidate",
	);

	res.setHeader("X-Permitted-Cross-Domain-Policies", "none");
	res.setHeader(
		"Content-Security-Policy",
		"default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
	);
	res.setHeader(
		"Strict-Transport-Security",
		"max-age=31536000; includeSubdomains;",
	);

	res.setHeader(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept",
	);

	res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
	res.setHeader("Access-Control-Max-Age", "86400");
	res.setHeader("Pragma", "no-cache");
	res.setHeader("Cross-Origin-Resource-Policy", "cross-origin");
	res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
	res.setHeader("Expires", "-1");
	res.setHeader("Content-Security-Policy", "script-src 'self'");
	res.setHeader("X-XSS-Protection", "0");
	res.setHeader("Referrer-Policy", "no-referrer");
	res.setHeader("X-Frame-Options", "DENY");

	next();
};
