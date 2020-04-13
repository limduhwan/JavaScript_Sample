const index = 3;
const length = 2;
const sample = '<p>동<strong>해물</strong>과</p><ul><li>백<strong>두산</strong>이</li><li>마르고</li></ul><ol><li>닳<strong>도</strong>록</li><li>하나<strong>님이</strong></li></ol><p><strong>보우하사</strong></p>';
const sample1 = '<P>0123<li>4<Strong>56</Strong>7</li></P>';
// 12

class HtmlParser3 {
    constructor(html, index, length) {
        this.data = {
            html: html,
            startIndex : index,
            parseLength : length,
            startTags: [],
            result: '',
            isTag: false,
        }
    }

    addStartTag() {

    }

    insideTag(index){
        const { html } = this.data;

        for ( let i = index; i < html.length; i++ ) {

        }
    }

    isInsideTag(index) {
        // < > 로 감싸져 있으면
        const { html} = this.data;

        if(html.charAt(index) === '<' || html.charAt(index) === '>' || this.insideTag(index)){
            return true;
        }
        return false;
    }

    removeTags(html) {
        return html.replace(/(<([^>]+)>)/ig,"");
    }

    isTag(char) {
        if(char === '<'){
            this.data.isTag = true;
        }

        if(char === '>'){
            this.data.isTag = false;
        }
    }

    parse() {
        const { html, startIndex, parseLength} = this.data;
        let charIndex = 0;

        for ( let i = 0; i < html.length; i++ ) {

            if (html.charAt(i) === '<') {
                this.data.isTag = true;
                continue;
            }

            if (html.charAt(i) === '>') {
                this.data.isTag = false;
                continue;
            }

            if (this.data.isTag === false){
                console.log('charIndex, startIndex', charIndex, startIndex, html.charAt(i));

                if(charIndex >= startIndex && charIndex <= startIndex+parseLength-1){
                    console.log(html.charAt(i));
                    this.data.result += html.charAt(i);
                }
                charIndex ++;
            }
        }

        return this.data.result;
    }
}

const cccc = new HtmlParser3(sample1, index, length);
const bbb = cccc.parse();
console.log(bbb);


