import { useEffect, useRef, useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import ReviewsCard from './ReviewsCard';
import useGetReviews from '../../hooks/useGetReviews';

export default function Reviews() {
    const [reviews, setReviews] = useState([]);
    const autoplay = useRef(Autoplay({ delay: 3000 }));

    const { getReviews } = useGetReviews({ setReviews });

    useEffect(() => {
        getReviews();
    }, [])

    return (
        <Carousel
            w={"100%"}
            withIndicators={false}
            height={150}
            slideSize="30%"
            slideGap="xl"
            controlsOffset="xs"
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={() => autoplay.current.play()}
            emblaOptions={{ loop: true, align: 'center' }}
        >
            {
                reviews.map((review, idx) => (
                    <ReviewsCard key={idx} review={review} />
                ))
            }
        </Carousel>
    );
}