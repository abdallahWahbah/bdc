import { Box, Button, ButtonBase, Grid, Hidden, Step, StepLabel, Stepper, Typography } from '@mui/material';
import { FormikWizard } from "formik-wizard-form";
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import InitialValuesValidators from '../../../Components/Inputs/InitialValuesValidators';
import {
    CustomerInformationSchema, EvaluationEligibilityInformationSchema, FinancialEligibilityInformationSchema,
    GeneralEligibilityinformationSchema
} from '../../../Components/Inputs/Schema';
// import { v4 as uuidv4 } from 'uuid';
import { default as Close, default as CloseIcon } from '@mui/icons-material/Close';
import SaveIcon from '@mui/icons-material/Save';
import { useLocation } from 'react-router-dom';
import CommonMessageDialog from '../../../Components/Dialogs/CommonMessageDialog';
import SubmittingDialog from '../../../Components/Dialogs/SubmittingDialog';
import CheckCustomerEligibilityPage from '../Sections/CheckCustomerEligibilityPage';
import CustomerInformationPage from '../Sections/CustomerInformationPage';
import EvaluationEligibilityInformationPage from '../Sections/EvaluationEligibilityInformationPage';
import FinancialEligibilityInformationPage from '../Sections/FinancialEligibilityInformationPage';
import GeneralEligibilityinformationPage from '../Sections/GeneralEligibilityinformationPage';
import RequiredFiles from '../Sections/RequiredFiles';

const WizardForm = () => {
    const [stepperPosition, setStepperPosition] = useState('')
    const [stepperBgColor, setStepperBgColor] = useState('transparent')
    const [fontColor, setFontColor] = useState('black')
    const [openDialog, setOpenDialog] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [dialogContent, setDialogContent] = useState('')
    const [dialogType, setDialogType] = useState('')
    const [finalValues, setFinalValues] = useState({});
    const [finished, setFinished] = useState(false);
    const [openCloseOrDraftDialog, setOpenCloseOrDraftDialog] = useState(false)
    const [showTrackNumberPopup, setShowTrackNumberPopup] = useState(false);
    const [trackNumberMessage, setTrackNumberMessage] = useState("");
    const [popupActions, setPopupActions] = useState("");
    const language = useSelector(state => state.language.language);
    const navigate = useNavigate();
    const location = useLocation();
    const { t } = useTranslation();

    // Initial Values for the form
    const customerInfoInitialValues = InitialValuesValidators("initialValues", CustomerInformationSchema).initialValues;
    const financialInfoInitialValues = InitialValuesValidators("initialValues", FinancialEligibilityInformationSchema).initialValues;
    const generalEligibilityInitialValues = InitialValuesValidators("initialValues", GeneralEligibilityinformationSchema).initialValues;
    const evaluationEligibilityInitialValues = InitialValuesValidators("initialValues", EvaluationEligibilityInformationSchema).initialValues;

    // Validators for the form
    const customerInfoValidators = yup.object().shape(InitialValuesValidators("validators", CustomerInformationSchema).validators);
    const financialEligibilityValidators = yup.object(InitialValuesValidators("validators", FinancialEligibilityInformationSchema).validators);
    const generalEligibilityValidators = prop => {
        return yup.lazy(values => {
            return yup.object(InitialValuesValidators("validators", GeneralEligibilityinformationSchema, values).validators)
        })
    }
    let evaluationEligibilityValidators = InitialValuesValidators("validators", EvaluationEligibilityInformationSchema).validators;
    const checkCustomerEligibilityValidators = yup.object({
        maxLoanAmount: yup.number()
            .required("Please, enter the loan amount")
    })

    let additionalEvaluationEligibilityValidators = {
        ...evaluationEligibilityValidators,
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

    evaluationEligibilityValidators = yup.object(additionalEvaluationEligibilityValidators)
    const requiredFilesValidators = yup.object({ conditions: yup.bool().oneOf([true], t('Please, accept the conditions')) });

    const initialValues = {
        ...customerInfoInitialValues,
        ...financialInfoInitialValues,
        ...generalEligibilityInitialValues,
        ...evaluationEligibilityInitialValues,
        maxLoanAmount: "", // related to CheckCustomerEligibilityPage
        maxAmount: false, // related to CheckCustomerEligibilityPage
        maxValue: 100000, // related to CheckCustomerEligibilityPage
        conditions: false

    };

    const steps = [
        t("Customer information"),
        t("Financial eligibility information"),
        t("General eligibility information"),
        t("Evaluation Eligibility Information"),
        t("check_customer_eligibility"),
        t("required_documents"),
    ];

    const handleDialogFunction = ((dialogType, values) => {
        if (dialogType === 'draft') {
            setOpenCloseOrDraftDialog(true)
            showSuccessPopup(values, "draft")
            setOpenCloseOrDraftDialog(false)
            return
        }
        setOpenCloseOrDraftDialog(true)
        setOpenCloseOrDraftDialog(false)
        navigate("/")
        return

    })
    const showSuccessPopup = (values, type) => {
        let randomValue = Math.floor(Math.random() * 100000000000)
        let content = type === "draft" ? "saved as a draft" : "submitted";
        setTrackNumberMessage(t(`Your application is ${content} and your track number is`) + " " + randomValue);
        setShowTrackNumberPopup(true);

        localStorage.setItem(randomValue, JSON.stringify({ ...values, requestTrackerNumber: randomValue, status: type === "draft" ? "Draft" : "Pending" }));
    }

    const handleSubmitting = (values) => {
        showSuccessPopup(values, "submitted");
        setOpenDialog(false);
    }


    window.addEventListener("resize", () => setScreenWidth(window.innerWidth));
    window.addEventListener('scroll', (x) => {
        console.log('window.pageYOffset::', window.innerWidth);
        if (window.pageYOffset < 180) {
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
                initialValues={location.state || initialValues}
                onSubmit={(values) => {
                    console.log(values);
                    setFinalValues(values);
                    setFinished(true);
                    handleSubmitting(values)
                }}
                validateOnNext={true}
                validateOnBlur={true}
                validateOnChange={true}
                validateOnMount={false}
                activeStepIndex={0}
                steps={[
                    {
                        component: CustomerInformationPage,
                        validationSchema: customerInfoValidators,
                        beforeNext: (values, formikBag) => {
                            console.log("valuesvaluesvalues::", values);
                            formikBag.setFieldValue('nextClicked', false)

                        }
                    },
                    {
                        component: FinancialEligibilityInformationPage,
                        validationSchema: financialEligibilityValidators,
                        beforeNext: (values, formikBag) => {
                            console.log("valuesvaluesvalues::", values);
                            formikBag.setFieldValue('nextClicked', false)

                        }
                    },
                    {
                        component: GeneralEligibilityinformationPage,
                        validationSchema: generalEligibilityValidators,
                        beforeNext: (values, formikBag) => {
                            console.log("valuesvaluesvalues::", values);
                            formikBag.setFieldValue('nextClicked', false)

                        }

                    },
                    {
                        component: EvaluationEligibilityInformationPage,
                        validationSchema: evaluationEligibilityValidators,
                        beforeNext: (values, formikBag) => {
                            console.log("valuesvaluesvalues::", values);
                            formikBag.setFieldValue('nextClicked', false)

                        }
                    },
                    {
                        component: CheckCustomerEligibilityPage,
                        validationSchema: checkCustomerEligibilityValidators,
                        beforeNext: (values, formikBag) => {
                            console.log("valuesvaluesvalues::", values);
                            formikBag.setFieldValue('nextClicked', false)

                        }
                    },
                    {
                        component: RequiredFiles,
                        validationSchema: requiredFilesValidators
                    },
                ]}
            >
                {({
                    currentStepIndex,
                    renderComponent,
                    handlePrev,
                    handleNext,
                    isPrevDisabled,
                    isFirstStep,
                    submitCount,
                    isSubmitting,
                    isValidating,
                    dirty,
                    isValid,
                    initialTouched,
                    setFieldValue,
                    values
                }) => {
                    return (
                        <>
                            <Box className='wizard__main--header' dir={language === "ar" ? "rtl" : "ltr"}>
                                <h1>
                                    {t("Apply For Very Small Business Loan Request")}
                                </h1>
                                <Hidden smDown>
                                    <div style={{ display: "flex" }}>
                                        {currentStepIndex > 0 && <ButtonBase
                                            onClick={() => {
                                                setPopupActions("draft")
                                                setDialogContent('save_draft_msg')
                                                setDialogType('draft')
                                                setOpenCloseOrDraftDialog(true)
                                            }}                                          >
                                            <SaveIcon sx={{
                                                fontSize: '30px',
                                                margin: '0 16px',
                                                "&:hover": {
                                                    color: '#f58232'
                                                }
                                            }} />
                                        </ButtonBase>}
                                        <ButtonBase
                                            onClick={() => {
                                                setPopupActions("close")
                                                setDialogContent('close_form_msg')
                                                setDialogType('close')
                                                setOpenCloseOrDraftDialog(true)
                                            }}                                    >
                                            <Close color='error' sx={{
                                                fontSize: '30px',
                                                margin: '0 16px',
                                                "&:hover": {
                                                    color: '#f58232'
                                                }
                                            }}
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
                                            right: 0,
                                        }}
                                    >
                                        <Typography
                                            dir={language === "ar" ? "rtl" : "ltr"}
                                            sx={{ fontSize: "18px" }}

                                        >
                                            {steps[currentStepIndex]}
                                        </Typography>

                                        <div className={`wizard__stepper--mobile-close-draft`}>
                                            {currentStepIndex > 0 && <SaveIcon
                                                onClick={() => {
                                                    setPopupActions("draft")
                                                    setDialogContent('save_draft_msg')
                                                    setDialogType('draft')
                                                    setOpenCloseOrDraftDialog(true)
                                                }}
                                                sx={{
                                                    margin: language === "ar" ? "0 0 0 10px" : "0 10px 0 0",
                                                    "&:hover": {
                                                        color: '#f58232'
                                                    }
                                                }}

                                            />}
                                            <CloseIcon
                                                onClick={() => {
                                                    setPopupActions("close")
                                                    setDialogContent('close_form_msg')
                                                    setDialogType('close')
                                                    setOpenCloseOrDraftDialog(true)
                                                }}
                                                sx={{
                                                    "&:hover": {
                                                        color: '#f58232'
                                                    }
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

                                <Box className='wizard__content--inputs' my="2rem">{renderComponent()}</Box>
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
                                            // disabled={isNextDisabled}
                                            type="primary"
                                            onClick={() => {
                                                setFieldValue('nextClicked', true);
                                                (currentStepIndex === 4 && values.maxLoanAmount > 100000)
                                                    ? setOpenDialog(true)
                                                    : handleNext()
                                            }}
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
                                    <SubmittingDialog
                                        closeDialog={() => setOpenDialog(false)}
                                        handleConfirmation={() => { handleNext(); setOpenDialog(false) }}
                                    />

                                )}
                                {openCloseOrDraftDialog && (
                                    <CommonMessageDialog
                                        popupActions={popupActions}
                                        closeDialog={() => setOpenCloseOrDraftDialog(false)}
                                        handleConfirmation={() => handleDialogFunction(dialogType, values)}
                                        dialogContent={dialogContent}

                                    />

                                )}
                                {showTrackNumberPopup && (
                                    <CommonMessageDialog
                                        closeDialog={() => setShowTrackNumberPopup(false)}
                                        handleConfirmation={() => navigate("/")}
                                        dialogContent={trackNumberMessage}
                                    />
                                )}
                            </div>
                            <Box>
                            </Box>
                        </>
                    );
                }}
            </FormikWizard>
        </div>
    )
}

export default WizardForm