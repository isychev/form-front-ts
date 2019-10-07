const filterErrorForDirtyFields = function (errors, dirtyFields) {
    return errors.filter(function (error) {
        return dirtyFields.indexOf(error.property.slice(1)) > -1;
    });
};
export default filterErrorForDirtyFields;
