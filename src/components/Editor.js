import React from 'react'
import CodeMirror from "@uiw/react-codemirror";
import PropTypes from "prop-types";
import Stack from '@mui/material/Stack';
import EditorToolbar from '../components/EditorToolbar'
import { sql } from "@codemirror/lang-sql";
const Editor = ({ appState, setState }) => {
    return (
        <Stack
            width={
                appState.isEditorFullScreen ? '100vw' : '50vw'
            }
            direction='column'
        >
            <EditorToolbar
                appState={appState}
                setState={setState}
            />
            <CodeMirror
                key={`Tab ${appState.currentTab}`}
                height='100vh'
                width={
                    appState.isEditorFullScreen ? '100vw' : '50vw'
                }
                value={appState.queries[appState.currentTab]}
                theme='dark'
                extensions={[sql()]}
                onChange={(value, viewUpdate) => {
                    appState.queries[appState.currentTab] = value;
                    setState({ ...appState });
                }}
            />
        </Stack>
    )
}
Editor.propTypes = {
    appState: PropTypes.object.isRequired,
    setState: PropTypes.func.isRequired
}
export default Editor