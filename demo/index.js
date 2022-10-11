
import { EditorView, basicSetup } from "codemirror"
import { FSL }                    from './fsl';




function bootstrap() {

  const tgt = document.getElementById('editor_target');

  if (tgt === null) {
    throw new Error('No target for editor!');
  }

  let editor = new EditorView({
    extensions : [ basicSetup, FSL() ],
    parent     : tgt
  });

}





window.onload = bootstrap;
