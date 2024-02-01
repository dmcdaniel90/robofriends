export const apiCall = async <T>(link: string): Promise<T> => {
  const response = await fetch(link)
  return await response.json()
}