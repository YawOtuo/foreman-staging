export function addCommasToNumber(num: number | undefined, locale: string = "en-US"): string {
    if (num === undefined || num === null) {
      return ""; 
    }
  
    return num.toLocaleString(locale, {
      minimumFractionDigits: 2, 
      maximumFractionDigits: 2, 
    });
  }
  