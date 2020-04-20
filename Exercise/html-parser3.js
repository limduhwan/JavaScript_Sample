const index = 0;
const length = 2;
const sample = '<p>동<strong>해물</strong>과</p><ul><li>백<strong>두산</strong>이</li><li>마르고</li></ul><ol><li>닳<strong>도</strong>록</li><li>하나<strong>님이</strong></li></ol><p><strong>보우하사</strong></p>';
const sample1 = '<P>0123<li>4<Strong>56</Strong>7</li></P>';
const sample2 = `<p>동</p><p>해</p><p>물</p>`;


class HtmlParser3 {
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

    makeResult() {
        let preTags = '';
        let postTags = '';

        console.log('this.data.openTags', this.data.openTags);
        console.log('this.data.closeTags', this.data.closeTags);
        console.log('this.data.result', this.data.result);

        const a = this.data.closeTags.length;
        const b = this.data.openTags.length;

        for (let i = 0; i < a; i++) {
            preTags += `<${this.data.closeTags.pop().split('/')[1]}`;
        }

        for (let i = 0; i < b; i++) {
            postTags += `</${this.data.openTags.pop().split('<')[1]}`;
        }

        //br 태그 제거해 주기

        if (this.isTagIncluded(this.data.result)) {
            return `${preTags}${this.data.result}${postTags}`;
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

    parse() {
        this.handleBreakLine();

        const { html, startIndex, parseLength } = this.data;
        let charIndex = 0;
        let Tag = '';
        let tagFlag = '';
        let isBrTag = false;

        for (let i = 0; i < html.length; i++) {
            // if (this.data.parseStart) {
            //     this.data.result += html.charAt(i);
            //
            //     if (tagFlag === 'openTag' || tagFlag === 'closeTag') {
            //         Tag += html.charAt(i);
            //     }
            //
            //     if (html.charAt(i) === '<') {
            //         if (html.charAt(i + 1) === '/') {
            //             Tag += html.charAt(i);
            //             if (tagFlag === '') tagFlag = 'closeTag';
            //         } else {
            //             Tag += html.charAt(i);
            //             if (tagFlag === '') tagFlag = 'openTag';
            //         }
            //     } else if (html.charAt(i) === '>') {
            //         if (tagFlag === 'closeTag') {
            //             this.data.closeTags.push(Tag);
            //             this.findMatchedTag(Tag);
            //         } else if (tagFlag === 'openTag') {
            //             this.data.openTags.push(Tag);
            //         }
            //         tagFlag = '';
            //         Tag = '';
            //     }
            // }


            if (html.charAt(i) === '<' && !this.isBrTag(i)) {
                this.data.isTag = true;
                continue;
            }

            if (html.charAt(i) === '>' && !this.isBrTag(i)) {
                this.data.isTag = false;
                continue;
            }

            if (this.data.isTag === false) {
                // console.log('charIndex, startIndex', charIndex, startIndex, html.charAt(i));

                if (!isBrTag && this.isBrTag(i)) {
                    isBrTag = !isBrTag;
                    charIndex++;
                    continue;
                }

                if (!isBrTag && charIndex >= startIndex && charIndex <= startIndex + parseLength - 1) {
                    if (!this.data.parseStart) {
                        this.data.result += html.charAt(i);
                    }

                    this.data.parseStart = true;

                    if (charIndex === startIndex + parseLength - 1) {
                        // console.log('End CharIndex', html.charAt(i));
                        this.data.parseStart = false;
                        break;
                    }
                }
                charIndex++;
                console.log(html.charAt(charIndex));
            }
        }

        // return this.makeResult();
    }
}

const cccc = new HtmlParser3(sample2, index, length);
const bbb = cccc.parse();
console.log(bbb);


