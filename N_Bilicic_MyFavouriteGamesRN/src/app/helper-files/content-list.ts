import { Content } from "./content-interface"

export class ContentList {
    private _content : Content[];

    constructor() {
        this._content = [];
    }

    get content() : Content[]{
        return this._content;
    }

    addContent(content: Content) {
        this._content.push(content);
    }

    contentCount() {
        return this._content.length;
    }

    getItem(index: number) {
        let item = this._content[index];
        if (index > this.contentCount() || index < 0) {
            return `<h1>Error: 404</h1>
                    <h3>The item requested does not exist :(</h3>`;
        }
        return `<p>Title: ${item.title}</br>
                   Description: ${item.description}</br>
                   Creator: ${item.creator}</br>
                   <img src="${item.imgURL}"></br>
                   Type: ${item.type} </p>`;
    }
}