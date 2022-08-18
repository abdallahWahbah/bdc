import React, {useState} from 'react'
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import InitialValuesValidators from './Inputs/InitialValuesValidators';
import { viewEnjazJson } from './Inputs/Schema';
import FormInputCreator from './Inputs/FormInputCreator';
import { Grid } from '@mui/material';
import EnjazTable from './EnjazTable';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ViewEnjaz = ({closeEnjaz}) => 
{
    const { t } = useTranslation();
    const language = useSelector(state => state.language.language);
    const [tableData, setTableData] = useState([]);

    
    const {initialValues} = InitialValuesValidators("initialValues", viewEnjazJson)
    const {validators} = InitialValuesValidators("validators", viewEnjazJson)

    const onSubmit = (values)=>
    {
        console.log(values)
        let results = [], temp = [];
        let allKeys = Object.keys(localStorage);
        allKeys.forEach(key => key !== "i18nextLng" && results.push(JSON.parse(localStorage.getItem(key))));


        loop:
        for(let j = 0; j < Object.entries(values).length; j++)
        {
            let [key, value] = Object.entries(values)[j];
            // console.log(key, value)
            // console.log("--------------------------------------------------------------")
            for(let i = 0; i < results.length; i++)
            {
                let result = results[i];
                if(result[key] === value && value !== "")
                {
                    temp.push(result);
                    // console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
                    break loop; // 
                }
            }
        }
        
        temp = [...new Map(temp.map((item, key) => [item[key], item])).values()]
        console.log(temp);

        setTableData(temp);
    }
    
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema: yup.object(validators)
    })

    const formContent = <FormInputCreator 
                            jsonObject={viewEnjazJson} 
                            values={formik.values} 
                            errors={formik.errors} 
                            handleChange={formik.handleChange} 
                            getFieldProps={formik.getFieldProps}/>;

    return (
        <>
            <Dialog // css file: comp/dialog
            className='fullDialog'
            fullScreen
            open={true}
            onClose={closeEnjaz}
            TransitionComponent={Transition}
            >
                <div className='fullDialog__header' style={{direction: language === "ar" ? "rtl":"ltr"}}>
                    <h3 className='fullDialog__header--text'>{t("View My Very Small Business Loan Request")}</h3>
                    <span className='fullDialog__header--close' onClick={closeEnjaz}>&#10006;</span>
                </div>
                <form onSubmit={formik.handleSubmit} className="fullDialog__header--form" style={{direction: language === "ar" ? "rtl":"ltr"}}>
                    <Grid container spacing={3}>
                        {formContent}
                    </Grid>
                </form>
                {tableData.length !== 0 && (
                    <div className="fullDialog__header--table">
                        <EnjazTable  tableData={tableData}/>
                    </div>
                )}
            </Dialog>
        </>      
    )
}

export default ViewEnjaz;