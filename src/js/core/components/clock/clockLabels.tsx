import { FC, memo } from "react";
import { Box, Text } from "@chakra-ui/react";

export type TimeLabelProps = {
    label: string,
    top?: string,
    left?: string,
    right?: string,
    bottom?: string,
    transform: string,
}

/**
 * Time Labels Component (3, 6, 9, 12)
 */
const TimeLabelComp: FC<{labels: TimeLabelProps[], fontSize: string}> = ({ labels, fontSize }) => {
    return (
        <>
        {
            labels.map((label, index) => (
                <Text
                    key={index}
                    position='absolute'
                    top={label.top}
                    bottom={label.bottom}
                    left={label.left}
                    right={label.right}
                    transform={label.transform}
                    fontSize={fontSize}
                    fontWeight='bold'
                >{label.label}</Text>
            ))
        }
        </>
    )
};

const TimeLabel = memo(TimeLabelComp, (prevProps, nextProps) => prevProps.fontSize === nextProps.fontSize);



export type TimeGraduationAppearance = {
    height: string,
    width: string,
    // color: string,
    borderLeft: string,
    borderRight: string,
    borderColor?: string,
    opacity?: number,
}

type TimeGraduationProps = {
    appearance: TimeGraduationAppearance,
    density: number,
}

/**
 * Time Graduation Component
 * Used to display the ticks on the clock face
 */
const TimeGraduationComp: FC<TimeGraduationProps> = ({ appearance, density }) => {

    const elmnts = [];

    const minorGraduationSpace = 360 / density;
    for (let i = 0; i < 180; i += minorGraduationSpace) {
        elmnts.push(
            <Box
                key={i}
                position='absolute'
                top='calc(50%)'
                left='calc(50%)'
                height={appearance.height}
                width={appearance.width}
                transform={`translate(-50%, -50%) rotate(${i}deg)`}
                backgroundColor='transparent'
                borderLeft={appearance.borderLeft}
                borderRight={appearance.borderRight}
                borderColor={appearance.borderColor}
                opacity={appearance.opacity}
            />
        )
    }

    return <>{ elmnts }</>;
}

const TimeGraduation = memo(TimeGraduationComp, (prevProps, nextProps) => prevProps.appearance === nextProps.appearance && prevProps.density === nextProps.density);

export {
    TimeLabel,
    TimeGraduation,
}