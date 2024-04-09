/* eslint-disable react/jsx-key */

import { Outlet } from "react-router-dom";

const Information = () => {
    const num = [1, 2, 3, 4, 0, 1, 2, 3, 4, 5, 6, 7, 8];
    const num2 = [1, 2, 3, 4, 0, 1, 2, 3, 4, 5];
  return (
    <div>
      <div className="grid grid-cols-2 p-5 text-center justify-center m-auto">
        <tbody className="space-x-3 leading-10">
          {num.map(() => {
            return (
              // eslint-disable-next-line react/jsx-key
              <tr>
                <th className="pr-1 text-primary-400">
                  Processor Generation :{" "}
                </th>
                <td className="text-gray-30">11th Generation</td>
              </tr>
            );
          })}
        </tbody>
        <tbody className="space-x-3 leading-10">
          {num2.map(() => {
            return (
              <tr>
                <th className="pr-1 text-primary-400">
                  Processor Generation :{" "}
                </th>
                <td className="text-gray-30">11th Generation</td>
              </tr>
            );
          })}
        </tbody>
      </div>
      <Outlet />
    </div>
  );
}

export default Information
