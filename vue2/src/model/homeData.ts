import { Main, MainBanner } from '../store/main/types'

const banner:MainBanner[] = [
    {
        img: require('@/assets/main/strangeThings.jpeg'),
        url: 'https://youtu.be/3dTugvzECp8'
    },
    {
        img: require('@/assets/main/amelie.jpg'),
        url: 'https://youtu.be/3dTugvzECp8'
    },
    {
        img: require('@/assets/main/ginny.jpg'),
        url: 'https://youtu.be/t7w3k3pjZY4'
    },
    {
        img: require('@/assets/main/grand.jpg'),
        url: 'https://youtu.be/fwJpxM7ZFGY?list=PLPIXQb1Vqj6SWxY8DMcNodBxCAn8p9vEy'
    },
]

const data:Main[] = [
    {
        id: 1,
        code: 'RE',
        codeDesc:'이어보기',
        url: ['https://youtu.be/4K3SDRNgfD8','https://youtu.be/t7w3k3pjZY4','https://youtu.be/ISTj-1F-kAU','https://youtu.be/jqaR8A9tesk','https://youtu.be/wdp1icyzXkw','https://youtu.be/J0rmycJSPAE'
            ,'https://youtu.be/3Ymbcy3wJ78','https://youtu.be/lpoUSREEHuk','https://youtu.be/Ej2m-lZH4PA']
    },
    {
        id: 2,
        code: 'MB',
        codeDesc: '맛있는 요리',
        url: ['https://youtu.be/5rfj9X5JzBs','https://youtu.be/6pqKsA6FQVc']
    },
   
]

export default {
    list (query: any) {
        return new Promise<Array<object>>(resolve => {
            setTimeout(() => {
                resolve(data)
            }, 200)
        })
    },
    bannerList (query: any) {
        return new Promise<Array<object>>(resolve => {
            setTimeout(() => {
                resolve(banner)
            }, 200)
        })
    }
} 