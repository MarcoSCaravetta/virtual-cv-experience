import { Engine, Scene, Vector3, HemisphericLight, MeshBuilder, HavokPlugin } from "@babylonjs/core";
import HavokPhysics from "@babylonjs/havok"

export class App {
    private canvas: HTMLCanvasElement;
    private engine: Engine;
    private scene: Scene;

    constructor() {
        this.canvas = this.createCanvas();
        this.engine = new Engine(this.canvas, true);
        this.scene = new Scene(this.engine);

        window.addEventListener("resize", () => this.engine.resize());

        this.init();
    }

    private async init(): Promise<void> {
        const havokInstance = await HavokPhysics();
        const hkPlugin = new HavokPlugin(true, havokInstance);
        this.scene.enablePhysics(new Vector3(0, -9.81, 0), hkPlugin);

        this.createTempScene();

        this.engine.runRenderLoop(() => {
            this.scene.render();
        });

        console.log("Havok Physics Start");
    }

    private createCanvas(): HTMLCanvasElement {
        const canvas = document.createElement("canvas");
        canvas.style.width = "100%";
        canvas.style.height = "100 %";
        canvas.id = "gameCanvas";
        document.body.appendChild(canvas);
        return canvas;
    }

    private createTempScene(): void {
        const light = new HemisphericLight("light", new Vector3(0, 1, 0), this.scene);
        const sphere = MeshBuilder.CreateSphere("sphere", { diameter: 2 }, this.scene);
        sphere.position.y = 4;
    }
}