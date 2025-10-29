import Stack from '@mui/material/Stack';

import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

export default function BasicGauges(props) {

    const { percent,w,h,fz,color } = props;

    return (
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 1, md: 3 }}>
            <Gauge
                width={w?w:50}
                height={h?h:50}
                value={percent}
                 innerRadius="80%"
                sx={{
                    [`& .${gaugeClasses.valueText}`]: {
                        fontSize: fz?fz:12,
                    },
                    [`& .${gaugeClasses.valueArc}`]: {
      fill: color?color:'#2196f3',
    },
                    [`& .${gaugeClasses.valueText} text`]: {
                        fill: "#000", // ваш цвет
                    },
                }}
            />

        </Stack>
    );
}