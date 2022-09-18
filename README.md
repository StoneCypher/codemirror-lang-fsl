# FSL / JSSM highlighter for CodeMirror 6

This repo gives [CodeMirror](https://codemirror.net/) support for
[the FSL language](https://fsl.tools/), as used by
[JSSM](https://github.com/StoneCypher/jssm).

&nbsp;

&nbsp;





## Installation

The FSL package:

```
npm install --save codemirror-lang-fsl
```

Need CodeMirror too?

```
npm install --save codemirror-lang-fsl
```

&nbsp;

&nbsp;





## Installation

Easy to use.  [Here's a live demo](https://stonecypher.github.io/codemirror-lang-fsl/index.html) of the code from below:

```javascript
import { EditorView, basicSetup } from "codemirror"
import { fsl }                    from './fsl';

function bootstrap() {

  const tgt = document.getElementById('editor_target');
  if (tgt === null) { throw new Error('No target for editor!'); }

  let editor = new EditorView({
    extensions : [basicSetup, fsl()],
    parent     : tgt
  });

}

window.onload = bootstrap;
```

```html
<!doctype html>
<html>

  <head>

    <title>CodeMirror FSL test/demo page</title>
    <script defer type="text/javascript" src="./index.js"></script>

  </head>

  <body>
    <div id="editor"><div id="editor_target"></div></div>
  </body>

</html>
```
