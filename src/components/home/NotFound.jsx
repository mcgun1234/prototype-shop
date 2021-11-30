import React, { Component } from 'react';
import Link from '@mui/material/Link';

class NotFound extends Component {
    render() {
        return (
            <div style={{ position: 'absolute', left: '50%', top: '40%', transform: 'translate(-50%, -50%)' }}>
                <h1>404 Not Found</h1>
                <Link href="/">Go Back To Home</Link>
            </div>
        );
    }
}

export default NotFound;