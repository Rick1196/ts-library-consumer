import React from 'react';
import { EmailInputComponent } from 'devteam-components-library';

function Login() {
    return (
        <div>
            <div>
                <EmailInputComponent
                    idInput=''
                    labelInput=''
                    nameInput='email'
                    textInput='email'
                    typeInput='text'
                />
            </div>
            <div>
                <EmailInputComponent
                    idInput=''
                    labelInput=''
                    nameInput='password'
                    textInput='password'
                    typeInput='password'
                />
            </div>
        </div>
    );
}

export default Login;
