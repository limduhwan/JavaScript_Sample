const index = 4;
const length = 5;
const sample = '<p>동<strong>해물</strong>과</p><ul><li>백<strong>두산</strong>이</li><li>마르고</li></ul><ol><li>닳<strong>도</strong>록</li><li>하나<strong>님이</strong></li></ol><p><strong>보우하사</strong></p>';
const sample1 = '<P>0123<li>4<Strong>56</Strong>7</li></P>';
const sample2 = `<p>동</p><p>해</p><p>물</p>`;
const sample3 = `<p>동해물과</p><ul><li>백두산이</li></ul><ol><li>마르고닳도록</li></ol>`;
const sample4 = `<p>동해물과</p><ul><li>백두산이</li></ul><p><br></p><ol><li>마르고닳도록</li></ol>`;
const sample5 = `<p>동해물과</p><h2>백두</h2><h1>산이</h1><p><br></p><ul><li>마르고</li></ul>`;
const sample6 = `<ul><li><br></li><li>동</li><li><br></li><li>서</li><li>]</li></ul><p>남</p><ul><li><br></li><li><strong>르고</strong></li></ul><p><br></p><p>닳도록</p>`;
//서남
class HtmlParser4 {
    constructor(html, index, length) {
        this.data = {
            html,
            startIndex: index,
            parseLength: length,
            openTags: [],
            closeTags: [],
        };
    }

    parse() {
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

        for (let i = 0; i < html.length; i++) {
            if (tagStartEnd === 'TAG_END') {

                // console.log(tag, preTagType, tagType, tagStartEnd);
                if (tagType === 'CHAR' || (preTagType === 'CLOSE_TAG' && tagType === 'OPEN_TAG')){
                    // console.log('=======', tag, preTagType, tagType, parseStarted, result, charIndex);

                    if(!parseStarted && charIndex >= startIndex && charIndex <= startIndex + parseLength - 1) {
                        parseStarted = true;
                        // console.log('Parse Start', i-1);
                        parseStartIndex = i-1;
                    }

                    if(parseStarted && charIndex === startIndex + parseLength - 1){
                        parseStarted = false;
                        // console.log('Parse End', i-1);
                        parseEndIndex = i;
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

        const parseTarget = this.extractParseTarget(parseStartIndex, parseEndIndex);

        return this.makeResult(parseTarget);
    }



    makeResult(parseTarget) {
        let preTags = '';
        let postTags = '';

        const a = this.data.closeTags.length;
        const b = this.data.openTags.length;

        console.log('this.data.closeTags', this.data.closeTags);

        for (let i = 0; i < a; i++) {
            preTags += `<${this.data.closeTags.shift().split('/')[1]}`;
        }

        for (let i = 0; i < b; i++) {
            postTags += `</${this.data.openTags.pop().split('<')[1]}`;
        }

        console.log('preTags', preTags);

        const tag = this.checkFirstTag(preTags);


        //TODO 태그가 있는지 없는지로 바꾸기
        if (tag === 'ul' || tag === 'ol' || tag === 'p' || tag === 'h1' || tag === 'h2') {
            return `${preTags}${parseTarget}${postTags}`;
        // } if (tag === 'li') {
        //     return `<ul>${preTags}${parseTarget}${postTags}</ul>`;
        }
        return `<p>${preTags}${parseTarget}${postTags}</p>`;
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

    extractParseTarget(parseStartIndex, parseEndIndex) {
        const { html } = this.data;

        let Tag = '';
        let tagType = '';
        let closeTags = [];
        let openTags = [];

        const parseTarget = html.slice(parseStartIndex, parseEndIndex);

        for (let i = 0; i < parseTarget.length; i++) {
            if (tagType === 'OPEN_TAG' || tagType === 'CLOSE_TAG') {
                Tag += parseTarget.charAt(i);
            }

            if (parseTarget.charAt(i) === '<') {
                if (parseTarget.charAt(i + 1) === '/') {
                    tagType = 'CLOSE_TAG';
                } else {
                    tagType = 'OPEN_TAG';
                }
                Tag += parseTarget.charAt(i);
            } else if (parseTarget.charAt(i) === '>') {
                if (tagType === 'CLOSE_TAG') {
                    this.data.closeTags.unshift(Tag);
                    this.findMatchedTag(Tag);
                } else if (tagType === 'OPEN_TAG') {
                    if(Tag !== '<br>') {
                        this.data.openTags.push(Tag);
                    }
                }
                tagType = '';
                Tag = '';
            }
        }

        return parseTarget;
    }

    findMatchedTag(tag) {
        const str = `<${tag.split('/')[1]}`;

        const openIndex = this.data.openTags.findIndex((item) => item === str);
        if (openIndex !== -1) this.data.openTags.splice(openIndex, 1);

        const closeIndex = this.data.closeTags.findIndex((item) => item === tag);
        if (openIndex !== -1) this.data.closeTags.splice(closeIndex, 1);
    }
}

const cccc = new HtmlParser4(sample6, index, length);
const bbb = cccc.parse();
console.log(bbb);


