const start = 1;
const end = 5;
const sample = '<P>0123<li>45<strong>6</strong></li>7890<strong>abc</strong>def<P>';

// 19 22
// 7890

// 22 31
// 0 a

// 12 22
// 5 0

// 7 35
// < >

const sample1 = '<P>0123<li>456</li><P>';
const aaaa = '23<li>45';

class HtmlParser {
    static parseStartEndIndex = 3;
    constructor(html, start, end) {
        this.data = {
            html: html,
            startIndex : start,
            endIndex : end,
            result: 'hahaah',
            parseStartEndIndex: 3,
        }
    }

    fromTagExtract(startTagIndex){
        const {html, endIndex} = this.data;

        let isTag = false;
        let tag = '';
        let tagLastIndex = '';
        let isTagEnded;

        for ( let i = startTagIndex; i < endIndex+1; i++ ){
            if(isTag) {
                tag += html.charAt(i);
            }

            if(!isTag && html.charAt(i) === '<'){
                if(html.charAt(i+1) !== '/') {
                    isTag = true;
                    tag += html.charAt(i);
                    continue;
                }else{
                    isTag = false;
                    tagLastIndex = i;
                    break;
                }
            }

            if(html.charAt(i) === '>'){
                isTag = false;
                tagLastIndex = i;
                break;
            }
        }

        console.log('tag tagLastIndex', tag, tagLastIndex);
        return { tag, tagLastIndex, isTagEnded };
    }

    endTagExtract(startTagIndex){
        const { html } = this.data;

        let isTag = false;
        let tag = '';

        console.log('startTagIndex', startTagIndex);

        for ( let i = startTagIndex; i < html.length-1; i++ ){
            if(isTag) {
                tag += html.charAt(i);
            }

            if(!isTag && html.charAt(i) === '<'){
                if(html.charAt(i+1) !== '/'){
                    break;
                }else {
                    isTag = true;
                    tag += html.charAt(i);
                    continue;
                }
            }

            if(isTag && html.charAt(i) === '>'){
                isTag = false;
                break;
            }
        }

        console.log('tag', tag);
        return tag;
    }

    parse() {
        const { html, startIndex, endIndex, result} = this.data;
        let resultString = '';

        let parseStartEndIndex = startIndex;
        let parseStartIndex = 0;
        let isTagStarted = false;
        let isTagDone = false;

        for ( let i = parseStartEndIndex; i < endIndex+1; i++ ){
            console.log('1 i parseStartIndex', i, parseStartIndex, html.charAt(i));

            if ( i <= parseStartIndex) {
                continue;
            }

            if(html.charAt(i) === '<'){
                console.log('2 i parseStartIndex', i, parseStartIndex, html.charAt(i));
                isTagStarted = true;
                const {tag, tagLastIndex, isTagEnded} = this.fromTagExtract(i);
                parseStartIndex = tagLastIndex;
                resultString += tag;
                isTagDone = isTagEnded;
                continue;
            } else {
                if(i === endIndex){
                    console.log('3 i parseStartIndex', i, parseStartIndex, html.charAt(i));
                    if(html.charAt(i) === '>'){
                        resultString += html.charAt(i);
                    }else{
                        resultString += this.endTagExtract(i);
                    }
                }else{
                    console.log('4 i parseStartIndex', i, parseStartIndex, html.charAt(i));
                    resultString += html.charAt(i);
                }
            }
        }

        Object.assign(this.data, {result: resultString});
        return this.data.result;
    }
}

const cccc = new HtmlParser(sample1, 3, 6);
const bbb = cccc.parse();
console.log(bbb);


