import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// Form Container - Ana form container'ı
export const FormContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    height: '600px',
    minWidth: '560px',
    padding: theme.spacing(3),
    gap: theme.spacing(3),
}));

// Form Section - Form bölümleri için
export const FormSection = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
}));

// Styled TextField - Özelleştirilmiş input alanları
export const StyledTextField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: theme.palette.grey[300],
        },
        '&:hover fieldset': {
            borderColor: theme.palette.primary.main,
        },
        '&.Mui-focused fieldset': {
            borderColor: theme.palette.primary.main,
        },
    },
}));

// Styled Button - Özelleştirilmiş buton
export const StyledButton = styled(Button)(({ theme }) => ({
    px: 3,
    py: 1.5,
    borderRadius: 2,
    textTransform: 'none',
    fontWeight: 'medium',
}));

// Page Container - Sayfa container'ı
export const PageContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    height: '600px',
    minWidth: '560px',
    padding: theme.spacing(3),
    gap: theme.spacing(3),
}));

// Flex Container - Genel flex container
export const FlexContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
}));

// Flex End Container - Sağa hizalı flex container
export const FlexEndContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'flex-end',
}));

// Typography Styles
export const pageTitleStyle = {
    fontWeight: 'bold',
    mb: 1,
};

export const pageSubtitleStyle = {
    color: 'text.secondary',
};

export const fieldLabelStyle = {
    mb: 1,
    fontWeight: 'medium',
};

// FormContext için referans: src/context/FormContext.jsx 