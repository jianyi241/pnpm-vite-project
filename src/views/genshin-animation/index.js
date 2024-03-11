const spineData = [
    {
        spineId: 'fJIMc',
        loop: true,
        renderOrder: 0,
        visible: false,
        animation: 'animation',
        maxVert: 8000,
        scale: [0.85, 0.85, 0.85],
        position: [0, -33, 0],
        name: 'xianyun'
    },
    {
        spineId: 'GRzTk',
        loop: true,
        renderOrder: 0,
        visible: false,
        animation: 'animation',
        maxVert: 6000,
        scale: [0.8, 0.8, 0.8],
        position: [90, 30, 0],
        name: 'jaming'
    },
    {
        spineId: '6GC5w',
        loop: true,
        renderOrder: 0,
        visible: false,
        animation: 'animation',
        maxVert: 6000,
        scale: [0.8, 0.8, 0.8],
        position: [-50, 0, 0],
        name: 'xiao'
    },
    {
        spineId: 'SwOky',
        loop: true,
        renderOrder: 0,
        visible: false,
        animation: 'animation',
        maxVert: 6000,
        scale: [0.9, 0.9, 0.9],
        position: [0, 0, 0],
        name: 'naxida'
    },
    {
        spineId: 'EfTzA',
        loop: true,
        renderOrder: 0,
        visible: false,
        animation: 'animation',
        maxVert: 2048,
        scale: [0.85, 0.85, 0.85],
        position: [-230, -100, 0],
        name: 'bachong'
    }
]

const a = {
    default: {
        SPINE: {
            metadata: {
                version: 4.5,
                type: 'Material',
                generator: 'Material.toJSON'
            },
            uuid: '253C3CB1-92F1-4B2B-A529-0A285D017EAD',
            type: 'ShaderMaterial',
            side: 2,
            transparent: true,
            depthFunc: 3,
            depthTest: false,
            depthWrite: false,
            colorWrite: true,
            stencilWrite: false,
            stencilWriteMask: 255,
            stencilFunc: 519,
            stencilRef: 0,
            stencilFuncMask: 255,
            stencilFail: 7680,
            stencilZFail: 7680,
            stencilZPass: 7680,
            glslVersion: null,
            uniforms: {
                opacity: {
                    value: 1
                }
            },
            defines: {
                ALPHA_TEST: 0
            },
            vertexShader:
                'attribute vec4 color;\nvarying vec2 vUv;\nvarying vec4 vColor;\nuniform float opacity;\nvoid main() {\n  vUv = uv;\n  vColor = color;\n  vColor.a *= opacity;\n  gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);\n}\n',
            fragmentShader:
                'uniform sampler2D diffuse;\nvarying vec2 vUv;\nvarying vec4 vColor;\nvoid main() {\n  gl_FragColor = texture2D(diffuse, vUv);\n  #if ALPHA_TEST == 1\n      if(gl_FragColor.a<.5){\n    discard;\n}\n\n  #endif\n  gl_FragColor *= vColor;\n}\n'
        }
    }
}

const e = {
    i: 3,
    l: false,
    exports: {}
}

const i = []

const o = {
    spine: {
        BlendMode: {
            0: 'Normal',
            1: 'Additive',
            2: 'Multiply',
            3: 'Screen',
            Normal: 0,
            Additive: 1,
            Multiply: 2,
            Screen: 3
        },
        CURRENT: 2,
        EventType: {
            0: 'start',
            1: 'interrupt',
            2: 'end',
            3: 'dispose',
            4: 'complete',
            5: 'event',
            start: 0,
            interrupt: 1,
            end: 2,
            dispose: 3,
            complete: 4,
            event: 5
        },
        FIRST: 1,
        HOLD_FIRST: 3,
        HOLD_MIX: 4,
        HOLD_SUBSEQUENT: 2,
        MixBlend: {
            0: 'setup',
            1: 'first',
            2: 'replace',
            3: 'add',
            setup: 0,
            first: 1,
            replace: 2,
            add: 3
        },
        MixDirection: {
            0: 'mixIn',
            1: 'mixOut',
            mixIn: 0,
            mixOut: 1
        },
        PositionMode: {
            0: 'Fixed',
            1: 'Percent',
            Fixed: 0,
            Percent: 1
        },
        RotateMode: {
            0: 'Tangent',
            1: 'Chain',
            2: 'ChainScale',
            Tangent: 0,
            Chain: 1,
            ChainScale: 2
        },
        SETUP: 1,
        SUBSEQUENT: 0,
        SpacingMode: {
            0: 'Length',
            1: 'Fixed',
            2: 'Percent',
            3: 'Proportional',
            Length: 0,
            Fixed: 1,
            Percent: 2,
            Proportional: 3
        },
        TextureFilter: {
            9728: 'Nearest',
            9729: 'Linear',
            9984: 'MipMapNearestNearest',
            9985: 'MipMapLinearNearest',
            9986: 'MipMapNearestLinear',
            9987: 'MipMapLinearLinear',
            Nearest: 9728,
            Linear: 9729,
            MipMap: 9987,
            MipMapNearestNearest: 9984,
            MipMapLinearNearest: 9985,
            MipMapNearestLinear: 9986,
            MipMapLinearLinear: 9987
        },
        TextureWrap: {
            10497: 'Repeat',
            33071: 'ClampToEdge',
            33648: 'MirroredRepeat',
            MirroredRepeat: 33648,
            ClampToEdge: 33071,
            Repeat: 10497
        },
        TransformMode: {
            0: 'Normal',
            1: 'OnlyTranslation',
            2: 'NoRotationOrReflection',
            3: 'NoScale',
            4: 'NoScaleOrReflection',
            Normal: 0,
            OnlyTranslation: 1,
            NoRotationOrReflection: 2,
            NoScale: 3,
            NoScaleOrReflection: 4
        },
        threejs: {}
    },
    motion: {},
    msdf: {},
    io: {},
    mouse: {},
    richText: {
        defaultStyle: {
            color: 'black',
            fontSize: 14,
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontWeight: 'normal',
            fontStretch: 'normal',
            fontFamily: '"Microsoft YaHei", 微软雅黑, Arial, sans-serif',
            width: 9007199254740991,
            textAlign: 'left',
            verticalAlign: 'bottom',
            lineSpacing: 5,
            whiteSpace: 'collapse-all',
            spaceWidth: 5,
            newLine: 'preserve',
            lineHeight: 'static',
            strokeWidth: 0,
            strokeColor: 'black'
        }
    },
    utils: {}
}
const r = {
    default: {
        SPINE: {
            metadata: {
                version: 4.5,
                type: 'Material',
                generator: 'Material.toJSON'
            },
            uuid: '253C3CB1-92F1-4B2B-A529-0A285D017EAD',
            type: 'ShaderMaterial',
            side: 2,
            transparent: true,
            depthFunc: 3,
            depthTest: false,
            depthWrite: false,
            colorWrite: true,
            stencilWrite: false,
            stencilWriteMask: 255,
            stencilFunc: 519,
            stencilRef: 0,
            stencilFuncMask: 255,
            stencilFail: 7680,
            stencilZFail: 7680,
            stencilZPass: 7680,
            glslVersion: null,
            uniforms: {
                opacity: {
                    value: 1
                }
            },
            defines: {
                ALPHA_TEST: 0
            },
            vertexShader:
                'attribute vec4 color;\nvarying vec2 vUv;\nvarying vec4 vColor;\nuniform float opacity;\nvoid main() {\n  vUv = uv;\n  vColor = color;\n  vColor.a *= opacity;\n  gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);\n}\n',
            fragmentShader:
                'uniform sampler2D diffuse;\nvarying vec2 vUv;\nvarying vec4 vColor;\nvoid main() {\n  gl_FragColor = texture2D(diffuse, vUv);\n  #if ALPHA_TEST == 1\n      if(gl_FragColor.a<.5){\n    discard;\n}\n\n  #endif\n  gl_FragColor *= vColor;\n}\n'
        }
    }
}
const t = {}

export { spineData, a }
