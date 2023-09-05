import React, { useState } from 'react';
import {Select, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { SelectProps } from './@types';

const useStyled= makeStyles(() => ({
    formControl: {
        minWidth: 100,
        color: '#fff'
    },
    label: {
        color: "#fff",
        opacity: 0.7
    },
    selector: {
        color: "#fff",
        minWidth: 100,
        '& svg': {
            color: '#fff'
        },
        '& li': {
            color: '#000 !important',
            fontSize: 15
        },
        '&:before': {
            borderBottom: '1px solid #fff'
        },
        '&:after': {
            borderBottom: '1px solid #fff'
        }
    }
}))

const Selector: React.FC<SelectProps> = ({values, defaultValue}) => {
    const classes = useStyled()
    const [value, setValue] = useState<number | string | unknown>(defaultValue || "");

    const handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
        setValue(event.target.value)
    }

    return (
            <Select
                value={value}
                onChange={handleChange}
                className={classes.selector}
                MenuProps={{
                    className: classes.selector
                }}
            >
                {values.map(item => <MenuItem value={item} key={item}>{item}</MenuItem>)}
            </Select>
    );
};

export default Selector;
