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
  return (<div className='p-8 border-solid'>
    <div className='grid justify-items-end'>
      <select
        onChange={(event)=>{setLang(event.target.value)}}
        defaultValue={'python'}>
          { lang_names.map((name,index)=>(
              <option value={name}>{name}</option> 
            ))
          }            
      </select>
    </div>
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
    </div>
  );
};