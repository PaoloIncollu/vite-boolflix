import { reactive } from 'vue';

export const store = reactive({
    films:[],
    seriesTv:[],
    titleSearch:'',
    flags:[
        {
            id:'en',
            imgFlag:'https://flagsapi.com/GB/flat/32.png'
        },
        {
            id:'it',
            imgFlag:'https://flagsapi.com/IT/flat/32.png'
        },
        {
            id:'de',
            imgFlag:'https://flagsapi.com/DE/flat/32.png'
        },
        {
            id:'fr',
            imgFlag:'https://flagsapi.com/FR/flat/32.png'
        },
        {
            id:'es',
            imgFlag:'https://flagsapi.com/ES/flat/32.png'
        }
    
    ]
});