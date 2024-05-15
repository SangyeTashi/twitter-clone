import React from 'react';
import { ErrorOutline } from '@mui/icons-material';
function Error({ message }) {
    return (
        <div className="flex items-center justify-center space-x-3 p-2">
            <ErrorOutline />
            <h2 className="text-center">{message}</h2>
        </div>
    );
}

export default Error;
