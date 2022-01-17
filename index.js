import { HelloWorldComponent } from "./components/HelloWorld/HelloWorldComponent.js";

let helloWorld = new HelloWorldComponent();
helloWorld.appendTemplateTo({container:document.body});
