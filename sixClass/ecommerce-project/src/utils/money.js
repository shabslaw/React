export function formartMoney(amountSpent){
    return `$${(amountSpent / 100).toFixed(2)}`
}