import { CartesianGrid, XAxis, Tooltip, YAxis, Area, AreaChart } from 'recharts';

export function Chart({ prices }) {

    return (
        <div className='chart-container'>

            <AreaChart width={800} height={300} data={prices}
                margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={1} />
                        <stop offset="100%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <CartesianGrid strokeDasharray="3 4" />
                <Tooltip />
                <Area type="monotone" dataKey="price" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            </AreaChart>
        </div>
    )
}


