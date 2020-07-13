"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const mikro_orm_1 = require("mikro-orm");
async function bootstrap() {
    const fs = require('fs');
    const keyFile = fs.readFileSync('/home/witas/localhost.key');
    const certFile = fs.readFileSync('/home/witas/localhost.crt');
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        httpsOptions: {
            key: keyFile,
            cert: certFile,
        }
    });
    app.enableCors({ exposedHeaders: ['X-Selected-Organisation-Id'] });
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.use((req, res, next) => {
        req.entityManager = app.get(mikro_orm_1.EntityManager);
        next();
    });
    await app.listen(3000, '0.0.0.0');
    console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
//# sourceMappingURL=main.js.map