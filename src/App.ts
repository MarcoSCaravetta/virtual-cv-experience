import { Engine, Scene, Vector3, HemisphericLight, MeshBuilder, HavokPlugin } from "@babylonjs/core";
import HavokPhysics from "@babylonjs/havok";

export class App {
    private canvas: HTMLCanvasElement;
    private graphicsEngine: Engine;
    private physicsEngine: HavokPlugin;
    private scene: Scene;

    private constructor(canvas: HTMLCanvasElement, engine: Engine, scene: Scene, physics: HavokPlugin) {
        this.canvas = canvas;
        this.graphicsEngine = engine;
        this.scene = scene;
        this.physicsEngine = physics;

        this.startRenderLoop(); //#TODO
    }

    public static async create(): Promise<App> {
        const canvas = document.createElement("canvas");
        canvas.id = "gameCanvas";
        document.body.appendChild(canvas);

        const graphicsEngine = new Engine(canvas, true);
        const scene = new Scene(graphicsEngine);

        const havokRuntime = await HavokPhysics();
        const physicsEngine = new HavokPlugin(true, havokRuntime);
        scene.enablePhysics(new Vector3(0, -9.91, 0), physicsEngine);

        return new App(canvas, graphicsEngine, scene, physicsEngine);
    }
    
    private startRenderLoop(): void {
        this.graphicsEngine.runRenderLoop(() => {
            this.scene.render();
        });
        window.addEventListener("resize", () => this.graphicsEngine.resize());
        console.log("Havok Physics Start"); //#TODO
    }

    public test(): void {
        this.createTempScene(); //#TODO
    }
        
    private createTempScene(): void {
        const light = new HemisphericLight("light", new Vector3(0, 1, 0), this.scene);
        const sphere = MeshBuilder.CreateSphere("sphere", { diameter: 2 }, this.scene);
        sphere.position.y = 4;
    }
}
