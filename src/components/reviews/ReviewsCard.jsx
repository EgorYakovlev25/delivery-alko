import { Group, Rating, Stack, Text, ScrollArea, Avatar } from '@mantine/core';
import { Carousel } from '@mantine/carousel';

export default function ReviewsCard({ review }) {
    console.log(review);

    return (
        <Carousel.Slide p={'lg'} mx={'lg'} bg={'gray.1'} bdrs={'md'}>
            <Stack
                justify="space-between"
                w={'100%'}
            >
                <Group justify="space-between" w={'100%'}>
                    <Group gap={'xs'}>
                        {/* <Avatar radius="xl" /> */}
                        <Text size='sm'>{review.name}</Text>
                    </Group>
                    <Rating value={review.rating} readOnly size='xs' />
                </Group>
                <Text
                    c={'dark.4'}
                    style={{ wordBreak: 'break-word' }}
                    lineClamp={5}
                >
                    {review.text || "<Нет комментария>"}
                </Text>
            </Stack>
        </Carousel.Slide>
    );
}