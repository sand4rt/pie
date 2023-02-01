import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconMisterCash',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16'
            },
            class: 'c-pieIcon c-pieIcon--misterCash'
        }, ctx.data]), [h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M7.99982 4.14124H13.5298C14.2648 4.14124 14.4923 4.67499 14.4923 5.05999V10.9487C14.4923 11.3162 14.2648 11.8675 13.5298 11.8675H2.46982C1.74357 11.8675 1.50732 11.3162 1.50732 10.9487V5.05999C1.50732 4.68374 1.74357 4.14124 2.46982 4.14124H7.99982Z',
                fill: 'white'
            }
        }), h('path', {
            attrs: {
                d: 'M13.53 11.9288H2.47C2.12875 11.9288 1.84875 11.8063 1.665 11.5788C1.525 11.4038 1.4375 11.1675 1.4375 10.94V5.06004C1.4375 4.82379 1.51625 4.58754 1.665 4.41254C1.79625 4.25504 2.04125 4.07129 2.47 4.07129H13.53C13.88 4.07129 14.16 4.19379 14.3438 4.41254C14.4837 4.58754 14.5625 4.82379 14.5625 5.06004V10.9488C14.5625 11.185 14.4837 11.4125 14.3438 11.5875C14.2125 11.745 13.9675 11.9375 13.53 11.9375V11.9288ZM2.47 4.21129C2.16375 4.21129 1.9275 4.30754 1.77 4.50004C1.6475 4.64879 1.5775 4.85004 1.5775 5.06004V10.9488C1.5775 11.15 1.6475 11.3513 1.77 11.5C1.9275 11.6925 2.16375 11.7975 2.47 11.7975H13.53C14.23 11.7975 14.4225 11.2638 14.4225 10.9488V5.06004C14.4225 4.85004 14.3525 4.64879 14.23 4.50004C14.0725 4.30754 13.8362 4.21129 13.53 4.21129H2.47V4.21129Z',
                fill: '#2D78BB'
            }
        }), h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M5.40105 8.61253H7.4223L8.55105 7.40503H10.5811L8.8573 9.32128H2.4873V8.03503H5.8998L5.3923 8.60378L5.40105 8.61253Z',
                fill: '#2D78BB'
            }
        }), h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M10.5725 7.40496H8.54254L7.41379 8.62121H5.38379L7.10754 6.70496H13.4775V7.98246H10.065L10.5725 7.41371V7.40496Z',
                fill: '#F8E14B'
            }
        }), h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M12.6549 6.23254C12.5586 6.29379 12.4449 6.32004 12.3311 6.32004C12.0074 6.32004 11.7099 6.07504 11.7099 5.74254C11.7099 5.41004 11.9724 5.16504 12.3049 5.16504C12.4274 5.16504 12.5586 5.18254 12.6549 5.24379V5.60254C12.5849 5.54129 12.4799 5.51504 12.3574 5.51504C12.2436 5.51504 12.1124 5.61129 12.1124 5.76004C12.1124 5.89129 12.2436 5.97004 12.3574 5.97004C12.4886 5.97004 12.5674 5.97004 12.6549 5.89129V6.24129V6.23254ZM13.4861 5.96129V6.23254C13.1974 6.45129 12.8561 6.26754 12.8561 6.01379V5.51504H12.7161V5.18254H12.8561V4.92004L13.2499 4.70129V5.18254H13.4774V5.48004H13.2674V5.94379C13.2674 6.03129 13.4074 6.02254 13.4774 5.94379L13.4861 5.96129ZM10.6074 5.55004L10.6686 5.24379C11.0624 5.10379 11.6399 5.18254 11.6399 5.54129V6.30254H11.2724L11.2549 6.26754C11.0886 6.37254 10.4586 6.42504 10.5461 5.93504C10.5986 5.63754 10.9311 5.56754 11.1324 5.56754C11.2374 5.56754 11.2811 5.47129 11.1499 5.46254C11.0274 5.46254 10.7911 5.46254 10.6074 5.55879V5.55004ZM3.89615 5.55004L3.9574 5.24379C4.3599 5.10379 4.92865 5.18254 4.92865 5.54129V6.30254H4.5524V6.26754C4.38615 6.37254 3.73865 6.42504 3.8349 5.93504C3.8874 5.63754 4.21115 5.56754 4.42115 5.56754C4.52615 5.56754 4.5699 5.47129 4.43865 5.46254C4.31615 5.46254 4.07115 5.46254 3.9049 5.55879L3.89615 5.55004ZM8.4549 5.76004C8.4549 6.09254 8.1749 6.32879 7.8424 6.32879C7.5099 6.32879 7.22115 6.07504 7.22115 5.74254C7.22115 5.41004 7.50115 5.15629 7.83365 5.15629C8.1749 5.15629 8.4549 5.41004 8.4549 5.76004ZM10.4761 5.97004V6.24129C10.1786 6.46004 9.84615 6.27629 9.84615 6.02254V5.52379H9.70615V5.19129H9.84615V4.92879L10.2486 4.71004V5.19129H10.4674V5.48879H10.2574V5.95254C10.2574 6.04004 10.4061 6.03129 10.4674 5.95254L10.4761 5.97004Z',
                fill: '#2D78BB'
            }
        }), h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M3.23984 4.62256C3.60734 4.62256 3.87859 5.11256 3.53734 5.42756C3.96609 5.69006 3.77359 6.27631 3.29234 6.28506H2.49609V4.62256H3.23984V4.62256ZM7.15984 6.22381C7.06359 6.28506 6.95859 6.31131 6.83609 6.31131C6.50359 6.31131 6.21484 6.06631 6.21484 5.73381C6.21484 5.40131 6.47734 5.15631 6.80109 5.15631C6.92359 5.15631 7.05484 5.17381 7.15109 5.23506V5.59381C7.07234 5.53256 6.97609 5.50631 6.86234 5.50631C6.74859 5.50631 6.60859 5.60256 6.60859 5.75131C6.60859 5.88256 6.74859 5.96131 6.86234 5.96131C6.98484 5.96131 7.06359 5.96131 7.15109 5.88256V6.23256L7.15984 6.22381ZM6.14484 5.56756V6.29381H5.74234V5.67256C5.74234 5.45381 5.41859 5.45381 5.41859 5.67256V6.29381H5.01609V5.18256H5.41859V5.27881C5.75109 5.02506 6.12734 5.26131 6.12734 5.57631L6.14484 5.56756ZM9.65359 5.56756V6.29381H9.25109V5.67256C9.25109 5.45381 8.92734 5.45381 8.92734 5.67256V6.29381H8.53359V5.18256H8.92734V5.27881C9.26859 5.02506 9.64484 5.26131 9.64484 5.57631L9.65359 5.56756ZM11.1498 5.44506C11.2811 5.44506 11.2461 5.55006 11.1323 5.55006C10.9223 5.55006 10.5898 5.62006 10.5461 5.91756C10.4586 6.40756 11.0886 6.36381 11.2548 6.25006L11.2723 6.28506H11.6398V5.52381C11.6398 5.16506 11.0711 5.08631 10.6686 5.22631L10.6073 5.53256C10.7823 5.44506 11.0273 5.43631 11.1498 5.43631V5.44506Z',
                fill: '#2D78BB'
            }
        }), h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M4.42986 5.45375C4.56111 5.45375 4.51736 5.55875 4.41236 5.55875C4.20236 5.55875 3.87861 5.62875 3.82611 5.92625C3.72986 6.41625 4.37736 6.3725 4.53486 6.25875V6.29375H4.91986V5.5325C4.91986 5.17375 4.35111 5.095 3.94861 5.235L3.88736 5.54125C4.05361 5.45375 4.29861 5.445 4.42111 5.445L4.42986 5.45375ZM7.83361 5.15625C7.50986 5.15625 7.22111 5.41 7.22111 5.7425C7.22111 6.075 7.50111 6.32875 7.84236 6.32875C8.18361 6.32875 8.45486 6.0925 8.45486 5.76C8.45486 5.4275 8.17486 5.15625 7.83361 5.15625V5.15625ZM10.2574 5.96125V5.4975H10.4674V5.2H10.2486V4.71875L9.84611 4.9375V5.2H9.70611V5.5325H9.84611V6.03125C9.84611 6.285 10.1699 6.46 10.4761 6.25V5.97875C10.4149 6.04875 10.2661 6.0575 10.2661 5.97875L10.2574 5.96125Z',
                fill: '#2D78BB'
            }
        }), h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M2.49609 4.62256V6.28506H3.29234C3.76484 6.28506 3.95734 5.69006 3.53734 5.42756C3.87859 5.12131 3.60734 4.62256 3.23984 4.62256H2.49609V4.62256ZM7.15109 5.87381C7.05484 5.94381 6.97609 5.95256 6.86234 5.95256C6.74859 5.95256 6.60859 5.87381 6.60859 5.74256C6.60859 5.59381 6.73984 5.49756 6.86234 5.49756C6.98484 5.49756 7.07234 5.51506 7.15109 5.58506V5.22631C7.05484 5.16506 6.92359 5.14756 6.80109 5.14756C6.47734 5.14756 6.21484 5.39256 6.21484 5.72506C6.21484 6.05756 6.49484 6.30256 6.83609 6.30256C6.95859 6.30256 7.06359 6.27631 7.15984 6.21506V5.86506L7.15109 5.87381ZM5.42734 5.27006V5.17381H5.02484V6.28506H5.42734V5.66381C5.42734 5.44506 5.75109 5.44506 5.75109 5.66381V6.28506H6.15359V5.55881C6.15359 5.24381 5.77734 5.01631 5.44484 5.26131L5.42734 5.27006ZM8.93609 5.27006V5.17381H8.54234V6.28506H8.93609V5.66381C8.93609 5.44506 9.25984 5.44506 9.25984 5.66381V6.28506H9.66234V5.55881C9.66234 5.24381 9.28609 5.01631 8.94484 5.26131L8.93609 5.27006ZM12.6636 5.87381C12.5673 5.94381 12.4886 5.95256 12.3661 5.95256C12.2523 5.95256 12.1211 5.87381 12.1211 5.74256C12.1211 5.59381 12.2523 5.49756 12.3661 5.49756C12.4886 5.49756 12.5936 5.51506 12.6636 5.58506V5.22631C12.5673 5.16506 12.4361 5.14756 12.3136 5.14756C11.9811 5.14756 11.7186 5.39256 11.7186 5.72506C11.7186 6.05756 12.0073 6.30256 12.3398 6.30256C12.4536 6.30256 12.5761 6.27631 12.6636 6.21506V5.86506V5.87381ZM13.2848 5.94381V5.48006H13.4948V5.18256H13.2673V4.70131L12.8736 4.92006V5.18256H12.7336V5.51506H12.8736V6.01381C12.8736 6.26756 13.2061 6.44256 13.5036 6.23256V5.96131C13.4423 6.03131 13.2936 6.04006 13.2936 5.96131L13.2848 5.94381ZM8.06984 5.74256C8.06984 5.86506 7.96484 5.96131 7.84234 5.96131C7.71984 5.96131 7.62359 5.86506 7.62359 5.72506C7.62359 5.58506 7.71984 5.50631 7.84234 5.50631C7.96484 5.50631 8.06984 5.58506 8.06984 5.74256Z',
                fill: '#2D78BB'
            }
        }), h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M2.95113 5.62004H3.12613C3.34488 5.62004 3.37113 5.95254 3.12613 5.95254H2.94238V5.62004H2.95113ZM4.52613 5.80379V5.94379C4.52613 6.09254 4.22863 6.13629 4.22863 5.97879C4.22863 5.83879 4.43863 5.79504 4.52613 5.80379ZM11.2461 5.80379V5.94379C11.2461 6.09254 10.9574 6.13629 10.9574 5.97879C10.9574 5.83879 11.1674 5.79504 11.2461 5.80379ZM3.13488 4.95504C3.34488 5.05129 3.26613 5.27004 3.13488 5.27004H2.95113V4.95504C2.95113 4.95504 3.08238 4.93754 3.12613 4.95504H3.13488Z',
                fill: '#2D78BB'
            }
        }), h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M7.84242 5.51496C7.71992 5.51496 7.62367 5.59371 7.62367 5.73371C7.62367 5.87371 7.71992 5.96996 7.84242 5.96996C7.96492 5.96996 8.06992 5.87371 8.06992 5.75121C8.06992 5.59371 7.96492 5.51496 7.84242 5.51496ZM10.9487 5.97871C10.9487 6.13621 11.2374 6.09246 11.2374 5.94371V5.80371C11.1587 5.78621 10.9487 5.82996 10.9487 5.97871ZM2.95117 4.96371V5.27871H3.13492C3.26617 5.27871 3.33617 5.05996 3.13492 4.96371C3.08242 4.94621 2.95992 4.96371 2.95992 4.96371H2.95117ZM4.21992 5.97871C4.21992 6.13621 4.51742 6.09246 4.51742 5.94371V5.80371C4.42992 5.78621 4.21992 5.82996 4.21992 5.97871ZM2.95117 5.96121H3.13492C3.37117 5.96121 3.34492 5.62871 3.13492 5.62871H2.95992V5.96121H2.95117Z',
                fill: 'white'
            }
        }), h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M7.43984 10.8263C7.43984 10.4413 7.28234 10.1875 6.88859 10.1875C6.52109 10.1875 6.30234 10.4675 6.30234 10.7825C6.30234 11.1238 6.56484 11.3775 6.93234 11.3775C7.25609 11.3775 7.41359 11.2463 7.41359 11.2463V10.9138C7.28234 10.9838 7.13359 11.0275 7.01984 11.0275C6.80984 11.0275 6.69609 10.9663 6.69609 10.8175H7.43984V10.8263ZM3.26609 10.8875L3.58984 10.415V11.3513H4.01859V9.72375H3.58984L3.26609 10.2138L2.93359 9.72375H2.49609V11.3513H2.93359V10.415L3.26609 10.8875ZM7.90359 10.7038C7.94734 10.6075 8.03484 10.5288 8.15734 10.5288C8.21859 10.5288 8.28859 10.555 8.34109 10.59V10.24C8.34109 10.24 8.24484 10.1788 8.19234 10.1788C8.09609 10.1788 7.95609 10.24 7.90359 10.31V10.1963H7.51859V11.3513H7.90359V10.7038ZM4.63109 11.2813C4.76234 11.3425 4.92859 11.36 5.03359 11.36C5.44484 11.36 5.56734 11.1413 5.56734 10.9663C5.56734 10.7563 5.35734 10.6425 5.16484 10.6163C5.13859 10.6163 5.05984 10.5988 5.05984 10.555C5.05984 10.5288 5.07734 10.4938 5.17359 10.4938C5.25234 10.4938 5.39234 10.52 5.46234 10.555L5.44484 10.2575C5.33984 10.2225 5.19109 10.1963 5.07734 10.1963C4.84109 10.1963 4.63984 10.3363 4.63984 10.5725C4.63984 10.7475 4.77109 10.8438 4.97234 10.8875C5.05984 10.8875 5.13859 10.9313 5.13859 10.975C5.13859 11.0363 5.08609 11.045 5.02484 11.045C4.97234 11.045 4.84984 11.0625 4.63109 10.975V11.29V11.2813Z',
                fill: '#2D78BB'
            }
        }), h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M6.08354 10.9925V10.52H6.30229V10.2137H6.06604V9.72372L5.66354 9.94247V10.2225H5.52354V10.555H5.66354V11.0712C5.66354 11.325 5.99604 11.5 6.30229 11.29V11.01C6.24104 11.0712 6.08354 11.0887 6.08354 11.01V10.9925ZM4.55229 11.325V10.205H4.12354V11.325H4.55229ZM4.34229 10.17C4.47354 10.17 4.57854 10.065 4.57854 9.93372C4.57854 9.81122 4.47354 9.71497 4.34229 9.71497C4.21979 9.71497 4.12354 9.81122 4.12354 9.93372C4.12354 10.065 4.21979 10.17 4.34229 10.17V10.17ZM11.351 11.2637C11.4823 11.325 11.6485 11.3425 11.7535 11.3425C12.1648 11.3425 12.296 11.1237 12.296 10.9487C12.296 10.7387 12.086 10.625 11.8848 10.5987C11.8585 10.5987 11.7798 10.5812 11.7798 10.5375C11.7798 10.5112 11.7973 10.4762 11.9023 10.4762C11.981 10.4762 12.1123 10.5025 12.191 10.5375L12.1735 10.24C12.0685 10.205 11.9198 10.1787 11.806 10.1787C11.5698 10.1787 11.3685 10.3187 11.3685 10.555C11.3685 10.73 11.4998 10.8262 11.701 10.87C11.7885 10.87 11.8673 10.9137 11.8673 10.9575C11.8673 11.0187 11.806 11.0275 11.7535 11.0275C11.701 11.0275 11.5785 11.045 11.3598 10.9575V11.2725L11.351 11.2637ZM10.0998 10.8612C9.96854 10.9575 9.85479 10.9837 9.67979 10.9837C9.40854 10.9837 9.17229 10.765 9.17229 10.5287C9.17229 10.275 9.30354 10.0387 9.67979 10.0387C9.85479 10.0387 9.99479 10.065 10.0998 10.17V9.78497C9.96854 9.70622 9.77604 9.68872 9.61854 9.68872C9.12854 9.68872 8.75229 10.0387 8.75229 10.52C8.75229 11.0012 9.16354 11.3512 9.64479 11.3512C9.81104 11.3512 9.96854 11.3162 10.0998 11.2375V10.8612V10.8612ZM10.7823 10.45C10.9135 10.45 10.8785 10.5637 10.7648 10.5637C10.5548 10.5637 10.2135 10.6337 10.1698 10.9312C10.0735 11.43 10.721 11.3862 10.8873 11.2812L10.9048 11.3075H11.2898V10.5375C11.2898 10.17 10.7035 10.1 10.2923 10.24L10.2398 10.5462C10.4148 10.4587 10.6685 10.45 10.791 10.45H10.7823ZM12.751 10.2837V9.70622H12.3573V11.3337H12.751V10.695C12.751 10.4762 13.0748 10.4762 13.0748 10.695V11.3337H13.4773V10.5987C13.4773 10.2662 13.0923 10.0387 12.7423 10.2925L12.751 10.2837Z',
                fill: '#2D78BB'
            }
        }), h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M6.6875 10.5987C6.705 10.4937 6.7925 10.4587 6.87125 10.4587C6.95 10.4587 7.04625 10.4937 7.04625 10.5987H6.6875ZM10.8787 10.8262V10.9662C10.8787 11.1237 10.5812 11.1587 10.5812 11.0012C10.5812 10.8612 10.8 10.8262 10.8787 10.8262Z',
                fill: 'white'
            }
        })]);
    }
};