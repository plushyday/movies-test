import * as React from 'react';
import { IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';

import { useAppSelector } from 'store';
import { selectError } from 'store/selectors';

import { StyledAlert } from './style';

export default function ActionAlerts() {
  const error = useAppSelector(selectError);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (error) {
      setOpen(true);
      console.log(error);
    }
  }, [error, setOpen]);

  return (
    <>
      {open && (
        <StyledAlert
          severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <Close fontSize="inherit" />
            </IconButton>
          }
        >
          {error as string}
        </StyledAlert>
      )}
    </>
  );
}
