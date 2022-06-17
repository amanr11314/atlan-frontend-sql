import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import PropTypes from "prop-types";
import FormControl from '@mui/material/FormControl';
import MuiSelect from '@mui/material/Select';
import { styled } from "@mui/material/styles";
const Select = styled(MuiSelect)(({ theme }) => ({
    '.css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.secondary.main,
    }
}))
const DropDownListSelect = ({ appState, setState }) => {
    // const [choice, setChoice] = React.useState(itemsList[0]);

    const handleChange = (event) => {
        const val = event.target.value;
        const currentTab = parseInt(val.split(' ')[1]);
        appState.currentTab = currentTab - 1;
        setState({ ...appState });
    };

    return (
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel sx={{
                color: 'whitesmoke'
            }} id="demo-select-small">Tab</InputLabel>
            <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={`Tab ${appState.currentTab + 1}`}
                label="Tab"
                sx={{
                    color: 'secondary.main',
                    "&:hover": {
                        "&& fieldset": {
                            borderColor: 'secondary.light'
                        }
                    },
                }}
                onChange={handleChange}
            >
                {
                    appState.queries.map(
                        (_, idx) =>
                            <MenuItem
                                color='white'
                                key={idx}
                                value={`Tab ${idx + 1}`}
                            >
                                {`Tab ${idx + 1}`}
                            </MenuItem>
                    )
                }
            </Select>
        </FormControl >
    );
}
DropDownListSelect.propTypes = {
    appState: PropTypes.object.isRequired,
    setState: PropTypes.func.isRequired
}
export default DropDownListSelect;