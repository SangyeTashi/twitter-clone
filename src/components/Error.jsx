import React from 'react';
import { ErrorOutline } from '@mui/icons-material';
function Error(message) {
    return (
        <div>
            <ErrorOutline />
            <h2>{message}</h2>
        </div>
    );
}

export default Error;
