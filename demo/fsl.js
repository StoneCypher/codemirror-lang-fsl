import { LRParser } from '@lezer/lr';
import { styleTags, tags } from '@lezer/highlight';
import { LRLanguage, indentNodeProp, delimitedIndent, foldNodeProp, foldInside, LanguageSupport } from '@codemirror/language';

// This file was generated by lezer-generator. You probably shouldn't edit it.
const parser = LRParser.deserialize({
  version: 14,
  states: "nQVQPOOOOQO'#Cs'#CsOOQO'#Co'#CoQVQPOOOOQO-E6m-E6m",
  stateData: "!a~OfOS~OQPORPOSPOTPOUPOVPOWPOXPOYPOZPO[PO]PO^PO_PO`POaPObPOhPO~O",
  goto: "shPPPPPPPPPPPPPPPPPPPiPPPoQRORSRTQOR",
  nodeNames: "⚠ Program Chain StateDecl Arrangement FlowDecl MachineAuthorAttr MachineContributorAttr MachineCommentAttr MachineDefinitionAttr MachineNameAttr MachineReferenceAttr MachineVersionAttr MachineLicenseAttr MachineLanguageAttr FslVersionAttr ThemeAttr HooksAttr DotPreambleAttr",
  maxTerm: 24,
  skippedNodes: [0],
  repeatNodeCount: 1,
  tokenData: "$+X~RgXY!jYZ!j]^!jpq!jrs!{}!O,|!P!Q.q!Q![,|!c!},|!}#O/Y#T#U0e#U#W,|#W#X9m#X#Y,|#Y#Z?`#Z#[,|#[#]Lx#]#a,|#a#b!&c#b#g,|#g#h#:w#h#i#LW#i#o,|~!oSf~XY!jYZ!j]^!jpq!j~#OTOr!{rs#_s#O!{#O#P,v#P~!{~#bXXY#_YZ#_]^#_pq#_wx#}}!O$|!^!_'S!_!`$|#r#s$|~$QTOw#}wx$ax#O#}#O#P,p#P~#}~$dWXY$aYZ$a]^$apq$a}!O$|!^!_'S!_!`$|#r#s$|~%PP!`!a%S~%VZXY%SYZ%S]^%Spq%Srs%xwx(X}!O)^!Q![)^!c!})^!}#O+X#T#o)^~%{TOr%xrs&[s#O%x#O#P,j#P~%x~&_YXY&[YZ&[]^&[pq&[wx#}}!O$|!]!^&}!^!_'S!_!`$|#r#s$|~'SOQ~~'VR}!O'`!_!`'`#r#s'`~'c[XY%SYZ%S]^%Spq%Srs%xwx(X}!O)^!Q![)^!`!a%S!c!})^!}#O+X#T#o)^~([TOw(Xwx(kx#O(X#O#P,d#P~(X~(nYXY(kYZ(k]^(kpq(krs%x}!O)^!Q![)^!c!})^!}#O+X#T#o)^~)a]XY&[YZ&[]^&[pq&[wx#}}!O*Y!Q![)^!]!^&}!^!_'S!_!`$|!c!})^#T#o)^#r#s$|~*]^XY&[YZ&[]^&[pq&[wx#}}!O*Y!Q![)^!]!^&}!^!_'S!_!`$|!`!a%S!c!})^#T#o)^#r#s$|~+[YXY+XYZ+X]^+Xpq+Xrs+z}!O+X!Q![+X!c!}+X#P#Q&[#T#o+X~+}TOr+zrs+Xs#O+z#O#P,^#P~+z~,aPO~+z~,gPO~(X~,mPO~%x~,sPO~#}~,yPO~!{~-P[XY#_YZ#_]^#_pq#_wx#}}!O-u!Q![,|!^!_'S!_!`$|!c!},|#T#o,|#r#s$|~-x]XY#_YZ#_]^#_pq#_wx#}}!O-u!Q![,|!^!_'S!_!`$|!`!a%S!c!},|#T#o,|#r#s$|~.tP!P!Q.w~.zROY.wYZ/TZ~.w~/YOh~~/]YXY/YYZ/Y]^/Ypq/Yrs/{}!O/Y!Q![/Y!c!}/Y#P#Q#_#T#o/Y~0OTOr/{rs/Ys#O/{#O#P0_#P~/{~0bPO~/{~0h^XY#_YZ#_]^#_pq#_wx#}}!O-u!Q![,|!^!_'S!_!`$|!c!},|#T#f,|#f#g1d#g#o,|#r#s$|~1g^XY#_YZ#_]^#_pq#_wx#}}!O-u!Q![,|!^!_'S!_!`$|!c!},|#T#f,|#f#g2c#g#o,|#r#s$|~2f]XY#_YZ#_]^#_pq#_wx#}}!O-u!Q![,|!^!_'S!_!`$|!c!},|#T#U3_#U#o,|#r#s$|~3b^XY#_YZ#_]^#_pq#_wx#}}!O-u!Q![,|!^!_'S!_!`$|!c!},|#T#b,|#b#c4^#c#o,|#r#s$|~4a^XY#_YZ#_]^#_pq#_wx#}}!O-u!Q![,|!^!_'S!_!`$|!c!},|#T#Z,|#Z#[5]#[#o,|#r#s$|~5`^XY#_YZ#_]^#_pq#_wx#}}!O-u!Q![,|!^!_'S!_!`$|!c!},|#T#X,|#X#Y6[#Y#o,|#r#s$|~6_]XY7WYZ7W]^7Wpq7Wwx#}}!O-u!Q![,|!^!_'S!_!`$|!c!},|!}#O7y#T#o,|#r#s$|~7ZYXY7WYZ7W]^7Wpq7Wwx#}}!O$|!^!_'S!_!`$|!}#O7y#r#s$|~7|YXY7yYZ7y]^7ypq7yrs8l}!O7y!Q![7y!c!}7y#P#Q9U#T#o7y~8oTOr8lrs7ys#O8l#O#P9O#P~8l~9RPO~8l~9XTXY9UYZ9U]^9Upq9U!]!^9h~9mOS~~9p^XY#_YZ#_]^#_pq#_wx#}}!O-u!Q![,|!^!_'S!_!`$|!c!},|#T#c,|#c#d:l#d#o,|#r#s$|~:o^XY#_YZ#_]^#_pq#_wx#}}!O-u!Q![,|!^!_'S!_!`$|!c!},|#T#h,|#h#i;k#i#o,|#r#s$|~;n]XY#_YZ#_]^#_pq#_wx#}}!O-u!Q![,|!^!_'S!_!`$|!c!},|#R#S<g#T#o,|#r#s$|~<jP#d#e<m~<pP#f#g<s~<vP#X#Y<y~<|P#T#U=P~=SP#a#b=V~=YP#U#V=]~=`P#`#a=c~=fP#X#Y=i~=lTXY=iYZ=i]^=ipq=i![!]={~>OTXY={YZ={]^={pq={rs>_~>bTOr>_rs>qs#O>_#O#P?Y#P~>_~>tTXY>qYZ>q]^>qpq>q!]!^?T~?YOb~~?]PO~>_~?c`XY#_YZ#_]^#_pq#_wx#}}!O-u!Q![,|!^!_'S!_!`$|!c!},|#T#`,|#`#a@e#a#g,|#g#hFd#h#o,|#r#s$|~@h^XY#_YZ#_]^#_pq#_wx#}}!O-u!Q![,|!^!_'S!_!`$|!c!},|#T#c,|#c#dAd#d#o,|#r#s$|~Ag^XY#_YZ#_]^#_pq#_wx#}}!O-u!Q![,|!^!_'S!_!`$|!c!},|#T#k,|#k#lBc#l#o,|#r#s$|~Bf]XYC_YZC_]^C_pqC_wx#}}!O-u!Q![,|![!]DQ!^!_'S!_!`$|!c!},|#T#o,|#r#s$|~CbYXYC_YZC_]^C_pqC_wx#}}!O$|![!]DQ!^!_'S!_!`$|#r#s$|~DTWXYDQYZDQ]^DQpqDQ#W#XDm#`#aEh#f#gEz#i#jF^~DpP#c#dDs~DvP#k#lDy~D|P#b#cEP~ESTXYEPYZEP]^EPpqEP!]!^Ec~EhOT~~EkP#X#YEn~EqP#Y#ZEt~EwP#h#iEP~E}P#]#^FQ~FTP#Z#[FW~FZP#[#]Et~FaP#d#eEP~Fg^XY#_YZ#_]^#_pq#_wx#}}!O-u!Q![,|!^!_'S!_!`$|!c!},|#T#`,|#`#aGc#a#o,|#r#s$|~Gf]XY#_YZ#_]^#_pq#_wx#}}!O-u!Q![,|!^!_'S!_!`$|!c!},|#R#SH_#T#o,|#r#s$|~HbP#j#kHe~HhP#X#YHk~HnP#f#gHq~HtP#g#hHw~HzP#]#^H}~IQP#c#dIT~IWP#b#cIZ~I^TXYIZYZIZ]^IZpqIZ![!]Im~IpXXYImYZIm]^ImpqIm!Q![J]!^!_Li!`!aLi#Q#RLr#r#sLr~J`VXYJuYZJu]^JupqJu!O!PK^!Q![J]!]!^KX~JxTXYJuYZJu]^JupqJu!]!^KX~K^O_~~KaP!Q![Kd~KgVXYJuYZJu]^JupqJu!O!PK|!Q![Kd!]!^KX~LPP!Q![LS~LVUXYJuYZJu]^JupqJu!Q![LS!]!^KX~LlQ!Q![J]!_!`Lr~LuP!Q![J]~L{^XY#_YZ#_]^#_pq#_wx#}}!O-u!Q![,|!^!_'S!_!`$|!c!},|#T#c,|#c#dMw#d#o,|#r#s$|~Mz^XY#_YZ#_]^#_pq#_wx#}}!O-u!Q![,|!^!_'S!_!`$|!c!},|#T#c,|#c#dNv#d#o,|#r#s$|~Ny^XY#_YZ#_]^#_pq#_wx#}}!O-u!Q![,|!^!_'S!_!`$|!c!},|#T#_,|#_#`! u#`#o,|#r#s$|~! x^XY#_YZ#_]^#_pq#_wx#}}!O-u!Q![,|!^!_'S!_!`$|!c!},|#T#g,|#g#h!!t#h#o,|#r#s$|~!!w]XY!#pYZ!#p]^!#ppq!#pwx#}}!O-u!Q![,|![!]!$c!^!_'S!_!`$|!c!},|#T#o,|#r#s$|~!#sYXY!#pYZ!#p]^!#ppq!#pwx#}}!O$|![!]!$c!^!_'S!_!`$|#r#s$|~!$fUXY!$cYZ!$c]^!$cpq!$c#V#W!$x#c#d!&P~!${P#`#a!%O~!%RP#c#d!%U~!%XP#g#h!%[~!%_P#X#Y!%b~!%eP#W#X!%h~!%kTXY!%hYZ!%h]^!%hpq!%h!]!^!%z~!&POa~~!&SP#d#e!&V~!&YP#X#Y!&]~!&`P#b#c!%h~!&f]XY#_YZ#_]^#_pq#_wx#}}!O-u!Q![,|!^!_'S!_!`$|!c!},|#T#U!'_#U#o,|#r#s$|~!'b^XY#_YZ#_]^#_pq#_wx#}}!O-u!Q![,|!^!_'S!_!`$|!c!},|#T#V,|#V#W!(^#W#o,|#r#s$|~!(a^XY#_YZ#_]^#_pq#_wx#}}!O-u!Q![,|!^!_'S!_!`$|!c!},|#T#[,|#[#]!)]#]#o,|#r#s$|~!)`^XY#_YZ#_]^#_pq#_wx#}}!O-u!Q![,|!^!_'S!_!`$|!c!},|#T#],|#]#^!*[#^#o,|#r#s$|~!*_^XY#_YZ#_]^#_pq#_wx#}}!O-u!Q![,|!^!_'S!_!`$|!c!},|#T#b,|#b#c!+Z#c#o,|#r#s$|~!+^^XY#_YZ#_]^#_pq#_wx#}}!O-u!Q![,|!^!_'S!_!`$|!c!},|#T#X,|#X#Y!,Y#Y#o,|#r#s$|~!,]]XY#_YZ#_]^#_pq#_wx#}}!O-u!Q![,|!^!_'S!_!`$|!c!},|#R#S!-U#T#o,|#r#s$|~!-XV#T#U!-n#V#W!2_#W#X!<[#`#a!E`#b#c#.w#f#g#1|#j#k#7P~!-qP#i#j!-t~!-wP#h#i!-z~!-}P#[#]!.Q~!.TP#c#d!.W~!.ZP#f#g!.^~!.aTXY!.^YZ!.^]^!.^pq!.^![!]!.p~!.sYXY!.pYZ!.p]^!.ppq!.prs!/c}!O!0d!Q![!0d!c!}!0d!}#O!1S#T#o!0d~!/fTOr!/crs!/us#O!/c#O#P!0^#P~!/c~!/xTXY!/uYZ!/u]^!/upq!/u!]!^!0X~!0^OU~~!0aPO~!/c~!0gXXY!/uYZ!/u]^!/upq!/u}!O!0d!Q![!0d!]!^!0X!c!}!0d#T#o!0d~!1VYXY!1SYZ!1S]^!1Spq!1Srs!1u}!O!1S!Q![!1S!c!}!1S#P#Q!/u#T#o!1S~!1xTOr!1urs!1Ss#O!1u#O#P!2X#P~!1u~!2[PO~!1u~!2bP#c#d!2e~!2hQ#a#b!2n#b#c!7X~!2qP#a#b!2t~!2wP#X#Y!2z~!2}P#b#c!3Q~!3TP#h#i!3W~!3ZTXY!3WYZ!3W]^!3Wpq!3W![!]!3j~!3mYXY!3jYZ!3j]^!3jpq!3jrs!4]}!O!5^!Q![!5^!c!}!5^!}#O!5|#T#o!5^~!4`TOr!4]rs!4os#O!4]#O#P!5W#P~!4]~!4rTXY!4oYZ!4o]^!4opq!4o!]!^!5R~!5WOW~~!5ZPO~!4]~!5aXXY!4oYZ!4o]^!4opq!4o}!O!5^!Q![!5^!]!^!5R!c!}!5^#T#o!5^~!6PYXY!5|YZ!5|]^!5|pq!5|rs!6o}!O!5|!Q![!5|!c!}!5|#P#Q!4o#T#o!5|~!6rTOr!6ors!5|s#O!6o#O#P!7R#P~!6o~!7UPO~!6o~!7[P#h#i!7_~!7bP#f#g!7e~!7hP#]#^!7k~!7nP#U#V!7q~!7tP#i#j!7w~!7zP#h#i!7}~!8QP#c#d!8T~!8WP#f#g!8Z~!8^TXY!8ZYZ!8Z]^!8Zpq!8Z![!]!8m~!8pYXY!8mYZ!8m]^!8mpq!8mrs!9`}!O!:a!Q![!:a!c!}!:a!}#O!;P#T#o!:a~!9cTOr!9`rs!9rs#O!9`#O#P!:Z#P~!9`~!9uTXY!9rYZ!9r]^!9rpq!9r!]!^!:U~!:ZOV~~!:^PO~!9`~!:dXXY!9rYZ!9r]^!9rpq!9r}!O!:a!Q![!:a!]!^!:U!c!}!:a#T#o!:a~!;SYXY!;PYZ!;P]^!;Ppq!;Prs!;r}!O!;P!Q![!;P!c!}!;P#P#Q!9r#T#o!;P~!;uTOr!;rrs!;Ps#O!;r#O#P!<U#P~!;r~!<XPO~!;r~!<_P#X#Y!<b~!<eP#Y#Z!<h~!<kP#]#^!<n~!<qP#b#c!<t~!<wP#]#^!<z~!<}P#h#i!=Q~!=TP#]#^!=W~!=ZP#c#d!=^~!=aP#b#c!=d~!=gTXY!=dYZ!=d]^!=dpq!=d![!]!=v~!=yTXY!=vYZ!=v]^!=vpq!=v#[#]!>Y~!>]P#h#i!>`~!>cP#h#i!>f~!>iP#d#e!>l~!>oQ![!]!>u#g#h!EY~!>xP!P!Q!>{~!?OP!P!Q!?R~!?Uiqr!@sst!@stu!@svw!@swx!@sxy!@syz!@sz{!@s{|!@s|}!@s}!O!@s!O!P!@s!P!Q!@s!Q![!@s![!]!@s!]!^!@s!_!`!@s!a!b!@s!b!c!@s!c!}!@s!}#O!@s#P#Q!@s#R#S!@s#T#o!@s#r#s!@s~!@vmXY!BqYZ!Bq]^!Bqpq!Bqqr!@sst!@stu!@svw!@swx!@sxy!@syz!@sz{!@s{|!@s|}!@s}!O!@s!O!P!@s!P!Q!@s!Q![!@s![!]!@s!]!^!CY!_!`!@s!a!b!@s!b!c!@s!c!}!@s!}#O!@s#P#Q!@s#R#S!@s#T#o!@s#r#s!@s~!BtTXY!BqYZ!Bq]^!Bqpq!Bq!]!^!CT~!CYOX~~!C_mX~XY!BqYZ!Bq]^!Bqpq!Bqqr!@sst!@stu!@svw!@swx!@sxy!@syz!@sz{!@s{|!@s|}!@s}!O!@s!O!P!@s!P!Q!@s!Q![!@s![!]!@s!]!^!CY!_!`!@s!a!b!@s!b!c!@s!c!}!@s!}#O!@s#P#Q!@s#R#S!@s#T#o!@s#r#s!@s~!E]P![!]!>u~!EcQ#T#U!Ei#]#^!IQ~!ElP#b#c!Eo~!ErP#Z#[!Eu~!ExP#i#j!E{~!FOP#T#U!FR~!FUP#Z#[!FX~!F[P#X#Y!F_~!FbTXY!F_YZ!F_]^!F_pq!F_![!]!Fq~!FtXXY!FqYZ!Fq]^!Fqpq!Fqrs!Ga}!O!Hb!Q![!Hb!c!}!Hb#T#o!Hb~!GdTOr!Gars!Gss#O!Ga#O#P!H[#P~!Ga~!GvTXY!GsYZ!Gs]^!Gspq!Gs!]!^!HV~!H[O^~~!H_PO~!Ga~!HeXXY!GsYZ!Gs]^!Gspq!Gs}!O!Hb!Q![!Hb!]!^!HV!c!}!Hb#T#o!Hb~!ITP#V#W!IW~!IZP#X#Y!I^~!IaP#b#c!Id~!IgP#g#h!Ij~!ImP#X#Y!Ip~!IsTXY!IpYZ!Ip]^!Ippq!Ip![!]!JS~!JV]XY!JSYZ!JS]^!JSpq!JSrs!KO!c!d!LP!d!e!MX!i!j!Np!n!o# c!o!p#!h!r!s##g!w!x#%R!}#O#%q~!KRTOr!KOrs!Kbs#O!KO#O#P!Ky#P~!KO~!KeTXY!KbYZ!Kb]^!Kbpq!Kb!]!^!Kt~!KyO]~~!K|PO~!KO~!LSP#d#e!LV~!LYP#T#U!L]~!L`P#V#W!Lc~!LfP#[#]!Li~!LlP#X#Y!Lo~!LrPpq!Lu~!LxP!S!T!L{~!MOP!O!P!MR~!MUP!Q!R!Kb~!M[P!u!v!M_~!MbP!f!g!Me~!MhPpq!Mk~!MnQ!S!T!Mt!T!U!Mt~!MwP}!O!Mz~!M}P#V#W!NQ~!NTP#`#a!NW~!NZP#T#U!N^~!NaP#i#j!Nd~!NgP#g#h!Nj~!NmP#X#Y!Kb~!NsP!r!s!Nv~!NyP!n!o!N|~# PPpq# S~# VP#j#k# Y~# ]Q!S!T!Kb!T!U!Kb~# fP!i!j# i~# lP!r!s# o~# rP!n!o# u~# xPpq# {~#!OP#j#k#!R~#!UQ!S!T#![!T!U!L{~#!_P!O!P#!b~#!eP!R!S!Kb~#!kQ!k!l#!q#c#d#!w~#!tP!v!w!Kb~#!zP#n#o#!}~##QP#]#^##T~##WP#`#a##Z~##^P#`#a##a~##dP#T#U!Lo~##jP#i#j##m~##pP#U#V##s~##vP#`#a##y~##|P#]#^#$P~#$SP#V#W#$V~#$YPpq#$]~#$`P#W#X#$c~#$fP#c#d#$i~#$lP#a#b#$o~#$rP#T#U#$u~#$xP#]#^#${~#%OP#b#c!Kb~#%UP#b#c#%X~#%[P#_#`#%_~#%bP#b#c#%e~#%hP#c#d#%k~#%nP#k#l#${~#%t]XY#%qYZ#%q]^#%qpq#%qrs#&m!c!d#'V!d!e#(_!i!j#)v!n!o#*i!o!p#+n!r!s#,m!w!x#.X#P#Q!Kb~#&pTOr#&mrs#%qs#O#&m#O#P#'P#P~#&m~#'SPO~#&m~#'YP#d#e#']~#'`P#T#U#'c~#'fP#V#W#'i~#'lP#[#]#'o~#'rP#X#Y#'u~#'xPpq#'{~#(OP!S!T#(R~#(UP!O!P#(X~#([P!Q!R#%q~#(bP!u!v#(e~#(hP!f!g#(k~#(nPpq#(q~#(tQ!S!T#(z!T!U#(z~#(}P}!O#)Q~#)TP#V#W#)W~#)ZP#`#a#)^~#)aP#T#U#)d~#)gP#i#j#)j~#)mP#g#h#)p~#)sP#X#Y#%q~#)yP!r!s#)|~#*PP!n!o#*S~#*VPpq#*Y~#*]P#j#k#*`~#*cQ!S!T#%q!T!U#%q~#*lP!i!j#*o~#*rP!r!s#*u~#*xP!n!o#*{~#+OPpq#+R~#+UP#j#k#+X~#+[Q!S!T#+b!T!U#(R~#+eP!O!P#+h~#+kP!R!S#%q~#+qQ!k!l#+w#c#d#+}~#+zP!v!w#%q~#,QP#n#o#,T~#,WP#]#^#,Z~#,^P#`#a#,a~#,dP#`#a#,g~#,jP#T#U#'u~#,pP#i#j#,s~#,vP#U#V#,y~#,|P#`#a#-P~#-SP#]#^#-V~#-YP#V#W#-]~#-`Ppq#-c~#-fP#W#X#-i~#-lP#c#d#-o~#-rP#a#b#-u~#-xP#T#U#-{~#.OP#]#^#.R~#.UP#b#c#%q~#.[P#b#c#._~#.bP#_#`#.e~#.hP#b#c#.k~#.nP#c#d#.q~#.tP#k#l#.R~#.zP#T#U#.}~#/QP#a#b#/T~#/WP#X#Y#/Z~#/^TXY#/ZYZ#/Z]^#/Zpq#/Z![!]#/m~#/pXXY#/mYZ#/m]^#/mpq#/mrs#0]}!O#1^!Q![#1^!c!}#1^#T#o#1^~#0`TOr#0]rs#0os#O#0]#O#P#1W#P~#0]~#0rTXY#0oYZ#0o]^#0opq#0o!]!^#1R~#1WOY~~#1ZPO~#0]~#1aXXY#0oYZ#0o]^#0opq#0o}!O#1^!Q![#1^!]!^#1R!c!}#1^#T#o#1^~#2PP#X#Y#2S~#2VP#Y#Z#2Y~#2]P#X#Y#2`~#2cP#f#g#2f~#2iP#X#Y#2l~#2oP#b#c#2r~#2uP#V#W#2x~#2{P#X#Y#3O~#3RTXY#3OYZ#3O]^#3Opq#3O![!]#3b~#3eYXY#3bYZ#3b]^#3bpq#3brs#4T}!O#5U!Q![#5U!c!}#5U!}#O#5t#T#o#5U~#4WTOr#4Trs#4gs#O#4T#O#P#5O#P~#4T~#4jTXY#4gYZ#4g]^#4gpq#4g!]!^#4y~#5OOZ~~#5RPO~#4T~#5XXXY#4gYZ#4g]^#4gpq#4g}!O#5U!Q![#5U!]!^#4y!c!}#5U#T#o#5U~#5wYXY#5tYZ#5t]^#5tpq#5trs#6g}!O#5t!Q![#5t!c!}#5t#P#Q#4g#T#o#5t~#6jTOr#6grs#5ts#O#6g#O#P#6y#P~#6g~#6|PO~#6g~#7SP#X#Y#7V~#7YP#f#g#7]~#7`P#g#h#7c~#7fP#]#^#7i~#7lP#c#d#7o~#7rP#b#c#7u~#7xTXY#7uYZ#7u]^#7upq#7u![!]#8X~#8[TXY#8XYZ#8X]^#8Xpq#8X!Q![#8k~#8nVXY#9TYZ#9T]^#9Tpq#9T!O!P#9l!Q![#8k!]!^#9g~#9WTXY#9TYZ#9T]^#9Tpq#9T!]!^#9g~#9lO[~~#9oP!Q![#9r~#9uVXY#9TYZ#9T]^#9Tpq#9T!O!P#:[!Q![#9r!]!^#9g~#:_P!Q![#:b~#:eUXY#9TYZ#9T]^#9Tpq#9T!Q![#:b!]!^#9g~#:z^XY#_YZ#_]^#_pq#_wx#}}!O-u!Q![,|!^!_'S!_!`$|!c!},|#T#h,|#h#i#;v#i#o,|#r#s$|~#;y]XY#_YZ#_]^#_pq#_wx#}}!O-u!Q![,|!^!_'S!_!`$|!c!},|#T#U#<r#U#o,|#r#s$|~#<u^XY#_YZ#_]^#_pq#_wx#}}!O-u!Q![,|!^!_'S!_!`$|!c!},|#T#h,|#h#i#=q#i#o,|#r#s$|~#=t^XY#_YZ#_]^#_pq#_wx#}}!O-u!Q![,|!^!_'S!_!`$|!c!},|#T#X,|#X#Y#>p#Y#o,|#r#s$|~#>s]XY#?lYZ#?l]^#?lpq#?lrs#@hwx#}}!O#Ij!Q![#K[!^!_'S!_!`$|!c!}#K[#T#o#K[#r#s$|~#?o]XY#?lYZ#?l]^#?lpq#?lrs#@hwx#}}!O#HX!Q![#Hz!^!_'S!_!`$|!c!}#Hz#T#o#Hz#r#s$|~#@kTOr#@hrs#@zs#O#@h#O#P#HR#P~#@h~#@}TXY#@zYZ#@z]^#@zpq#@z![!]#A^~#AaTXY#A^YZ#A^]^#A^pq#A^#o#p#Ap~#AsYXY#ApYZ#Ap]^#Appq#Aprs#Bc}!O#Fz!Q![#Fz!c!}#Fz#T#o#Fz#q#r#Gj~#BfTOr#Bcrs#Bus#O#Bc#O#P#Ft#P~#Bc~#BxTXY#BuYZ#Bu]^#Bupq#Bu![!]#CX~#C[YXY#CXYZ#CX]^#CXpq#CXrs#Cz}!O#Dv!Q!R#Dv!R![#Ef!c!}#Dv#T#o#Dv~#C}TOr#Czrs#D^s#O#Cz#O#P#Dp#P~#Cz~#DaTXY#D^YZ#D^]^#D^pq#D^!]!^#Ap~#DsPO~#Cz~#DyXXY#D^YZ#D^]^#D^pq#D^}!O#Dv!Q![#Dv!]!^#Ap!c!}#Dv#T#o#Dv~#EiYXY#D^YZ#D^]^#D^pq#D^}!O#Dv!O!P#FX!Q![#Ef!]!^#Ap!c!}#Dv#T#o#Dv~#F[P!Q![#F_~#FbUXY#D^YZ#D^]^#D^pq#D^!Q![#F_!]!^#Ap~#FwPO~#Bc~#F}XXY#BuYZ#Bu]^#Bupq#Bu}!O#Fz!Q![#Fz![!]#CX!c!}#Fz#T#o#Fz~#GmTXY#GjYZ#Gj]^#Gjpq#Gj!]!^#G|~#HROR~~#HUPO~#@h~#H[YXY#@zYZ#@z]^#@zpq#@z}!O#Hz!Q![#Hz![!]#A^!`!a%S!c!}#Hz#T#o#Hz~#H}XXY#@zYZ#@z]^#@zpq#@z}!O#Hz!Q![#Hz![!]#A^!c!}#Hz#T#o#Hz~#Im^XY#JiYZ#Ji]^#Jipq#Jiwx#}}!O#Ij!Q![#K[![!]#A^!^!_'S!_!`$|!`!a%S!c!}#K[#T#o#K[#r#s$|~#JlYXY#JiYZ#Ji]^#Jipq#Jiwx#}}!O$|![!]#A^!^!_'S!_!`$|#r#s$|~#K_]XY#JiYZ#Ji]^#Jipq#Jiwx#}}!O#Ij!Q![#K[![!]#A^!^!_'S!_!`$|!c!}#K[#T#o#K[#r#s$|~#LZ^XY#_YZ#_]^#_pq#_wx#}}!O-u!Q![,|!^!_'S!_!`$|!c!},|#T#[,|#[#]#MV#]#o,|#r#s$|~#MY^XY#_YZ#_]^#_pq#_wx#}}!O-u!Q![,|!^!_'S!_!`$|!c!},|#T#X,|#X#Y#NU#Y#o,|#r#s$|~#NX^XY#_YZ#_]^#_pq#_wx#}}!O-u!Q![,|!^!_'S!_!`$|!c!},|#T#a,|#a#b$ T#b#o,|#r#s$|~$ W^XY#_YZ#_]^#_pq#_wx#}}!O-u!Q![,|!^!_'S!_!`$|!c!},|#T#X,|#X#Y$!S#Y#o,|#r#s$|~$!V]XY$#OYZ$#O]^$#Opq$#Owx#}}!O-u!Q![,|![!]$#q!^!_'S!_!`$|!c!},|#T#o,|#r#s$|~$#RYXY$#OYZ$#O]^$#Opq$#Owx#}}!O$|![!]$#q!^!_'S!_!`$|#r#s$|~$#tYXY$#qYZ$#q]^$#qpq$#q!}#O$$d#U#V$(k#W#X$(}#a#b$)s#b#c$*c#c#d$*u~$$gXXY$$dYZ$$d]^$$dpq$$d#U#V$%S#W#X$&a#a#b$'V#b#c$'u#c#d$(X~$%VP#c#d$%Y~$%]P#`#a$%`~$%cP#W#X$%f~$%iTXY$%fYZ$%f]^$%fpq$%f#P#Q$%x~$%{TXY$%xYZ$%x]^$%xpq$%x!]!^$&[~$&aO`~~$&dP#X#Y$&g~$&jP#Y#Z$&m~$&pP#T#U$&s~$&vP#i#j$&y~$&|P#`#a$'P~$'SP#h#i$%f~$'YP#c#d$']~$'`P#W#X$'c~$'fP#X#Y$'i~$'lP#f#g$'o~$'rP#b#c$%f~$'xP#c#d$'{~$(OP#b#c$(R~$(UP#X#Y$%f~$([P#V#W$(_~$(bP#X#Y$(e~$(hP#T#U$'o~$(nP#c#d$(q~$(tP#`#a$(w~$(zP#W#X$%x~$)QP#X#Y$)T~$)WP#Y#Z$)Z~$)^P#T#U$)a~$)dP#i#j$)g~$)jP#`#a$)m~$)pP#h#i$%x~$)vP#c#d$)y~$)|P#W#X$*P~$*SP#X#Y$*V~$*YP#f#g$*]~$*`P#b#c$%x~$*fP#c#d$*i~$*lP#b#c$*o~$*rP#X#Y$%x~$*xP#V#W$*{~$+OP#X#Y$+R~$+UP#T#U$*]",
  tokenizers: [0],
  topRules: {"Program":[0,1]},
  tokenPrec: 0
});

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
                Atom: tags.variableName,
                Boolean: tags.bool,
                String: tags.string,
                LineComment: tags.lineComment,
                "( )": tags.paren
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
