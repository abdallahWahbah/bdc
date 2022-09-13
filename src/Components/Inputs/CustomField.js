import { TextField } from "@mui/material";
import { useField } from "formik";
const CustomInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <TextField
                {...field}
                {...props}
                className={meta.touched && meta.error ? "input-error" : ""}
            />
            {meta.touched || meta.error && <div className="error">{meta.error}</div>}
        </>
    );
};
export default CustomInput;