import CloseIcon from '@mui/icons-material/Close';
import SaveIcon from '@mui/icons-material/Save';
import { Box, Button, ButtonBase, Grid, Hidden, Step, StepLabel, Stepper, Tooltip, Typography } from '@mui/material';
import { FormikWizard } from "formik-wizard-form";
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import * as yup from 'yup';
import ConfirmationDialog from './Dialogs/ConfirmationDialog';
import InitialValuesValidators from './Inputs/InitialValuesValidators';
import {
    CustomerInformation, EvaluationEligibilityInformation, FinancialEligibilityInformation,
    Generaleligibilityinformation, UpcomingStep2
} from './Inputs/Schema';

import Close from '@mui/icons-material/Close';
import CommonMessageDialog from './Dialogs/CommonMessageDialog';
import {
    CustomerInformationPage, EvaluationEligibilityInformationPage, FinancialEligibilityInformationPage,
    GeneraleligibilityinformationPage, UpcomingStepPage2
} from './Inputs/PageData';
import RequiredFiles from './sections/RequiredFiles';

const WizardForm = () => {
    const [stepperPosition, setStepperPosition] = useState('')
    const [stepperBgColor, setStepperBgColor] = useState('transparent')
    const [fontColor, setFontColor] = useState('black')
    const [openDialog, setOpenDialog] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [dialogContent, setDialogContent] = useState('')
    const [dialogType, setDialogType] = useState('')

    const [openCloseOrDraftDialog, setOpenCloseOrDraftDialog] = useState(false)

    const handleDialogFunction = ((functionToExcute) => {
        if (functionToExcute === 'draft') {
            setOpenCloseOrDraftDialog(true)
            saveDraft()
            setOpenCloseOrDraftDialog(false)
            return
        }
        setOpenCloseOrDraftDialog(true)
        setOpenCloseOrDraftDialog(false)
        navigate("/")
        return

    })
    const language = useSelector(state => state.language.language);
    const navigate = useNavigate();
    const location = useLocation();
    const { t } = useTranslation();
    window.addEventListener("resize", () => setScreenWidth(window.innerWidth));
    window.addEventListener('scroll', (x) => {
        console.log('window.pageYOffset::', window.innerWidth);
        if (window.pageYOffset < 10) {
            setStepperPosition('')
            setStepperBgColor('transparent')
            setFontColor('#424242')

        } else {
            setStepperPosition('fixed')
            setStepperBgColor('#424242')
            setFontColor('white')

            //on scroll on mobile
        }
    }, true);

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

    let tempValidation = {
        ...validator4,
        ownerList: yup.array(yup.object({
            ownerType: yup.string().required("Type is required"),
            nationalID: yup.number().required("ID can't be empty")
        })).required("required").min(1, 'You need to provide at least 1 owner'),
        supplierList: yup.array(yup.object({
            name: yup.string().required("Name is required"),
            crn: yup.number().required("Please write crn"),
            amount: yup.number().required("Please write the amount"),
            soldItems: yup.string().required("Please write the sold items")
        })).required("required").min(3, 'You need to provide at least 3 suppliers')
    };

    validator4 = yup.object(tempValidation)

    const initialValues = {
        ...initialValues1,
        ...initialValues2,
        ...initialValues3,
        ...initialValues4,
        ...initialValues5
    };

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
        t("Evaluation Eligibility Information"),
        t("check_customer_eligibility"),
        t("required_documents"),

    ];

    // putting the buttons upon the footer when scrolling (reaching it)
    window.addEventListener('scroll', function () {
        var element = document.querySelector('.footer');
        var position = element.getBoundingClientRect();

        // checking whether fully visible
        // checking for partial visibility
        if (position.top < window.innerHeight && position.bottom >= 0) {
            // console.log('visible in screen');
            if (screenWidth <= 600) {
                document.querySelector(".wizard__buttons").classList.add("fixed__bottom--70")
            }
        }
        else {
            // console.log("not visible")
            if (screenWidth <= 600) {
                document.querySelector(".wizard__buttons").classList.remove("fixed__bottom--70")
            }
        }

    });
    return (
        <div className='wizard'>
            <FormikWizard
                initialValues={
                    {
                        ...initialValues,
                        ...location.state,
                        maxValue: '100000',
                    }

                }
                onSubmit={(values) => {
                    // setFinalValues(values);
                    setFinished(true);
                    console.log(values);

                    // console.log("first")
                    setOpenDialog(true)

                }}
                validateOnNext
                activeStepIndex={0}
                steps={[
                    {
                        component: CustomerInformationPage,
                        // validationSchema: validator1
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
                    setFieldValue,
                    values
                }) => {
                    return (
                        <>
                            <Box className='wizard__main--header' dir={language === "ar" ? "rtl" : "ltr"}>
                                <h1>
                                    {t("Apply For Very Small Business Loan Request")}
                                </h1>
                                <Hidden mdDown>
                                    <div>
                                        <ButtonBase
                                            className={`wizard__stepper--mobile-close-draft`}
                                            onClick={() => {
                                                setDialogContent('save_draft_msg')
                                                setDialogType('draft')
                                                setOpenCloseOrDraftDialog(true)
                                            }}                                          >
                                            <SaveIcon style={{ color: "#424242", fontSize: '30px', margin: '0 16px' }} />
                                        </ButtonBase>
                                        <ButtonBase
                                            className={`wizard__stepper--mobile-close-draft`}
                                            onClick={() => {
                                                setDialogContent('close_form_msg')
                                                setDialogType('close')
                                                setOpenCloseOrDraftDialog(true)
                                            }}                                    >
                                            <Close color='error' style={{ fontSize: '30px', margin: '0 16px' }}
                                            />
                                        </ButtonBase>
                                    </div>
                                </Hidden>
                            </Box>
                            <div className='wizard__content'>

                                <Hidden smUp>
                                    <Box dir={language === "ar" ? "rtl" : "ltr"} className={`wizard__stepper--mobile`}
                                        sx={{
                                            position: stepperPosition,
                                            width: '100%',
                                            backgroundColor: stepperBgColor,
                                            color: fontColor,
                                            top: '90px',
                                            left: 0,
                                            right: 0
                                        }}
                                    >
                                        <Typography
                                            dir={language === "ar" ? "rtl" : "ltr"}
                                            sx={{ fontSize: "18px" }}

                                        >
                                            {steps[currentStepIndex]}
                                        </Typography>

                                        <div className={`wizard__stepper--mobile-close-draft`}>
                                            <SaveIcon
                                                onClick={() => {
                                                    setDialogContent('save_draft_msg')
                                                    setDialogType('draft')
                                                    setOpenCloseOrDraftDialog(true)
                                                }}
                                                sx={{
                                                    margin: language === "ar" ? "0 0 0 10px" : "0 10px 0 0",
                                                }}

                                            />
                                            <CloseIcon
                                                onClick={() => {
                                                    setDialogContent('close_form_msg')
                                                    setDialogType('close')
                                                    setOpenCloseOrDraftDialog(true)
                                                }}
                                            />
                                        </div>

                                    </Box>
                                </Hidden>
                                <Hidden smDown>
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
                                </Hidden>

                                <Box className='wizard__content--inputs' my="2rem"
                                >{renderComponent()}</Box>
                                <Box
                                    className='wizard__buttons'
                                    style={screenWidth <= 600 ?
                                        {
                                            position: "fixed",
                                            bottom: "70px",
                                            left: "0",
                                            right: "0",
                                            padding: "16px",
                                            background: "#424242",
                                            color: "white",
                                        } : {}}
                                    dir={language === "ar" ? "rtl" : "ltr"}
                                >

                                    <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center' }}>

                                        <Button
                                            className="btn wizard__button--next"
                                            variant="contained"
                                            sx={{
                                                fontSize: language === "ar" ? "16px !important" : "",
                                                width: '200px',

                                            }}
                                            disabled={isNextDisabled}
                                            type="primary"
                                            onClick={handleNext}

                                        >
                                            {currentStepIndex === 5 ? t("Submit") : t("Continue")}
                                        </Button>
                                    </div>
                                    {screenWidth <= 600 && (
                                        <h3 style={{ fontSize: "16px" }}>{currentStepIndex + 1} / {6}</h3>
                                    )}
                                    <Grid style={{ display: 'flex', justifyContent: 'space-between' }}>

                                        <Button
                                            className="btn"
                                            disabled={isPrevDisabled || currentStepIndex === 0}
                                            type="primary"
                                            onClick={handlePrev}
                                            sx={{
                                                opacity: currentStepIndex === 0 ? 0 : 1,

                                                backgroundColor: "#e8eaf6",
                                                color: "black",
                                                width: '200px',
                                                fontSize: language === "ar" ? "16px !important" : "",
                                                '&:hover': {
                                                    cursor: currentStepIndex === 0 ? 'default' : 'pointer',
                                                    color: 'white',
                                                    backgroundColor: "#8f8f8f",

                                                }
                                            }}
                                        >
                                            {t("Previous")}
                                        </Button>

                                    </Grid>
                                </Box>
                                {openDialog && (
                                    <ConfirmationDialog
                                        closeDialog={() => setOpenDialog(false)}
                                        handleConfirmation={() => handleConfirmation(values)}

                                    />

                                )}
                                {openCloseOrDraftDialog && (
                                    <CommonMessageDialog
                                        closeDialog={() => setOpenCloseOrDraftDialog(false)}
                                        handleConfirmation={() => handleDialogFunction(dialogType)}
                                        dialogContent={dialogContent}

                                    />

                                )}
                            </div>
                            {/* <Box>
                        <pre>{JSON.stringify(values, null, 2)}</pre>
                    </Box> */}
                        </>
                    );
                }}
            </FormikWizard>
        </div >
    )
}

export default WizardForm