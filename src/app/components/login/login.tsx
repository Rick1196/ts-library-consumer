import React from 'react';
import { EmailInputComponent } from 'devteam-components-library';

function Login() {
    return (
        <div className="Login ColumnSE">
            <EmailInputComponent
                idInput=''
                labelInput=''
                nameInput='email'
                textInput='email'
                typeInput='text'
            />
            <EmailInputComponent
                idInput=''
                labelInput=''
                nameInput='password'
                textInput='password'
                typeInput='password'
            />
        </div>
    );
}

export default Login;
