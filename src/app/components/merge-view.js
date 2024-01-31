import { useState } from 'react';
import CodeMirrorMerge from 'react-codemirror-merge';
import { EditorView } from 'codemirror';
import { EditorState } from '@codemirror/state';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { loadLanguage, langs } from '@uiw/codemirror-extensions-langs';

const lang_names = Object.keys(langs)

const Original = CodeMirrorMerge.Original;
const Modified = CodeMirrorMerge.Modified;

export const MergeView = (props) => {
  const [lang, setLang] = useState('python')
  return (
    <CodeMirrorMerge theme={vscodeDark}>
      <Original value={props.original} />
      <Modified
        value={props.modified}
        extensions={
            [
                EditorView.editable.of(true), 
                EditorState.readOnly.of(false ),
                loadLanguage(lang)
            ]
        }
      />
    </CodeMirrorMerge>
  );
};