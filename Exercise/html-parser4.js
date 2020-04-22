const index = 0;
const length = 4;
const sample = '<p>동<strong>해물</strong>과</p><ul><li>백<strong>두산</strong>이</li><li>마르고</li></ul><ol><li>닳<strong>도</strong>록</li><li>하나<strong>님이</strong></li></ol><p><strong>보우하사</strong></p>';
const sample1 = '<P>0123<li>4<Strong>56</Strong>7</li></P>';
const sample2 = `<p>동</p><p>해</p><p>물</p>`;
const sample3 = `<p>동해물과</p><ul><li>백두산이</li></ul><ol><li>마르고닳도록</li></ol>`;
const sample4 = `<p>동해물과</p><ul><li>백두산이</li></ul><p><br></p><ol><li>마르고닳도록</li></ol>`;
const sample5 = `<p>동해물과</p><h2>백두</h2><h1>산이</h1><p><br></p><ul><li>마르고</li></ul>`;
const sample6 = `<p>동</p><p><br></p><ul><li>해</li></ul><p><br></p><p>물</p>`;

class HtmlParser4 {
    constructor(html, index, length) {
        this.data = {
            html,
            startIndex: index,
            parseLength: length,
            startTags: [],
            result: '',
            isTag: false,
            openTags: [],
            closeTags: [],
            parseStart: false,
        };
    }

    isTagIncluded() {
        const isTagIncluded = this.data.result.indexOf('<');
        if (isTagIncluded !== -1) {
            return true;
        }
        return false;
    }

    checkFirstTag(preTags) {
        let tag = '';
        let tagStart = false;

        for (let i = 0; i < preTags.length; i++) {
            if (preTags.charAt(i) === '<') {
                tagStart = true;
                continue;
            } else if (preTags.charAt(i) === '>') {
                tagStart = false;
                break;
            }

            if (tagStart) {
                tag += preTags.charAt(i);
            }
        }

        return tag;
    }

    makeResult() {
        let preTags = '';
        let postTags = '';

        console.log('this.data.openTags', this.data.openTags);
        console.log('this.data.closeTags', this.data.closeTags);
        console.log('this.data.result', this.data.result);

        const a = this.data.closeTags.length;
        const b = this.data.openTags.length;

        for (let i = 0; i < a; i++) {
            preTags += `<${this.data.closeTags.shift().split('/')[1]}`;
        }

        for (let i = 0; i < b; i++) {
            postTags += `</${this.data.openTags.pop().split('<')[1]}`;
        }

        const tag = this.checkFirstTag(preTags);

        if (tag === 'ul' || tag === 'ol') {
            return `${preTags}${this.data.result}${postTags}`;
        } if (tag === 'li') {
            return `<ul>${preTags}${this.data.result}${postTags}</ul>`;
        }
        return `<p>${preTags}${this.data.result}${postTags}</p>`;

    }

    findMatchedTag(tag) {
        const str = `<${tag.split('/')[1]}`;

        // console.log('this.data.openTags', this.data.openTags);
        // console.log('this.data.closeTags', this.data.closeTags);
        // console.log('this.data.result', this.data.result);

        const openIndex = this.data.openTags.findIndex((item) => item === str);
        if (openIndex !== -1) this.data.openTags.splice(openIndex, 1);

        const closeIndex = this.data.closeTags.findIndex((item) => item === tag);
        if (openIndex !== -1) this.data.closeTags.splice(closeIndex, 1);

        // console.log('this.data.openTags', this.data.openTags);
        // console.log('this.data.closeTags', this.data.closeTags);
        // console.log('this.data.result', this.data.result);
    }

    replaceTagWithBreakLine(firstTagStartIndex, firstTagEndIndex, secondTagStartIndex, secondTagEndIndex) {
        // console.log('firstTagStartIndex, firstTagEndIndex, secondTagStartIndex, secondTagEndIndex', firstTagStartIndex, firstTagEndIndex, secondTagStartIndex, secondTagEndIndex);
        let firstTag = this.data.html.substring(firstTagStartIndex, firstTagEndIndex+1);
        let secondTag = this.data.html.substring(secondTagStartIndex, secondTagEndIndex+1);

        // console.log('firstTag, secondTag', firstTag, secondTag);

        let originTag = firstTag+secondTag;
        let toTag = firstTag+`<br>`+secondTag;

        // console.log(this.data.html.replace(originTag, toTag));

        return { originTag, toTag };

        // console.log('isTagStartIndex, isTagEndIndex', firstTagStartIndex, isTagEndIndex);
        // console.log('substring', html.substring(firstTagStartIndex, isTagEndIndex+1));
        //
        // let aaa = html.substring(firstTagStartIndex, isTagEndIndex+1);
        // console.log('replace', html.replace(aaa, '<br>'));
    }

    handleBreakLine() {
        const { html } = this.data;
        let isTagStart = false;
        let isTagEnd = false;
        let needBreakLine = false;
        let firstTagStartIndex = '';
        let firstTagEndIndex = '';
        let secondTagStartIndex = '';
        let secondTagEndIndex = '';
        let result = '';

        for (let i = 0; i < html.length; i++) {

            if(needBreakLine) {
                if(html.charAt(i) === '>') {
                    result += html.charAt(i);
                    isTagEnd = true;
                    needBreakLine = false;
                    secondTagEndIndex = i;

                    const { originTag, toTag } = this.replaceTagWithBreakLine(firstTagStartIndex, firstTagEndIndex, secondTagStartIndex, secondTagEndIndex);

                    result = result.replace(originTag, toTag);
                    continue;
                }
            }

            if(isTagStart) {
                if(html.charAt(i) === '>' ||  html.charAt(i + 1) === '<') {
                    needBreakLine = true;
                    isTagStart = false;
                    firstTagEndIndex = i;
                    secondTagStartIndex = i+1;
                }
            }

            if (html.charAt(i) === '<') {
                if (html.charAt(i + 1) === '/') {
                    isTagStart = true;

                    //시작인덱스
                    firstTagStartIndex = i;
                }
            }

            result += html.charAt(i);
        }

        this.data.html = result;
        // console.log('this.data.html====', this.data.html);
    }

    isBrTag(index) {
        if ( (this.data.html.charAt(index) === '<'
          && this.data.html.charAt(index+1) === 'b'
          && this.data.html.charAt(index+2) === 'r'
          && this.data.html.charAt(index+3) === '>') ||
          (this.data.html.charAt(index) === '>'
          && this.data.html.charAt(index-1) === 'r'
          && this.data.html.charAt(index-2) === 'b'
          && this.data.html.charAt(index-3) === '<') ){
            return true;
        }
        return false;
    }

    run() {
        this.preParse();
    }

    parse(parseStartIndex, parseEndIndex) {
        console.log('parseStartIndex, parseEndIndex', parseStartIndex, parseEndIndex);



    }

    preParse() {
        const { html, startIndex, parseLength } = this.data;

        let charIndex = 0;
        let tag = '';
        let tagType = '';
        let preTagType = '';
        let tagStartEnd = '';
        let result = '';
        let parseStarted = false;
        let parseStartIndex = 0;
        let parseEndIndex = 0;

        console.log(html);

        for (let i = 0; i < html.length; i++) {
            if (tagStartEnd === 'TAG_END') {

                // console.log(tag, preTagType, tagType, tagStartEnd);
                if (tagType === 'CHAR' || (preTagType === 'CLOSE_TAG' && tagType === 'OPEN_TAG')){
                    console.log('=======', tag, preTagType, tagType, parseStarted, result, charIndex);

                    if(!parseStarted && charIndex >= startIndex && charIndex <= startIndex + parseLength - 1) {
                        parseStarted = true;
                        console.log('Parse Start', i-1);
                        parseStartIndex = i-1;
                    }

                    if(parseStarted && charIndex === startIndex + parseLength - 1){
                        parseStarted = false;
                        console.log('Parse End', i-1);
                        parseEndIndex = i-1;
                        break;
                    }

                    charIndex++;

                }

                if (preTagType !== tagType){
                    preTagType = tagType;
                }

                tag = '';
            }


            if (html.charAt(i) === '<') {
                if (html.charAt(i + 1) === '/') {
                    tagType = 'CLOSE_TAG';
                } else {
                    tagType = 'OPEN_TAG';
                }
                tagStartEnd = 'TAG_START';
            } else if (html.charAt(i) === '>') {
                tagStartEnd = 'TAG_END';
            } else {
                if (tagStartEnd === 'TAG_START' || tagStartEnd === 'TAG_END') {
                    if(tagStartEnd === 'TAG_END') { //글자이면
                        tagType = 'CHAR';
                    }
                    // console.log(html.charAt(i), tagType, tagStartEnd);
                    tag += html.charAt(i);
                }
            }
        }

        this.parse(parseStartIndex, parseEndIndex);
        // console.log(result);
        return this.data.result;
        // return this.makeResult();
    }
}

const cccc = new HtmlParser4(sample6, index, length);
const bbb = cccc.run();
console.log(bbb);


