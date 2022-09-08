import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ViewEnjazTable = ({tableData}) => 
{
    const { t } = useTranslation();
    const language = useSelector(state => state.language.language);
    const navigate = useNavigate();

    const goToForm = (data) =>
    {
        navigate("/form", {state: data});
    }

    return ( // css file: pages/home
        <TableContainer component={Paper} dir={language === "ar" ? "rtl" :"ltr"}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{textAlign: "center"}}>{t("Requested Tracker Number")}</TableCell>
                        <TableCell sx={{textAlign: "center"}}>{t("Company Name")}</TableCell>
                        <TableCell sx={{textAlign: "center"}}>{t("Commercial Registration Number")}</TableCell>
                        <TableCell sx={{textAlign: "center"}}>{t("Customer ID (CIF)")}</TableCell>
                        <TableCell sx={{textAlign: "center"}}>{t("Contact Mobile Number")}</TableCell>
                        <TableCell sx={{textAlign: "center"}}>{t("Status")}</TableCell>
                        <TableCell sx={{textAlign: "center"}}></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody sx={{height: tableData.length === 0 ? "55px !important" : "auto"}}>
                    {tableData.length !== 0 ? (
                        <>
                            {tableData.map(row =>(
                                <TableRow 
                                    key={row.name}
                                >
                                    <TableCell sx={{textAlign: "center"}}>{row.requestTrackerNumber || "-----"}</TableCell>
                                    <TableCell sx={{textAlign: "center"}}>{row.companyName || "-----"}</TableCell>
                                    <TableCell sx={{textAlign: "center"}}>{row.commercialRegistrationNumber || "-----"}</TableCell>
                                    <TableCell sx={{textAlign: "center"}}>{row.customerID || "-----"}</TableCell>
                                    <TableCell sx={{textAlign: "center"}}>{row.contactMobileNumber || "-----"}</TableCell>
                                    <TableCell sx={{textAlign: "center"}}>{t(row.status) || "-----"}</TableCell>
                                    <TableCell sx={{textAlign: "center"}}>
                                        {row.status === "Draft" ? 
                                            <span className='table__button' onClick={() => goToForm(row)}>{t("Continue filling")}</span>
                                        : 
                                            <span className='table__button' onClick={() => navigate("/data", {state: row})}>{t("View")}</span>
                                        }
                                    </TableCell>
                                </TableRow>
                            ))}
                        </>
                    ) : (
                        <>
                            <TableRow className='table__no--data'>
                                <TableCell>{t("No Data")}</TableCell>
                            </TableRow>
                        </>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ViewEnjazTable