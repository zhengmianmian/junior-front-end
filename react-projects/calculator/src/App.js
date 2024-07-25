import * as React from 'react';
import { useState } from 'react';
import classes from './App.module.css';
import Count from './components/count/Count';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
function App() {
  const [state, setState] = useState({
    right: false,
  });
  const [fontSize, setFontSize] = useState(16); // Initial font size

  const handleSliderChange = (event, newValue) => {
    setFontSize(newValue);
  };
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      p={2}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <p>Font size:</p>
      <Slider
        value={fontSize}
        onChange={handleSliderChange}
        min={10}
        max={30}
        step={1}
        valueLabelDisplay="auto"
        aria-labelledby="font-size-slider"
      />
    </Box>
  );
  const myAnchor='right';
  return (
    <div className={classes.App}>
      <header className={classes.AppHeader}>
        header
      </header>
      <main>
        <div className={classes.container}>
          <h1>
            Calculator with redux
          </h1>
          <Count/>
        </div>
        <div className={classes.container}>
          <Typography variant="h2" style={{ fontSize: `${fontSize}px` }}>
            Adjustable Text
          </Typography>
          <div>
            <Button variant="contained" color="secondary" onClick={toggleDrawer(myAnchor, true)}>setting</Button>
            <Drawer
              anchor={myAnchor}
              open={state[myAnchor]}
              onClose={toggleDrawer(myAnchor, false)}
            >
              {list(myAnchor)}
            </Drawer>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
