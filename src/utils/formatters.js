export function money(value = 0, { locale = "pt-BR", currency = "BRL" } = {}) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency
  }).format(value);
}
