import React from 'react'
import { CustomerInformation, FinancialEligibilityInformation, Generaleligibilityinformation, UpcomingStep } from './Inputs/Schema';
import InitialValuesValidators from './Inputs/InitialValuesValidators';
import * as yup from 'yup';
import { FormikWizard } from "formik-wizard-form";
import { Box, Stepper, Button, Step, StepLabel } from '@mui/material';

import {AdditionalFormInputCreator1, 
        AdditionalFormInputCreator2, 
        AdditionalFormInputCreator3, 
        AdditionalFormInputCreator4} from './Inputs/PageData';

const WizardForm = () => 
{
    const initialValues1 = InitialValuesValidators("initialValues", CustomerInformation).initialValues;
    const initialValues2 = InitialValuesValidators("initialValues", FinancialEligibilityInformation).initialValues;
    const initialValues3 = InitialValuesValidators("initialValues", Generaleligibilityinformation).initialValues;
    const initialValues4 = InitialValuesValidators("initialValues", UpcomingStep).initialValues;
    
    const validator1 = yup.object(InitialValuesValidators("validators", CustomerInformation).validators);
    const validator2 = yup.object(InitialValuesValidators("validators", FinancialEligibilityInformation).validators);
    const validator3 = yup.object(InitialValuesValidators("validators", Generaleligibilityinformation).validators);
    const validator4 = yup.object(InitialValuesValidators("validators", UpcomingStep).validators);

    const initialValues = {...initialValues1, 
            ...initialValues2, 
            ...initialValues3, 
            ...initialValues4};

    const [finalValues, setFinalValues] = React.useState({});
    const [finished, setFinished] = React.useState(false);

    return (
        <div className='wizard'>
            <FormikWizard
                initialValues={initialValues}
                onSubmit={(values) => {
                    setFinalValues(values);
                    setFinished(true);
                }}
                validateOnNext
                activeStepIndex={0}
                steps={[
                {
                    component: AdditionalFormInputCreator1,
                    validationSchema: validator1
                },
                {
                    component: AdditionalFormInputCreator2,
                    validationSchema: validator2
                },
                {
                    component: AdditionalFormInputCreator3,
                    validationSchema: validator3
                },
                {
                    component: AdditionalFormInputCreator4,
                    validationSchema: validator4
                },
                ]}
            >
                {({
                    currentStepIndex,
                    renderComponent,
                    handlePrev,
                    handleNext,
                    isNextDisabled,
                    isPrevDisabled
                }) => {
                return (
                    <>
                    <Box sx={{ width: "100%", my: "1rem" }}>
                        <Stepper activeStep={currentStepIndex}>
                            <Step completed={currentStepIndex > 0}>
                                <StepLabel>Customer information</StepLabel>
                            </Step>
                            <Step completed={currentStepIndex > 1}>
                                <StepLabel>Financial eligibility information</StepLabel>
                            </Step>
                            <Step completed={currentStepIndex > 2}>
                                <StepLabel>General eligibility information</StepLabel>
                            </Step>
                            <Step completed={finished}>
                                <StepLabel>Upcoming Step</StepLabel>
                            </Step>
                        </Stepper>
                    </Box>
                    <Box my="2rem">{renderComponent()}</Box>
                    <Box display="flex" justifyContent="space-between">
                        <Button
                            variant="contained"
                            disabled={isPrevDisabled}
                            type="primary"
                            onClick={handlePrev}
                        >
                            Previous
                        </Button>
                        <Button
                            variant="contained"
                            disabled={isNextDisabled}
                            type="primary"
                            onClick={handleNext}
                        >
                            {currentStepIndex === 3 ? "Finish" : "Next"}
                        </Button>
                    </Box>
                    <Box>
                        <pre>{JSON.stringify(finalValues, null, 2)}</pre>
                    </Box>
                    </>
                );
                }}
            </FormikWizard>
        </div>
    )
}

export default WizardForm