/* eslint-disable react/display-name */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from './Header';
import Title from '../shared/Title';
import { Grid } from '@mui/material';

const AppLayout = (WrappedComponent) => {
    return (props) => {
        return (
            <>
                <Title />
                <Header />
                <Grid container height={"calc(100vh - 4rem)"}>
                    <Grid item xs={4} height={"100%"} bgcolor="primary.main">
                        first
                        {/* Content for the first column */}
                    </Grid>
                    <Grid item xs={4} height={"100%"} bgcolor="primary.main">
                        {/* Content for the second column */}
                         <WrappedComponent {...props} />
                    </Grid>
                    <Grid item xs={4} height={"100%"} bgcolor="primary.main">
                        {/* Content for the third column */}
                        third
                    </Grid>
                   
                </Grid>
            </>
        );
    };
};

export default AppLayout;
