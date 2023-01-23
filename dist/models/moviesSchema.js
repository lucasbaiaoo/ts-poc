import joi from "joi";
export var moviesSchema = joi.object({
    name: joi.string().trim().required(),
    streamingService: joi.string().trim().required(),
    genre: joi.string().trim().required()
});
