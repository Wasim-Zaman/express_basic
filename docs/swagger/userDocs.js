/**
 * @swagger
 * /:
 *   get:
 *     summary: Home Page
 *     description: Retrieve the home page content.
 *     responses:
 *       200:
 *         description: Home page content
 *         content:
 *           text/html:
 *             schema:
 *               type: string
 *               example: "<h1>Welcome to our application</h1>"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                   example: 500
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: Internal server error
 *                 data:
 *                    type: object
 *                    example: null
 */
