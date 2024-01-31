import CodeMirrorMerge from 'react-codemirror-merge';
import { EditorView } from 'codemirror';
import { EditorState } from '@codemirror/state';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';

const Original = CodeMirrorMerge.Original;
const Modified = CodeMirrorMerge.Modified;
let doc = `one
two
three
four
five`;

export const MergeView = () => {
  return (
    <CodeMirrorMerge theme={vscodeDark}>
      <Original value={doc} />
      <Modified
        value={doc.replace(/t/g, 'T') + 'Six'}
        extensions={[EditorView.editable.of(false), EditorState.readOnly.of(true)]}
      />
    </CodeMirrorMerge>
  );
};