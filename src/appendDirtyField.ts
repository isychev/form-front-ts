const appendDirtyField = (
  allDirtyFields: string[] | undefined,
  fieldName: string,
): string[] => {
  if (!allDirtyFields) {
    return [fieldName];
  }
  if (!fieldName) {
    return allDirtyFields;
  }

  const formatFieldName = fieldName
    .split('_')
    .slice(1)
    .join('_');
  if (!formatFieldName || allDirtyFields.indexOf(formatFieldName) > -1) {
    return allDirtyFields;
  }
  return allDirtyFields.concat([formatFieldName]);
};
export default appendDirtyField;
