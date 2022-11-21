export async function fetchTransactions<T>(url: string):
  Promise<T | null>
{
  try {
    const response = await fetch(url)
    if(!response.ok) throw new Error("Error:" + response.status)

    const transactionsJSON = await response.json()
    return transactionsJSON
  } catch (error) {
    if(error instanceof Error) {
      console.log("fetchTransactions: " + error.message)
    }
    return null
  }

}
