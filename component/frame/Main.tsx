import React from 'react';
import styled from './frame.module.scss';

const Main: React.FC = ({children}) => {
    return (
        <main className={styled.main}>{children}</main>
    );
};

export default Main;