import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import styles from './Count.module.css';
import store from '../../redux/store';

function Count() {
    const [age, setAge] = useState(1);
    const [needRender, setNeedRender] = useState(false);
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    // watch store changes, if there are changes, re-render
    useEffect(()=>{
        store.subscribe(()=>{
            //触发render
            setNeedRender(!needRender);
        })
    })
    const increment = ()=>{
        store.dispatch({
            type:'increment',
            data: age,
        })
    }
    const decrement = ()=>{
        store.dispatch({
            type:'decrement',
            data: age,
        })
    }
    const incrementIfOdd=()=>{
        if(store.getState()%2 !== 0){
            store.dispatch({
                type:'increment',
                data: age,
            })
        }
    }
    const incrementAsync = ()=>{
        setTimeout(()=>{
            store.dispatch({
                type:'increment',
                data: age,
            })
        }, 1000)
    }
    return (
        <div>
            {/* store.getState() is used to get value */}
            <h2>Current result: { store.getState() } </h2>
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