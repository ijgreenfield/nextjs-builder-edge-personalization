import { Heading, Text, Stack, Box, Container, Flex, Button } from "@chakra-ui/react"
import Image from "next/image"

export default function ColumnHero(props) {
    return (
        <Box>
            <Container maxW="1280px">
                <Flex bg="#F7EBE3" borderRadius="24px" overflow="hidden" flexDir={["column", null, "row"]} justifyContent="center" alignItems="center">
                    <Box w={["100%", null, null, "50%"]} h="100%" pos="relative">
                        <Image 
                            src="https://cdn.shopify.com/s/files/1/1704/8471/files/Recess_HeyDay-66_1.png?v=1659042552"
                            layout="responsive"
                            width={500}
                            height={400}
                            unoptimized
                        />
                    </Box>
                    <Stack px={["20px", null, null, "64px"]} py={["20px"]} w={["100%", null, null, "50%"]} spacing="16px">
                        <Heading fontSize={["32px", null, "56px"]}>{props.heading}</Heading>
                        <Text fontSize={[null, null, "24px"]}>{props.subheading}</Text>
                        <Text>{props.description}</Text>
                        <Button variant="primary">{props.cta}</Button>
                    </Stack>
                </Flex>
            </Container>
        </Box>
    )
}