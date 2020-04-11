const start = 1;
const end = 5;
const sample = '<P>0123<li>456</li>7890<strong>abc</strong>def<P>';

// 19 22
// 7890

// 22 31
// 0 a

// 12 22
// 5 0


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
                }
            }

            if(html.charAt(i) === '>'){
                isTag = false;
                tagLastIndex = i;
                break;
            }

            if(html.charAt(i) === '>'){

            }
        }

        console.log('tagLastIndex', tagLastIndex);
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

    findStartTag(startIndex){
        const { html } = this.data;

        let isTag = false;
        let tag = '';

        console.log('startIndex', startIndex);

        for ( let i = startIndex; i >= 0; i-- ){
            console.log('html.charAt(i)', html.charAt(i));


        }

        console.log('tag', tag);
        return tag;
    }

    findEndTag(lastIndex){

    }


    parse() {
        const { html, startIndex, endIndex, result} = this.data;

        console.log('html.substring', html.substring(startIndex, endIndex));


        let resultString = '';

        const htmlString = html.substring(startIndex, endIndex);
        const startTag = this.findStartTag(startIndex);
        const lastTag = this.findEndTag(endIndex);

        resultString = startTag+htmlString+lastTag;

        // for ( let i = parseStartEndIndex; i < endIndex+1; i++ ){



            // console.log('1 i parseStartIndex', i, parseStartIndex, html.charAt(i));
            //
            // if ( i <= parseStartIndex) {
            //     continue;
            // }
            //
            // if(html.charAt(i) === '<'){
            //     console.log('2 i parseStartIndex', i, parseStartIndex, html.charAt(i));
            //     isTagStarted = true;
            //     const {tag, tagLastIndex, isTagEnded} = this.fromTagExtract(i);
            //     parseStartIndex = tagLastIndex;
            //     resultString += tag;
            //     isTagDone = isTagEnded;
            //     continue;
            // } else {
            //     resultString += html.charAt(i);
            //     if( i === endIndex ) {
            //         resultString += this.endTagExtract(i);
            //     }
            // }
        // }

        Object.assign(this.data, {result: resultString});
        return this.data.result;
    }
}

const cccc = new HtmlParser(sample, 12, 22);
const bbb = cccc.parse();
console.log(bbb);



