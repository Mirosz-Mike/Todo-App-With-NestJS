import { NestFactory } from "@nestjs/core";
import "dotenv/config";
import { AppModule } from "./app.module";
import { Logger } from "@nestjs/common";

const port = process.env.PORT || 8080;

// Mon endpoint equivalent d'un index.js dans express
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  Logger.log(`Server running on ${port}`);
}
bootstrap();
