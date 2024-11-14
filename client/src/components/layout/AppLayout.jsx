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
                    <Grid item xs={4} height={"100%"} bgcolor="primary.main">
                    <Grid item xs={4} height={"100%"} bgcolor="primary.main">
                    </Grid>
                    <WrappedComponent {...props} />
                </Grid>
            </>
        );
    };
};

export default AppLayout;
