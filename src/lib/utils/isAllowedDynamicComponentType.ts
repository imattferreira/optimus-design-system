
const isAllowedDynamicComponentType = (
  allowedDynamicComponentTypes: string[],
  dynamicComponentType?: string,
) => (
  dynamicComponentType
    && allowedDynamicComponentTypes.includes(dynamicComponentType)
)

export default isAllowedDynamicComponentType;
