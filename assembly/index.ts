export function search(array: Array<string>, search: string): Array<string> {
  const results: Array<string> = []
  const query = search.toLowerCase().trim()
  for (let i = 0; i < array.length; i++) {
    const element = array[i].toLowerCase()
    if (element.includes(query)) results.push(element)
  }
  return results
}