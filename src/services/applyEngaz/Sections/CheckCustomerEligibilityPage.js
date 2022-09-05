import React from 'react'
import { useSelector } from 'react-redux';
import Grid from "@mui/material/Grid";
import ClientValidty from './ClientValidty';

const CheckCustomerEligibilityPage = ({ errors, values, handleChange, setFieldValue }) => {
    const language = useSelector(state => state.language.language);
    console.log(setFieldValue)
    const checkCustomerEligibilityContent =  <ClientValidty
                                                values={values}
                                                errors={errors}
                                                handleChange={handleChange}
                                                setFieldValue={setFieldValue}
                                            />

    return (
        <div>
            <Grid
                container
                spacing={3}
                dir={language === "ar" ? "rtl" : "ltr"}
                className={language === "ar" ? "remove__left--padding" : "remove__right--padding"}
            >
                {checkCustomerEligibilityContent}
            </Grid>
        </div>
    )
}

export default CheckCustomerEligibilityPage;