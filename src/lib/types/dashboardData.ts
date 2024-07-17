export interface DashboardData {
    total_orders: number
    total_completed_orders: number 
    total_cost_spent: number
    orders_by_month: {
        month: number
        total_orders: number
    }[]
}