import index_html from "./index.html"

export default class Test extends HTMLElement {

    static ELEMENT_NAME = "element-test"

    static createElement() {
        customElements.define(Test.ELEMENT_NAME, Test)
        return document.createElement(Test.ELEMENT_NAME)
    }

    connectedCallback() {
        this.innerHTML = index_html
    }
}

// EXAMPLE
//  customElements.define(Test.ELEMENT_NAME, Test)
//  const test_two = document.createElement(Test.ELEMENT_NAME)