import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import colors from 'tailwindcss/colors'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const data = [
  { date: '02/11', revenue: 1200 },
  { date: '03/11', revenue: 1600 },
  { date: '04/11', revenue: 800 },
  { date: '05/11', revenue: 900 },
  { date: '06/11', revenue: 1700 },
  { date: '07/11', revenue: 1900 },
  { date: '08/11', revenue: 2000 },
]
export function RevenueChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex flex-row items-center pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita no período
          </CardTitle>

          <CardDescription>Receita diária no período</CardDescription>
        </div>
      </CardHeader>

      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={data} style={{ fontSize: 12 }}>
            <XAxis dataKey="date" tickLine={false} axisLine={false} dy={16} />
            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              tickFormatter={(value: number) =>
                value.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })
              }
              width={80}
            />
            <CartesianGrid vertical={false} className="stroke-muted" />
            <Line
              type="linear"
              strokeWidth={2}
              dataKey="revenue"
              stroke={colors.violet['500']}
            ></Line>
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
