/* eslint-disable react/display-name */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from './Header';
import Title from '../shared/Title';

const AppLayout = (WrappedComponent) => {
    return (props) => {
        return (
            < >
            <Title title="chat App" description="this is the chat App called Shubham"/>
                <Header />
                <WrappedComponent {...props} />
                <div>Footer</div>
            </>
        );
    };
};

export default AppLayout;
