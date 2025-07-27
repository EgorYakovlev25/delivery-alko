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
            slideSize={{ base: '100%', sm: '50%', md: '33.3333%' }}
            slideGap={{ base: 0, sm: 'md', md: 'xl' }}
            controlsOffset="xs"
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={() => autoplay.current.play()}
            emblaOptions={{ loop: true, align: 'center' }}
            sx={{
                maxWidth: 600,
                '@media (max-width: 600px)': {
                    height: 120,
                    maxWidth: 400,
                },
            }}
        >
            {
                reviews.map((review, idx) => (
                    <ReviewsCard key={idx} review={review} />
                ))
            }
        </Carousel>
    );
}