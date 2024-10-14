export interface DeliveryFee{ 
    location : string 
    weight_range: string 
    delivery_method: "standard" | "express" | "same-day"
    fee: number
    minimum_order: number
    free_shipping_above: number 
    created_at: string
}