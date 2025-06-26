import axios from "axios";
import React, { useEffect, useState } from "react";

const Users = () => {
  const [user, setUser] = useState([]);
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(true);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=3`)
      .then((res) => {
        setUser(res.data);
        setHasNext(res.data.length === 3);
      });
  }, [page]);

  const nextPage = () => setPage((prev) => prev + 1);
  const prevPage = () => setPage((prev) => prev - 1);

  return (
    <div className="p-4">
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Username</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">City</th>
              <th className="p-2 border">Phone</th>
              <th className="p-2 border">Website</th>
              <th className="p-2 border">Company</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {user?.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-gray-100 cursor-pointer"
                // onClick={() => moveSingleUser(item.id)}
              >
                <td className="p-2 border">{item.name}</td>
                <td className="p-2 border">{item.username}</td>
                <td className="p-2 border">{item.email}</td>
                <td className="p-2 border">{item.address.city}</td>
                <td className="p-2 border">{item.phone}</td>
                <td className="p-2 border">{item.website}</td>
                <td className="p-2 border">{item.company.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex items-center justify-center gap-4">
        <button
          className="bg-gray-600 text-white px-4 py-2 rounded disabled:opacity-50"
          onClick={prevPage}
          disabled={page === 1}
        >
          Prev
        </button>
        <span className="text-lg font-semibold">{page}</span>
        <button
          className="bg-gray-600 text-white px-4 py-2 rounded disabled:opacity-50"
          onClick={nextPage}
          disabled={!hasNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Users;
