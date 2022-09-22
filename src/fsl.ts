import { parser }               from "./syntax.grammar"
import { styleTags, tags as t } from "@lezer/highlight"

import {
  LRLanguage, LanguageSupport,
  indentNodeProp, foldNodeProp, foldInside, delimitedIndent
} from "@codemirror/language"





const FSLLanguage = LRLanguage.define({

  parser: parser.configure({
    props: [

      indentNodeProp.add({
        Application: delimitedIndent({ closing: ")", align: false })
      }),

      foldNodeProp.add({
        Application: foldInside
      }),

      styleTags({
        Atom        : t.variableName,
        Boolean     : t.bool,
        Chain       : t.bool,
        String      : t.string,
        LineComment : t.lineComment,
        "( )"       : t.paren
      })

    ]
  }),

  languageData: {
    commentTokens: { line: "//" }
  }

});





function FSL() {
  return new LanguageSupport(FSLLanguage);
}





export { FSL, FSLLanguage };
