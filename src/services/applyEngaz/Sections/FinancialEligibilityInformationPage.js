import React from 'react'
import FormInputCreator from "../../../Components/Inputs/FormInputCreator";
import { FinancialEligibilityInformationSchema } from '../../../Components/Inputs/Schema';
import { useSelector } from 'react-redux';
import Grid from "@mui/material/Grid";

const FinancialEligibilityInformationPage = ({ errors, values, handleChange }) => {
    const language = useSelector(state => state.language.language);

    const financialEligibilityInformationContent = <FormInputCreator
                                                        jsonObject={FinancialEligibilityInformationSchema}
                                                        errors={errors}
                                                        values={values}
                                                        handleChange={handleChange} 
                                                    />;

    return (
        <div>
            <Grid
                container
                spacing={3}
                dir={language === "ar" ? "rtl" : "ltr"}
                className={language === "ar" ? "remove__left--padding" : "remove__right--padding"}
            >
                {financialEligibilityInformationContent}
            </Grid>
        </div>
    )
}

export default FinancialEligibilityInformationPage;