import React, { Fragment, useContext } from 'react';
import { ThemeContext } from './Context';
import { COLORS } from './colors';

export const Content = () => {
    const theme = useContext(ThemeContext);
    const textColor = COLORS[theme].accent;
    const bgColor = COLORS[theme].background;

    return (
        <Fragment>
            <p style={{ color: textColor }}>This is main content.</p>
            <button style={{ backgroundColor: textColor, color: bgColor }}>
                Continue
            </button>

            <button className="secondary" style={{ color: textColor }}>
                Exit
            </button>
        </Fragment>
    );
};

export default Content;