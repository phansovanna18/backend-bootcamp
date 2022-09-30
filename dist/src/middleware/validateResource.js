"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Why we write function? this technique is cuurying. the resone is we want to execute the function with our schema inside of middleware and we want that to return the another function and that next function it's gonna take  the req, res in next .
const validate = (schema) => (req, res, next) => {
    try {
        schema.parse({
            body: req.body,
            query: req.query,
            params: req.params,
        });
        next();
    }
    catch (error) {
        return res.status(400).send(error);
    }
};
exports.default = validate;
