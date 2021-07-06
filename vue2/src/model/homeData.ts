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
        url: 'https://youtu.be/3dTugvzECp8'
    },
    {
        id: 2,
        code: 'RE',
        url: 'https://youtu.be/t7w3k3pjZY4'
    },
    {
        id: 3,
        code: 'RE',
        url: 'https://youtu.be/fwJpxM7ZFGY?list=PLPIXQb1Vqj6SWxY8DMcNodBxCAn8p9vEy'
    },
    {
        id: 4,
        code: 'RE',
        url: 'https://youtu.be/jqaR8A9tesk'
    }
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