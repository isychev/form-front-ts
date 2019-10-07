import { getDefaultFormState, retrieveSchema, toIdSchema, } from "react-jsonschema-form/lib/utils";
const getStateFromProps = function (formSchema) {
    const schema = formSchema.schema, _a = formSchema.uiSchema, uiSchema = _a === void 0 ? {} : _a, formData = formSchema.formData, idPrefix = formSchema.idPrefix;
    const definitions = schema.definitions;
    const newFormData = getDefaultFormState(schema, formData, definitions);
    const retrievedSchema = retrieveSchema(schema, definitions, formData);
    const idSchema = toIdSchema(retrievedSchema, uiSchema["ui:rootFieldId"], definitions, formData, idPrefix);
    return {
        schema: schema,
        uiSchema: uiSchema,
        idSchema: idSchema,
        formData: newFormData,
        errors: [],
        errorSchema: {},
    };
};
export default getStateFromProps;
