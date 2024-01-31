'use client'

import TextEditor from "./components/text-editor";
import { MergeView } from "./components/merge-view";
const og = `one
two
three
four
five
`;
const mod = `
one
Two
Three
four
five
seven
`
export default function Home() {

  return <>
    child page.
    <TextEditor 
      code='print("hello world")'
    />
    merge view
    <MergeView original={og} modified={mod}/>
  </>
}
