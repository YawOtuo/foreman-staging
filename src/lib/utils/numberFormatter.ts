export function addCommasToNumber(num: number |string | undefined, locale: string = "en-US"): string {
    if (num === undefined || num === null) {
      return ""; 
    }
  
    return Number(num).toLocaleString(locale, {
      minimumFractionDigits: 2, 
      maximumFractionDigits: 2, 
    });
  }
  