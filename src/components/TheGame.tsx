import { Flex } from "@chakra-ui/react";
import IconGrid from "./IconGrid"

const TheGame: React.FC = () => {
    return (
        <Flex flexDirection='row' justifyContent='center' gap={5}>
            <IconGrid />
            {/* Add Description Content Here */}
        </Flex>
    )
}

export default TheGame;