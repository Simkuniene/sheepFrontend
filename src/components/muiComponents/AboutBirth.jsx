import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import BirthTable from './BirthTable';

export default function AboutBirth({sheepNumber}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <div>
      <button aria-describedby={id} type="button" onClick={handleClick}>
        Gimdymai
      </button>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
         <BirthTable sheepNumber={sheepNumber} />
        </Box>
      </Popper>
    </div>
  );
}
