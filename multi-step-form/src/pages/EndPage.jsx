import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ThankYouIcon from '../assets/images/icon-thank-you.svg';
import { FormContainer, FlexContainer } from '../styles';
import { useForm } from '../context/FormContext';

function EndPage() {
    const { user, plan, billing, addons } = useForm();
    React.useEffect(() => {
        console.log('Form Data:', { user, plan, billing, addons });
    }, [user, plan, billing, addons]);
    return (
        <FormContainer style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', minHeight: 400 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                <img src={ThankYouIcon} alt={"Thank You!"} width={100} height={100} style={{ borderRadius: '50%' }} />
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                    Thank you!
                </Typography>
                <Typography color="text.secondary" maxWidth={400}>
                    Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.
                </Typography>
            </Box>
        </FormContainer>
    );
}

export default EndPage;
