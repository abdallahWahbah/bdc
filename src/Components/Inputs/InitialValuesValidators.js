
const InitialValuesValidators = (type, jsonObject, values) =>
{
    let initialValues = {};
    let validators = {};
    jsonObject.map(element =>
    {   
        if(type === "initialValues")
        {
            if(element.hasOwnProperty("initialValue")) 
            {
                initialValues[element.name] = element["initialValue"];
            }
        }
        if(type === "validators")
        {
            
            if(element.hasOwnProperty("validator")) 
            {
                validators[element.name] = element["validator"];
            }
            if (element.hasOwnProperty("validatorFunc")) 
            {
                validators[element.name] = element.validatorFunc(values);
            }
        }
    });
    return {initialValues, validators};
}

export default InitialValuesValidators;