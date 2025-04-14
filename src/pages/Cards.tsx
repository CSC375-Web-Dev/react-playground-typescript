import { JSX } from 'react'
import Card from '../components/Card'
import styles from './Cards.module.css'

interface Animal {
    name: string
    imageUrl: string;
}

const animals: Animal[] = [
    {
        name: 'Sand Cat',
        imageUrl: 'https://outdoors.com/wp-content/uploads/2025/01/sand-cat-family.jpeg'
    },
    {
        name: 'Saola',
        imageUrl: 'https://www.thenation.com/wp-content/uploads/2015/05/saola_endangered_species_hanoi_rtr_img.jpg'
    },
    {
        name: 'Shoebill',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX-IEWUfK6CeTIZWh9mEr90cyKReO_nFZ3VxgNowaixEAlT_5V8oibCmScorauHnlcy2zJWFEyUjseNxP-c6lgXg'
    },
    {
        name: 'Slow Loris',
        imageUrl: 'https://th-thumbnailer.cdn-si-edu.com/ckjaNineZ_MYZxf1De7F-ig8a0o=/1000x750/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/26/7a/267a4803-e359-4732-9a6a-8c771c6d6def/loris.jpg'
    },
    {
        name: 'Sun Bear',
        imageUrl: 'https://preview.redd.it/just-wanted-to-share-some-sun-bear-pics-v0-sxs2w4aker8a1.jpg?width=320&crop=smart&auto=webp&s=f6515ec1950f870f335f2246179d33b45cd15008'
    }
]

export default function Cards() {
    function createAnimalCardsHtml(): JSX.Element[] {
        return animals.map(animal => {
            return (
                // using component Card, passing in params as attributes
                <Card title={animal.name} imageUrl={animal.imageUrl} key={animal.name} />
            )
        })
    }

    return (
        <div className={styles.container}>
            { createAnimalCardsHtml() }
        </div>
    )
}