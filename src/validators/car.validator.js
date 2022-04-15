import Joi from "joi";

export const carValidator = Joi.object({
    model:Joi.string().min(1).max(20).required().messages({
        'string.empty':'Model can`t be empty ',
        'string.min':'Model can be minimum 1 symbol'
        }),
    price:Joi.number().min(0).max(1000000).required().messages({
        'string.min': 'Price не може бути меншим 0',
        'string.max': 'Price не може бути більшим 1000000'
    }),
    year:Joi.number().min(1990).max(new Date().getFullYear()).required()
});