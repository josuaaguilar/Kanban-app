import React from 'react';
import AltContainer from 'alt-container';
import alt from '../../libs/alt';
setup(alt);

export default ({ children }) =>
    <AltContainer flux={alt}>
        {children}
    </AltContainer>