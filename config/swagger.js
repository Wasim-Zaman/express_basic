const path = require("path");
const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "APP NAME",
    version: "1.0.0",
    description: "APIs Documentation",
    contact: {
      name: "Your Name",
      email: "your_email@example.com",
    },
  },
  servers: [
    {
      url: "http://localhost:8080",
      description: "Development server",
    },
    // add more hosts...
  ],
};

var options = {
  swaggerDefinition: swaggerDefinition,
  apis: [
    path.join(__dirname, "../docs/swagger/testDocs.js"),
    // add more paths...
  ],
};

var swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
