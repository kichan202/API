const Joi = require('@hapi/joi');


//Register validation
const registerValidation = (data) => {
    //data will be recieved from the request.body
    const schema = Joi.object({
        name: Joi.string()
        .min(6)
        .required(),
        email: Joi.string()
        .min(6)
        .required()
        .email(),
        password: Joi.string()
        .min(8).
        required()
    });

    return schema.validate(data);

};

//Login validation
const  loginValidation = (data) => {
    //data will be recieved from the request.body
    const schema = Joi.object({
        email: Joi.string()
        .min(6)
        .required()
        .email(),
        password: Joi.string()
        .min(8).
        required()
    });

    return schema.validate(data);

};


module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;


