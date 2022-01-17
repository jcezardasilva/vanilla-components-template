import {BaseComponent} from "../BaseComponent/BaseComponent.js";

export class HelloWorldComponent extends BaseComponent {
    constructor(){
        super()
        this.URI = '/components/HelloWorld/HelloWorldTemplate.html';
    }
    /**
     * 
     * @param {object} params objeto de parâmetros 
     * @param {object} container Elemento que terá um novo elemento anexado
     */
    async appendTo({container}){
        this.element = await appendTemplateTo({container,URI});
    }
}