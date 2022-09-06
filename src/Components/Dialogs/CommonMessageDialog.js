import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function CommonMessageDialog({ closeDialog, handleConfirmation, dialogContent, popupActions }) {
    const { t } = useTranslation();
    const language = useSelector(state => state.language.language);
    const navigate = useNavigate();

    return ( // css file: comp/dialog
        <React.Fragment>
            <Dialog
                open={true}
                onClose={popupActions === "close" || popupActions === "draft" ? closeDialog : () => navigate("/")}
            >
                <DialogContent sx={{ direction: language === "ar" ? "rtl" : "ltr" }}>
                    <p className='dialog__paragraph'>
                        {t(dialogContent)}
                    </p>
                </DialogContent>
                <DialogActions className={`dialog__actions ${language === "ar" ? "direction__left" : ""} 
                                ${(popupActions=== "close" || popupActions === "draft") ? "" : "justifyCenter"}`}>
                    {popupActions === "close" || popupActions === "draft" ? (
                        <>
                            <Button
                                className={`dialog__button dialog__button--no`}
                                variant="outlined"
                                onClick={closeDialog}
                            >
                                {t("No")}
                            </Button>
                            <Button
                                className={`dialog__button dialog__button--yes ${language === "ar" ? "margin__right" : ""}`}
                                variant="contained"
                                type="primary"
                                onClick={handleConfirmation}
                            >
                                {t("Yes")}
                            </Button>
                        </>
                    ) : (
                        <Button
                            className={`dialog__button dialog__button--yes`}
                            variant="contained"
                            type="primary"
                            onClick={()=>navigate("/")}
                            sx={{
                                minWidth: "40%",
                                '@media (max-width: 600px)': {
                                    minWidth: "50%",
                                },
                            }}
                        >
                            {t("goToMainPage")}
                        </Button>
                    )}
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
