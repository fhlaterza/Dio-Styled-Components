import { InputContainer, InputText, IconContainer, ErrorText } from "./styles";
import { Controller } from "react-hook-form";

const Input= ({leftIcon, name, control, errorMessage, ...rest}) => {
    return (
        <InputContainer>
            <>
            {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
            <Controller
                    name={name}
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => <InputText {...field} {...rest} />} />
            {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
            </>
        </InputContainer>
    )
}

export {Input}
