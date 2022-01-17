/**
 * Componente com recursos básicos para tratamento de template HTML
 */
export class BaseComponent {
    /**
     * Anexa um elemento HTML em outro elemento
     * @param {object} params objeto de parâmetros
     * @param {object} params.container Elemento que terá o novo elemento anexado
     * @param {object} params.element Elemento que será anexado no contêiner
     * @returns {Promise<object>} Uma promessa contendo uma referência para o elemento anexado no contêiner
     */
    async append({container,element}){
        container.append(element);
        return Promise.resolve(element);
    }
    /**
     * Executa uma cadeia de processos para importar um template HTML, converter e anexar em um contêiner
     * @param {object} params objeto de parâmetros
     * @param {object} params.container 
     * @returns {Promise<object>} Uma promessa contendo uma referência para o elemento anexado no contêiner
     */
    async appendTemplateTo({container}){
        this.templateText = await this.getTemplate();
        this.element = await this.parse({content: this.templateText});
        await this.append({container: container,element: this.element});
    }
    /**
     * @returns {object} Uma referência para o elemento instanciado no componente
     */
    getElement(){
        return this.element;
    }
    /**
     * @param {object} params objeto de parâmetros
     * @returns {Promise<string>} Uma promessa contendo um texto que representa um elemento
     */
    async getTemplate(){
        return await (await fetch(this.URI)).text();
    }
    /**
     * @param {object} params objeto de parâmetros
     * @param {string} params.content Conteúdo que será transformado
     * @param {string} params.contentType Formato do conteúdo que será transformado
     * @returns {Promise<object>} Uma promessa contendo um elemento
     */
    async parse({content,contentType='text/html'}){
        return Promise.resolve(new DOMParser().parseFromString(content, contentType).querySelector('body').firstChild);
    }
}