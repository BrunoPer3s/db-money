export function formatCurrency (value: number) {
  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);

}

export function formatDate (date: Date) {
  return Intl.DateTimeFormat('pt-BR').format(date);
}