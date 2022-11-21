/**
 *  @param moeda em Reais Ex: Recebe string '2.568,50' retorna number: 2568.50
 * 
 */
export function coinToNumber(moeda: string): number | null {

  const numero = Number(moeda.replaceAll('.','').replace(',','.'))
  return isNaN(numero) ? null : numero
}
