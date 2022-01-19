// helper functions

function validateRequest(schema) {
    return async(req, res, next) => {
        try {
            const options = {
                abortEarly: false, // include all errors
                allowUnknown: true, // ignore unknown props
                stripUnknown: true // remove unknown props
            };

            const validatedBody = await schema.validate(req.body, options);
            req.body = validatedBody;
            next();
        } catch (error) {
            res.status(400).json({ errors: error.errors });
        }
    };
}

module.exports = {
    validateRequest: validateRequest
}