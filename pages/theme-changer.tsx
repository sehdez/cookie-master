import { GetServerSideProps } from 'next'
import { ChangeEvent, useEffect, useState } from 'react';
import { Layout } from '../components/layouts';
import { Card, CardContent, FormLabel, FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material'
import Cookies from 'js-cookie'

const ThemeChangerPager = () => {

    const [currentTheme, setCurrentTheme] = useState('light');

    const onThemeChange = ( event: ChangeEvent<HTMLInputElement> ) => {
        const selectedTheme = event.target.value;
        setCurrentTheme( selectedTheme );

        Cookies.set('theme', selectedTheme);
    }

    useEffect(() => {

        const themeSelected = Cookies.get('theme');

        setCurrentTheme(themeSelected || 'light')
    },[])
    return (
        <Layout>    
            <Card>
                <CardContent>
                    <FormControl>
                        <FormLabel>Tema</FormLabel>
                        <RadioGroup
                            value={ currentTheme }
                            onChange={ onThemeChange }
                        >
                            <FormControlLabel value='light'  control={ <Radio /> } label='Light'/>
                            <FormControlLabel value='dark'   control={ <Radio /> } label='Dark'/>
                            <FormControlLabel value='custom' control={ <Radio /> } label='Custom'/>
                        </RadioGroup>
                    </FormControl>
                </CardContent>
            </Card>
        </Layout>
  )
}

export default ThemeChangerPager


export const getServerSideProps: GetServerSideProps = async (ctx) => {
    console.log({'req': ctx.req.cookies})
    return {
        props: {
            
        }
    }
}
