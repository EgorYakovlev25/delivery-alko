import { Stack } from "@mantine/core";

export default function Home() {

    const factorial (n) => {
        if (n === 0) {
            return 1;
        }
        return n * factorial(n - 1);
    }

    return (
        <Stack>

        </Stack>
    );
}