export default function ({ redirect }) {
  const permissions = [1, 2, 3, 4]

  return permissions.includes(3) ? true : redirect('/paises')
}
