import Stack from '@mui/material/Stack';
import { IconButton } from "@mui/material";
import PropTypes from "prop-types";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import RunIcon from '@mui/icons-material/PlayArrow';
import ToggleFullScreenIcon from '@mui/icons-material/OpenInFull';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import DropDownListSelect from '../components/DropDownListSelect'

const EditorToolbar = ({ appState, setState }) => {
    const handleAddQueryTab = () => {
        appState.queries.push('--YOUR QUERY HERE');
        appState.result.push({});
        appState.currentTab = 0;
        setState({ ...appState });
    }
    const handleRemoveQueryTab = () => {
        if (appState.queries.length > 1) {
            appState.queries.splice(appState.currentTab, 1);
            appState.result.splice(appState.currentTab, 1);
            appState.currentTab = 0;
            setState({ ...appState });
        }
    }
    const handleRunQueryTab = () => {
        console.log(`Runnig Tab ${appState.currentTab}`)
    }
    const toggleFullScreen = (e) => {
        appState.isEditorFullScreen = !appState.isEditorFullScreen;

        setState({ ...appState });
    }
    return (
        <Stack
            sx={{
                backgroundColor: 'rgba(0,0,0,0.87)'
            }}
            alignItems="center"
            justifyContent="flex-start"
            direction='row'>
            <IconButton
                onClick={handleAddQueryTab}
                size="medium"
                aria-label="add"
                sx={{
                    mx: 2
                }}
            >
                <AddIcon
                    sx={{
                        color: "#ffa726"
                    }} />
            </IconButton>
            <IconButton
                onClick={handleRemoveQueryTab}
                size="medium"
                aria-label="Delete"
                sx={{
                    mx: 2
                }}
            >
                <DeleteIcon sx={{
                    color: "error.dark"
                }} />
            </IconButton>
            <IconButton
                onClick={handleRunQueryTab}
                size="medium"
                aria-label="Run"
                sx={{
                    mx: 2
                }}
            >
                <RunIcon sx={{
                    color: "success.main"
                }} />
            </IconButton>
            <DropDownListSelect
                appState={appState}
                setState={setState}
            />
            <IconButton
                onClick={toggleFullScreen}
                size="medium"
                aria-label="toggle-fullscreen"
            >
                {!!!appState.isEditorFullScreen && <ToggleFullScreenIcon
                    sx={{
                        color: "#ffa726"
                    }} />}
                {!!appState.isEditorFullScreen && <CloseFullscreenIcon
                    sx={{
                        color: "#ffa726"
                    }} />}
            </IconButton>
        </Stack>
    )
}
EditorToolbar.propTypes = {
    appState: PropTypes.object.isRequired,
    setState: PropTypes.func.isRequired
}
export default EditorToolbar