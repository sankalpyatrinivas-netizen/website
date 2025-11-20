import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Sankalp Yatri Nivas API",
      version: "1.0.0",
    },
  },
  apis: ["./src/routes/*.ts"], 
};

export const swaggerSpec = swaggerJsdoc(swaggerOptions);
export const swaggerUiMiddleware = swaggerUi;
