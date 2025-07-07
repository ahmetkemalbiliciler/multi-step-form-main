import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { FormContainer, FlexContainer, StyledButton, pageTitleStyle, pageSubtitleStyle } from '../styles';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../context/FormContext';

function SummaryPage() {
    const { plan: planKey, billing, addons: selectedAddons } = useForm();
    const navigate = useNavigate();
    const plans = {
        arcade: { label: 'Arcade', price: { monthly: 9, yearly: 90 } },
        advanced: { label: 'Advanced', price: { monthly: 12, yearly: 120 } },
        pro: { label: 'Pro', price: { monthly: 15, yearly: 150 } },
    };
    const addons = {
        online: { label: 'Online service', desc: 'Access to multiplayer games', price: 1 },
        storage: { label: 'Larger storage', desc: 'Extra 1TB of cloud save', price: 2 },
        profile: { label: 'Customizable Profile', desc: 'Custom theme on your profile', price: 2 },
    };
    const plan = plans[planKey];
    const planPrice = plan.price[billing];
    const total = planPrice + selectedAddons.reduce((sum, key) => sum + (addons[key]?.price || 0), 0);

    return (
        <FormContainer>
            <Typography variant="h4" sx={pageTitleStyle}>
                Finishing up
            </Typography>
            <Typography variant="body1" sx={pageSubtitleStyle}>
                Double-check everything looks OK before confirming.
            </Typography>
            <Box sx={{ mt: 3, background: '#f8f9fe', borderRadius: 2, p: 3 }}>
                <FlexContainer sx={{ justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Box>
                        <Typography fontWeight="bold">
                            {plan.label} ({billing === 'monthly' ? 'Monthly' : 'Yearly'})
                        </Typography>
                        <Typography
                            variant="body2"
                            color="#6c7a99"
                            sx={{ textDecoration: 'underline', cursor: 'pointer', width: 'fit-content' }}
                            onClick={() => navigate('/plan')}
                        >
                            Change
                        </Typography>
                    </Box>
                    <Typography fontWeight="bold" color="#483EFF">
                        ${planPrice}/{billing === 'monthly' ? 'mo' : 'yr'}
                    </Typography>
                </FlexContainer>
                <Box sx={{ borderTop: '1px solid #e0e0e0', pt: 2 }}>
                    {selectedAddons.length === 0 && (
                        <Typography color="text.secondary" variant="body2">No add-ons selected</Typography>
                    )}
                    {selectedAddons.map(key => (
                        <FlexContainer key={key} sx={{ justifyContent: 'space-between', mb: 1 }}>
                            <Typography color="text.secondary" variant="body2">
                                {addons[key]?.label}
                            </Typography>
                            <Typography color="text.secondary" variant="body2">
                                +${addons[key]?.price}/{billing === 'monthly' ? 'mo' : 'yr'}
                            </Typography>
                        </FlexContainer>
                    ))}
                </Box>
            </Box>
            <FlexContainer sx={{ justifyContent: 'space-between', mt: 3 }}>
                <Typography color="text.secondary">Total (per {billing === 'monthly' ? 'month' : 'year'})</Typography>
                <Typography fontWeight="bold" color="#483EFF" fontSize={20}>
                    +${total}/{billing === 'monthly' ? 'mo' : 'yr'}
                </Typography>
            </FlexContainer>
            <FlexContainer sx={{ justifyContent: 'space-between', mt: 'auto' }}>
                <StyledButton variant="text" color="primary" onClick={() => navigate("/addon")}>
                    Go Back
                </StyledButton>
                <StyledButton variant="contained" color="primary" onClick={() => navigate('/end')}>
                    Confirm
                </StyledButton>
            </FlexContainer>
        </FormContainer>
    );
}
export default SummaryPage;