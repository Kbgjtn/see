"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const zod_1 = require("zod");
dotenv_1.default.config({
    path: process.env.NODE_ENV == "production"
        ? path_1.default.join(__dirname, "..", "..", ".env")
        : path_1.default.join(__dirname, "..", "..", ".env.local"),
});
console.log(path_1.default.join(__dirname, "..", "..", ".env.local"));
const environmentSchema = zod_1.z.object({
    api: zod_1.z.object({
        metadata: zod_1.z.object({
            image: zod_1.z.string(),
        }),
    }),
    app: zod_1.z.object({
        port: zod_1.z.number().positive().finite(),
        host: zod_1.z.string().url(),
        origin: zod_1.z.string().array(),
    }),
    secret: zod_1.z.object({}),
    db: zod_1.z.object({}),
});
exports.environment = environmentSchema.parse({
    api: {
        metadata: {
            image: "/image",
        },
    },
    app: {
        port: parseInt(process.env.PORT),
        host: `http://localhost:${process.env.PORT}/`,
        origin: [
            `http://localhost:${process.env.PORT}/`,
            `http://localhost:${process.env.CLIENT_PORT}/`,
        ],
    },
    secret: {},
    db: {},
});
//# sourceMappingURL=config.environment.js.map