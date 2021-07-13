import { createContext, FC, useState } from 'react';
import { Header } from './Header';
import { Layout } from './Layout';
import { LIGHT, DARK, GREY } from './colors';
import { Content } from './Content';

export const ThemeContext = createContext(LIGHT);

const ContextWork: FC = () => {
    const [themeValue, setThemeValue] = useState(LIGHT);

    return (
        <ThemeContext.Provider value={themeValue}>
            <Layout>
                <Header />
                <div className="settings">
                    <label htmlFor="theme-option">Specify Theme</label>
                    <select name="themes"
                            id="theme-option" value={themeValue}
                            onChange={event => setThemeValue(event.target.value)}
                    >
                        <option value="">Choose A Theme</option>
                        <option value={LIGHT}>{LIGHT}</option>
                        <option value={DARK}>{DARK}</option>
                        <option value={GREY}>{GREY}</option>
                    </select>
                </div>
                <Content />
            </Layout>
        </ThemeContext.Provider>
    );
};

export default ContextWork;