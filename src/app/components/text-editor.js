'use client'

import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';

export default function TextEditor() {
  const [value, setValue] = React.useState("console.log('hello world!');");
  const onChange = React.useCallback((val, viewUpdate) => {
    console.log('val:', val);
    setValue(val);
  }, []);
  
  return <CodeMirror 
      value={value} 
      height="200px" 
      theme={ vscodeDark }
      extensions={[javascript({ jsx: true })]} 
      onChange={onChange} 
    />;
}
