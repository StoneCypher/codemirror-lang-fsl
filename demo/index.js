
import { EditorView, basicSetup } from "codemirror"
import { FSL }                    from './fsl';
// import { j }                      from 'codemirror-lang-j';





function bootstrap() {

  const tgt = document.getElementById('editor_target');

  if (tgt === null) {
    throw new Error('No target for editor!');
  }

  let editor = new EditorView({
    extensions : [ basicSetup, FSL() ],
//    extensions : [ basicSetup, j() ],
    parent     : tgt
  });

}





window.onload = bootstrap;
