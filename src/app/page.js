'use client'

import TextEditor from "./components/text-editor";
import { MergeView } from "./components/merge-view";

export default function Home() {

  return <>
    child page.
    <TextEditor 
      code='print("hello world")'
    />
    merge view
    <MergeView/>
  </>
}
