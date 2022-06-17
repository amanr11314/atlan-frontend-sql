import React from 'react'
import PropTypes from "prop-types";
import Stack from '@mui/material/Stack';
import { IconButton } from "@mui/material";
import ToggleFullScreenIcon from '@mui/icons-material/OpenInFull';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
const ResultToolbar = ({ appState, setState }) => {
    const toggleFullScreen = (e) => {
        appState.isResultFullScreen = !appState.isResultFullScreen;
        setState({ ...appState });
    }
    return (
        <Stack
            sx={{
                backgroundColor: 'rgba(0,0,0,0.87)'
            }}
            py={1}
            alignItems="center"
            justifyContent="flex-start"
            direction='row'>
            <IconButton
                onClick={toggleFullScreen}
                size="medium"
                aria-label="toggle-fullscreen"
                sx={{
                    mx: 2
                }}
            >
                {!!!appState.isResultFullScreen && <ToggleFullScreenIcon
                    sx={{
                        color: "#ffa726"
                    }} />}
                {!!appState.isResultFullScreen && <CloseFullscreenIcon
                    sx={{
                        color: "#ffa726"
                    }} />}
            </IconButton>
        </Stack >
    )
}
ResultToolbar.propTypes = {
    appState: PropTypes.object.isRequired,
    setState: PropTypes.func.isRequired
};
export default ResultToolbar