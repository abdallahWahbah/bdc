import React, { useState, useEffect } from 'react'
import {
    CustomerInformation,
    FinancialEligibilityInformation,
    Generaleligibilityinformation,
    EvaluationEligibilityInformation,
    UpcomingStep2
} from './Inputs/Schema';
import InitialValuesValidators from './Inputs/InitialValuesValidators';
import * as yup from 'yup';
import { FormikWizard } from "formik-wizard-form";
import { Box, Stepper, Button, Step, StepLabel, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';
import ConfirmationDialog from './Dialogs/ConfirmationDialog';
import { useLocation } from 'react-router-dom';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';

import {
    CustomerInformationPage,
    FinancialEligibilityInformationPage,
    GeneraleligibilityinformationPage,
    EvaluationEligibilityInformationPage,
    UpcomingStepPage2
} from './Inputs/PageData';
import { KeyboardArrowLeft } from '@mui/icons-material';
import RequiredFiles from './sections/RequiredFiles';

const WizardForm = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [screenWidth, setScreenWidth] = useState(null);
    const language = useSelector(state => state.language.language);
    const navigate = useNavigate();
    const location = useLocation();
    const { t } = useTranslation();

    useEffect(() => {
        console.log(window.innerWidth)
        setScreenWidth(window.innerWidth);
    }, [])

    const initialValues1 = InitialValuesValidators("initialValues", CustomerInformation).initialValues;
    const initialValues2 = InitialValuesValidators("initialValues", FinancialEligibilityInformation).initialValues;
    const initialValues3 = InitialValuesValidators("initialValues", Generaleligibilityinformation).initialValues;
    const initialValues4 = InitialValuesValidators("initialValues", EvaluationEligibilityInformation).initialValues;
    const initialValues5 = InitialValuesValidators("initialValues", UpcomingStep2).initialValues;

    const validator1 = yup.object(InitialValuesValidators("validators", CustomerInformation).validators);
    const validator2 = yup.object(InitialValuesValidators("validators", FinancialEligibilityInformation).validators);
    const validator3 = prop => {
        return yup.lazy(values => {
            return yup.object(InitialValuesValidators("validators", Generaleligibilityinformation, values).validators)
        })
    }
    let validator4 = InitialValuesValidators("validators", EvaluationEligibilityInformation).validators;
    const validator5 = yup.object(InitialValuesValidators("validators", UpcomingStep2).validators);

    let tempValidation  = {...validator4, ownerList: yup.array(yup.object({
        ownerType: yup.string().required("Type is required"),
        nationalID: yup.number().required("ID can't be empty")
    })).required("required").min(1, 'You need to provide at least 1 owner')
    };

    validator4 = yup.object(tempValidation)

    // let val4 = 
    // {
    //     ownerList: yup.array(yup.object({
    //         ownerType: yup.string().required("please, choose the owner type"),
    //         nationalID: yup.number().required("can't be empty")
    //     }))
    // }

    const initialValues = {...initialValues1, 
            ...initialValues2, 
            ...initialValues3, 
            ...initialValues4,
            ...initialValues5};

    const [finalValues, setFinalValues] = React.useState({});
    const [finished, setFinished] = React.useState(false);

    const saveDraft = (values) => {
        console.log(values);
        let randomValue = uuidv4();
        localStorage.setItem(uuidv4(), JSON.stringify({ ...values, id: randomValue, status: "Draft" }));
        navigate("/")
    }

    const handleConfirmation = (values) => {
        let randomValue = uuidv4();
        localStorage.setItem(uuidv4(), JSON.stringify({ ...values, id: randomValue, status: "Pending" }));
        navigate("/")
    }
    const steps = [
        t("Customer information"),
        t("Financial eligibility information"),
        t("General eligibility information"),
        t("Upcoming Step1"),
        t("Upcoming Step2"),
    ];

    // putting the buttons upon the footer when scrolling (reaching it)
    window.addEventListener('scroll', function () {
        var element = document.querySelector('.footer');
        var position = element.getBoundingClientRect();

        // checking whether fully visible
        if (position.top >= 0 && position.bottom <= window.innerHeight) {
            // console.log('Element is fully visible in screen');
        }

        // checking for partial visibility
        if (position.top < window.innerHeight && position.bottom >= 0) {
            // console.log('visible in screen');
            if (screenWidth <= 600) {
                document.querySelector(".wizard__buttons").classList.add("fixed__bottom--52")
            }
        }
        else {
            // console.log("not visible")
            if (screenWidth <= 600) {
                document.querySelector(".wizard__buttons").classList.remove("fixed__bottom--52")
            }
        }
    });
    return (
        <div className='wizard'>
            <FormikWizard
                initialValues={location.state || initialValues}
                onSubmit={(values) => {
                    // setFinalValues(values);
                    // setFinished(true);
                    console.log(values);

                    // console.log("first")
                    // setOpenDialog(true)

                }}
                validateOnNext
                activeStepIndex={0}
                steps={[
                    {
                        component: EvaluationEligibilityInformationPage,
                        // validationSchema: yup.object(val4)
                        validationSchema: validator4
                    },
                    {
                        component: FinancialEligibilityInformationPage,
                        // validationSchema: validator2
                    },
                    {
                        component: GeneraleligibilityinformationPage,
                        // validationSchema: validator3
                    },
                    {
                        component: EvaluationEligibilityInformationPage,
                        // validationSchema: validator4
                    },
                    {
                        component: UpcomingStepPage2,
                        // validationSchema: validator5
                    },
                    {
                        component: RequiredFiles,
                        // validationSchema: validator5
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
                            <h1 className='wizard__main--header' dir={language === "ar" ? "rtl" : "ltr"}>
                                {t("Apply For Very Small Business Loan Request")}
                            </h1>
                            <div className='wizard__content'>
                                {screenWidth <= 600 ? (
                                    <Box dir={language === "ar" ? "rtl" : "ltr"}>
                                        <Typography
                                            dir={language === "ar" ? "rtl" : "ltr"}
                                            sx={{ fontSize: "18px" }}
                                            className={screenWidth <= 600 ? `wizard__stepper--mobile` : ""}
                                        >
                                            {steps[currentStepIndex]}
                                        </Typography>

                                        <div className={`wizard__stepper--mobile-close-draft ${screenWidth <= 600 ? `wizard__stepper--mobile` : ""}`}>
                                            <SaveIcon
                                                onClick={() => { saveDraft(values) }}
                                                sx={{ margin: language === "ar" ? "0 0 0 10px" : "0 10px 0 0" }}

                                            />
                                            <CloseIcon onClick={() => navigate("/")} />
                                        </div>

                                    </Box>
                                ) : (
                                    <Box
                                        sx={{ width: "100%", my: "1rem" }}
                                        dir={language === "ar" ? "rtl" : "ltr"}
                                        className={language === "ar" ? "wizard__custom-stepper" : ""}
                                    >
                                        <Stepper alternativeLabel activeStep={currentStepIndex} className={language === "ar" ? "custom-wizard" : ""}>
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
                                                <StepLabel>{t("Evaluation Eligibility Information")}</StepLabel>
                                            </Step>
                                            <Step completed={currentStepIndex > 3}>
                                                <StepLabel>{t("check_customer_eligibility")}</StepLabel>
                                            </Step>
                                            <Step completed={finished}>
                                                <StepLabel>{t("required_documents")}</StepLabel>
                                            </Step>
                                        </Stepper>

                                    </Box>
                                )}
                                <Box className='wizard__content--inputs' my="2rem">{renderComponent()}</Box>
                                <Box
                                    className='wizard__buttons'
                                    style={screenWidth <= 600 ?
                                        {
                                            position: "fixed",
                                            bottom: "0",
                                            left: "0",
                                            right: "0",
                                            padding: "2rem",
                                            background: "#424242",
                                            color: "white",
                                        } : {}}
                                    dir={language === "ar" ? "rtl" : "ltr"}
                                >
                                    <>  <Button
                                        className="btn wizard__button--next"
                                        variant="contained"
                                        sx={{
                                            fontSize: language === "ar" ? "16px !important" : "",
                                            width: '200px'
                                        }}
                                        disabled={isNextDisabled}
                                        type="primary"
                                        onClick={handleNext}

                                    >
                                        {currentStepIndex === 5 ? t("Submit") : t("Continue")}
                                    </Button>
                                        {currentStepIndex !== 0 && (
                                            <Button
                                                className="btn btn__draft"
                                                sx={{
                                                    backgroundColor: "#666666",
                                                    color: "#fff",
                                                    width: '200px',
                                                    marginLeft: "30px",
                                                    fontSize: language === "ar" ? "16px !important" : "",
                                                    '&:hover': {
                                                        backgroundColor: "#817e7e",

                                                    }
                                                }}
                                                onClick={() => { saveDraft(values) }}
                                            >
                                                {t("Save as Draft")}
                                            </Button>
                                        )}
                                    </>
                                    {openDialog && (
                                        <ConfirmationDialog
                                            closeDialog={() => setOpenDialog(false)}
                                            handleConfirmation={() => handleConfirmation(values)}
                                        />
                                    )}

                                    {screenWidth <= 600 && (
                                        <h3 style={{ fontSize: "16px" }}>{currentStepIndex + 1} / {5}</h3>
                                    )}
                                    {screenWidth > 600 && (
                                        <div className={currentStepIndex !== 0 ? "wizard__buttons--autoLeft" : ""}>
                                            <Button
                                                className="btn"
                                                sx={{
                                                    margin: '0 24px',
                                                    backgroundColor: "#e8eaf6",
                                                    color: "#908e8e",
                                                    width: '200px',
                                                    fontSize: language === "ar" ? "16px !important" : ""
                                                }}
                                                onClick={() => navigate("/")}
                                            >
                                                {t("Cancel")}
                                            </Button>

                                        </div>
                                    )}

                                    {currentStepIndex !== 0 && (
                                        <Button
                                            className="btn"
                                            disabled={isPrevDisabled}
                                            type="primary"
                                            onClick={handlePrev}
                                            sx={{
                                                backgroundColor: "#e8eaf6",
                                                color: "#908e8e",
                                                width: '200px',

                                                fontSize: language === "ar" ? "16px !important" : ""
                                            }}
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