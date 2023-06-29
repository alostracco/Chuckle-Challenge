import React, { useState, useEffect } from 'react';
import { Button, Text } from '@chakra-ui/react';

interface TimerProps {
    startTimer: boolean;
}

const Timer: React.FC<TimerProps> = ({ startTimer }) => {
    const [timeElapsed, setTimeElapsed] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;

        if (isRunning) {
            interval = setInterval(() => {
                setTimeElapsed((prevTime) => prevTime + 1);
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

    const handleStartStopClick = () => {
        setIsRunning((prevState) => !prevState);
    };

    const handleResetClick = () => {
        setTimeElapsed(0);
        setIsRunning(false);
    };

    useEffect(() => {
        if (startTimer) {
            setIsRunning(true);
        }
    }, [startTimer]);

    return (
        <Text>{formatTime(timeElapsed)}</Text>
    );
};

export default Timer;