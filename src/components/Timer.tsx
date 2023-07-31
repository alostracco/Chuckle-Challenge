import React, { useState, useEffect } from 'react';
import { Text, useDisclosure } from '@chakra-ui/react';
import GameOver from './GameOver';

interface TimerProps {
    startTimer: boolean;
}

const Timer: React.FC<TimerProps> = ({ startTimer }) => {
    const [timeElapsed, setTimeElapsed] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [finalTime, setFinalTime] = useState(0);

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;

        if (isRunning) {
            interval = setInterval(() => {
                setTimeElapsed((prevTime) => prevTime + 1);
                setFinalTime((prevTime) => prevTime + 1);
            }, 1000);
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [isRunning]);

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;

        if (minutes > 0) {
            return `${minutes}m ${seconds}s`;
        }

        return `${seconds}s`;
    };

    const handleResetClick = () => {
        if (timeElapsed != 0) {
            onOpen();
        }
        setTimeElapsed(0);
        setIsRunning(false);
    };

    useEffect(() => {
        if (startTimer) {
            setIsRunning(true);
            setFinalTime(0);
        }
        else {
            handleResetClick();
        }
    }, [startTimer]);

    return (
        <>
            <GameOver isOpen={isOpen} onClose={onClose} timeElapsed={finalTime} />
            <Text>{formatTime(timeElapsed)}</Text>
        </>
    );
};

export default Timer;