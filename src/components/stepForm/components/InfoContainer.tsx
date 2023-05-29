import { MEDIUM_AND_SMALL_SCREEN } from '@/constants/constants';
import { useFormContext } from '@/context/form/formContext';
import { BACKGROUND_GREEN } from '@/styles/colors';
import { Box } from '@mui/material';
import Image from 'next/image';
import Container from '../../container/Container';
import InfoCard from '../../infoCard/InfoCard';
import { styles } from '../styles';

const { infoContainer } = styles;

const InfoContainer = () => {
  const { isLastStep } = useFormContext();

  const Tick = () => (
    <Image src={'/assets/images/tick.svg'} width={30} height={30} alt='' />
  );

  const Star = () => (
    <Image src={'/assets/images/Star1.svg'} width={34} height={34} alt='' />
  );

  const title = !isLastStep
    ? 'View Results'
    : 'Set Your Goals & View Your Results';

  return !isLastStep ? (
    <Container sx={{ ...infoContainer }}>
      {!isLastStep && (
        <Box
          sx={{ width: '50%', [MEDIUM_AND_SMALL_SCREEN]: { width: '100%' } }}
        >
          <InfoCard cardTitle='Input Information' icon={<Tick />} />
        </Box>
      )}
      <Box
        sx={{
          width: isLastStep ? '100%' : '50%',
          [MEDIUM_AND_SMALL_SCREEN]: { width: '100%' },
        }}
      >
        <InfoCard
          backgroundColor={BACKGROUND_GREEN}
          cardTitle={title}
          icon={<Star />}
        />
      </Box>
    </Container>
  ) : null;
};

export default InfoContainer;
