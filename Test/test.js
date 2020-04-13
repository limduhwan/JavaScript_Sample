const sample1 = `<P>0123<li>456</li></P>`;

function htmlToJson(div,obj) {
    if (!obj) {
        obj = []
    }
    var tag = {}
    tag['tagName'] = div.tagName;
    console.log(tag['tagName']);
    tag['children'] = []
    for (var i = 0; i < div.children.length; i++) {
        tag['children'].push(htmlToJson(div.children[i]))
    }
    for (var i = 0; i < div.attributes.length; i++) {
        var attr = div.attributes[i]
        tag['@' + attr.name] = attr.value
    }
    return tag;
}

// console.log(htmlToJson(sample1));
console.log(JSON.parse(sample1));

