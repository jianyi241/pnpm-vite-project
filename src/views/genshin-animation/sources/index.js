import * as THREE from 'three'

class THREEPlayer {
    scene = null
    constructor(options = {}) {
        const {
            devSpeed = 1,
            renderer = null,
            layoutData = {
                geometries: {},
                sceneList: []
            },
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
            scene = {},
        } = options;

        // Ensure that 'THREE' is available in the scope as it's being used for Vector2
        if (typeof THREE === 'undefined') {
            throw new Error('THREE is not available');
        }

        // Initialize properties from options
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

        // Additional properties
        this.clock = new THREE.Clock();
        this.reportData = {
            tickTime: 0,
            tickCount: 0,
            hasReported: false
        };

        // Placeholder for context from renderer, replace 'getContext' as needed
        const context = this.renderer && typeof this.renderer.getContext === 'function' ? this.renderer.getContext() : null;

        // Default animation settings (placeholder methods)
        this.defaultAnimationSetting = {
            // SKIN, SPINE, DRAW_MASK, BEGIN_INVERT_MASK, BEGIN_MASK, STOP_MASK methods to be defined 定义
            SKIN: () => {
                this.scene.autoUpdate && this.userData.animationMixer.update(this.uniformSetting.delta.value);
            },
            SPINE: () => {
                this.scene && !this.scene.autoUpdate || this.update(this.uniformSetting.delta.value, this.uniformSetting.time.value)
            },
            DRAW_MASK: () => {
                context.clearStencil(0);
                context.clear(context.STENCIL_BUFFER_BIT);
                context.stencilFunc(context.ALWAYS, 1, 1);
                context.stencilOp(context.REPLACE, context.REPLACE, context.REPLACE);
                context.colorMask(false, false, false, false);
                context.enable(context.STENCIL_TEST);
            },
            BEGIN_INVERT_MASK: () => {
                context.stencilFunc(context.NOTEQUAL, 1, 1);
                context.stencilOp(context.KEEP, context.KEEP, context.KEEP);
                context.colorMask(true, true, true, true);
            },
            BEGIN_MASK: () => {
                context.stencilFunc(context.EQUAL, 1, 1);
                context.stencilOp(context.KEEP, context.KEEP, context.KEEP);
                context.colorMask(true, true, true, true);
            },
            STOP_MASK: () => {
                context.disable(context.STENCIL_TEST);
            }
        };

        // Rest of the properties
        this.geometries = {};
        this.shaders = {};
        this.spines = {};
        this.textures = {};
        this.buffers = {};
        this.fonts = {};
        this.sourcePool = {};
        this.loader = new SourceLoad({ // Make sure 'SourceLoad' is defined
            sourcePool: this.sourcePool
        });
        this.timelines = {};
        this.skinning = {};
        this.skeletons = {};
        this.exportResources = {};
        this.mouseController = null;
        this.scenes = {};

        // Initialization methods (placeholders)
        this.initLayout(layoutData);
    }

    // Other methods to be defined as needed...

    /**
     * timeline（可能是Spine动画或其他类型的时间线对象），animationName（动画名称或名称数组），以及options（配置对象，含有混合、帧率、速度、循环等选项）
     * @param timeline
     * @param animationName
     * @param options
     * @returns {*}
     */
    playTimeline(timeline, animationName, options = {}) {
        const {
            mix = 0,
            fps = 30,
            speed: optionSpeed = 1,
            loop: isLooping = false,
            overwrite = true,
            start = 0
        } = options;

        let speed = this.devSpeed !== 1 ? this.devSpeed : optionSpeed;
        let duration = 1000 * mix / speed / fps;

        if (overwrite && timeline._playedTimeline) {
            timeline._playedTimeline.stop();
        }

        if (Array.isArray(animationName)) {
            const compositeTimeline = f.default.createTimeline({
                type: 1
            });

            timeline._playedTimeline = compositeTimeline;
            let accumulatedStart = 0;

            animationName.forEach((name, index) => {
                const singleTimeline = this.getTimeline(timeline, name, options);
                singleTimeline.start += accumulatedStart;
                singleTimeline.loop = index === animationName.length - 1 && isLooping;
                accumulatedStart += singleTimeline.duration - duration;

                compositeTimeline.add(singleTimeline);

                if (index > 0 && mix !== 0) {
                    const weightTimeline = f.default.createTimeline({
                        start: singleTimeline.start,
                        type: 3,
                        data: [{
                            start: 0,
                            end: duration,
                            frames: [0, 1]
                        }],
                        name: '.weight',
                        root: singleTimeline
                    });
                    compositeTimeline.add(weightTimeline);
                }
            });

            return compositeTimeline.play(options);
        }

        const singleTimeline = this.getTimeline(timeline, animationName, options);
        singleTimeline.loop = isLooping;

        if (mix === 0) {
            timeline._playedTimeline = singleTimeline;
            return singleTimeline.play(options);
        }

        const blendTimeline = f.default.createTimeline({ type: 1 });
        const weightTimeline = f.default.createTimeline({
            start,
            type: 3,
            data: [{
                start: 0,
                end: duration,
                frames: [0, 1]
            }],
            name: '.weight',
            root: singleTimeline
        });

        blendTimeline.add(weightTimeline);
        blendTimeline.add(singleTimeline);

        timeline._playedTimeline = blendTimeline;

        return blendTimeline.play(options);
    }

    /**
     * scene（场景对象），timelineName（时间线的名称）
     * @param scene
     * @param timelineName
     */
    stopTimeline(scene, timelineName) {
        if (timelineName) {
            const timeline = this.getTimeline(scene, timelineName);
            if (timeline) {
                timeline.stop();
            }
        } else {
            if (scene._playedTimeline) {
                scene._playedTimeline.stop();
            }
        }
    }

    /**
     * target（目标对象），name（时间线的名称），options（一个包含额外设置的对象）
     * @param target
     * @param name
     * @param options
     * @returns {*}
     */
    getTimeline(target, name, options = {}) {
        const { excludes = null } = options;
        const timelineKey = `${target.uuid}_${name}`;

        if (!this.timelines[timelineKey]) {
            if (!this.timelineSetting[name]) {
                throw new Error(`timeline ${name} is not found`);
            }

            // Assuming f.default.createTimeline and o are defined elsewhere
            this.timelines[timelineKey] = f.default.createTimeline({
                ...this.timelineSetting[name],
                methods: this.animationSetting,
                root: target
            });
        }

        if (excludes) {
            this.timelines[timelineKey].traverse((item) => {
                item.weight = excludes.includes(item.name) ? 0 : 1;
            });
        }

        return this.timelines[timelineKey];
    }

    initLayout(layoutData) {
        const { bufferMap = {} } = layoutData;
        this.initGeometry(layoutData);
        layoutData.sceneList.forEach((sceneItem) => {
            const { classConfig = {} } = sceneItem;
            const SceneClass = this.classSetting[classConfig.id] || Scene; // Replace 'Scene' with the actual default scene class
            const scene = new SceneClass();
            const camera = getCamera(sceneItem.camera[0], sceneItem.sceneConfig); // Replace 'getCamera' with the actual function that retrieves the camera

            scene.buffer = sceneItem.buffer === undefined
                ? (sceneItem.id !== 'scene_ui' ? this.getBuffer(sceneItem.id, bufferMap[sceneItem.id]) : null)
                : this.getBuffer(sceneItem.buffer, bufferMap[sceneItem.buffer]);

            scene.name = sceneItem.id;
            scene.camera = camera;
            scene.sceneInited = false;
            scene.sceneConfig = sceneItem.sceneConfig;
            this.scenes[sceneItem.id] = scene;
        });
    }
    initGeometry(layoutData) {
        if (!layoutData.geometries) {
            throw new Error("no geometries data");
        }

        Object.keys(layoutData.geometries).forEach((key) => {
            this.geometries[key] = this.geometries[key] || this.buildGeometry(layoutData.geometries[key]);
        });

        if (layoutData.skinning) {
            Object.keys(layoutData.skinning).forEach((key) => {
                this.skinning[key] = this.skinning[key] || layoutData.skinning[key];
            });
        }
    }

    initScene(sceneData, scene) {
        scene.getPlayer = () => this;

        scene.playTimeline = (name, options) => this.playTimeline(scene, name, options);

        scene.stopTimeline = (name) => this.stopTimeline(scene, name);

        scene.getTimeline = (name, options) => this.getTimeline(scene, name, options);

        if (sceneData.hooksFunc && sceneData.hooksFunc.render && this.animationSetting[sceneData.hooksFunc.render]) {
            scene.onBeforeRender = this.animationSetting[sceneData.hooksFunc.render].bind(scene);
        }

        sceneData.children.forEach((child) => {
            this.initObject(child, scene, scene);
        });

        scene.children.forEach((child) => {
            this.finalizeObject(child);
        });

        this.modifierObject(scene, sceneData);

        if (sceneData.hooksFunc && sceneData.hooksFunc.init && this.animationSetting[sceneData.hooksFunc.init]) {
            this.animationSetting[sceneData.hooksFunc.init].apply(scene, [sceneData, this]);
        }
    }
}

// Ensure all the classes and functions like THREE, SourceLoad, etc. are properly imported or defined in the scope.