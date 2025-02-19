import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconPaymentVvv',
    props: {
        size: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--vvv', 'IconPaymentVvv');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                role: 'presentation',
                focusable: 'false',
                fill: 'currentColor',
                viewBox: '0 0 16 16',
            },
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__clip0_3973_5794)',
            },
        }, [h('mask', {
            attrs: {
                id: 'prefix__mask0_3973_5794',
                width: '12',
                height: '12',
                x: '2',
                y: '2',
                maskUnits: 'userSpaceOnUse',
            },
            style: 'mask-type:alpha',
        }, [h('path', {
            attrs: {
                fill: '#fff',
                d: 'M12.373 2H3.627C2.728 2 2 2.728 2 3.627v8.746C2 13.272 2.728 14 3.627 14h8.746c.899 0 1.627-.728 1.627-1.627V3.627C14 2.728 13.272 2 12.373 2Z',
            },
        })]), h('g', {
            attrs: {
                mask: 'url(#prefix__mask0_3973_5794)',
            },
        }, [h('path', {
            attrs: {
                fill: 'url(#prefix__paint0_linear_3973_5794)',
                d: 'M-2.625.982h20.676V15.32H-2.625V.982Z',
            },
        })]), h('mask', {
            attrs: {
                id: 'prefix__mask1_3973_5794',
                width: '12',
                height: '12',
                x: '2',
                y: '2',
                maskUnits: 'userSpaceOnUse',
            },
            style: 'mask-type:alpha',
        }, [h('path', {
            attrs: {
                fill: '#fff',
                d: 'M12.373 2H3.627C2.728 2 2 2.728 2 3.627v8.746C2 13.272 2.728 14 3.627 14h8.746c.899 0 1.627-.728 1.627-1.627V3.627C14 2.728 13.272 2 12.373 2Z',
            },
        })]), h('g', {
            attrs: {
                mask: 'url(#prefix__mask1_3973_5794)',
            },
        }, [h('path', {
            attrs: {
                fill: 'url(#prefix__paint1_linear_3973_5794)',
                d: 'm25.997 1.343-8.161 14.135a2.551 2.551 0 0 1-4.42 0L7.813 5.776l2.567-4.433h15.618Z',
            },
        })]), h('mask', {
            attrs: {
                id: 'prefix__mask2_3973_5794',
                width: '12',
                height: '12',
                x: '2',
                y: '2',
                maskUnits: 'userSpaceOnUse',
            },
            style: 'mask-type:alpha',
        }, [h('path', {
            attrs: {
                fill: '#fff',
                d: 'M12.373 2H3.627C2.728 2 2 2.728 2 3.627v8.746C2 13.272 2.728 14 3.627 14h8.746c.899 0 1.627-.728 1.627-1.627V3.627C14 2.728 13.272 2 12.373 2Z',
            },
        })]), h('g', {
            attrs: {
                mask: 'url(#prefix__mask2_3973_5794)',
            },
        }, [h('path', {
            attrs: {
                fill: 'url(#prefix__paint2_linear_3973_5794)',
                d: 'M10.38 1.343 7.811 5.776 5.257 1.343h5.122Z',
            },
        })]), h('mask', {
            attrs: {
                id: 'prefix__mask3_3973_5794',
                width: '12',
                height: '12',
                x: '2',
                y: '2',
                maskUnits: 'userSpaceOnUse',
            },
            style: 'mask-type:alpha',
        }, [h('path', {
            attrs: {
                fill: '#fff',
                d: 'M12.373 2H3.627C2.728 2 2 2.728 2 3.627v8.746C2 13.272 2.728 14 3.627 14h8.746c.899 0 1.627-.728 1.627-1.627V3.627C14 2.728 13.272 2 12.373 2Z',
            },
        })]), h('g', {
            attrs: {
                mask: 'url(#prefix__mask3_3973_5794)',
            },
        }, [h('path', {
            attrs: {
                fill: 'url(#prefix__paint3_linear_3973_5794)',
                d: 'm5.257 1.343 2.555 4.433-2.562 4.431a2.336 2.336 0 0 1-4.045 0l-5.118-8.864h9.17Z',
            },
        })]), h('mask', {
            attrs: {
                id: 'prefix__mask4_3973_5794',
                width: '12',
                height: '12',
                x: '2',
                y: '2',
                maskUnits: 'userSpaceOnUse',
            },
            style: 'mask-type:alpha',
        }, [h('path', {
            attrs: {
                fill: '#fff',
                d: 'M12.373 2H3.627C2.728 2 2 2.728 2 3.627v8.746C2 13.272 2.728 14 3.627 14h8.746c.899 0 1.627-.728 1.627-1.627V3.627C14 2.728 13.272 2 12.373 2Z',
            },
        })]), h('g', {
            attrs: {
                mask: 'url(#prefix__mask4_3973_5794)',
            },
        }, [h('path', {
            attrs: {
                fill: 'url(#prefix__paint4_linear_3973_5794)',
                d: 'M2.506 22.3h10.486a1.536 1.536 0 0 0 1.33-2.304l-5.242-9.08a1.536 1.536 0 0 0-2.662 0l-5.242 9.08a1.536 1.536 0 0 0 1.33 2.305Z',
            },
        })]), h('mask', {
            attrs: {
                id: 'prefix__mask5_3973_5794',
                width: '12',
                height: '12',
                x: '2',
                y: '2',
                maskUnits: 'userSpaceOnUse',
            },
            style: 'mask-type:alpha',
        }, [h('path', {
            attrs: {
                fill: '#fff',
                d: 'M12.373 2H3.627C2.728 2 2 2.728 2 3.627v8.746C2 13.272 2.728 14 3.627 14h8.746c.899 0 1.627-.728 1.627-1.627V3.627C14 2.728 13.272 2 12.373 2Z',
            },
        })]), h('g', {
            attrs: {
                mask: 'url(#prefix__mask5_3973_5794)',
            },
        }, [h('path', {
            attrs: {
                fill: 'url(#prefix__paint5_linear_3973_5794)',
                d: 'M-11.597 22.656H1.676a1.945 1.945 0 0 0 1.684-2.918L-3.276 8.244a1.945 1.945 0 0 0-3.369 0l-6.636 11.494a1.945 1.945 0 0 0 1.684 2.918Z',
            },
        })]), h('path', {
            attrs: {
                fill: '#fff',
                d: 'M11.485 4.086H4.1a1.082 1.082 0 0 0-.937 1.623l3.692 6.395a1.082 1.082 0 0 0 1.874 0l3.692-6.395a1.082 1.082 0 0 0-.937-1.623Z',
            },
        }), h('path', {
            attrs: {
                fill: '#273680',
                d: 'M11.832 5.42c-.457.793-.915 1.585-1.373 2.375a.435.435 0 0 1-.765-.007L8.336 5.422a.437.437 0 1 1 .754-.442c.32.552.635 1.105.953 1.658l.038.062.33-.57c.223-.383.442-.766.665-1.146a.436.436 0 1 1 .756.436ZM9.553 9.36c-.296.517-.596 1.033-.894 1.55l-.474.818c-.193.333-.6.335-.792.002-.45-.782-.898-1.564-1.346-2.347a.438.438 0 0 1 .048-.528.418.418 0 0 1 .504-.099c.078.04.144.098.19.171.32.544.632 1.092.946 1.638l.056.095.269-.463c.242-.417.482-.836.726-1.252A.434.434 0 0 1 9.5 8.87c.12.136.14.331.053.49ZM5.113 7.81 4.3 6.391c-.181-.315-.364-.63-.543-.946a.436.436 0 1 1 .752-.443c.318.55.635 1.102.951 1.653l.043.073.485-.838c.172-.298.343-.597.518-.894a.437.437 0 1 1 .752.445l-1.26 2.18c-.039.064-.075.13-.114.195a.437.437 0 0 1-.77-.005Z',
            },
        })]), h('defs', [h('linearGradient', {
            attrs: {
                id: 'prefix__paint0_linear_3973_5794',
                x1: '11.78',
                x2: '-3.5',
                y1: '7.753',
                y2: '10.867',
                gradientUnits: 'userSpaceOnUse',
            },
        }, [h('stop', {
            attrs: {
                offset: '.002',
                'stop-color': '#81CFF4',
            },
        }), h('stop', {
            attrs: {
                offset: '.467',
                'stop-color': '#0998D5',
            },
        }), h('stop', {
            attrs: {
                offset: '1',
                'stop-color': '#273680',
            },
        })]), h('linearGradient', {
            attrs: {
                id: 'prefix__paint1_linear_3973_5794',
                x1: '15.307',
                x2: '18.027',
                y1: '.484',
                y2: '7.569',
                gradientUnits: 'userSpaceOnUse',
            },
        }, [h('stop', {
            attrs: {
                'stop-color': '#0998D5',
            },
        }), h('stop', {
            attrs: {
                offset: '1',
                'stop-color': '#273680',
            },
        })]), h('linearGradient', {
            attrs: {
                id: 'prefix__paint2_linear_3973_5794',
                x1: '8.626',
                x2: '8.049',
                y1: '5.158',
                y2: '1.485',
                gradientUnits: 'userSpaceOnUse',
            },
        }, [h('stop', {
            attrs: {
                'stop-color': '#E20E7E',
            },
        }), h('stop', {
            attrs: {
                offset: '.005',
                'stop-color': '#E20E7E',
            },
        }), h('stop', {
            attrs: {
                offset: '1',
                'stop-color': '#6E237F',
            },
        })]), h('linearGradient', {
            attrs: {
                id: 'prefix__paint3_linear_3973_5794',
                x1: '5.148',
                x2: '1.466',
                y1: '8.922',
                y2: '.644',
                gradientUnits: 'userSpaceOnUse',
            },
        }, [h('stop', {
            attrs: {
                'stop-color': '#FABE03',
            },
        }), h('stop', {
            attrs: {
                offset: '.47',
                'stop-color': '#EE8906',
            },
        }), h('stop', {
            attrs: {
                offset: '1',
                'stop-color': '#E64516',
            },
        })]), h('linearGradient', {
            attrs: {
                id: 'prefix__paint4_linear_3973_5794',
                x1: '501.324',
                x2: '585.581',
                y1: '1233.94',
                y2: '1796.99',
                gradientUnits: 'userSpaceOnUse',
            },
        }, [h('stop', {
            attrs: {
                'stop-color': '#97C02B',
            },
        }), h('stop', {
            attrs: {
                offset: '.998',
                'stop-color': '#06863B',
            },
        }), h('stop', {
            attrs: {
                offset: '1',
                'stop-color': '#06863B',
            },
        })]), h('linearGradient', {
            attrs: {
                id: 'prefix__paint5_linear_3973_5794',
                x1: '.015',
                x2: '-1.568',
                y1: '12.849',
                y2: '15.362',
                gradientUnits: 'userSpaceOnUse',
            },
        }, [h('stop', {
            attrs: {
                'stop-color': '#EE8906',
            },
        }), h('stop', {
            attrs: {
                offset: '1',
                'stop-color': '#E64516',
            },
        })]), h('clipPath', {
            attrs: {
                id: 'prefix__clip0_3973_5794',
            },
        }, [h('rect', {
            attrs: {
                width: '12',
                height: '12',
                fill: '#fff',
                transform: 'translate(2 2)',
            },
        })])])]);
    },
};
