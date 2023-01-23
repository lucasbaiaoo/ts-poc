import joi from "joi";
export var moviesSchema = joi.object({
    name: joi.string().trim().required(),
    streaming_service: joi.string().trim().required(),
    genre: joi.string().trim().required()
});
