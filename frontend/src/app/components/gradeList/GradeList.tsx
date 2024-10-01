export default function GradeList() {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 uppercase">
              Fach
            </th>
            <th scope="col" className="px-6 py-3 uppercase">
              Thema
            </th>
            <th scope="col" className="px-6 py-3 uppercase">
              Note
            </th>
            <th scope="col" className="px-6 py-3 uppercase">
              Lehrperson
            </th>
            <th scope="col" className="px-6 py-3 uppercase">
              Datum
            </th>
            <th scope="col" className="px-6 py-3 font-normal"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              Mathematik
            </th>
            <td className="px-6 py-4">Algebrarische Begriffe</td>
            <td className="px-6 py-4">6</td>
            <td className="px-6 py-4">Max Mustermann</td>
            <td className="px-6 py-4">{new Date().toLocaleDateString()}</td>
            <td className="px-6 py-4">
              <button
                type="button"
                className="font-medium text-blue-600 hover:underline"
              >
                Edit
              </button>
            </td>
          </tr>
          <tr className="bg-white border-b">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              Englisch
            </th>
            <td className="px-6 py-4">Listening 1</td>
            <td className="px-6 py-4">5.5</td>
            <td className="px-6 py-4">Max Mustermann</td>
            <td className="px-6 py-4">{new Date().toLocaleDateString()}</td>
            <td className="px-6 py-4">
              <button
                type="button"
                className="font-medium text-blue-600 hover:underline"
              >
                Edit
              </button>
            </td>
          </tr>
          <tr className="bg-white border-b">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              Modul 321
            </th>
            <td className="px-6 py-4">Projektarbeit</td>
            <td className="px-6 py-4">6</td>
            <td className="px-6 py-4">Stefan Kemper</td>
            <td className="px-6 py-4">{new Date().toLocaleDateString()}</td>
            <td className="px-6 py-4">
              <button
                type="button"
                className="font-medium text-blue-600 hover:underline"
              >
                Edit
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
