import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

export default function ConfirmationDialog({setOpenDialog, handleNext}) {
  const { t } = useTranslation();
  const language = useSelector(state => state.language.language);
  return ( // css file: comp/dialog
    <React.Fragment>
      <Dialog
        open={true}
        onClose={() =>setOpenDialog(false)}
      >
        <DialogContent sx={{direction: language === "ar" ? "rtl":"ltr"}}>
          <p className='dialog__paragraph'>
            {t("Thanks for filling out the request, the requested amount is greater than the maximum amount for this loan product, however we will review your request for another loan products and contact you.")}
          </p>
          <h4 className='dialog__question'>{t("Are you sure you want to continue ?")}</h4>
        </DialogContent>
        <DialogActions className={`dialog__actions ${language === "ar" ? "direction__left" :""}`}>
          <Button 
            className={`dialog__button dialog__button--no`}
            variant="outlined"
            onClick={() => setOpenDialog(false)}
          >
            {t("No")}
          </Button>
          <Button
              className={`dialog__button dialog__button--yes ${language === "ar" ? "margin__right" :""}`}
              variant="contained"
              type="primary"
              onClick={handleNext}
          >
              {t("Yes")}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
