import { PropsWithChildren, useState } from 'react';
import { Tooltip, Popper, Fade } from '@mui/material';

import PopperContainer from './PopperContainer';
import TooltipImage from './TooltipImage';
import { styles } from './styles';

const { popperStyles } = styles;

function MyToolTip({ children }: PropsWithChildren) {
  const [anchorEl, setAnchorEl] = useState<HTMLSpanElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLSpanElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const id = open ? 'tooltip-popper' : undefined;

  return (
    <>
      <Tooltip
        title=''
        open={open}
        enterDelay={5000}
        leaveDelay={2000}
        onBlur={handlePopoverClose}
      >
        <span onMouseEnter={handlePopoverOpen}>
          <TooltipImage width={30} height={30} />
        </span>
      </Tooltip>

      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        placement='right-end'
        sx={popperStyles}
      >
        {({ ...TransitionProps }) => (
          <Fade {...TransitionProps} timeout={2000}>
            <PopperContainer onClose={handlePopoverClose}>
              {children}
            </PopperContainer>
          </Fade>
        )}
      </Popper>
    </>
  );
}

export default MyToolTip;
