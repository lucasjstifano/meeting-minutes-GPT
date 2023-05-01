import React from "react";

const ResultsTable = ({ calculatedCustomerData }) => {
  return (
    <div class="relative overflow-y-auto rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Name
            </th>
            <th scope="col" class="px-6 py-3">
              BMI
            </th>
            <th scope="col" class="px-6 py-3">
              Score
            </th>
            <th scope="col" class="px-6 py-3">
              Monthly Premium
            </th>
          </tr>
        </thead>
        <tbody>
          {calculatedCustomerData.map((result, index) => (
            <tr
              key={index}
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {result.name}
              </th>

              <td class="px-6 py-4">{result.bmi}</td>
              <td class="px-6 py-4">{result.score}</td>
              <td class="px-6 py-4">{`$${result.monthlyPremium}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultsTable;
