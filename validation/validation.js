// validation.js
import Joi from 'joi';

const loginSchema = Joi.object({
  email: Joi.string().email({ tlds: { allow: false } }).required(),
  password: Joi.string().min(6).required(),
  phone: Joi.string().min(10).pattern(/^\d{10}$/).required().messages({
    'string.pattern': 'Phone number can only contain numeric digits.',
    'any.required': 'Phone number is required.',
    'string.min': 'Phone number be at least 10 digits long.',
    'string.max': 'Phone numbercannot be longer than 10 digits long.',
  }),
  name: Joi.string().min(3).max(50).required().messages({
    'string.min': 'Name must be at least 3 characters long.',
    'string.max': 'Name cannot be longer than 50 characters.',
    'any.required': 'Name is required.'
  })
});

export { loginSchema };
