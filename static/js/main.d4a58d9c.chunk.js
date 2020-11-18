(this.webpackJsonpvocabulary2kahoot=this.webpackJsonpvocabulary2kahoot||[]).push([[0],[,,,,,,,,,,,,function(e,t){},,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,function(e,t){},function(e,t){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(0),i=n(3),a=n.n(i),o=n(13),r=n.n(o),c=(n(19),n(20),n(1)),u=n(2),l=n(5),h=n(4),d=(n(21),n(6)),b=function e(){Object(c.a)(this,e)};b.ENTER="Enter",b.TAB="Tab";var m=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"getClassName",value:function(){var e=n.DEFAULT_CLASS_NAME;return void 0!==this.props.className&&(e+=" "+this.props.className),e}},{key:"render",value:function(){return Object(s.jsx)("button",{className:this.getClassName(),onClick:this.props.onClick,children:this.props.children})}}]),n}(a.a.PureComponent);m.DEFAULT_CLASS_NAME="h-10 text-lg border-b-2";var j=m,p=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).termRef=void 0,s.answerRef=void 0,s.termRef=a.a.createRef(),s.answerRef=a.a.createRef(),s.state={term:"",answer:""},s}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e;null===(e=this.termRef.current)||void 0===e||e.focus()}},{key:"onInputTerm",value:function(e){this.setState({term:e.currentTarget.value})}},{key:"onInputAnswer",value:function(e){this.setState({answer:e.currentTarget.value})}},{key:"onKeyPressTerm",value:function(e){var t;e.key===b.ENTER&&(null===(t=this.answerRef.current)||void 0===t||t.focus())}},{key:"onKeyPressAnswer",value:function(e){console.log(e.key===b.TAB),e.key===b.TAB&&alert("Hello World"),e.key!==b.ENTER&&e.key!==b.TAB||this.onSubmit()}},{key:"onSubmit",value:function(){var e;this.inputValuesAreValid()?(this.clearState(),null===(e=this.termRef.current)||void 0===e||e.focus(),this.props.onSubmit(this.state.term,this.state.answer)):alert("Fill in both fields")}},{key:"inputValuesAreValid",value:function(){var e=this.state.term.trim().length,t=this.state.answer.trim().length;return e>0&&t>0}},{key:"clearState",value:function(){this.setState({term:"",answer:""})}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"w-full flex items-center border-white border-b-2 pb-1",children:[this.renderInput(this.state.term,"Term",120,this.onInputTerm,this.onKeyPressTerm,this.termRef),Object(s.jsx)("span",{className:"text-lg text-white",children:"\u2192"}),this.renderInput(this.state.answer,"Answer",75,this.onInputAnswer,this.onKeyPressAnswer,this.answerRef),Object(s.jsx)(j,{className:"w-10 text-white font-bold bg-blue-300 border-blue-400",onClick:this.onSubmit.bind(this),children:"+"})]})}},{key:"renderInput",value:function(e,t,n,i,a,o){return Object(s.jsx)("input",{type:"text",value:e,placeholder:t,maxLength:n,onInput:i.bind(this),ref:o,onKeyDown:a.bind(this),className:"flex-grow text-white bg-transparent p-1 box-border focus:outline-none"})}}]),n}(a.a.Component),f=(n(22),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"onClick",value:function(e){this.props.onRemoveRow(e)}},{key:"render",value:function(){return Object(s.jsx)("div",{className:"p-2 box-border bg-white rounded",children:Object(s.jsxs)("table",{className:"w-full",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{className:"text-sm pl-1",children:"#"}),Object(s.jsx)("th",{className:"w-5/12 text-sm",children:"Term"}),Object(s.jsx)("th",{className:"w-5/12 text-sm",children:"Answer"}),Object(s.jsx)("th",{className:"w-1/12 text-sm"})]})}),Object(s.jsxs)("tbody",{children:[this.renderTableBody(this.props.data),this.renderNoDataMessage()]})]})})}},{key:"renderTableBody",value:function(e){var t=this,n=[];return e.forEach((function(e,i){n.push(Object(s.jsxs)("tr",{className:"odd:bg-gray-200",children:[Object(s.jsx)("td",{className:"w-1/12 text-sm pl-1",children:i+1}),Object(s.jsx)("td",{className:"w-5/12 text-sm",children:e[0]}),Object(s.jsx)("td",{className:"w-5/12 text-sm",children:e[1]}),Object(s.jsx)("td",{className:"w-1/12 text-sm text-right pr-1",children:Object(s.jsx)("button",{className:"focus:outline-none",onClick:t.onClick.bind(t,i),children:Object(s.jsx)("span",{className:"text-red-300",children:"\u2716"})})})]},i))})),n}},{key:"renderNoDataMessage",value:function(){if(0===this.props.data.length)return Object(s.jsxs)("tr",{className:"mt-1 text-sm text-gray-500",children:[Object(s.jsx)("td",{className:"pl-1",children:"1"}),Object(s.jsx)("td",{children:"Lorem ipsum dolor sit amet"}),Object(s.jsx)("td",{children:"consectetur adipiscing elit"})]})}}]),n}(a.a.PureComponent)),v=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"onChangeSecondsPerQuestion",value:function(e){var t=parseInt(e.currentTarget.value);this.props.onChangeTimeLimit(t)}},{key:"onInputQuestionPerQuiz",value:function(e){var t=parseInt(e.currentTarget.value);this.props.onInputQuestionsPerQuiz(t)}},{key:"onInputDocumentName",value:function(e){var t=e.currentTarget.value;this.props.onInputDocumentName(t)}},{key:"render",value:function(){return Object(s.jsxs)(a.a.Fragment,{children:[Object(s.jsxs)("div",{className:"flex justify-between",children:[Object(s.jsxs)("div",{className:"flex items-center",children:[Object(s.jsxs)("select",{className:"w-12 h-8",value:this.props.timeLimit,onChange:this.onChangeSecondsPerQuestion.bind(this),children:[Object(s.jsx)("option",{value:"5",children:"5"}),Object(s.jsx)("option",{value:"10",children:"10"}),Object(s.jsx)("option",{value:"20",children:"20"}),Object(s.jsx)("option",{value:"30",children:"30"}),Object(s.jsx)("option",{value:"60",children:"60"}),Object(s.jsx)("option",{value:"90",children:"90"}),Object(s.jsx)("option",{value:"120",children:"120"}),Object(s.jsx)("option",{value:"240",children:"240"})]}),Object(s.jsx)("span",{className:"text-white ml-2",children:"seconds per question"})]}),Object(s.jsxs)("div",{className:"flex items-center",children:[Object(s.jsx)("input",{type:"text",className:"w-12 p-2 box-border",placeholder:"0",onInput:this.onInputQuestionPerQuiz.bind(this)}),Object(s.jsx)("span",{className:"text-white ml-2",children:"questions per quiz"})]})]}),Object(s.jsxs)("div",{className:"flex justify-between mt-2",children:[Object(s.jsx)("input",{type:"text",className:"flex-grow p-2 box-border",placeholder:"Document name",onInput:this.onInputDocumentName.bind(this)}),Object(s.jsxs)("div",{className:"ml-2",children:[Object(s.jsx)(j,{className:"w-10 text-white bg-red-300 border-red-400",onClick:this.props.onClickClear,children:"\u21ba"}),Object(s.jsx)(j,{className:"w-10 text-white bg-yellow-300 border-yellow-400 ml-2",onClick:this.props.onClickSwap,children:"\u21c6"}),Object(s.jsx)(j,{className:"w-24 text-white bg-green-300 border-green-400 ml-2",onClick:this.props.onClickDownload,children:"Download"})]})]})]})}}]),n}(a.a.PureComponent),x=function(){function e(t){Object(c.a)(this,e),this._questions=void 0,this._timeLimit=void 0,this._questions=[],this._timeLimit=t}return Object(u.a)(e,[{key:"push",value:function(e){this._questions.push(e)}},{key:"questions",get:function(){return this._questions}},{key:"timeLimit",get:function(){return this._timeLimit}}]),e}(),w=function(){function e(t,n,s){Object(c.a)(this,e),this._question=void 0,this._answers=void 0,this._answerPosition=void 0,this._question=t,this._answers=n,this._answerPosition=s}return Object(u.a)(e,[{key:"question",get:function(){return this._question}},{key:"answers",get:function(){return this._answers}},{key:"answerPosition",get:function(){return this._answerPosition}}]),e}(),O=function(){function e(){Object(c.a)(this,e)}return Object(u.a)(e,null,[{key:"number",value:function(e,t){return Math.floor(Math.random()*(t-e+1))+e}}]),e}(),y=n(7),k=n.n(y),g=function(){function e(){Object(c.a)(this,e)}return Object(u.a)(e,null,[{key:"exportToXLSX",value:function(t){var n=e.quizToXLSXFormat(t);n.unshift(["Question","Answer 1","Answer 2","Answer 3","Answer 4","Time limit","Correct answer"]);var s=k.a.utils.book_new();return s.SheetNames.push("Kahoot quiz"),s.Sheets["Kahoot quiz"]=k.a.utils.aoa_to_sheet(n),s}},{key:"quizToXLSXFormat",value:function(e){var t=[];return e.questions.forEach((function(n){var s=[];s.push(n.question),(s=s.concat(n.answers)).push(e.timeLimit.toString()),s.push(n.answerPosition.toString()),t.push(s)})),t}}]),e}(),N=function(){function e(){Object(c.a)(this,e)}return Object(u.a)(e,null,[{key:"createQuiz",value:function(t,n,s){var i=new x(n),a=t.map((function(e){return e[1]})),o=[],r=Math.floor(t.length/16);return t.forEach((function(t){i.push(e.createSingleQuestion(t,a,o));var n=e.shiftBuffer(o,r);a=[].concat(Object(d.a)(a),Object(d.a)(n))})),e.segmentizeQuiz(i,s)}},{key:"exportToXLSX",value:function(e){return g.exportToXLSX(e)}},{key:"createSingleQuestion",value:function(e,t,n){var s=e[0],i=e[1],a=t.indexOf(i),o=O.number(0,3),r=[];r[o]=i;var c=[];return-1!==a&&(t.splice(a,1),c.push(i)),this.pickRandomAnswers(r,o,t,c),n.push(c),new w(s,r,o+1)}},{key:"pickRandomAnswers",value:function(e,t,n,s){for(var i=0;4===e.length&&i<3||e.length<4;){i===t&&i++;var a=O.number(0,n.length-1),o=n[a];e[i]=o,s.push(o),n.splice(a,1),i++}}},{key:"shiftBuffer",value:function(e,t){var n=[];return e.length>=t&&(n=e.splice(0,1)[0]),n}},{key:"segmentizeQuiz",value:function(e,t){for(var n=[],s=e.questions,i=t>s.length||0===t?s.length:t,a=function(){var t=i<s.length?i:s.length,a=new x(e.timeLimit);s.splice(0,t).forEach((function(e){a.push(e)})),n.push(a)};s.length>0;)a();return n}}]),e}(),C=(n(30),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"onClickDownload",value:function(e){var t=this.props.downloadables[e],n=this.getDocumentName(e);k.a.writeFile(t,n)}},{key:"getDocumentName",value:function(e){var t=(this.props.documentName.trim().length>0?this.props.documentName:"Vocabulary2Kahoot")+".xlsx";return 1===this.props.downloadables.length?t:t+" "+(e+1).toString()}},{key:"render",value:function(){return Object(s.jsx)("div",{className:"w-full h-full fixed inset-0 download-popup-overlay"+(this.props.hidden?" download-popup-hidden":""),children:Object(s.jsx)("div",{className:"flex justify-center mt-4",children:Object(s.jsxs)("div",{className:"w-full max-w-md bg-white rounded p-2 box-border",children:[Object(s.jsxs)("div",{className:"flex justify-between items-center",children:[Object(s.jsx)("h2",{className:"text-xl font-bold",children:"Downloads"}),Object(s.jsx)(j,{className:"w-10 h-10 text-white bg-red-300 border-red-400",onClick:this.props.onClose,children:"\u26cc"})]}),Object(s.jsx)("div",{className:"mt-2",children:this.renderDownloadables()})]})})})}},{key:"renderDownloadables",value:function(){var e=this,t=[];return this.props.downloadables.forEach((function(n,i){t.push(Object(s.jsxs)("div",{className:"flex justify-between items-center",children:[Object(s.jsx)("span",{children:e.getDocumentName(i)}),Object(s.jsx)(j,{className:"h-8 w-24 text-white bg-green-300 border-green-400",onClick:e.onClickDownload.bind(e,i),children:"Download"})]}))})),t}}]),n}(a.a.PureComponent)),T=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).state={data:[],timeLimit:20,questionPerQuiz:0,documentName:"",downloadables:[],downloadPopupHidden:!0},s}return Object(u.a)(n,[{key:"onSubmitVocabularyInput",value:function(e,t){var n=Object(d.a)(this.state.data);n.push([e,t]),this.setState({data:n})}},{key:"onRemoveRowVocabularyTable",value:function(e){var t=Object(d.a)(this.state.data);void 0!==t[e]&&(t.splice(e,1),this.setState({data:t}))}},{key:"onChangeTimeLimitVocabularyTools",value:function(e){this.setState({timeLimit:e})}},{key:"onInputQuestionPerQuizVocabularyTools",value:function(e){this.setState({questionPerQuiz:e})}},{key:"onInputDocumentNameVocabularyTools",value:function(e){this.setState({documentName:e})}},{key:"onClickClearVocabularyTools",value:function(){this.setState({data:[]})}},{key:"onClickSwapVocabubaryTools",value:function(){var e=[];this.state.data.forEach((function(t){e.push([t[1],t[0]])})),this.setState({data:e})}},{key:"onClickDownloadVocabularyTools",value:function(){if(this.dataHasFourOrMoreEntries()){var e=this.state.questionPerQuiz<=0?this.state.data.length:this.state.questionPerQuiz,t=N.createQuiz(this.state.data,this.state.timeLimit,e),n=[];t.forEach((function(e){n.push(N.exportToXLSX(e))})),this.setState({downloadables:n,downloadPopupHidden:!1})}else alert("At least four terms are required to create a Kahoot quiz")}},{key:"onClickCloseVocabularyDownloadPopup",value:function(){this.setState({downloadPopupHidden:!0})}},{key:"dataHasFourOrMoreEntries",value:function(){return this.state.data.length>=4}},{key:"render",value:function(){return Object(s.jsxs)(a.a.Fragment,{children:[Object(s.jsx)("header",{className:"mt-10",children:Object(s.jsx)("h1",{className:"text-2xl text-white text-center font-bold",children:"Vocabulary2Kahoot"})}),Object(s.jsxs)("div",{className:"max-w-xl mx-auto mt-3",children:[Object(s.jsx)(p,{onSubmit:this.onSubmitVocabularyInput.bind(this)}),Object(s.jsx)("div",{className:"mt-3",children:Object(s.jsx)(v,{timeLimit:this.state.timeLimit,onChangeTimeLimit:this.onChangeTimeLimitVocabularyTools.bind(this),onInputQuestionsPerQuiz:this.onInputQuestionPerQuizVocabularyTools.bind(this),onInputDocumentName:this.onInputDocumentNameVocabularyTools.bind(this),onClickClear:this.onClickClearVocabularyTools.bind(this),onClickSwap:this.onClickSwapVocabubaryTools.bind(this),onClickDownload:this.onClickDownloadVocabularyTools.bind(this)})}),Object(s.jsx)("div",{className:"mt-3",children:Object(s.jsx)(f,{data:this.state.data,onRemoveRow:this.onRemoveRowVocabularyTable.bind(this)})})]}),Object(s.jsx)(C,{hidden:this.state.downloadPopupHidden,documentName:this.state.documentName,downloadables:this.state.downloadables,onClose:this.onClickCloseVocabularyDownloadPopup.bind(this)})]})}}]),n}(a.a.Component),S=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(s.jsx)(T,{})}}]),n}(a.a.Component),P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),s(e),i(e),a(e),o(e)}))};r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(S,{})}),document.getElementById("root")),P()}],[[31,1,2]]]);
//# sourceMappingURL=main.d4a58d9c.chunk.js.map