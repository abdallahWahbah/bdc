import React, {useState} from 'react'
import { CustomerInformation, FinancialEligibilityInformation, Generaleligibilityinformation, UpcomingStep1, UpcomingStep2 } from './Inputs/Schema';
import InitialValuesValidators from './Inputs/InitialValuesValidators';
import * as yup from 'yup';
import { FormikWizard } from "formik-wizard-form";
import { Box, Stepper, Button, Step, StepLabel, Dialog, DialogContent, DialogContentText } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';
import ConfirmationDialog from './Dialogs/ConfirmationDialog';

import {CustomerInformationPage, 
        FinancialEligibilityInformationPage, 
        GeneraleligibilityinformationPage, 
        UpcomingStepPage1,
        UpcomingStepPage2} from './Inputs/PageData';

const WizardForm = () => 
{
    const [openDialog, setOpenDialog] = useState(false);
    const language = useSelector(state => state.language.language);
    const navigate = useNavigate();
    const { t } = useTranslation();

    const initialValues1 = InitialValuesValidators("initialValues", CustomerInformation).initialValues;
    const initialValues2 = InitialValuesValidators("initialValues", FinancialEligibilityInformation).initialValues;
    const initialValues3 = InitialValuesValidators("initialValues", Generaleligibilityinformation).initialValues;
    const initialValues4 = InitialValuesValidators("initialValues", UpcomingStep1).initialValues;
    const initialValues5 = InitialValuesValidators("initialValues", UpcomingStep2).initialValues;
    
    const validator1 = yup.object(InitialValuesValidators("validators", CustomerInformation).validators);
    const validator2 = yup.object(InitialValuesValidators("validators", FinancialEligibilityInformation).validators);
    const validator3 = yup.object(InitialValuesValidators("validators", Generaleligibilityinformation).validators);
    const validator4 = yup.object(InitialValuesValidators("validators", UpcomingStep1).validators);
    const validator5 = yup.object(InitialValuesValidators("validators", UpcomingStep2).validators);

    const initialValues = {...initialValues1, 
            ...initialValues2, 
            ...initialValues3, 
            ...initialValues4,
            ...initialValues5};

    const [finalValues, setFinalValues] = React.useState({});
    const [finished, setFinished] = React.useState(false);

    const handleOpenDialog = () => {setOpenDialog(true)};

    const saveDraft = (values) =>
    {
        console.log(values);
        let randomValue = uuidv4();
        localStorage.setItem(uuidv4(), JSON.stringify({...values, id: randomValue, status: "pending"}));
        navigate("/")
    }

    return (
        <div className='wizard'>
            <FormikWizard
                initialValues={initialValues}
                onSubmit={(values) => {
                    // setFinalValues(values);
                    setFinished(true);
                    console.log(values);
                    let randomValue = uuidv4();
                    localStorage.setItem(uuidv4(), JSON.stringify({...values, id: randomValue, status: "continue"}));
                    navigate("/")

                }}
                validateOnNext
                activeStepIndex={0}
                steps={[
                {
                    component: CustomerInformationPage,
                    validationSchema: validator1
                },
                {
                    component: FinancialEligibilityInformationPage,
                    validationSchema: validator2
                },
                {
                    component: GeneraleligibilityinformationPage,
                    validationSchema: validator3
                },
                {
                    component: UpcomingStepPage1,
                    validationSchema: validator4
                },
                {
                    component: UpcomingStepPage2,
                    validationSchema: validator5
                },
                ]}
            >
                {({
                    currentStepIndex,
                    renderComponent,
                    handlePrev,
                    handleNext,
                    isNextDisabled,
                    isPrevDisabled,
                    values
                }) => {
                return (
                    <>
                    <h1 className='wizard__main--header' dir={language === "ar" ? "rtl" :"ltr"}>
                        {t("Apply For Very Small Business Loan Request")}
                    </h1>
                    <div className='wizard__content'>
                        <Box 
                            sx={{ width: "100%", my: "1rem" }} 
                            dir={language === "ar" ? "rtl" :"ltr"} 
                            className={language === "ar" ? "wizard__custom-stepper" :""}
                        >
                            <Stepper activeStep={currentStepIndex}>
                                <Step completed={currentStepIndex > 0}>
                                    <StepLabel>{t("Customer information")}</StepLabel>
                                </Step>
                                <Step completed={currentStepIndex > 1}>
                                    <StepLabel>{t("Financial eligibility information")}</StepLabel>
                                </Step>
                                <Step completed={currentStepIndex > 2}>
                                    <StepLabel>{t("General eligibility information")}</StepLabel>
                                </Step>
                                <Step completed={currentStepIndex > 3}>
                                    <StepLabel>{t("Upcoming Step1")}</StepLabel>
                                </Step>
                                <Step completed={finished}>
                                    <StepLabel>{t("Upcoming Step2")}</StepLabel>
                                </Step>
                            </Stepper>
                        </Box>
                        <Box className='wizard__content--inputs' my="2rem">{renderComponent()}</Box>
                        <Box className='wizard__buttons'>
                            <Button
                                className="wizard__button--next"
                                variant="contained"
                                disabled={isNextDisabled}
                                type="primary"
                                onClick={currentStepIndex === 4 ? handleOpenDialog : handleNext}
                            >
                                {currentStepIndex === 4 ? t("Submit") : t("Continue")}
                            </Button>
                            {openDialog && (
                                <ConfirmationDialog 
                                    setOpenDialog={(value) => setOpenDialog(false)}
                                    handleNext={handleNext}
                                />
                            )}
                            
                            <div className={currentStepIndex !== 0 ? "wizard__buttons--autoLeft" : ""}>
                                <Button 
                                    sx={{backgroundColor: "#e8eaf6", color: "#908e8e", paddingLeft: "20px", paddingRight: "20px"}}
                                    onClick={() => navigate("/")}
                                >
                                    {t("Cancel")}
                                </Button>
                                {currentStepIndex !== 0 && (
                                    <Button 
                                        sx={{backgroundColor: "#333", color: "#fff", marginLeft: "30px"}}
                                        onClick={()=>{saveDraft(values)}}
                                    >
                                        {t("Save as Draft")}
                                    </Button>
                                )}
                            </div>
                            
                            {currentStepIndex !== 0 && (
                                <Button
                                    disabled={isPrevDisabled}
                                    type="primary"
                                    onClick={handlePrev}
                                    sx={{backgroundColor: "#e8eaf6", color: "#908e8e"}}
                                >
                                    {t("Previous")}
                                </Button>
                            )}
                        </Box>
                    </div>
                    {/* <Box>
                        <pre>{JSON.stringify(values, null, 2)}</pre>
                    </Box> */}
                    </>
                );
            }}
            </FormikWizard>
        </div>
    )
}

export default WizardForm