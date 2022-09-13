import React from 'react'
import FormInputCreator from '../../../Components/Inputs/FormInputCreator'
import { CustomerInformationSchema } from '../../../Components/Inputs/Schema';
import { useSelector } from 'react-redux';
import Grid from "@mui/material/Grid";
import { useFormikContext } from 'formik';

const CustomerInformationPage = (props) => {
    const { touched, errors, values, handleChange, setTouched, getFieldMeta, isNextDisabled } = props
    const language = useSelector(state => state.language.language);

    const customerInformationContent = <FormInputCreator
        jsonObject={CustomerInformationSchema}
        errors={errors}
        values={values}
        setTouched={setTouched}
        touched={touched}
        isNextDisabled={isNextDisabled}
        getFieldMeta={getFieldMeta}
        handleChange={handleChange}
    />;

    return (
        <div>
            <>{JSON.stringify(values?.nextClicked)} </>
            <Grid
                container
                spacing={3}
                dir={language === "ar" ? "rtl" : "ltr"}
                className={language === "ar" ? "remove__left--padding" : "remove__right--padding"}
            >
                {customerInformationContent}
            </Grid>
        </div>
    )
}

export default CustomerInformationPage;