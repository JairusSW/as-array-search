export function search(array: Array<string>, search: string): Array<string> {
  const results = new Array<string>()
  const query = search.toLowerCase().trim()
  for (let i = 0; i < array.length; i++) {
    const element = array[i].toLowerCase()
    if (element === query) results.push(element)
  }
  return results
}