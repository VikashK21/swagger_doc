const router = require("express").Router();
const ContrlT = new (require("../controllers/cusmoter.controller"))();

router.get("/", async (req, res, next) => {
  res.send({ message: "Ok api is working 🚀" });
});

router.get("/customers", ContrlT.allData);
/**
 * @swagger
 * /api/customers:
 *  get:
 *    description: Will get all the customers data.
 *    responses:
 *      '200':
 *        description: Success
 *      '400':
 *        description: Error message
 */

router.post("/customer", ContrlT.CreateData);
/**
 * @swagger
 * /api/customer:
 *  post:
 *    description: Used to create an entry of customer's data.
 *    responses:
 *      '201': 
 *        description: Object
 *      '400': 
 *        description: Error message
 *    produces:
 *      - application/json
 *    parameters: 
 *      - name: name
 *        in: formData
 *        required: true
 *        type: string
 *      - name: email
 *        in: formData
 *        required: true
 *        type: string
 *      - name: password
 *        in: formData
 *        required: true
 *        type: string
 *      - name: phone_num
 *        in: formData
 *        required: true
 *        type: string
 *      - name: description
 *        in: formData
 *        required: true
 *        type: string
 */

router.get("/customer/:id", ContrlT.DataById);
/**
 * @swagger
 * paths:
 *  /api/customer/{id}:
 *     get:
 *       parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *            type: integer
 *            minimum: 1
 *          description: The customer ID
 *       description: Will get all the customers data.
 *       responses:
 *         '200':
 *           description: Success
 *         '400':
 *           description: Error message
 */

module.exports = router;
