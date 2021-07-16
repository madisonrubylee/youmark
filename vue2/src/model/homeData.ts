import { Main, MainBanner } from '../store/main/types'

const banner:MainBanner[] = [
    {
        img: require('@/assets/main/amelie.jpeg'),
        url: 'https://youtu.be/3dTugvzECp8'
    },
    {
        img: require('@/assets/main/lalaland.png'),
        url: 'https://youtu.be/t7w3k3pjZY4'
    },
    {
        img: require('@/assets/main/amelie.jpeg'),
        url: 'https://youtu.be/fwJpxM7ZFGY?list=PLPIXQb1Vqj6SWxY8DMcNodBxCAn8p9vEy'
    },
    {
        img: require('@/assets/main/lalaland.png'),
        url: 'https://youtu.be/jqaR8A9tesk'
    }
]

const data:Main[] = [
    {
        id: 1,
        code: 'RE',
        codeDesc:'이어보기',
        url: ['https://youtu.be/4K3SDRNgfD8','https://youtu.be/t7w3k3pjZY4','https://youtu.be/ISTj-1F-kAU','https://youtu.be/jqaR8A9tesk','https://youtu.be/wdp1icyzXkw']
    },
    {
        id: 2,
        code: 'MB',
        codeDesc: '맛있는 요리',
        url: ['https://youtu.be/5rfj9X5JzBs']
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