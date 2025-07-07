import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import { FormContainer, FlexContainer, StyledButton, pageTitleStyle, pageSubtitleStyle } from '../styles';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../context/FormContext';

const addons = [
  {
    key: 'online',
    label: 'Online service',
    desc: 'Access to multiplayer games',
    price: 1,
  },
  {
    key: 'storage',
    label: 'Larger storage',
    desc: 'Extra 1TB of cloud save',
    price: 2,
  },
  {
    key: 'profile',
    label: 'Customizable Profile',
    desc: 'Custom theme on your profile',
    price: 2,
  },
];

function AddonPage() {
  const { addons: selected, setAddons } = useForm();
  const navigate = useNavigate();

  const handleToggle = (key) => {
    setAddons((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  return (
    <FormContainer>
      <Typography variant="h4" sx={pageTitleStyle}>
        Pick add-ons
      </Typography>
      <Typography variant="body1" sx={pageSubtitleStyle}>
        Add-ons help enhance your gaming experience.
      </Typography>
      <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
        {addons.map((addon) => {
          const checked = selected.includes(addon.key);
          return (
            <Box
              key={addon.key}
              onClick={() => handleToggle(addon.key)}
              sx={{
                display: 'flex',
                alignItems: 'center',
                border: checked ? '2px solid #483EFF' : '1px solid #ccc',
                borderRadius: 2,
                background: checked ? 'rgba(72,62,255,0.05)' : '#fff',
                p: 2,
                cursor: 'pointer',
                transition: 'border 0.2s, background 0.2s',
                gap: 2,
              }}
            >
              <Checkbox
                checked={checked}
                tabIndex={-1}
                sx={{
                  color: '#483EFF',
                  '&.Mui-checked': { color: '#483EFF' },
                }}
                readOnly
              />
              <Box sx={{ flex: 1 }}>
                <Typography fontWeight="bold">{addon.label}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {addon.desc}
                </Typography>
              </Box>
              <Typography color="#483EFF" fontWeight="bold">
                +${addon.price}/mo
              </Typography>
            </Box>
          );
        })}
      </Box>
      <FlexContainer sx={{ justifyContent: 'space-between', mt: 'auto' }}>
        <StyledButton variant="text" color="primary" onClick={() => navigate("/plan")}>
          Go Back
        </StyledButton>
        <StyledButton variant="contained" color="primary" onClick={() => navigate('/summary')}>
          Next Step
        </StyledButton>
      </FlexContainer>
    </FormContainer>
  );
}
export default AddonPage;