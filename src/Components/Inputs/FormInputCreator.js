import React from 'react'

import { FormControl, MenuItem, Select, InputLabel, TextField, Grid, Box, Button, FormGroup, FormControlLabel, Checkbox, Typography, FormHelperText, Hidden, Snackbar, Alert } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { FieldArray } from 'formik';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Close from '@mui/icons-material/Close';

const FormInputCreator = ({ jsonObject, values, handleChange, errors, getFieldProps, setTouched, touched, isNextDisabled }) => {
    const { t } = useTranslation();
    const language = useSelector(state => state.language.language);


    const formContent = jsonObject.map(element => {
        if (element.type === "text" && (element?.showWhen?.(values) !== false)) {

            return (
                <Grid item xs={12} lg={6} key={element.name}>
                    <TextField
                        className={`${language === "ar" ? "custom-field" : ""}`}
                        fullWidth
                        name={element.name}
                        type={"text"}
                        onBlur={() => setTouched({ ...touched, [element.name]: true })}
                        required={!!element.validator || !!element.validatorFunc}
                        label={t(element.label)}
                        error={(!!values?.nextClicked || !!touched[element.name]) && !!errors[element.name]}
                        helperText={(!!values?.nextClicked || !!touched[element.name]) && t(errors[element.name])}
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
                        required={!!element.validator}
                        label={t(element.label)}
                        error={(!!values?.nextClicked || !!touched[element.name]) && !!errors[element.name]}
                        helperText={(!!values?.nextClicked || !!touched[element.name]) && t(errors[element.name])}
                        onBlur={() => setTouched({ ...touched, [element.name]: true })}
                        value={values && values[element.name]}
                        onChange={handleChange}
                    />
                </Grid>
            )
        }
        if (element.type === "select" && (element?.showWhen?.(values) !== false)) {
            return (
                <Grid item xs={12} lg={6} key={element.name} className={`${language === "ar" ? "custom-label-field" : ""}`}>
                    <FormControl fullWidth sx={element.sx ? element.sx : null}>
                        <InputLabel id={element.id} required={!!element.validator}>{t(element.label)}</InputLabel>
                        <Select
                            className={`${language === "ar" ? "custom-field" : ""}`}
                            labelId={element.id}
                            id={element.selectId}
                            name={element.name}
                            error={(!!values?.nextClicked || !!touched[element.name]) && !!errors[element.name]}
                            label={t(element.label)}
                            onBlur={() => setTouched({ ...touched, [element.name]: true })}
                            value={values[element.name]}
                            onChange={handleChange}
                        >
                            {element.options.map(option =>
                            (
                                <MenuItem dir={language === "ar" ? "rtl" : "ltr"} key={option.value} value={option.value} sx={{ fontSize: "15px" }}>{t(option.title)}</MenuItem>
                            ))}
                        </Select>
                        {(!!values?.nextClicked || !!touched[element.name]) && <FormHelperText sx={{ color: '#d32f2f', fontSize: '12px' }}>{t(errors[element.name])}</FormHelperText>}
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
                <Grid item xs={12} lg={6} key={element.name}>
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
                <FieldArray name={element.name} key={element.name} sx={{ width: "100%", display: 'flex', alignItems: 'center' }}>
                    {({ push, remove }) => (
                        <Grid container item md={12} sx={{ display: 'flex', alignItems: 'center', paddingLeft: "0 !important" }}>
                            {values.ownerList.map((item, index) => (
                                <Grid container item md={12} spacing={3} className={`supplier__list ${language === "ar" ? "ml" : "mr"}`}>

                                    <Grid item md={6.5} sx={{ display: 'flex', alignItems: 'center' }} className={`${language === "ar" ? "custom-label-field" : ""}`}>
                                        <FormControl fullWidth sx={element.sx ? element.sx : null}>
                                            <InputLabel required id="demo-simple-select-label">{t("Owner Type")}</InputLabel>
                                            <Select
                                                className={`${language === "ar" ? "custom-field" : ""}`}
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                name={`ownerList[${index}].ownerType`}
                                                label={t("Owner Type")}
                                                value={values.ownerList[index].ownerType}
                                                onChange={handleChange}
                                                error={(!!values?.nextClicked || !!touched[element.name]) && !!errors[element.name]}
                                                onBlur={() => setTouched({ ...touched, [`ownerList[${index}].ownerType`]: true })}
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
                                            <FormHelperText sx={{ color: '#d32f2f', fontSize: '12px' }}>
                                                {
                                                    (!!values?.nextClicked || !!touched?.ownerList?.[index]?.ownerType)
                                                    && t(errors?.ownerList?.[index]?.ownerType)
                                                }
                                            </FormHelperText>
                                        </FormControl>
                                        {/* {errors?.ownerList?.[index]?.ownerType ? <div className='wizard__error'>{t(errors?.ownerList?.[index]?.ownerType)}</div> : null} */}
                                    </Grid>
                                    <Grid item md={5.5} sx={{ paddingLeft: language === "en" ? "0 !important" : "auto" }}>
                                        <TextField
                                            className={`${language === "ar" ? "custom-field" : ""}`}
                                            fullWidth
                                            required
                                            name={`ownerList[${index}].nationalID`}
                                            label={t(`National ID`)}
                                            value={values.ownerList[index].nationalID}
                                            onChange={handleChange}
                                            type="number"
                                            error={(!!values?.nextClicked || !!touched?.ownerList?.[index]?.nationalID) && !!errors?.ownerList?.[index]?.nationalID}
                                            helperText={(!!values?.nextClicked || !!touched?.ownerList?.[index]?.nationalID) && t(errors?.ownerList?.[index]?.nationalID)}
                                            onBlur={() => setTouched({ ...touched, [`ownerList[${index}].nationalID`]: true })}
                                        />
                                        {/* {errors?.ownerList?.[index]?.nationalID ? <div className='wizard__error'>{t(errors?.ownerList?.[index]?.nationalID)}</div> : null} */}

                                    </Grid>
                                    <Grid item md={0.5}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: "flex-end",
                                            paddingLeft: language === "ar" ? "0 !important" : "auto"
                                        }}>
                                        <DeleteIcon
                                            onClick={() => remove(index)}
                                            sx={{
                                                fontSize: "30px !important",
                                                color: "#F05030",
                                                cursor: "pointer",
                                            }}
                                        />
                                    </Grid>

                                </Grid>
                            ))}
                            {typeof errors[element.name] === 'string' ? (
                                <>
                                    <Snackbar
                                        open={errors?.[element?.name]}
                                        autoHideDuration={6000}
                                        sx={language === "ar" ? { right: "24px !important", left: "auto !important" } : {}}
                                    >
                                        <Alert severity="error" sx={{ width: '100%', fontSize: "14px" }}>
                                            {t(errors?.[element.name])}
                                        </Alert>
                                    </Snackbar>
                                </>
                            ) : null}
                            <Grid
                                item
                                className='wizard__fieldArray--add-button'
                                onClick={() => push({ ownerType: "", nationalID: "" })}
                                sx={{ marginTop: "20px" }}
                            >
                                <AddIcon
                                    sx={{ margin: language === "ar" ? "0 0 0 10px" : "0 10px 0 0" }}
                                />
                                <span> {t("Add Supplier")}</span>
                            </Grid>

                        </Grid>
                    )}
                </FieldArray>
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
                                            borderRadius: '3px',
                                            '@media (max-width: 600px)': {
                                                padding: '24px',
                                                boxShadow: '1px 2px 1px 2px rgba(136, 136, 136, 0.5)',
                                            },
                                        }}>
                                        <Grid container spacing={3}
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                            }}>
                                            <Hidden lgUp>
                                                <Grid item sm={12} xs={12} sx={{ textAlign: 'end' }}>

                                                    <Close
                                                        onClick={() => remove(index)}
                                                        sx={{ fontSize: "30px", color: "#F05030", cursor: "pointer" }}
                                                    />
                                                </Grid>
                                            </Hidden>
                                            <Grid item lg={2.9} md={6} sm={6} xs={6}>
                                                <TextField
                                                    className={`${language === "ar" ? "custom-field" : ""}`}
                                                    fullWidth
                                                    required
                                                    name={`supplierList[${index}].name`}
                                                    label={t(`Supplier Name`)}
                                                    error={(!!values?.nextClicked || !!touched?.supplierList?.[index]?.name) && !!errors?.supplierList?.[index]?.name}
                                                    helperText={(!!values?.nextClicked || !!touched?.supplierList?.[index]?.name) && t(errors?.supplierList?.[index]?.name)}
                                                    onBlur={() => setTouched({ ...touched, [`supplierList[${index}].name`]: true })}
                                                    value={values.supplierList[index].name}
                                                    onChange={handleChange}
                                                    type="text"
                                                />
                                            </Grid>
                                            <Grid item lg={2.9} md={6} sm={6} xs={6}>
                                                <TextField
                                                    className={`${language === "ar" ? "custom-field" : ""}`}
                                                    fullWidth
                                                    required
                                                    name={`supplierList[${index}].crn`}
                                                    label={t(`CRN`)}
                                                    error={(!!values?.nextClicked || !!touched?.supplierList?.[index]?.crn) && !!errors?.supplierList?.[index]?.crn}
                                                    helperText={(!!values?.nextClicked || !!touched?.supplierList?.[index]?.crn) && t(errors?.supplierList?.[index]?.crn)}
                                                    onBlur={() => setTouched({ ...touched, [`supplierList[${index}].crn`]: true })}
                                                    value={values.supplierList[index].crn}
                                                    onChange={handleChange}
                                                    type="number"
                                                />
                                            </Grid>
                                            <Grid item lg={2.9} md={6} sm={6} xs={6}>
                                                <TextField
                                                    className={`${language === "ar" ? "custom-field" : ""}`}
                                                    fullWidth
                                                    required
                                                    name={`supplierList[${index}].amount`}
                                                    label={t(`Amount`)}
                                                    error={(!!values?.nextClicked || !!touched?.supplierList?.[index]?.amount) && !!errors?.supplierList?.[index]?.amount}
                                                    helperText={(!!values?.nextClicked || !!touched?.supplierList?.[index]?.amount) && t(errors?.supplierList?.[index]?.amount)}
                                                    onBlur={() => setTouched({ ...touched, [`supplierList[${index}].amount`]: true })}

                                                    value={values.supplierList[index].amount}
                                                    onChange={handleChange}
                                                    type="number"
                                                />
                                            </Grid>
                                            <Grid item lg={2.9} md={6} sm={6} xs={6}>
                                                <TextField
                                                    className={`${language === "ar" ? "custom-field" : ""}`}
                                                    fullWidth
                                                    required
                                                    name={`supplierList[${index}].soldItems`}
                                                    label={t(`Sold Items`)}
                                                    error={(!!values?.nextClicked || !!touched?.supplierList?.[index]?.soldItems) && !!errors?.supplierList?.[index]?.soldItems}
                                                    helperText={(!!values?.nextClicked || !!touched?.supplierList?.[index]?.soldItems) && t(errors?.supplierList?.[index]?.soldItems)}
                                                    onBlur={() => setTouched({ ...touched, [`supplierList[${index}].soldItems`]: true })}

                                                    value={values.supplierList[index].soldItems}
                                                    onChange={handleChange}
                                                />
                                            </Grid>
                                            <Hidden lgDown>
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