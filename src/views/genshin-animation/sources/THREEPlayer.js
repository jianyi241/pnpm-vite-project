import * as THREE from 'three'

class THREEPlayer {
    scene = null
    constructor(options = {}) {
        const {
            devSpeed = 1,
            renderer = null,
            layoutData = { geometries: {}, sceneList: [] },
            animationSetting = {},
            shaderSetting = {},
            bufferSetting = {},
            spineSetting = {},
            pluginSetting = {},
            fontSetting = {},
            imageSetting = {},
            timelineSetting = {},
            modifierSetting = {},
            machineSetting = {},
            classSetting = {},
            uniformSetting = {
                fps: { value: 1 },
                delta: { value: 0.016 },
                time: { value: 0 },
                resolution: { value: new THREE.Vector2(1, 1) },
                mouse: { value: new THREE.Vector2() },
                offset: { value: new THREE.Vector2() },
                mouseDelta: { value: new THREE.Vector2(0, 0) }
            },
            scene = {}
        } = options;

        // Properties initialization
        this.renderer = renderer;
        this.devSpeed = devSpeed;
        this.layoutData = layoutData;
        this.animationSetting = animationSetting;
        this.shaderSetting = shaderSetting;
        this.bufferSetting = bufferSetting;
        this.spineSetting = spineSetting;
        this.pluginSetting = pluginSetting;
        this.fontSetting = fontSetting;
        this.imageSetting = imageSetting;
        this.timelineSetting = timelineSetting;
        this.modifierSetting = modifierSetting;
        this.machineSetting = machineSetting;
        this.classSetting = classSetting;
        this.uniformSetting = uniformSetting;
        this.reportData = {
            tickTime: 0,
            tickCount: 0,
            hasReported: false
        };
        this.scene = scene
        // Three.js clock for managing time
        this.clock = new THREE.Clock();

        // 新增的属性初始化
        this.reportData = {
            tickTime: 0,
            tickCount: 0,
            hasReported: false
        };

        this.defaultAnimationSetting = {
            SKIN: () => {
                if (this.scene.autoUpdate) {
                    this.userData.animationMixer.update(this.uniformSetting.delta.value);
                }
            },
            SPINE: () => {
                if (this.scene && !this.scene.autoUpdate) {
                    this.update(this.uniformSetting.delta.value, this.uniformSetting.time.value);
                }
            },
            DRAW_MASK: () => {
                // 假设 j 是某个与绘图相关的上下文或对象
                // ...具体的 DRAW_MASK 方法实现...
            },
            BEGIN_INVERT_MASK: () => {
                // ...具体的 BEGIN_INVERT_MASK 方法实现...
            },
            BEGIN_MASK: () => {
                // ...具体的 BEGIN_MASK 方法实现...
            },
            STOP_MASK: () => {
                // ...具体的 STOP_MASK 方法实现...
            }
        };
        // ...其他新增的属性...
        this.geometries = {};
        this.shaders = {};
        this.spines = {};
        this.textures = {};
        this.buffers = {};
        this.fonts = {};
        this.sourcePool = {};
        this.loader = new v.SourceLoad({
            sourcePool: this.sourcePool
        });
        this.timelines = {};
        this.skinning = {};
        this.skeletons = {};
        this.exportResources = {};
        this.mouseController = null;
        this.scenes = {};
        this.layoutData = options.layoutData || {};
        this.initLayout(this.layoutData);
    }
}

export { THREEPlayer };