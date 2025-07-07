import './App.css'
import InfoPage from './pages/InfoPage'
import AddonPage from './pages/AddonPage'
import PlanPage from './pages/PlanPage'
import SummaryPage from './pages/SummaryPage'
import EndPage from './pages/EndPage'
import { BrowserRouter, Route, Routes, useNavigate, useLocation } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { FormProvider, useForm } from './context/FormContext';

const stepRoutes = [
  { path: '/', element: <InfoPage /> },
  { path: '/plan', element: <PlanPage /> },
  { path: '/addon', element: <AddonPage /> },
  { path: '/summary', element: <SummaryPage /> },
  { path: '/end', element: <EndPage /> },
];

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();
  const { setUser, setPlan, setBilling, setAddons } = useForm();

  const currentStep = (() => {
    const idx = stepRoutes.findIndex(r => r.path === location.pathname);
    return idx === -1 ? 1 : idx + 1;
  })();

  const handleStepChange = (step, isBack = false) => {
    if (isBack) {
      if (step < 2) {
        setUser({ name: '', email: '', phone: '' });
        setPlan('arcade');
        setBilling('monthly');
        setAddons([]);
      } else if (step < 3) {
        setPlan('arcade');
        setBilling('monthly');
        setAddons([]);
      } else if (step < 4) {
        setAddons([]);
      }
    }
    const route = stepRoutes[step - 1];
    if (route) {
      navigate(route.path);
    }
  };

  return (
    <Container sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: { xs: 'auto', md: '100vh' },
      padding: { xs: 0, md: 2 },
      margin: 0,
      minWidth: { xs: 0, md: 'auto' },
      width: { xs: '100vw', md: 'auto' },
      maxWidth: { xs: '100vw' },
    }} >
      <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'center',
        backgroundColor: 'white',
        alignItems: 'center',
        padding: { xs: 0, md: 2 },
        borderRadius: { xs: 0, md: '8px' },
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: { xs: '100vw', md: '850px' },
        minWidth: { xs: '100vw', md: '800px' },
        maxWidth: { xs: '100vw' }
      }}>
        <Sidebar currentStep={currentStep} onStepChange={handleStepChange} />
        <Routes>
          {stepRoutes.map(r => (
            <Route key={r.path} path={r.path} element={r.element} />
          ))}
        </Routes>
      </Box>
    </Container>
  )
}

export default function App() {
  return (
    <FormProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </FormProvider>
  );
}
