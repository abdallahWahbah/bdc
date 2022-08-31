import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

export default function CommonMessageDialog({ closeDialog, handleConfirmation, dialogContent }) {
    const { t } = useTranslation();
    const language = useSelector(state => state.language.language);
    return ( // css file: comp/dialog
        <React.Fragment>
            <Dialog
                open={true}
                onClose={closeDialog}
            >
                <DialogContent sx={{ direction: language === "ar" ? "rtl" : "ltr" }}>
                    <p className='dialog__paragraph'>
                        {t(dialogContent)}
                    </p>
                </DialogContent>
                <DialogActions className={`dialog__actions ${language === "ar" ? "direction__left" : ""}`}>
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
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
