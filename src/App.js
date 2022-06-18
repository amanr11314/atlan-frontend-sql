import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import ResultToolbar from './components/ResultToolbar'
import Editor from './components/Editor'
import Result from './components/Result'
import { useState, useEffect } from 'react'

const App = () => {
  const [appState, setState] = useState({
    currentTab: 0,
    isResultFullScreen: false,
    isEditorFullScreen: false,
    queries: ['--YOUR QUERY HERE'],
    result: ['customers', 'products', 'orders', 'suppliers'],
  });

  //for tab switching
  useEffect(() => {
  }, [appState.currentTab]);

  /// for result fullscreen
  useEffect(() => {
  }, [appState.isResultFullScreen]);

  /// for editor fullscreen
  useEffect(() => {
  }, [appState.isEditorFullScreen]);

  return (
    <Stack
      direction='row'
      divider={<Divider orientation="vertical" flexItem />}
    >

      {
        !!!appState.isResultFullScreen &&
        <Editor appState={appState} setState={setState} />
      }
      <Stack
        direction='column'
        width={
          appState.isResultFullScreen ? '100vw' : '50vw'
        }
      >
        <ResultToolbar
          appState={appState}
          setState={setState}
        />
        <Result appState={appState} />

      </Stack>

    </Stack >
  );
}
export default App;
