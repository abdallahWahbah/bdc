import React from 'react'

import { FormControl, MenuItem, Select, InputLabel, TextField, Grid, Box, Button, FormGroup, FormControlLabel, Checkbox, Typography, FormHelperText, Hidden } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { FieldArray } from 'formik';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Close from '@mui/icons-material/Close';

const FormInputCreator = ({ jsonObject, values, handleChange, errors, getFieldProps }) => {
    const { t } = useTranslation();
    const language = useSelector(state => state.language.language);


    const formContent = jsonObject.map(element => {
        // if ((element?.name === "companyName" ||
        //     element?.name === "commercialRegistrationNumber" ||
        //     element?.name === "contactMobileNumber" ||
        //     element?.name === "loanAmount" ||
        //     element?.name === "customerID" ||
        //     element?.name === "otherCompanyActivity" ||
        //     element?.name === "annualSales" ||
        //     element?.name === "nationalID" ||
        //     element?.name === "suppliersList" ||
        //     element?.name === "requestedLoanAmount" ||
        //     element?.name === "requestTrackerNumber")
        //     && (element?.showWhen?.(values) !== false)) {

        //     return (
        //         <Grid item xs={12} lg={6} key={element.name}>
        //             <TextField
        //                 className={`${language === "ar" ? "custom-field" : ""}`}
        //                 fullWidth
        //                 name={element.name}
        //                 type={element.type ? element.type : "text"}
        //                 label={t(element.label)}
        //                 error={!!errors[element.name]}
        //                 helperText={t(errors[element.name])}
        //                 value={values && values[element.name]}
        //                 onChange={handleChange}
        //             />
        //         </Grid>
        //     )
        // }
        if (element.type === "text" && (element?.showWhen?.(values) !== false)) {

            return (
                <Grid item xs={12} lg={6} key={element.name}>
                    <TextField
                        className={`${language === "ar" ? "custom-field" : ""}`}
                        fullWidth
                        name={element.name}
                        type={"text"}
                        label={t(element.label)}
                        error={!!errors[element.name]}
                        helperText={t(errors[element.name])}
                        value={values && values[element.name]}
                        onChange={handleChange}
                    />
                </Grid>
            )
        }
        if (element.type === "number" && (element?.showWhen?.(values) !== false)) {

            return (
                <Grid item xs={12} lg={6} key={element.name}>
                    <TextField
                        className={`${language === "ar" ? "custom-field" : ""}`}
                        fullWidth
                        name={element.name}
                        type={"number"}
                        label={t(element.label)}
                        error={!!errors[element.name]}
                        helperText={t(errors[element.name])}
                        value={values && values[element.name]}
                        onChange={handleChange}
                    />
                </Grid>
            )
        }
        // if ((element?.name === "nearestBankBranch" ||
        //     element?.name === "annualSalesTurnover" ||
        //     element?.name === "capitalAmount" ||
        //     element?.name === "legalFormOfTheCompany" ||
        //     element?.name === "personAge" ||
        //     element?.name === "companyYearsInBusiness" ||
        //     element?.name === "companyResidence" ||
        //     element?.name === "companyActivity" ||
        //     element?.name === "personalBelongings" ||
        //     element?.name === "StabilityCapitalAmount" ||
        //     element?.name === "availabilityFinancialStatements" ||
        //     element?.name === "CompanyIndustrialSector" ||
        //     element?.name === "numberOfHeadcount" ||
        //     element?.name === "companyLicense" ||
        //     element?.name === "yearsOfExperience" ||
        //     element?.name === "secondLevelOfManagement" ||
        //     element?.name === "numberOfBanks" ||
        //     element?.name === "numberYearsRelationWithOurBank")
        //     && (element?.showWhen?.(values) !== false)) {
        //     return (
        //         <Grid item xs={12} lg={6} key={element.name} className={`${language === "ar" ? "custom-label-field" : ""}`}>
        //             <FormControl fullWidth sx={element.sx ? element.sx : null}>
        //                 <InputLabel id={element.id}>{t(element.label)}</InputLabel>
        //                 <Select
        //                     className={`${language === "ar" ? "custom-field" : ""}`}
        //                     labelId={element.id}
        //                     id={element.selectId}
        //                     name={element.name}
        //                     error={!!errors[element.name]}
        //                     helperText={'t(errors[element.name])'}
        //                     label={t(element.label)}
        //                     value={values[element.name]}
        //                     onChange={handleChange}
        //                 >
        //                     {element.options.map(option =>
        //                     (
        //                         <MenuItem dir={language === "ar" ? "rtl" : "ltr"} key={option.value} value={option.value} sx={{ fontSize: "15px" }}>{t(option.title)}</MenuItem>
        //                     ))}
        //                 </Select>
        //                 <FormHelperText sx={{ color: '#d32f2f', fontSize: '12px' }}>{t(errors[element.name])}</FormHelperText>
        //             </FormControl>
        //         </Grid >
        //     )
        // }
        if (element.type === "select" && (element?.showWhen?.(values) !== false)) {
            return (
                <Grid item xs={12} lg={6} key={element.name} className={`${language === "ar" ? "custom-label-field" : ""}`}>
                    <FormControl fullWidth sx={element.sx ? element.sx : null}>
                        <InputLabel id={element.id}>{t(element.label)}</InputLabel>
                        <Select
                            className={`${language === "ar" ? "custom-field" : ""}`}
                            labelId={element.id}
                            id={element.selectId}
                            name={element.name}
                            error={!!errors[element.name]}
                            helperText={'t(errors[element.name])'}
                            label={t(element.label)}
                            value={values[element.name]}
                            onChange={handleChange}
                        >
                            {element.options.map(option =>
                            (
                                <MenuItem dir={language === "ar" ? "rtl" : "ltr"} key={option.value} value={option.value} sx={{ fontSize: "15px" }}>{t(option.title)}</MenuItem>
                            ))}
                        </Select>
                        <FormHelperText sx={{ color: '#d32f2f', fontSize: '12px' }}>{t(errors[element.name])}</FormHelperText>
                    </FormControl>
                </Grid >
            )
        }
        if (element?.name === "text__box") {
            return (
                <Box key={element.name} className="wizard__text--box">
                    <p style={{ color: "#73716e" }}>{t(element.title)}</p>
                    <h3 className="wizard__text--box-bold" style={{ fontSize: "16px" }}>{t(element.details[0])}</h3>
                    <h3 className="wizard__text--box-bold" style={{ fontSize: "16px" }}>{t(element.details[1])}</h3>
                </Box>
            )
        }
        if (element.name === "uploadedFile") {
            return (
                <Grid item container xs={12} key={element.name} >
                    <Grid item xs={12} md={6}>
                        <Button sx={{ marginTop: "20px", display: "block" }} variant="contained" component="label" color="primary">
                            {" "}
                            <input type="file" className='wizard__input--file' /> {t("Upload file")}
                        </Button>
                    </Grid>
                </Grid>
            )
        }
        if (element.name === "conditions") {
            return (
                <FormGroup sx={element.sx} key={element.name} >
                    <FormControlLabel
                        control={<Checkbox {...getFieldProps(element.name)} />}
                        label={t(element.label)}
                    />
                </FormGroup>
            )
        }
        if (element.name === "buttonWide") {
            return (
                <Grid item xs={12} md={6} key={element.name}>
                    <Button
                        key={element.name}
                        className="wizard__button--next"
                        type="submit"
                        variant="contained"
                        fullWidth
                        sx={{ ...element.sx, fontSize: '18px', height: '45px' }}
                    >
                        {t(element.title)}
                    </Button>
                </Grid>
            )
        }
        if (element.name === "smallHeader") {
            return (
                <h3
                    className='wizard__small--header'
                    key={element.name}
                    dir={language === "ar" ? "rtl" : "ltr"}
                >
                    {t(element.label)}
                </h3>
            )
        }
        if (element.name === "ownerList") {
            return (
                <Grid item xs={12} sx={{ paddingLeft: "0 !important" }}>
                    <FieldArray name={element.name} key={element.name} sx={{ width: "100%" }}>
                        {({ push, remove }) => (
                            <div>
                                {values.ownerList.map((item, index) => (
                                    <>
                                        <div className={`supplier__list ${language === "ar" ? "ml" : "mr"}`}>
                                            <div>
                                                <TextField
                                                    className={`${language === "ar" ? "custom-field" : ""}`}
                                                    fullWidth
                                                    name={`ownerList[${index}].nationalID`}
                                                    label={t(`National ID`)}
                                                    // sx={{height: "60px !important"}}
                                                    value={values.ownerList[index].nationalID}
                                                    onChange={handleChange}
                                                    type="number"
                                                />
                                                {errors?.ownerList?.[index]?.nationalID ? <div className='wizard__error'>{t(errors?.ownerList?.[index]?.nationalID)}</div> : null}
                                            </div>
                                            <div className={`${language === "ar" ? "custom-label-field" : ""}`}>
                                                <FormControl fullWidth sx={element.sx ? element.sx : null}>
                                                    <InputLabel id="demo-simple-select-label">{t("Owner Type")}</InputLabel>
                                                    <Select
                                                        className={`${language === "ar" ? "custom-field" : ""}`}
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        // sx={{height: "60px !important"}}
                                                        name={`ownerList[${index}].ownerType`}
                                                        label={t("Owner Type")}
                                                        value={values.ownerList[index].ownerType}
                                                        onChange={handleChange}
                                                    >
                                                        <MenuItem
                                                            dir={language === "ar" ? "rtl" : "ltr"}
                                                            value="owner"
                                                            sx={{ fontSize: "15px" }}
                                                        >
                                                            {t("Owner")}
                                                        </MenuItem>
                                                        <MenuItem
                                                            dir={language === "ar" ? "rtl" : "ltr"}
                                                            value="partener"
                                                            sx={{ fontSize: "15px" }}
                                                        >
                                                            {t("Partener")}
                                                        </MenuItem>
                                                        <MenuItem
                                                            dir={language === "ar" ? "rtl" : "ltr"}
                                                            value="guarantor"
                                                            sx={{ fontSize: "15px" }}
                                                        >
                                                            {t("Guarantor")}
                                                        </MenuItem>
                                                    </Select>
                                                    {errors?.ownerList?.[index]?.ownerType ? <div className='wizard__error'>{t(errors?.ownerList?.[index]?.ownerType)}</div> : null}
                                                </FormControl>                                    </div>
                                            <DeleteIcon
                                                onClick={() => remove(index)}
                                                sx={{ fontSize: "30px !important", color: "#F05030", cursor: "pointer" }}
                                            />
                                        </div>
                                    </>
                                ))}
                                <Grid item sx={{ width: "100% !important", marginBottom: "15px !important" }}>
                                    {typeof errors[element.name] === 'string' ? (
                                        <Typography color="#F05030" sx={{ fontSize: "15px !important" }}>
                                            {t(errors[element.name])}
                                        </Typography>
                                    ) : null}
                                </Grid>

                                <Grid
                                    item
                                    className='wizard__fieldArray--add-button'
                                    onClick={() => push({ownerType: "", nationalID: ""})}
                                >
                                    <AddIcon
                                        sx={{ margin: language === "ar" ? "0 0 0 10px" : "0 10px 0 0" }}
                                    />
                                    <span> {t("Add Supplier")}</span>
                                </Grid>

                            </div>
                        )}
                    </FieldArray>
                </Grid>
            )
        }
        if (element.name === "supplierList") {
            return (
                <Grid item xs={12} sx={{ paddingLeft: "0 !important" }}>
                    <FieldArray name={element.name} key={element.name} sx={{ width: "100%" }}>
                        {({ push, remove }) => (
                            <div>
                                {values.supplierList.map((item, index) => (
                                    <Box sx={
                                        {
                                            padding: '8px',
                                            borderRadius: '3px',
                                            margin: '24px 0',
                                            '@media (max-width: 600px)': {
                                                padding:'24px',
                                                boxShadow: '1px 2px 1px 2px rgba(136, 136, 136, 0.5)',
                                            },
                                        }}>
                                        <Grid container spacing={3}
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                            }}>
                                            <Hidden mdUp>
                                                <Grid item sm={12} xs={12} sx={{ textAlign: 'end' }}>

                                                    <Close
                                                        onClick={() => remove(index)}
                                                        sx={{ fontSize: "30px", color: "#F05030", cursor: "pointer" }}
                                                    />
                                                </Grid>
                                            </Hidden>
                                            <Grid item md={2.9} sm={6} xs={6}>
                                                <TextField
                                                    className={`${language === "ar" ? "custom-field" : ""}`}
                                                    fullWidth
                                                    name={`supplierList[${index}].name`}
                                                    label={t(`Supplier Name`)}
                                                    error={errors?.supplierList?.[index]?.name}
                                                    helperText={t(errors?.supplierList?.[index]?.name)}
                                                    value={values.supplierList[index].name}
                                                    onChange={handleChange}
                                                />
                                            </Grid>
                                            <Grid item md={2.9} sm={6} xs={6}>
                                                <TextField
                                                    className={`${language === "ar" ? "custom-field" : ""}`}
                                                    fullWidth
                                                    name={`supplierList[${index}].crn`}
                                                    label={t(`CRN`)}
                                                    error={!!errors?.supplierList?.[index]?.crn}
                                                    helperText={t(errors?.supplierList?.[index]?.crn)}
                                                    value={values.supplierList[index].crn}
                                                    onChange={handleChange}
                                                    type="number"
                                                />
                                            </Grid>
                                            <Grid item md={2.9} sm={6} xs={6}>
                                                <TextField
                                                    className={`${language === "ar" ? "custom-field" : ""}`}
                                                    fullWidth
                                                    name={`supplierList[${index}].amount`}
                                                    label={t(`Amount`)}
                                                    error={!!errors?.supplierList?.[index]?.amount}
                                                    helperText={t(errors?.supplierList?.[index]?.amount)}
                                                    value={values.supplierList[index].amount}
                                                    onChange={handleChange}
                                                    type="number"
                                                />
                                            </Grid>
                                            <Grid item md={2.9} sm={6} xs={6}>
                                                <TextField
                                                    className={`${language === "ar" ? "custom-field" : ""}`}
                                                    fullWidth
                                                    name={`supplierList[${index}].soldItems`}
                                                    label={t(`Sold Items`)}
                                                    error={errors?.supplierList?.[index]?.soldItems}
                                                    helperText={t(errors?.supplierList?.[index]?.soldItems)}
                                                    value={values.supplierList[index].soldItems}
                                                    onChange={handleChange}
                                                />
                                            </Grid>
                                            <Hidden mdDown>
                                                <Grid item md={0.4} sm={6} xs={6}>

                                                    <DeleteIcon
                                                        onClick={() => remove(index)}
                                                        sx={{ fontSize: "30px !important", color: "#F05030", cursor: "pointer" }}
                                                    />
                                                </Grid>
                                            </Hidden>
                                        </Grid>
                                    </Box>
                                ))}
                                <Grid item sx={{ width: "100% !important", marginBottom: "15px !important" }}>
                                    {typeof errors[element.name] === 'string' ? (
                                        <Typography color="#F05030" sx={{ fontSize: "15px !important" }}>
                                            {t(errors[element.name])}
                                        </Typography>
                                    ) : null}
                                </Grid>

                                <Grid
                                    item
                                    className='wizard__fieldArray--add-button'
                                    onClick={() => push({ name: "", crn: "", amount: "", soldItems: "" })}
                                >
                                    <AddIcon
                                        sx={{ margin: language === "ar" ? "0 0 0 10px" : "0 10px 0 0" }}
                                    />
                                    <span> {t("Add Supplier")}</span>
                                </Grid>

                            </div>
                        )}
                    </FieldArray>
                </Grid>
            )
        }
        return null;
    })

    return (
        <React.Fragment >
            {formContent}
        </React.Fragment>
    )
}

export default FormInputCreator