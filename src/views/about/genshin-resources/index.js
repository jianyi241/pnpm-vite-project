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

export function initMainScene() {
    const e = {
        id: 'scene_main',
        children: []
    }
    spineData.forEach(function (t) {
        let n = t.name,
            r = void 0 === n ? '' : n,
            i = t.spineId,
            o = t.animation,
            a = t.scale,
            s = void 0 === a ? [1, 1, 1] : a,
            u = t.position,
            c = void 0 === u ? [0, 0, 0] : u,
            l = t.renderOrder,
            f = void 0 === l ? 0 : l,
            d = t.visible,
            p = void 0 === d || d,
            h = t.maxVert,
            v = void 0 === h ? 2048 : h
        e.children.push({
            name: r,
            uuid: r,
            renderOrder: f,
            position: c,
            scale: s,
            visible: p,
            children: [],
            type: 3,
            spine: {
                id: i,
                defaultAnimation: o,
                maxVert: v
            },
            material: [
                {
                    id: 'SPINE'
                }
            ]
        })
    })
    //this.player.initScene(e, this.scene)
}

initMainScene()
