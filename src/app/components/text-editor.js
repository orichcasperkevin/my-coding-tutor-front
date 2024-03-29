'use client'

import {useState, useCallback}  from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { loadLanguage, langs } from '@uiw/codemirror-extensions-langs';

const lang_names = Object.keys(langs)

export default function TextEditor(props) {
    const [value, setValue] = useState(props.code);
    const [lang, setLang] = useState('python')
  
    const onCodeChanged = useCallback((val, viewUpdate) => {    
        setValue(val);
    }, []);

    
    return <div className="p-8 border-solid">    
        <div className='grid justify-items-end'>
            <select className='class="rounded-full"'
                onChange={(event)=>{setLang(event.target.value)}}
                defaultValue={'python'}>
                { lang_names.map((name,index)=>(
                <option value={name}>{name}</option> 
                ))
                }            
            </select>
        </div>
        <CodeMirror 
            className='rounded-md'
            value={value} 
            height="200px" 
            theme={ vscodeDark }
            extensions={[loadLanguage(lang)]}
            onChange={onCodeChanged} 
        />
    </div>;
    
}
