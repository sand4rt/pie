import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconStampcard10',
    props: {
        size: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--stampcard10', 'IconStampcard10');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                role: 'presentation',
                focusable: 'false',
                fill: 'currentColor',
                viewBox: '0 0 16 16',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M5.979 9.943v-3.93h-.595l-1.199.508.28.674.683-.245v2.993h.83Z',
            },
        }), h('path', {
            attrs: {
                d: 'M6.976 7.983c0 1.015.569 2.038 1.785 2.038 1.217 0 1.785-1.023 1.785-2.038s-.568-2.04-1.785-2.04c-1.216 0-1.785 1.025-1.785 2.04Zm2.722 0c0 .735-.36 1.286-.937 1.286-.577 0-.936-.551-.936-1.286s.359-1.287.936-1.287c.578 0 .937.552.937 1.287Z',
            },
        }), h('path', {
            attrs: {
                d: 'M12.533 7.204c0-.306-.193-.656-.613-.656a.562.562 0 0 0-.429.183.699.699 0 0 0 0 .945.562.562 0 0 0 .429.184c.42 0 .613-.35.613-.656Z',
            },
        }), h('path', {
            attrs: {
                d: 'M14.554 8.166c-.062-.017-.114-.043-.184-.043-.42 0-.612.35-.612.656 0 .192.087.402.253.525.097.07.21.131.359.131.42 0 .613-.35.613-.656a.641.641 0 0 0-.43-.621v.008Z',
            },
        }), h('path', {
            attrs: {
                d: 'M11.675 9.566h.805l1.741-2.563.394-.587h-.805l-.787 1.155-1.348 1.995Z',
            },
        }), h('path', {
            attrs: {
                d: 'M11.841 11.841c-.297.298-.778.377-1.198.447-.254.043-.552.087-.788.183-.219.088-.446.254-.647.403-.377.271-.753.551-1.208.551-.455 0-.831-.28-1.199-.543-.253-.183-.446-.323-.656-.402-.227-.096-.507-.14-.779-.184-.42-.07-.901-.148-1.207-.455-.306-.306-.376-.761-.455-1.216-.044-.28-.088-.534-.184-.77-.087-.219-.245-.429-.402-.647-.272-.368-.552-.753-.552-1.208 0-.455.28-.831.543-1.199.175-.245.324-.446.411-.656.096-.219.14-.49.175-.726v-.053c.079-.42.158-.901.464-1.198.297-.298.761-.377 1.207-.455.272-.044.543-.088.779-.184a3.61 3.61 0 0 0 .648-.403c.367-.271.752-.551 1.198-.551.447 0 .832.28 1.208.551.21.149.429.315.647.403.236.096.508.14.788.192.446.07.901.149 1.207.455.272.272.359.674.429 1.077h1.365l-.018-.097c-.096-.56-.218-1.33-.822-1.933-.604-.604-1.374-.735-1.943-.832-.166-.026-.385-.061-.48-.105-.07-.026-.263-.166-.377-.253-.437-.315-1.102-.805-1.986-.805-.884 0-1.523.463-1.995.805-.105.078-.298.218-.376.245a3.07 3.07 0 0 1-.49.105c-.56.096-1.33.218-1.934.822-.586.586-.726 1.356-.814 1.881v.062c-.035.148-.07.385-.114.48-.035.07-.183.28-.253.377-.315.438-.805 1.103-.805 1.986 0 .884.48 1.558.813 2.004.079.114.21.298.245.368.035.087.07.288.105.49.097.56.219 1.32.823 1.933.604.604 1.409.744 1.942.832.167.026.385.06.473.104.07.036.271.176.376.254.438.324 1.103.805 1.986.805.884 0 1.558-.481 1.995-.805.105-.079.298-.219.377-.245.096-.043.332-.079.49-.105.524-.087 1.32-.218 1.925-.822.603-.595.734-1.348.822-1.917h-1.365c-.07.368-.157.718-.411.963l.017-.009Z',
            },
        }), h('path', {
            attrs: {
                d: 'M5.979 9.943v-3.93h-.595l-1.199.508.28.674.683-.245v2.993h.83Z',
            },
        }), h('path', {
            attrs: {
                d: 'M6.976 7.983c0 1.015.569 2.038 1.785 2.038 1.217 0 1.785-1.023 1.785-2.038s-.568-2.04-1.785-2.04c-1.216 0-1.785 1.025-1.785 2.04Zm2.722 0c0 .735-.36 1.286-.937 1.286-.577 0-.936-.551-.936-1.286s.359-1.287.936-1.287c.578 0 .937.552.937 1.287Z',
            },
        }), h('path', {
            attrs: {
                d: 'M12.533 7.204c0-.306-.193-.656-.613-.656a.562.562 0 0 0-.429.183.699.699 0 0 0 0 .945.562.562 0 0 0 .429.184c.42 0 .613-.35.613-.656Z',
            },
        }), h('path', {
            attrs: {
                d: 'M14.554 8.166c-.062-.017-.114-.043-.184-.043-.42 0-.612.35-.612.656 0 .192.087.402.253.525.097.07.21.131.359.131.42 0 .613-.35.613-.656a.641.641 0 0 0-.43-.621v.008Z',
            },
        }), h('path', {
            attrs: {
                d: 'M11.675 9.566h.805l1.741-2.563.394-.587h-.805l-.787 1.155-1.348 1.995Z',
            },
        })]);
    },
};
