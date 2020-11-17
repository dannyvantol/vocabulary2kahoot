(this.webpackJsonpvocabulary2kahoot=this.webpackJsonpvocabulary2kahoot||[]).push([[0],[,,,,,,,,,,,,function(e,t){},,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,function(e,t){},function(e,t){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(0),s=n(3),a=n.n(s),r=n(13),o=n.n(r),c=(n(19),n(20),n(1)),u=n(2),l=n(5),h=n(4),b=(n(21),n(6)),d=n(7),j=n.n(d),m=function e(){Object(c.a)(this,e)};m.ENTER="Enter",m.TAB="Tab";var f=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"getClassName",value:function(){var e=n.DEFAULT_CLASS_NAME;return void 0!==this.props.className&&(e+=" "+this.props.className),e}},{key:"render",value:function(){return Object(i.jsx)("button",{className:this.getClassName(),onClick:this.props.onClick,children:this.props.children})}}]),n}(a.a.PureComponent);f.DEFAULT_CLASS_NAME="h-10 text-lg border-b-2";var p=f,v=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(c.a)(this,n),(i=t.call(this,e)).termRef=void 0,i.answerRef=void 0,i.termRef=a.a.createRef(),i.answerRef=a.a.createRef(),i.state={term:"",answer:""},i}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e;null===(e=this.termRef.current)||void 0===e||e.focus()}},{key:"onInputTerm",value:function(e){this.setState({term:e.currentTarget.value})}},{key:"onInputAnswer",value:function(e){this.setState({answer:e.currentTarget.value})}},{key:"onKeyPressTerm",value:function(e){var t;e.key===m.ENTER&&(null===(t=this.answerRef.current)||void 0===t||t.focus())}},{key:"onKeyPressAnswer",value:function(e){e.key!==m.ENTER&&e.key!==m.TAB||this.onSubmit()}},{key:"onSubmit",value:function(){var e;this.inputValuesAreValid()?(this.clearState(),null===(e=this.termRef.current)||void 0===e||e.focus(),this.props.onSubmit(this.state.term,this.state.answer)):alert("Fill in both fields")}},{key:"inputValuesAreValid",value:function(){var e=this.state.term.trim().length,t=this.state.answer.trim().length;return e>0&&t>0}},{key:"clearState",value:function(){this.setState({term:"",answer:""})}},{key:"render",value:function(){return Object(i.jsxs)("div",{className:"w-full flex items-center border-white border-b-2 pb-1",children:[this.renderInput(this.state.term,"Term",120,this.onInputTerm,this.onKeyPressTerm,this.termRef),Object(i.jsx)("span",{className:"text-lg text-white",children:"\u2192"}),this.renderInput(this.state.answer,"Answer",75,this.onInputAnswer,this.onKeyPressAnswer,this.answerRef),Object(i.jsx)(p,{className:"w-10 text-white font-bold bg-blue-300 border-blue-400",onClick:this.onSubmit.bind(this),children:"+"})]})}},{key:"renderInput",value:function(e,t,n,s,a,r){return Object(i.jsx)("input",{type:"text",value:e,placeholder:t,maxLength:n,onInput:s.bind(this),ref:r,onKeyPress:a.bind(this),className:"flex-grow text-white bg-transparent p-1 box-border focus:outline-none"})}}]),n}(a.a.Component),x=(n(29),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"onClick",value:function(e){this.props.onRemoveRow(e)}},{key:"render",value:function(){return Object(i.jsx)("div",{className:"p-2 box-border bg-white rounded",children:Object(i.jsxs)("table",{className:"w-full",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{className:"text-sm pl-1",children:"#"}),Object(i.jsx)("th",{className:"w-5/12 text-sm",children:"Term"}),Object(i.jsx)("th",{className:"w-5/12 text-sm",children:"Answer"}),Object(i.jsx)("th",{className:"w-1/12 text-sm"})]})}),Object(i.jsxs)("tbody",{children:[this.renderTableBody(this.props.data),this.renderNoDataMessage()]})]})})}},{key:"renderTableBody",value:function(e){var t=this,n=[];return e.forEach((function(e,s){n.push(Object(i.jsxs)("tr",{className:"odd:bg-gray-200",children:[Object(i.jsx)("td",{className:"w-1/12 text-sm pl-1",children:s+1}),Object(i.jsx)("td",{className:"w-5/12 text-sm",children:e[0]}),Object(i.jsx)("td",{className:"w-5/12 text-sm",children:e[1]}),Object(i.jsx)("td",{className:"w-1/12 text-sm text-right pr-1",children:Object(i.jsx)("button",{className:"focus:outline-none",onClick:t.onClick.bind(t,s),children:Object(i.jsx)("span",{className:"text-red-300",children:"\u2716"})})})]},s))})),n}},{key:"renderNoDataMessage",value:function(){if(0===this.props.data.length)return Object(i.jsxs)("tr",{className:"mt-1 text-sm text-gray-500",children:[Object(i.jsx)("td",{className:"pl-1",children:"1"}),Object(i.jsx)("td",{children:"Lorem ipsum dolor sit amet"}),Object(i.jsx)("td",{children:"consectetur adipiscing elit"})]})}}]),n}(a.a.PureComponent)),O=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"onChange",value:function(e){var t=parseInt(e.currentTarget.value);this.props.onChangeTimeLimit(t)}},{key:"render",value:function(){return Object(i.jsxs)("div",{className:"flex justify-between",children:[Object(i.jsxs)("div",{className:"flex items-center",children:[Object(i.jsxs)("select",{className:"w-12 h-8",value:this.props.timeLimit,onChange:this.onChange.bind(this),children:[Object(i.jsx)("option",{value:"5",children:"5"}),Object(i.jsx)("option",{value:"10",children:"10"}),Object(i.jsx)("option",{value:"20",children:"20"}),Object(i.jsx)("option",{value:"30",children:"30"}),Object(i.jsx)("option",{value:"60",children:"60"}),Object(i.jsx)("option",{value:"90",children:"90"}),Object(i.jsx)("option",{value:"120",children:"120"}),Object(i.jsx)("option",{value:"240",children:"240"})]}),Object(i.jsx)("span",{className:"text-white ml-2",children:"seconds per question"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)(p,{className:"w-10 text-white bg-red-300 border-red-400",onClick:this.props.onClickClear,children:"\u21ba"}),Object(i.jsx)(p,{className:"w-10 text-white bg-yellow-300 border-yellow-400 ml-2",onClick:this.props.onClickSwap,children:"\u21c6"}),Object(i.jsx)(p,{className:"w-24 text-white bg-green-300 border-green-400 ml-2",onClick:this.props.onClickDownload,children:"Download"})]})]})}}]),n}(a.a.PureComponent),w=function(){function e(t){Object(c.a)(this,e),this._questions=void 0,this._timeLimit=void 0,this._questions=[],this._timeLimit=t}return Object(u.a)(e,[{key:"push",value:function(e){this._questions.push(e)}},{key:"questions",get:function(){return this._questions}},{key:"timeLimit",get:function(){return this._timeLimit}}]),e}(),y=function(){function e(t,n,i){Object(c.a)(this,e),this._question=void 0,this._answers=void 0,this._answerPosition=void 0,this._question=t,this._answers=n,this._answerPosition=i}return Object(u.a)(e,[{key:"question",get:function(){return this._question}},{key:"answers",get:function(){return this._answers}},{key:"answerPosition",get:function(){return this._answerPosition}}]),e}(),k=function(){function e(){Object(c.a)(this,e)}return Object(u.a)(e,null,[{key:"number",value:function(e,t){return Math.floor(Math.random()*(t-e+1))+e}}]),e}(),g=function(){function e(){Object(c.a)(this,e)}return Object(u.a)(e,null,[{key:"exportToXLSX",value:function(t){var n=e.quizToXLSXFormat(t);n.unshift(["Question","Answer 1","Answer 2","Answer 3","Answer 4","Time limit","Correct answer"]);var i=j.a.utils.book_new();return i.SheetNames.push("Kahoot quiz"),i.Sheets["Kahoot quiz"]=j.a.utils.aoa_to_sheet(n),i}},{key:"quizToXLSXFormat",value:function(e){var t=[];return e.questions.forEach((function(n){var i=[];i.push(n.question),(i=i.concat(n.answers)).push(e.timeLimit.toString()),i.push(n.answerPosition.toString()),t.push(i)})),t}}]),e}(),C=function(){function e(){Object(c.a)(this,e)}return Object(u.a)(e,null,[{key:"createQuiz",value:function(t,n){var i=new w(n),s=t.map((function(e){return e[1]})),a=[],r=Math.floor(t.length/16);return t.forEach((function(t){i.push(e.createSingleQuestion(t,s,a));var n=e.shiftBuffer(a,r);s=[].concat(Object(b.a)(s),Object(b.a)(n))})),i}},{key:"exportToXLSX",value:function(e){return g.exportToXLSX(e)}},{key:"createSingleQuestion",value:function(e,t,n){var i=e[0],s=e[1],a=t.indexOf(s),r=k.number(0,3),o=[];o[r]=s;var c=[];return-1!==a&&(t.splice(a,1),c.push(s)),this.pickRandomAnswers(o,r,t,c),n.push(c),new y(i,o,r)}},{key:"pickRandomAnswers",value:function(e,t,n,i){for(var s=0;4===e.length&&s<3||e.length<4;){s===t&&s++;var a=k.number(0,n.length)-1,r=n[a];e[s]=r,i.push(r),n.splice(a,1),s++}}},{key:"shiftBuffer",value:function(e,t){var n=[];return e.length>=t&&(n=e.splice(0,1)[0]),n}}]),e}(),N=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(c.a)(this,n),(i=t.call(this,e)).state={data:[],timeLimit:20},i}return Object(u.a)(n,[{key:"onSubmitVocabularyInput",value:function(e,t){var n=Object(b.a)(this.state.data);n.push([e,t]),this.setState({data:n})}},{key:"onRemoveRowVocabularyTable",value:function(e){var t=Object(b.a)(this.state.data);void 0!==t[e]&&(t.splice(e,1),this.setState({data:t}))}},{key:"onChangeTimeLimitVocabularyTools",value:function(e){this.setState({timeLimit:e})}},{key:"onClickClearVocabularyTools",value:function(){this.setState({data:[]})}},{key:"onClickSwapVocabubaryTools",value:function(){var e=[];this.state.data.forEach((function(t){e.push([t[1],t[0]])})),this.setState({data:e})}},{key:"onClickDownloadVocabularyTools",value:function(){if(this.dataHasFourOrMoreEntries()){var e=C.createQuiz(this.state.data,this.state.timeLimit),t=C.exportToXLSX(e);j.a.writeFile(t,"Kahoot2Vocabulary.xlsx")}else alert("At least four terms are required to create a Kahoot quiz")}},{key:"dataHasFourOrMoreEntries",value:function(){return this.state.data.length>=4}},{key:"render",value:function(){return Object(i.jsxs)(a.a.Fragment,{children:[Object(i.jsx)("header",{className:"mt-10",children:Object(i.jsx)("h1",{className:"text-2xl text-white text-center font-bold",children:"Vocabulary2Kahoot"})}),Object(i.jsxs)("div",{className:"min-w-lg max-w-xl mx-auto mt-3",children:[Object(i.jsx)(v,{onSubmit:this.onSubmitVocabularyInput.bind(this)}),Object(i.jsx)("div",{className:"mt-3",children:Object(i.jsx)(O,{timeLimit:this.state.timeLimit,onChangeTimeLimit:this.onChangeTimeLimitVocabularyTools.bind(this),onClickClear:this.onClickClearVocabularyTools.bind(this),onClickSwap:this.onClickSwapVocabubaryTools.bind(this),onClickDownload:this.onClickDownloadVocabularyTools.bind(this)})}),Object(i.jsx)("div",{className:"mt-3",children:Object(i.jsx)(x,{data:this.state.data,onRemoveRow:this.onRemoveRowVocabularyTable.bind(this)})})]})]})}}]),n}(a.a.Component),T=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(i.jsx)(N,{})}}]),n}(a.a.Component),S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),i(e),s(e),a(e),r(e)}))};o.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(T,{})}),document.getElementById("root")),S()}],[[30,1,2]]]);
//# sourceMappingURL=main.13c0f36b.chunk.js.map