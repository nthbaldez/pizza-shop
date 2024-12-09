export enum OrderStatusEnum {
  Pending = 'pending',
  Delivering = 'delivering',
  Delivered = 'delivered',
  Canceled = 'canceled',
  Processing = 'processing',
}

type OrderMessage = (typeof orderStatusMap)[keyof typeof orderStatusMap]

// type OrderStatus = | 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'


interface OrderStatusProps {
  status: OrderStatusEnum
}

// const orderStatusMap: Record<OrderStatus, string> = {
//   pending: 'Pendente',
//   canceled: 'Cancelado',
//   delivered: 'Entregue',
//   delivering: 'Em entrega',
//   processing: 'Em preparo',
// }

const orderStatusMap = {
  [OrderStatusEnum.Pending]: 'Pendente',
  [OrderStatusEnum.Delivering]: 'Em entrega',
  [OrderStatusEnum.Delivered]: 'Entregue',
  [OrderStatusEnum.Canceled]: 'Cancelado',
  [OrderStatusEnum.Processing]: 'Processing'
} as const

function getOrderMessage(status: OrderStatusEnum): OrderMessage {
  return orderStatusMap[status]
}

export function OrderStatus({ status }: OrderStatusProps) {
  return (
    <div className="flex items-center gap-2">
      {status === 'pending' && (
        <span className="h-2 w-2 rounded-full bg-slate-400" />
      )}
      {status === 'canceled' && (
        <span className="h-2 w-2 rounded-full bg-rose-500" />
      )}
      {status === 'delivered' && (
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
      )}
      {['processing', 'delivering'].includes(status) && (
        <span className="h-2 w-2 rounded-full bg-amber-500" />
      )}
      <span className="font-medium text-muted-foreground">
        {getOrderMessage(status)}
      </span>
    </div>
  )
}