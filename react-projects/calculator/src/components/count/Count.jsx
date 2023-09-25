import * as React from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import styles from './Count.module.css'
function Count(props) {
    const [age, setAge] = useState(0);
    const [count, setCount] = useState(0);
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const increment = ()=>{
        setCount(count+age);
    }
    const decrement = ()=>{
        setCount(count-age);
    }
    const incrementIfOdd=()=>{
        if(count%2 !== 0){
            setCount(count+age);
        }
    }
    const incrementAsync = ()=>{
        setTimeout(()=>{
            setCount(count+age);
        }, 1000)
    }
    return (
        <div>
            <h2>Current result: {count} </h2>
            <div className={styles.centerContainer}>
                <Box sx={{ width: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">number</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="number"
                            onChange={handleChange}
                        >
                            <MenuItem value={1}>one</MenuItem>
                            <MenuItem value={2}>Two</MenuItem>
                            <MenuItem value={3}>Three</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </div>
            <div className={styles.centerContainer}>
                <Stack spacing={2} direction="row">
                    <Button variant="contained" onClick={increment}>+</Button>
                    <Button variant="contained" onClick={decrement}>-</Button>
                    <Button variant="contained" onClick={incrementIfOdd}>incrementifodd</Button>
                    <Button variant="contained" onClick={incrementAsync}>incrementAsync</Button>
                </Stack>
            </div>
            
        </div>
    );
}

export default Count;